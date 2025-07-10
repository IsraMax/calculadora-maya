const tzolkinNombres = ["Imix’", "Ik’", "Ak’b’al", "K’an", "Chikchan", "Kimi", "Manik’", "Lamat", "Muluk", "Ok",
"Chuwen", "Eb’", "B’en", "Ix", "Men", "K’ib’", "Kaban", "Etz’nab’", "Kawak", "Ajaw"];
const haabMeses = ["Pop", "Wo’", "Sip", "Sotz’", "Sek", "Xul", "Yaxk’in", "Mol", "Ch’en", "Yax", "Sak’", "Keh",
"Mak", "K’ank’in", "Muwan’", "Pax", "K’ayab", "Kumk’u", "Wayeb’"];

function calcularFechaMaya() {
  const fechaInput = document.getElementById("fecha").value;
  const fecha = new Date(fechaInput);
  const base = new Date("2012-12-21");
  const diasTranscurridos = Math.floor((fecha - base) / (1000 * 60 * 60 * 24));

  const tzolkinNumero = (diasTranscurridos % 13 + 13) % 13 + 1;
  const tzolkinNombre = tzolkinNombres[(diasTranscurridos % 20 + 20) % 20];

  const haabDiaTotal = (diasTranscurridos % 365 + 365) % 365;
  const haabMes = Math.floor(haabDiaTotal / 20);
  const haabDia = haabMes === 18 ? haabDiaTotal - 360 : haabDiaTotal % 20;
  const haabNombre = haabMes === 18 ? "Wayeb’" : haabMeses[haabMes];

  const venusCiclo = (diasTranscurridos % 584 + 584) % 584;
  const faseVenus = venusCiclo < 263 ? "Estrella matutina" : venusCiclo < 313 ? "Invisibilidad inferior" : venusCiclo < 576 ? "Estrella vespertina" : "Invisibilidad superior";

  const totalDias = 1872000 + diasTranscurridos;
  const baktun = Math.floor(totalDias / 144000);
  const katun = Math.floor((totalDias % 144000) / 7200);
  const tun = Math.floor((totalDias % 7200) / 360);
  const uinal = Math.floor((totalDias % 360) / 20);
  const kin = totalDias % 20;

  const interpretacion = `
    <strong>Interpretación:</strong><br>
    ${tzolkinNumero} ${tzolkinNombre} representa un día de sabiduría, introspección y conexión con la Tierra.<br>
    El día ${haabDia} de ${haabNombre} es propicio para actuar con firmeza y conexión natural.<br>
    La fase venusina como <em>${faseVenus}</em> indica cierre de ciclos, madurez emocional y apertura al perdón.<br>
    La Cuenta Larga (${baktun} baktunes) sugiere una etapa de transición y transformación interior.`;

  document.getElementById("resultado").innerHTML = `
    <p><strong>Tzolk'in:</strong> ${tzolkinNumero} ${tzolkinNombre}</p>
    <p><strong>Haab':</strong> ${haabDia} ${haabNombre}</p>
    <p><strong>Ciclo de Venus:</strong> Día ${venusCiclo} – ${faseVenus}</p>
    <p><strong>Cuenta Larga:</strong> ${baktun}.${katun}.${tun}.${uinal}.${kin}</p>
    <div class="mt-4 bg-yellow-100 p-4 rounded border border-yellow-300">${interpretacion}</div>`;
}
