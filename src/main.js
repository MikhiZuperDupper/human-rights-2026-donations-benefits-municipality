const sources = [
  {n:1,title:"Гражданский кодекс Российской Федерации (часть первая) от 30.11.1994 № 51-ФЗ — статья 128",short:"ГК РФ · статья 128",description:"Устанавливает перечень объектов гражданских прав, включая имущественные права и иное имущество.",url:"https://www.consultant.ru/document/cons_doc_LAW_5142/f7871578ce9b026c450f64790704bd48c7d94bcb/",accessed:"22.01.2026"},
  {n:2,title:"Гражданский кодекс Российской Федерации (часть вторая) от 26.01.1996 № 14-ФЗ — статья 582",short:"ГК РФ · статья 582",description:"Определяет пожертвование как дарение вещи или права в общеполезных целях.",url:"https://www.consultant.ru/document/cons_doc_LAW_9027/a0e91c7e19fe89bcaec22682e719eebc0777ba59/",accessed:"22.01.2026"},
  {n:3,title:"Федеральный закон от 31.07.2020 № 259-ФЗ «О цифровых финансовых активах, цифровой валюте…»",short:"Закон № 259-ФЗ",description:"Определяет цифровые финансовые активы, цифровую валюту и особенности их правового режима.",url:"https://www.consultant.ru/document/cons_doc_LAW_358753/",accessed:"22.01.2026"},
  {n:4,title:"IRS. Digital assets",short:"IRS · Digital assets",description:"Официальная страница налоговой службы США о цифровых активах и их налоговой квалификации.",url:"https://www.irs.gov/ru/filing/digital-assets/",accessed:"23.01.2026"},
  {n:5,title:"JD Supra. The Benefits of Donating Digital Assets to Charity",short:"JD Supra · Donating Digital Assets",description:"Обзор налоговых последствий и процедурных требований при пожертвовании цифровых активов.",url:"https://www.jdsupra.com/legalnews/the-benefits-of-donating-digital-assets-5109028/",accessed:"23.01.2026"},
  {n:6,title:"IRS. Instructions for Form 8283 (12/2024)",short:"IRS · Form 8283",description:"Инструкция по отчётности о неденежных благотворительных взносах и требованиям к оценке.",url:"https://www.irs.gov/instructions/i8283/",accessed:"02.02.2026"},
  {n:7,title:"Banking Act (Kreditwesengesetz — KWG), английский текст на сайте BaFin",short:"BaFin · Kreditwesengesetz",description:"Закон о банковской деятельности Германии; источник финансово-правового определения криптоактивов.",url:"https://www.bafin.de/SharedDocs/Downloads/EN/Aufsichtsrecht/dl_kwg_en.html/",accessed:"23.01.2026"},
  {n:8,title:"Global Legal Insights. Blockchain & Cryptocurrency Laws and Regulations 2026 — Germany",short:"GLI · Germany 2026",description:"Обзор германского регулирования блокчейна и криптовалют, включая правовую квалификацию активов.",url:"https://www.globallegalinsights.com/practice-areas/blockchain-cryptocurrency-laws-and-regulations/germany/",accessed:"23.01.2026"},
  {n:9,title:"Coinbase Help. GiveCrypto",short:"Coinbase · GiveCrypto",description:"Справка Coinbase об инициативе GiveCrypto и механике криптовалютных пожертвований.",url:"https://help.coinbase.com/en/coinbase/trading-and-funding/buying-selling-or-converting-crypto/givecrypto/",accessed:"23.01.2026"},
  {n:10,title:"The Giving Block. Tax-efficient charitable giving with crypto & stock donations",short:"The Giving Block · Tax resources",description:"Материалы платформы о налоговом оформлении пожертвований криптовалюты и ценных бумаг.",url:"https://thegivingblock.com/tax-resources/",accessed:"02.02.2026"},
  {n:11,title:"IRS. Publication 526, Charitable Contributions",short:"IRS · Publication 526",description:"Официальное руководство IRS по благотворительным взносам и соответствующим налоговым вычетам.",url:"https://www.irs.gov/forms-pubs/about-publication-526/",accessed:"02.02.2026"},
  {n:12,title:"Fidelity Charitable. About us",short:"Fidelity Charitable · About",description:"Официальное описание донор-советируемого фонда Fidelity Charitable и его деятельности.",url:"https://www.fidelitycharitable.org/about-us.html/",accessed:"02.02.2026"},
  {n:13,title:"Fidelity Digital Assets. About us",short:"Fidelity Digital Assets · About",description:"Сведения об инфраструктуре и услугах Fidelity Digital Assets для операций с цифровыми активами.",url:"https://www.fidelitydigitalassets.com/about-us/",accessed:"02.02.2026"},
  {n:14,title:"Wikimedia Foundation. Tax deductibility",short:"Wikimedia · Tax deductibility",description:"Сведения о налоговом статусе пожертвований Wikimedia Foundation для налогоплательщиков США.",url:"https://wikimediafoundation.org/ru/support/tax-deductibility/",accessed:"23.01.2026"},
  {n:15,title:"The Linux Foundation. About",short:"Linux Foundation · About",description:"Официальная информация о назначении и деятельности Linux Foundation.",url:"https://www.linuxfoundation.org/about/",accessed:"23.01.2026"},
  {n:16,title:"ProPublica Nonprofit Explorer. The Linux Foundation",short:"ProPublica · Linux Foundation",description:"Данные о регистрации и nonprofit-статусе Linux Foundation в базе ProPublica.",url:"https://projects.propublica.org/nonprofits/organizations/460503801/",accessed:"23.01.2026"},
  {n:17,title:"OECD. Twenty years of tax autonomy across levels of government: Measurement and applications",short:"OECD · Tax autonomy",description:"Исследование налоговой автономии разных уровней публичной власти и методов её измерения.",url:"https://www.oecd.org/en/publications/fiscal-federalism-2022_201c75b6-en/full-report/component-11.html/",accessed:"13.10.2026"},
  {n:18,title:"OECD. Funding and financing of local government public investment",short:"OECD · Local public investment",description:"Материал о финансировании публичных инвестиций на местном уровне в контексте фискального федерализма.",url:"https://www.oecd.org/en/publications/fiscal-federalism-2022_201c75b6-en/full-report/component-6.html/",accessed:"13.10.2026"},
  {n:19,title:"Бюджетный кодекс Российской Федерации — статья 41. Виды доходов бюджетов",short:"БК РФ · статья 41",description:"Устанавливает виды доходов бюджетов бюджетной системы Российской Федерации.",url:"https://www.consultant.ru/document/cons_doc_LAW_19702/c5a5b77bd2e9718ef6faf32c062d3faeff632d8f/",accessed:"13.10.2026"},
  {n:20,title:"Бюджетный кодекс Российской Федерации — статья 56. Налоговые доходы бюджетов субъектов РФ",short:"БК РФ · статья 56",description:"Определяет налоговые доходы бюджетов субъектов Российской Федерации.",url:"https://www.consultant.ru/document/cons_doc_LAW_19702/0f3dd11480b2a82098ac79197ac977ee50a2f983/",accessed:"13.10.2026"},
  {n:21,title:"Бюджетный кодекс Российской Федерации — статья 58. Нормативы отчислений в местные бюджеты",short:"БК РФ · статья 58",description:"Регулирует полномочия субъектов РФ по установлению нормативов отчислений в местные бюджеты.",url:"https://www.consultant.ru/document/cons_doc_LAW_19702/1e231e90031b99643b29b6eb4579016c2a06533f/",accessed:"13.10.2026"},
  {n:22,title:"Бюджетный кодекс Российской Федерации — статья 61. Налоговые доходы бюджетов городских поселений",short:"БК РФ · статья 61",description:"Определяет налоговые доходы бюджетов городских поселений.",url:"https://www.consultant.ru/document/cons_doc_LAW_19702/c44f60955987114886d131f77698c3a85f5c21b4/",accessed:"13.10.2026"},
  {n:23,title:"Банк России. Ключевая ставка",short:"Банк России · Ключевая ставка",description:"Официальная динамика ключевой ставки; используется в работе для обоснования кредитного фактора.",url:"https://cbr.ru/hd_base/KeyRate/",accessed:"13.10.2026"}
];

