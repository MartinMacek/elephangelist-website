import { Slide, SlideshowRef } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import React, { useRef, useState } from "react";

export default function SlideShow() {
  const slideRef = useRef(null);
  const [slideIndex, setSlideIndex] = useState(0);

  const slideImages = [
    {
      url: "/assets/home_img1.webp",
      caption: `Bylo nás pět. Společně s devatenácti
      zavazadly jsme se v polovině
      července vydali na misi do afrického
      Konga. Zleva: Radek Karko, Jakub
      Chlouba, Lukáš Hodis, David Alexa a
      Arthur Sniegon.`,
    },
    {
      url: "/assets/home_img2.webp",
      caption: `Po dvanácti hodinách jsme přistáli
      v hlavním městě Konga - Brazzaville.
      Bohužel však s chybějícím Lukášovým
      kufrem, který zůstal v Etiopii. Z letiště
      jsme zamířili na honorární konzulát,
      přebalili batohy, složili se Lukášovi na
      oblečení a vydali se do rezervace
      Lefini.`,
    },
    {
      url: "/assets/home_img3.webp",
      caption: `Přírodní chráněná rezervace Lefini je
      území rozprostírající se v náhorní
      plošině o rozloze 6300 km2. Původně
      sloužila jako útočiště pro reintrodukci
      goril osiřelých nelegálním obchodem
      s masem. Přestože se nachází pouze
      200 km od hlavního města Konga -
      Brazzaville, vyskytují se zde velcí
      afričtí savci jako jsou buvoli, hroši,
      levharti nebo sloni pralesní. Ihned
      jsme se proto vydali prozkoumat
      okolí.`,
    },
    {
      url: "",
      caption: `Údolím deštného pralesa protéká
      průzračně čistá řeka Nambouli. Jelikož
      jsme narazili na první sloní stopy,
      neváhali jsme ani chvíli, vyhrnuli
      nohavice a vydali se po stopách dále.`,
    },
    {
      url: "",
      caption: `Během několika minut se na nás vrhly
      desítky muchniček, jejichž kousnutí
      nás provázela až po zbytek cesty.
      Pravidlo č.1 : Vždy noste dlouhý rukáv!
      
      V případě klíšťat ale nepomohly ani
      ty. Dohromady jsme jich za celou
      výpravu napočítali kolem 20 na osobu
      a trávili společné chvíle jejich
      vytahováním.`,
    },
    {
      url: "",
      caption: `Našli jsme ideální úkryt s výhledem na
      koryto řeky. Následující tři dny jsme
      strávili vyčkáváním, zda se sloni
      pralesní objeví. Štěstí jsme nakonec
      neměli a museli si tak počkat do
      dalších dnů.`,
    },
    {
      url: "",
      caption: `Náš jídelníček tvořila dvě teplá jídla
      denně. Naprostá většina našich
      pokrmů byla vegetariánská či
      veganská, Rýže, fazole, lokální
      zelenina a ovoce. Výjimkou byla
      ochutnávka larev nosatce palmového.`,
    },
    {
      url: "",
      caption: `Po třech nocích strávených v Lefini
      jsme se vydali na okraj rezervace
      Tsoulou do vesnice Leboulou. Jelikož
      nás jelo 7, museli jsme improvizovat.`,
    },
    {
      url: "",
      caption: `Nejdříve jsme se ale zastavili ve městě
      Dolisie pro všechna potřebná povolení.
      Víte, kdo je českou spojkou v této
      oblasti? Nikdo jiný než Mireček z filmu
      Jak básníci přicházejí o iluze. Vlastním
      jménem Joseph Dielle. V 80. letech
      studoval režii na FAMU v Praze,
      momentálně ale žije zpátky v Kongu.
      Češtinu sice pozapomněl, ale Česko
      stále považuje za svůj druhý domov.`,
    },
    {
      url: "",
      caption: `Dorazili jsme do vesnice Leboulou, kde
      nám místní v zápětí sdělili, že před
      pěti minutami přešli dva velcí sloni
      přes cestu, jen pár kilometrů odtud.
      Okamžitě jsme vyrazili stopovat. Sloni
      jsou i přes svoji velikost neuvěřitelně
      rychlí a dokáží se pohybovat
      náročným terénem bez větších potíží.
      Na blízké setkání jsme zatím neměli
      štěstí.`,
    },
    {
      url: "",
      caption: `Jelikož se náš řidič vrátil do města
      a v oblasti nebyla dostupná další
      auta, nezbývalo nám nic jiného, než
      si pronajmout jediné dvě motorky,
      které se ve vesnici nacházely. Každý
      den jsme se tak nedobrovolně
      vydávali na 7 kilometrovou
      strastiplnou cestu. Nebudeme lhát,
      mysleli jsme, že je naše poslední.`,
    },
    {
      url: "",
      caption: `Nakonec jsme se na motorkách
      opravdu dvakrát vybourali a je až k
      neuvěření, že jediným zraněním byl
      tento malý škrábanec.`,
    },
    {
      url: "",
      caption: `Celé dny jsme procházeli husté
      pralesy a zarostlé savany s cílem
      vystopovat volně žijící slony pralesní.`,
    },
    {
      url: "",
      caption: `Častokrát jsme se vraceli až za tmy,
      špinaví, hladoví a bez jediného záběru
      slona.`,
    },
    {
      url: "",
      caption: `Večer jsme tak nacházeli alespoň malou
      útěchu v místním podniku u Daria, kde
      jsme popíjeli konžské pivo Ngok. Místní
      dokonce tvrdí, že za jeho typickou chutí
      stojí český sládek, který tam v 80. letech,
      díky spolupráci Konga a Československa,
      působil.`,
    },
    {
      url: "",
      caption: `Potvrdili jsme si, že najít a vidět slony
      ve volné přírodě začíná být opravdu
      vzácné. Podle odhadů by díky tempu
      jejich úbytku již v roce 2040 žádný
      volně žijící slon nemusel existovat.
      
      Na obrázku jeden z dronových záběrů,
      kde jsme našli pár slonů pasoucí se
      na travnaté savaně.`,
    },
    {
      url: "",
      caption: `Na konci našeho pobytu v oblasti
      Leboulou jsme na jedné z výprav objevili
      také pro střední Afriku typickou salinu,
      Jde o světlinu v pralese, kde se mohou
      shlukovat velcí savci. Šlo tak o nadějné
      místo, kde bychom mohli slony vidět
      z blízké vzdálenosti.
      
      Stálo před námi rozhodnutí, zda
      pokračovat dle plánu nebo zůstat na
      místě.`,
    },
    {
      url: "",
      caption: `Rozhodli jsme se poprvé od příjezdu do
      Konga rozdělit.
      
      Lukáš, Jakub a Arthur pokračovali dále na
      lodích po řece, zatímco Radek s Davidem
      zůstali další dva dny v pralese a číhali na
      slony.
      
      Domluvené místo setkání bylo u modré
      řeky, přesně za dva dny.`,
    },
    {
      url: "",
      caption: `Wakiri: "Kam vyrážíte?"
      My: "Jdeme nocovat do pralesa"
      Wakiri: "Tak hodně štěstí."
      My: "Ty jdeš s náma."
      Wakiri: "..."
      
      Wakiri je synovcem Josepha "Mirečka"
      Diella. Byl naší další spojkou v oblasti
      Leboulou. Žije ve městě a podle jeho
      slov si pobyt v divočině příliš neužívá.`,
    },
    {
      url: "",
      caption: `Čekání na Godota. Dvanáct hodin,
      nehybně v absolutní tichosti. Za stromy
      jsme slyšeli pasoucí se slony, pod
      nohama nám proplula kobra černá.`,
    },
    {
      url: "",
      caption: `Za soumraku jsme rozdělali stan,
      snědli připravenou večeři a uložili se
      ke spánku. V ten moment jsme ještě
      netušili, že náš průvodce nechal
      pootevřený vchod do stanu a u něj
      položenou svítilnu. Během pár minut
      se tak do stanu dostala stovka
      komárů a my tak zažili vskutku
      nezapomenutelnou noc.
      Díky bohu za antimalarika.`,
    },
    {
      url: "",
      caption: `Mezitím se někde na opačné straně
      rezervace, desítky kilometrů od nás,
      plavila druhá skupinka v čele s Arthurem,
      Jakubem a Lukášem.
      
      Během dvou dnů se jim na nafukovacích
      kajacích podařilo splavit více než 70km
      řeky Leboulou a Niari. Po cestě objevili
      několik loveckých táborů a nastražili
      fotopasti, které snad odhalí přítomnost
      vzácných druhů zvířat, ale také pytláků.`,
    },
    {
      url: "",
      caption: `Příští den nás čekala pětihodinová
      prašná cesta z Leboulou do Mila Mila
      a dále na místo setkání s ostatními.
      K přesunu jsme využili spolujízdu
      nákladním autem směřujícím do
      města, které jednou týdne využívají
      obyvatelé vesnic k transportu zboží
      všeho druhu - od manioku, přes basy
      prázdných piv, živých prasat a koz, až
      po mrtvé cibetky a antilopy.`,
    },
    {
      url: "",
      caption: `Po strastiplné cestě jsme dorazili k Modré
      řece, nevyspaní, unavení, špinaví. Jelikož
      nás nic dalšího ten den nečekalo, skočili
      jsme do vody, po dvou dnech si oblékli
      čisté oblečení a těšili se na zasloužený
      odpočinek.
      
      V ten moment jsme se po dvou dnech
      setkali s ostatními, když v tom Arthur
      zakřičel: "Okamžitě se nachystejte, asi
      kilometr po proudu jsou hroši, vemte si
      čelovku, za minutu vyrážíme!"
      Neměli jsme ani čas vzít si boty.`,
    },
    {
      url: "",
      caption: `Během několika chvil jsme pádlovali
      uprostřed široké řeky Niary a blížili se
      k nejnebezpečnějším savcům Afriky,
      kteří ročně zabijí až 500 lidí.
      
      "Arthure, nejsme už moc blízko?" - My,
      ptající se ze vzdálenosti asi 40m od
      hrochů.
      
      "V pohodě, kdyby na vás přece jen
      zaútočili, hlavně neplavte na hladině,
      ale pod vodou." odpověděl Arthur.`,
    },
    {
      url: "",
      caption: `Začalo se stmívat, proto jsme se vydali
      zpět k našemu táboru. Napadlo nás
      zkrátit si cestu jinudy, ale tato myšlenka
      se záhy ukázala být tím nejhorším
      možným řešením.
      
      Po dvou spadlých stromech uprostřed
      řeky a jejich přebrození skrze prales jsme
      se vzdali a vrátili se úplně na začátek.
      Upřímně, jízda kajakem v naprosté tmě
      na řece s hrochy a krokodýli a nošení lodí
      bosky džunglí, nebyl tak skvělý nápad, jak
      se mohlo na první pohled zdát.`,
    },
    {
      url: "",
      caption: `Předposlední den nás čekal výšlap
      přes neprostupný terén na vrcholky
      čokoládových pahorků.
      
      Po dvou týdnech náročného programu
      jsme věřili, že už nás nic horšího
      nečeká a těšili se na návrat do
      civilizace.
      
      Jenže motto naší výpravy znělo:
      "Zítřek bude ještě horší." A tak nás
      úsměv rychle přešel.`,
    },
    {
      url: "",
      caption: `Poté, co jsme dorazili k autu, nám řidič
      řekl, že se musíme vrátit s jedním z
      místních zpět do tábora. Arthur jel
      společně s průvodci, my se rozhodli
      zůstat na místě. Domluva zněla, že se za
      dvacet minut vrátí a společně se vydáme
      dál.
      
      Po dvou hodinách jsme stále byli u
      krajnice prašné cesty, kudy projížděla
      pouze auta dřevařského průmyslu.
      
      V tom se objevilo naše auto a Arthur
      zvolal: "Okamžitě nasedat, praskla nám
      hadička u chladiče!"`,
    },
    {
      url: "",
      caption: `Věděli jste, že se dá vyrobit provizorní
      lepidlo z banánu, sunaru a vody?
      
      Po druhé hodině ranní a 6 hodinách na
      cestě jsme se konečně dostali do města.
      Bohužel náš hotel byl již plný a museli
      jsme tak objet další tři, než jsme zalehli
      do postele.`,
    },
    {
      url: "",
      caption: `Poslední den jsme se v pořádku
      dopravili do Brazzaville, dali si
      společnou večeři a zasmáli se nad
      všemi svízelnými situacemi, do kterých
      jsme se za dva týdny putování Kongem
      dostali.
      
      Shodli jsme se, že to byl jeden
      z nejsilnějších zážitků, které jsme v
      životě zažili. A že se nemůžeme dočkat,
      až přijde další!`,
    },
  ];

  const properties = {
    duration: 3000,
    autoplay: false,
    transitionDuration: 500,
    arrows: false,
    infinite: true,
    easing: "ease",
  };

  const eachSlideClass = "bg-center bg-cover h-64 md:h-[692px]";

  return (
    <div className="flex flex-col w-full md:flex-row max-w-7xl mx-auto gap-x-6 xl:gap-x-12 mt-16 mb-60">
      <div className="block md:w-1/2 lg:w-3/4 m-2">
        <Slide
          {...properties}
          ref={slideRef}
          onChange={(from, to) => setSlideIndex(to)}
        >
          {slideImages.map((slideImage, index) => (
            <div className="each-slide" key={index}>
              <div
                style={{
                  backgroundImage: `url(${slideImage.url})`,
                }}
                className={eachSlideClass}
              ></div>
            </div>
          ))}
        </Slide>
      </div>
      <div className="flex w-full md:w-1/2 lg:w-1/4 overflow-hidden p-2">
        <div className="flex flex-col">
          <div className="flex flex-row md:flex-col justify-between">
            <div className="flex flex-row font-['Bebas_Neue']">
              <div className="text-[80px] md:text-[137px] leading-none">
                {slideIndex + 1}
              </div>
              <div className="text-[40px] md:text-[68px] leading-tight ">
                /{slideImages.length}
              </div>
            </div>
            <div className="flex flex-row gap-x-3 md:my-6">
              <div
                className="w-8 md:w-12 h-8 md:h-12  bg-[#BCAE7E] rounded-full cursor-pointer"
                onClick={() => slideRef.current.goBack()}
              ></div>
              <div
                className="w-8 md:w-12 h-8 md:h-12 bg-[#BCAE7E] rounded-full cursor-pointer"
                onClick={() => slideRef.current.goNext()}
              ></div>
            </div>
          </div>
          <div className="pr-2">{slideImages[slideIndex].caption}</div>
        </div>
      </div>
    </div>
  );
}