const sourcesById = new Map(sources.map(source => [String(source.n), source]));

const sourceList = document.querySelector("#sources-list");
for (const source of sources) {
  const item = document.createElement("li");
  item.id = `source-${source.n}`;
  const content = document.createElement("div");
  const title = document.createElement("div");
  title.className = "source-title";
  const link = document.createElement("a");
  link.href = source.url;
  link.target = "_blank";
  link.rel = "noopener";
  link.textContent = source.title;
  title.append(link);
  const meta = document.createElement("div");
  meta.className = "source-meta";
  meta.textContent = `Дата обращения: ${source.accessed} · Открывается в новой вкладке`;
  content.append(title, meta);
  item.append(content);
  sourceList.append(item);
}



// Wikipedia-style reference previews: hover, focus and tap all use the same card.
const popover = document.querySelector("#reference-popover");
const popoverNumber = document.querySelector("#popover-number");
const popoverTitle = document.querySelector("#popover-title");
const popoverDescription = document.querySelector("#popover-description");
const popoverSource = document.querySelector("#popover-source");
const popoverListLink = document.querySelector("#popover-list-link");
const popoverClose = document.querySelector("#popover-close");
let activeCitation = null;
let pinnedPopover = false;
let hideTimer = 0;

function clearHideTimer() {
  window.clearTimeout(hideTimer);
}

function positionPopover(anchor) {
  if (!anchor || popover.hidden) return;
  const rect = anchor.getBoundingClientRect();
  if (rect.bottom < 0 || rect.top > window.innerHeight) {
    closePopover();
    return;
  }
  const box = popover.getBoundingClientRect();
  const margin = 12;
  const left = Math.min(Math.max(rect.left, margin), window.innerWidth - box.width - margin);
  const below = rect.bottom + 10;
  const above = rect.top - box.height - 10;
  const top = below + box.height <= window.innerHeight - margin ? below : Math.max(margin, above);
  popover.style.left = `${Math.round(left)}px`;
  popover.style.top = `${Math.round(top)}px`;
}

function showPopover(citation, pinned = false) {
  const source = sourcesById.get(citation.dataset.ref);
  if (!source) return;
  clearHideTimer();
  if (activeCitation && activeCitation !== citation) activeCitation.setAttribute("aria-expanded", "false");
  activeCitation = citation;
  pinnedPopover = pinned;
  citation.setAttribute("aria-expanded", "true");
  popoverNumber.textContent = `Источник ${source.n} из ${sources.length}`;
  popoverTitle.textContent = source.short;
  popoverDescription.textContent = source.description;
  popoverSource.href = source.url;
  popoverListLink.href = `#source-${source.n}`;
  popoverSource.setAttribute("aria-label", `Открыть источник ${source.n}: ${source.short}`);
  popover.hidden = false;
  positionPopover(citation);
  requestAnimationFrame(() => popover.classList.add("visible"));
}

function scheduleHide() {
  clearHideTimer();
  if (pinnedPopover) return;
  hideTimer = window.setTimeout(closePopover, 180);
}

function closePopover() {
  clearHideTimer();
  if (activeCitation) activeCitation.setAttribute("aria-expanded", "false");
  activeCitation = null;
  pinnedPopover = false;
  popover.classList.remove("visible");
  popover.hidden = true;
}

for (const citation of document.querySelectorAll(".cite[data-ref]")) {
  citation.setAttribute("aria-haspopup", "dialog");
  citation.setAttribute("aria-expanded", "false");
  citation.addEventListener("mouseenter", () => showPopover(citation));
  citation.addEventListener("mouseleave", scheduleHide);
  citation.addEventListener("focus", () => showPopover(citation));
  citation.addEventListener("blur", scheduleHide);
  citation.addEventListener("click", event => {
    event.preventDefault();
    if (activeCitation === citation && pinnedPopover) closePopover();
    else showPopover(citation, true);
  });
}

popover.addEventListener("mouseenter", clearHideTimer);
popover.addEventListener("mouseleave", scheduleHide);
popoverClose.addEventListener("click", closePopover);
popoverListLink.addEventListener("click", closePopover);
document.addEventListener("click", event => {
  if (pinnedPopover && !popover.contains(event.target) && !event.target.closest(".cite")) closePopover();
});
document.addEventListener("keydown", event => {
  if (event.key === "Escape" && !popover.hidden) {
    const previous = activeCitation;
    closePopover();
    previous?.focus();
  }
});
window.addEventListener("scroll", () => {
  if (activeCitation && !pinnedPopover) positionPopover(activeCitation);
  else if (activeCitation) closePopover();
}, {passive:true});
window.addEventListener("resize", closePopover);

// Calculator
const calculator = document.querySelector("#tax-calculator");
const assetInput = document.querySelector("#asset-value");
const baseInput = document.querySelector("#tax-base");
const rateInput = document.querySelector("#tax-rate");
const coefficientInput = document.querySelector("#coefficient");
const creditInput = document.querySelector("#credit-rate");
const coefficientField = document.querySelector("#coefficient-field");
const creditField = document.querySelector("#credit-field");
const coefficientOutput = document.querySelector("#coefficient-output");
const creditOutput = document.querySelector("#credit-output");
const formulaText = document.querySelector("#formula-text");
const calculatorWarning = document.querySelector("#calculator-warning");
const moneyFormatter = new Intl.NumberFormat("ru-RU", {style:"currency",currency:"RUB",maximumFractionDigits:0});
const numberFormatter = new Intl.NumberFormat("ru-RU", {maximumFractionDigits:1});
let lastCalculation = null;

function numericValue(input, min, max) {
  if (!input) return 0;
  const value = Number.parseFloat(input.value);
  return Number.isFinite(value) ? Math.min(Math.max(value, min), max) : 0;
}

function money(value) {
  return moneyFormatter.format(Math.round(Math.abs(value) < 0.5 ? 0 : value));
}

function signedMoney(value) {
  const normalized = Math.abs(value) < 0.5 ? 0 : value;
  return normalized > 0 ? `+${money(normalized)}` : money(normalized);
}

function selectedModel() {
  return calculator?.querySelector('input[name="model"]:checked')?.value || "enhanced";
}

function calculate() {
  const model = selectedModel();
  const V = numericValue(assetInput, 0, 1e12);
  const B = numericValue(baseInput, 0, 1e12);
  const r = numericValue(rateInput, 0, 100) / 100;
  const k = numericValue(coefficientInput, 1, 2);
  const c = numericValue(creditInput, 0, 100) / 100;
  const taxBefore = B * r;
  const ordinarySavings = Math.min(V, B) * r;
  let rawAllowance;
  let usedAllowance;
  let taxAfter;
  let savings;

  coefficientField.hidden = model !== "enhanced";
  creditField.hidden = model !== "credit";
  coefficientOutput.textContent = numberFormatter.format(k);
  creditOutput.textContent = `${numberFormatter.format(c * 100)}%`;

  if (model === "credit") {
    rawAllowance = c * V;
    usedAllowance = Math.min(rawAllowance, taxBefore);
    savings = usedAllowance;
    taxAfter = Math.max(0, taxBefore - savings);
    formulaText.textContent = "Экономия = min(c × V, B × r)";
  } else {
    const multiplier = model === "enhanced" ? k : 1;
    rawAllowance = multiplier * V;
    usedAllowance = Math.min(rawAllowance, B);
    taxAfter = Math.max(0, B - usedAllowance) * r;
    savings = taxBefore - taxAfter;
    formulaText.textContent = model === "enhanced" ? "Экономия = min(k × V, B) × r" : "Экономия = min(V, B) × r";
  }

  const difference = savings - ordinarySavings;
  const netCost = Math.max(0, V - savings);
  lastCalculation = {model,V,B,r,k,c,rawAllowance,usedAllowance,taxBefore,taxAfter,savings,ordinarySavings,difference,netCost};

  document.querySelector("#savings-value").textContent = money(savings);
  document.querySelector("#tax-before").textContent = money(taxBefore);
  document.querySelector("#tax-after").textContent = money(taxAfter);
  document.querySelector("#deduction-label").textContent = model === "credit" ? "Использованный кредит" : "Использованный вычет";
  document.querySelector("#deduction-value").textContent = money(usedAllowance);
  document.querySelector("#additional-value").textContent = signedMoney(difference);
  document.querySelector("#net-cost").textContent = money(netCost);
  document.querySelector("#fiscal-cost").textContent = money(savings);
  document.querySelector("#municipal-value").textContent = money(V);

  let warning = "";
  if (V === 0) warning = "Стоимость актива равна нулю, поэтому налоговый стимул не возникает.";
  else if (B === 0) warning = "При нулевой налоговой базе экономия в текущем периоде равна нулю. Для практической модели необходим отдельный законодательный порядок переноса неиспользованной льготы.";
  else if (model === "credit" && c === 0) warning = "Доля налогового кредита равна нулю. Увеличьте её, чтобы смоделировать стимул.";
  else if (usedAllowance < rawAllowance) warning = model === "credit" ? "Расчётный кредит превышает исчисленный налог. В модели используется только сумма в пределах налога к уплате." : "Расчётный вычет превышает доступную налоговую базу. В текущем периоде используется только часть в пределах базы.";
  calculatorWarning.textContent = warning;
  calculatorWarning.hidden = !warning;
}

calculator.addEventListener("input", calculate);
calculator.addEventListener("change", calculate);
calculator.addEventListener("submit", event => event.preventDefault());


const toast = document.querySelector("#toast");
let toastTimer = 0;
function showToast(message) {
  window.clearTimeout(toastTimer);
  toast.textContent = message;
  toast.hidden = false;
  requestAnimationFrame(() => toast.classList.add("visible"));
  toastTimer = window.setTimeout(() => {
    toast.classList.remove("visible");
    window.setTimeout(() => { toast.hidden = true; }, 180);
  }, 2600);
}

async function copyText(text, successMessage) {
  try {
    if (navigator.clipboard && window.isSecureContext) await navigator.clipboard.writeText(text);
    else {
      const textarea = document.createElement("textarea");
      textarea.value = text;
      textarea.style.position = "fixed";
      textarea.style.opacity = "0";
      document.body.append(textarea);
      textarea.select();
      const copied = document.execCommand("copy");
      textarea.remove();
      if (!copied) throw new Error("Copy unavailable");
    }
    showToast(successMessage);
  } catch {
    showToast("Не удалось скопировать. Выделите текст вручную.");
  }
}

document.querySelector("#copy-calculation").addEventListener("click", () => {
  if (!lastCalculation) return;
  const value = lastCalculation;
  const modelName = {ordinary:"Обычный вычет",enhanced:"Повышенный вычет",credit:"Налоговый кредит"}[value.model];
  const parameters = value.model === "enhanced" ? `Коэффициент k: ${numberFormatter.format(value.k)}` : value.model === "credit" ? `Доля кредита c: ${numberFormatter.format(value.c * 100)}%` : "Коэффициент k: 1";
  const text = [
    "Расчёт модели налогового стимулирования цифровых пожертвований",
    `Модель: ${modelName}`,
    `Стоимость актива V: ${money(value.V)}`,
    `Налоговая база B: ${money(value.B)}`,
    `Ставка r: ${numberFormatter.format(value.r * 100)}%`,
    parameters,
    `Налог до льготы: ${money(value.taxBefore)}`,
    `Налог после льготы: ${money(value.taxAfter)}`,
    `Налоговая экономия: ${money(value.savings)}`,
    `Разница с обычным вычетом: ${signedMoney(value.difference)}`,
    `Стоимость пожертвования для бизнеса после экономии: ${money(value.netCost)}`,
    "Примечание: модель авторского предложения, не налоговая консультация."
  ].join("\n");
  copyText(text, "Расчёт скопирован");
});

document.querySelector("#copy-legal").addEventListener("click", () => {
  const legalText = document.querySelector("#legal-text").innerText.replace(/\n{3,}/g, "\n\n").trim();
  copyText(legalText, "Формулировка скопирована");
});

// Reading progress and current section in the table of contents.
const progressBar = document.querySelector("#reading-progress-bar");
let progressTicking = false;
function updateProgress() {
  const distance = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
  const progress = Math.min(1, Math.max(0, window.scrollY / distance));
  progressBar.style.transform = `scaleX(${progress})`;
  progressTicking = false;
}
window.addEventListener("scroll", () => {
  if (!progressTicking) {
    progressTicking = true;
    requestAnimationFrame(updateProgress);
  }
}, {passive:true});
updateProgress();

const tocLinks = [...document.querySelectorAll('.toc a[href^="#"]')];
const tocById = new Map(tocLinks.map(link => [link.getAttribute("href").slice(1), link]));
const sectionObserver = new IntersectionObserver(entries => {
  const visible = entries.filter(entry => entry.isIntersecting).sort((a,b) => a.boundingClientRect.top - b.boundingClientRect.top);
  if (!visible.length) return;
  tocLinks.forEach(link => link.classList.remove("active"));
  tocById.get(visible[0].target.id)?.classList.add("active");
}, {rootMargin:"-12% 0px -68% 0px",threshold:[0,0.1]});
for (const section of document.querySelectorAll(".article-section[id]")) sectionObserver.observe(section);
tocById.get("abstract")?.classList.add("active");

calculate();
