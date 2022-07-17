const assert = require("assert");
const Encrypter = require("./index4");

const ACTION = {
    ENC: 'encrypt',
    DEC: 'decrypt'
};

const testCases = [
    {
        actions: [
            {
                action: ACTION.DEC,
                params: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
                expected: 100
            },
        ],
        build: [
            ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
            ["aa", "aa", "aa", "aa", "aa", "aa", "aa", "aa", "aa", "aa", "aa", "aa", "aa", "aa", "aa", "aa", "aa", "aa", "aa", "aa", "aa", "aa", "aa", "aa", "aa", "aa"],
            [
                "mcuqcvsoazyzgjqivjrzrpmmgxjnuzqwzogvuoferobdrtpcjgvyarmfhpbcxkkdgnabxttulixxhcqcldnmnclxmriluwgmrduz",
                "bvxgsxjmbzlrszigasljrrehpjrpvqtnxmijfzakdewcyungoomkvruuwldzltwfuojnxjzarchkxhpofmuxcqpzlhcdmgivpzdh",
                "hlexqybyvxvsmvnwqggvwetfjvydvfxvauvfjuapxfcldjblttgwfhfmnqfrjrajwnzcwifigjzhpgjvpwvkwuinspdenzapuiri",
                "emehkmjlwonedytvjhvikiwpgyoubbxjwcrfidjsmptbbkyxkbfjfqzfadkzdonxyzqaltdttiyfiemkfzijtnwlmcqnkeghsvou",
                "vvuljozqgloaprxcjfaotvcnezaegfpyebvunzkwfnvzpiraudmyxbeclqlukzscyddgovukqlxjhaapjadiojptgnwcyzffwkwg",
                "gnusbxtwqjhhxvdgvkpltbuwaitxowzqzuupkptyunuzmkksyejvgmnlggorekagbczolcwnabiooduspvxcfubkjirckajrfdeh",
                "ulcuayrjyltnxugmljziufevnncwszbedxrhthmfjijfolebtktvypdmlhbysuomkjqrntjuawxwzrxvrwnzlfpyufxnafwwvcld",
                "tupdeexytqpzjuzpnrpppmxiscikwvauagdnejsgijrmnbwmuezkcqalikxfivjwqnbwxzydkyraynftthtuytofidsnkjulbkjg",
                "hxwvjeapdxxrjmrozspzttjvxwdhlkrlfufblkhxsyixcilvjmcxsjhoavnxcdjogcnrywgplrpbcjzokkyjplankuwiavumyaic",
                "bjzkjdxswvxignutrkbbibfwcbvjvvkahpzmqmbdrtjmhfpvydesdcuvwhsxbslnodxsuflpgyuykhrbaruawrpuqycdtipwjzoy",
                "jzahpswkwvbxghvdwgfiguhqhxuwxqxvidgtcolwrntwigwzaencnispoazuyswsfdzmtdocjsxtygyzyajxvnviprznbkozcehx",
                "frvdyxucntgkpmpfgemxlcogawobbeqvvpahuxbijgvphmoujaupsslsedikyskrpserunjfovcrxmewfyklydctlnwecmdpbact",
                "uogkpfrzgjdrbjfbyqffgtbniqoawygmyhrwwsytihsraaoceobgqxnkijxfbentpoesrxxnavgufizxztgtfzupqqofssmqvgod",
                "bpknlfrcyczbjiqhwtwcqwdhnvsgosvgtbesrhtcqqspzvcfcrgfdzanfrsaumuzhumfgdlfippxryfvlioonhkflgjosipknsmm",
                "crmsmcxoegdcgigozcjvlhinbnzurvsvhtbzegofgcqrzzklomsrlopqwgasuvhkwfktlmizbakjglrznehwcyqdkeignlixhsav",
                "uwiwdnjhacdhkknhnwlpmzdyljgtybhzocoimmncszljvviamnuamaacpliqjwqmeaombcpbnbfcofryabxqtajguodymzkpaaok",
                "mpwdqtqmbrmyxybkfiekslxooavlpxrmmlcczlbhgbremgxceypjohkdbomwskqfrtbsuxbpmxvrsylkhrmpedqpclshdqyoketu",
                "lrxghhgtkucnssakcqwpjxyghwneexixrdzfnfugpxcppbgxomgwdcroykqmkugfvjnecvzzptpmyzmeybdpnzfrkphtmrzpodkb",
                "ynwvswujfpuyyvyeqpnfsftzodooxsxzfknwiebwelbbaxbfiyqojnsbphijdmtkaispkaorpcwiofoawvxoimuubinewpruurmr",
                "euqzijqxmxksicijmdfktvecgngxdzkrvinusjdjwnppoytkvzwjgenxdoukxkphtirjrxdhibisbphrmlggminejltovcgfilcu",
                "eesvszcfzystqobaoazkgocqgkodkkvvtungwxjyewhlhjzdzcdltxjvsmpiagbsydukdsebmshrtsjavdtbgqhkeykjtpvojzcz",
                "erpnkftbfahspyujlemrowzbukvetphwascqbotteulkdzmhnzyhgdlkcbfrbpflqcxyizrwxfkieyffhkrivhqulwwgbprwwokw",
                "bznbehcnkhtwusahcucivvsdijofqqnyzdtbizaajwzfapfscgnklpusjctiztasklxlujqkvwmapuomjdnwfzcdquzbrcyfzbry",
                "ackpplvpjgahdoljrhiunkknzllptwuzlgpemilqkuvcfksvnstqnxrqyrcpokrmrvoeeusukwwgdtkbpsggkbxszazmjjdeqvjq",
                "nhajildhvtcohzlepimowcrljtlnswowutckxpsavianfjbxtpazmhqzrjixmanxqzsdoztevwkgspivwzmpdxwkcctblpsdaivf",
                "rwunklinlknktgznvvctkdsmnouttdkrayensttjxrhawqipswqncluoxtdgjhhlrrboqaqucemdrgymqrvrdbchjbvzkzuetwgz",
                "qcnmwzwcnwjwwjsxrczlfpyaokksqypycclyuddnkllideirljoknnxphkmsguydjznexfsamhdbmbrydfhrbxckimkbrdldwlgx",
                "ytodaypdzxiwovqlvvehemzzkvqvksqzkprrosigzkibeknmcjasikvknpulraxyjspmyxdwbtbrlgiwubxovzmekjzjmrguutif",
                "fhirtgnuuwszggezynxglmvgbterwntbtsotyztzrkmzpnogtqqdtsxuufoflslwsbssdljfqlrbcrkpijgmovncgxatydxexgbs",
                "ywgiokztrllllqzwbdstisytzdrrcoztvtdqesowvoclaeoyjwozgfatfytznlbacjrynxsxrgsxbliyzoajfhrsgskxrimjbmqt",
                "fpuzddutlqwmjvksqpeyoyfasvaptbhlnruxpzeomkawbtqtosdaessjuvhlrndqovrmaisiuwxevaxgxqgeyriwidrpktrhouga",
                "vsbcjjxofjkpksexfgwawiqhpsldpsznktxvjotkubjayosvzekdvkgxrqnaharwkcgsumwytdqlpiyyfxzdotrusofylgfxppux",
                "syunkbrmqpaclwtacurzdfcomnsoityaehkzaqzxhpbswrotenezugcthkjrlwqoelptjtxiayxkuzcwyvpnmimxaunyjkfhbzav",
                "mivujujcibvjckegzfvvdxchlzrlpzybzwzfynbiduxngurvhmczxpkeycpwagqxmxqdxtxfjugrguiawmllglkrglrbltrqrmvn",
                "uplnntpltxxedwiocnqzoruidcxhifnxjwtvsehptiyusbwxqpydsvspunmujprsvnxlgffzwbowacezwltitxjnpzikwkugojmc",
                "mnjkppagbzainkywgwqlileysmdarrsfawebuotxbwzlqxnvopforxvsfocihubflqhepvaqpzsokzkyzktmqqnjhjngqbisamid",
                "keutgikrivtdfwtyhokryybhtgoljlbsdinaehxhjrjuhxxgsmewqkpxgihkprxjlkihtflhyptizbvelgqdzkqdiubuxfdqnhod",
                "mjhwjrtomdvmpfstjrahdmygmogwdytwleplrrzmlpenejhlykznfmsgogimpcyafsxpnfnvzicqplmqcfhjgefchkepgsyxmkvx",
                "edokzcmqfsclxxwctflhgrsraqnbqfvivnjzyxuvdmdgaqdooxgrzvczofmkjidfmomxkjfwguuucftdooebdynrbymkjlrpmtvl",
                "gbqwevmgzktlvnujphdwhvsshzdukmhpbapnprtjbsruherggrfinetthgotpmioqbbsiyuiadtsbvrbqdwubmgkvctedpzdeubv",
                "szolwczppyyoqwduvsppsqzghrrluchkyxczkhytsnrgsrojurbcfmlycerxypguraimbulzzkhshvijrzjgxytzvbeerqnbjxsq",
                "grpvzsekheoxtqzzkdyxbnupdtzfndokerxzshzvqksivjmshnoaiizheohguoayahjsnmadjnoclyofihuxkmnqakyiiyxgaukw",
                "tfrjnnjegtfsbhkoemsypfeeqwohzkzvlhinynjybmwdmnsmllwluovkauwlpyugheuzhdllhzoezvdjufptoconrutrxjcjefgj",
                "ifxiinreydwdmvdroxzwvnwvwmozadlnnnuwdhqmshetanrpjmkycsmdcyephjuqvhoxnfkyzvpaejzeqbppbtcspicnrfxhlfjj",
                "safjzxzzyfkggdjoishecdfjuzjdiqalyqzzrjvwcpxdqbcbylfzqulnuhdaazusrxgbxcpdqglgdlflwoydqldytelkpydmozks",
                "qmrxlwogtotcwdhyxisdysoaykdoqdevricewkauaohibqwwmpgcoonuqygfkgbicgmlvmkejatbfppqntsgfkjhiqdwmjahreru",
                "vpypdvfnbantheshdepbvdwibkvvvfnsstflujymxljcdvqhkjgezewsxnhlfpphbkpsavpgpnofhrgqlhxbctowrugpzlgnkeuw",
                "erklwbmnnltzsthhkxdbquthlgouekemvnwfnqrrsluxadlhflbsfcyvrucnbkxmlubelrnkfoldmyjqitfeqjztkdbakpqbxkmi",
                "ilqldybvytebtlagzkmummshlimmyopoqchnqtdfslyonqhaewrisjqbiemoovujtiqmanskuldazuasxraypaenjfeyeqvmaaap",
                "lbzlwhffmczgstwbscoehjegeypekdjiscdnqgzswygzblqinebktqevkqeysgyoccgybdhjhzzszkwvrijvmhgdyjrengrhpzde",
                "yxucregyierhgdiqasgavbdqxgzezfoncarnkmjkwypxejaffwtuemwznghwwidwpwpmavzsiprdjwpscxkamcmjlzqdmfxyzlnn",
                "hnpaolitdfuzuindrblqtetyshckkelewyyfbhdttuyioqhextirnirnrrtqdljixddmxcosfcwfezqacnhxklaxgtpevufgrevo",
                "dtbwujsipyxcclkgervjuqsyfdcfgqzspwpccfsiwhyneiptuoxormhhsekuytowdaexjykazlliueinprcmzjkvqruxrujkrugv",
                "hbpuhmlnicdqashmkvpdqedoajijxgjftvmmixoabkdyowortpmolwevrkblaocrvqznwfzuonccqjmmzhzerkvkdenghjykflsz",
                "lgwrugmgrylfcexhotamuedepoefrzkshafkqwmvjxcqetoqmxqjghfnymoeptglbimpzlyaqccnbkurnsuusjbiwrntzpgfjlpp",
                "zjucgatricxqadaomywyaerhjjpnomheucftahpphfjvarsnfkmpeudlkhdsweziglgvvsyvgteddcgodzqvzbqmzlnqcloonbuy",
                "qphgdnyxrhciqnrunlyjzrwrwxhnlidyirhdygbgykvtgntomsscocdoyksverdtduwvkqbxtudxkpgrwqwtpzuesnznlvrekngt",
                "zhpcqpqxiawhlvigoyifhivwbegyyypayuzljnemkdbnhmbprineozlawkyawdrvhhcpfwexzebkyrorvkzxfxhhiqahtzujrgyn",
                "gatwdumexgxemqqboufruznbccrljjoewrwqqemasodzrjudyyfsgxnqvugvfwbmernzvbukpabltbvzakgnrsvjdmroodkrtgrl",
                "tudvrtggdhvbbqjvwqdejywulpxtsxeiwfrxemqeuswgydfmjualtbeubjgmvdsmvlgdwmkhnzqvguomzaobwdhlcbzomdgcsmcr",
                "abhtidnlirwtouligwahewydlndudyndnjeqmancqptzkzxaiutuvmllpcsrsxgbezgxqqfnwgyopmhympetdoawzeyutjzdpxxz",
                "frirrwebmrvgjuvwkuehnqvkknkjctokefmrpqwmqdblvqfvgcugxkhzhbzsiivqhgxtsqzlnwfujrtqsmuuvpehambugwhcqzxk",
                "tauufrcwspwlridhczlvbdajjkoiuhthuoirahjxkixjlreeldcfgvkftjowhroygprkyeolqpgjyobvonalonkhkkldqfevvivm",
                "dxwxthiivjvlgpuvpgimrtnliaytusflzlqhfscfknzmjmdodldnoiozxooevefwunvkwswmlozvolhqcrmxjwgegevkwwwoxgxw",
                "nnfskrqveaishrsazhwukgsmocsygabbnyogzomwypzswdaxxavfallvdzxfspfozdmbniupbexgnzwbvjhvtagjvnhmqwiocbcj",
                "evmdqgayexrpuoycwamyzjvlosyfrvqtinklsgimyqhftproxxmcdtcojkvebhhhaqnkcgrhhvynmzbhtktbomkljpckqzxrfxaj",
                "fbexunjkphppctjokojlmnqkjeslvqqyagqemevfwiucsartvxrnccnyapxdesoofojtzgystpnrotehkktuvaiuqhukgtebrfxd",
                "omkaneuuwwjiwvqmrrtdhcnjmrtpowrxfabkmxnhaxmcnpdqekvhwqcvomipcqohfwaltuecenvzjzemrdypxfwfsychasbtgweh",
                "afaybjaztslcronbrkvogxyerhmnygzgkirvkhxcmixfmeiaeqeuirqkkybxehcpxfllxywlvsiisnavtcytxysrqlgtynpxuyzz",
                "yuzatlyobbzdqpanqzlqtddumxhavaevqqdqetwlajljezdyufpqzfziwpxdasiexttwrhueelcmevdfrlgurrklgpzkbkwsrhgt",
                "nzfejucqhgxeonfinmljshxsdbygibsajmichvnmidxvlrybymjjutdllvrcrwodhlhqqkprmsvodlgravrbdnxrgznjxskregiu",
                "idefnlsztzfrmlmrpibiyuckavenokwkiyuxomffglmhogicawsbdehuspgbsbxxwszcoqheuhiwrbpkrzymzajijuweawmxefgw",
                "cgyzknsvkfvjovblylbstvfrljhwpvfvclnedrmgysdwxbsxjuiprutakmbdgzcvlmfwrbzqbhcfwgqqaczqgusqxjbqmhdlqrmw",
                "frdegfjenlrjawnhenbyhsjfosyzgdhsyjwfogfcmxcxbguestuplrnxagbkdcbxzmeunemqdyutafagsthkzyrqqxumsuwsnqkd",
                "dcovmtvqthfpcxibmwqurvqmtzazsttzwrudeazsedsnskgfkbgxbfryskxzeuyjoshrmaxiwyhgunjzoklqtvjvrnvyleelqido",
                "cgiojvtcqxirpytsptbggoefczftxanjfgvueokcyjfvypfqsjsdjafxyqdlowzgpcekynrqciscjalitztjomboxjodmhybhocf",
                "xaqfrsamzdctbtdanvxhqbhemammmuobvxgnqlpajllggnupyxiebokpuopchwzxuhhpmyayfyiazatgoatbuyorgtangerjrddr",
                "nnsiriasuhdvljgwfiucpgojwmkvpzdwnjjndajtxofkjflarfbueetcvyozlzjsirowixkuicfwhbgafhidooeiaxctxgvwkfse",
                "zkpxkewzvdjurkyamgaznffqdndtxbzhuaftfqhlztvpmnrfwyhkorsntaiweulxojjftbvvwwyfemtiomvddvlbcvkvrtojopmi",
                "rchtimdomfobigsrxapyknlfpmilfkoemwqgogxlvamgghnlxwopbibfhdeirdxwqdejqmcqkfuejfhvwhukkdxnoluvcjxjeuts",
                "znvbyvincwjsvbzsefrfdstvbbzwyodfetltjfictpgfzqbdftmpeeguycirshdlnadjcvernhahekdrtskiweieondimiqixzwn",
                "zohxqufnewzrrhckpkmhvnxfyqfkyiyyivswfltljtlyafbypgnlfcqstnbynivkufpzgwbhuyzfyelflicaherxziqbdxyvebwz",
                "yweoxutosmtrdxfhxlzbitvsqtjukfrsadnfcenqojteqhkwbjxngmpjkwvhbltemotkowargyhtitiuntsszcnlwdcgfcthnvsg",
                "kbtrfukklyxgroaqihgedbeluungdscogeujgdytqzjddxaehcxteltbdszqwfyzmxpdwjfajqcecnnyzotrwyhouabgstalxpyx",
                "hbvftschtqbpzntigedgqmutekstktwldrbmfwiuwwnwbzavvounqrybkrkqianwzqjyrpofbvfmvhzuoursaabuobenjfpijlhf",
                "ngqkihmjhkrbmygnaajvadcfnepbxoscnceztykfyyiblxetsayvcqqkiqaddqszcnntxmqttrkcfqqmlpqsqxfljcatjnoshohn",
                "mghzufryhcvscmujzojihgizxuuyvwpmwfblilktxbxdaodfqilcefnwzzcyilrwdqrsgmvousxupvgoigqyddfvaaukoqmhiyyg",
                "nofmyuaqjdugmcjvndhmmgmrcjrhwkzxvqmtljxtctfhnmxqqmbqwqaawpqofkgqzkojwcxocfcvtbtnntbifzqbevdwuhgehnpz",
                "wsvplixikxrvrudpqmuecadxvsgnvxnpimxuqouwmcagfvjnlgiqtfrulslirglczzvvbzbuqqgihkugftcmkluzcdcgkbojqvfv",
                "wrsyhejtuorurqwqlkhggnyajdvpadmpoxtxhrobexuagijxgxbxisdxtfjxwcscqbblyqygcybjewnlamtgqvifhdzsyhgsbovq",
                "czyjjkyhgkmknczecmkpyuryzlttcuucwrwkssyicrokkffgchayvkhrerwhpiuxfirsmemeavpgbdjmheydehvbfsicrmnbjkxd",
                "umbkcokkpyxgloodipgfdkakfofuwadjqpsspggfetagqpxkmudorwwosiokgvfdjsbcccdhzyqmbhfptawfmjuvgtgbngzveqjj",
                "qbzfwzmynmrjjnsvaezljkthrodakqlllgmephbpfacbdlpfyoycujfxbruwhldkaxnosmavnkpjuuxklnmgwchrkkiowyhienda",
                "wksozakiakgbljbcbqzppflwmyztjcuzwbqoiewqwkbbfwkzqyrymwbmpwklesmeakkjyqghiazkonxxdrnrjeuewsplpnpaapwi",
                "xwugqkhirzuscvcnppaoyrdshocvsiwqzhduaamvxwgsnybjjnsbqfwmginxrzcpkvhhdbkgbbhbicovktetwkelpjwxdgapfmpt",
                "xjqrvhmguzxzcvazznybbeojuuppjgfbjhtimbttxmetfpkmzkzhdpfjpcbeelrjvyseqjnetjuysmhqnokysverwxyksjtdbhfy",
                "vngwhqfxkwkafafyzdxtbqvnvipkmotmbwsprzomehowzsddwpwrptbqbrchvstbhekjnjzghawsljwmuxrobjfyyzfoivfdtwep",
                "fxqektxoydaulpumqupegbqqhczqjisqchlvppwezzfpxxaqzhmhtdvkirdfwumbshxekekyxtcpxsgwtnxewbplpepyfpnaryih",
                "pysmvrrdanwyrqhvsnsfirlbkvejiyxyvqhmvggikpppgzdeobpavqlgtatjpotryjlhvqyobxhoziposjsligfsbexxqjylbatn",
                "axxxzrrheqlbefjbqjmdcctgckjfohiilkpdaqhbgpuctngmxeoabmmtvtkkqriunzztstdfferbuxyifyntrjuetgjksvdsrtve"
            ]
        ]
    },
    {
        build: [
            ['a', 'b', 'c', 'd'],
            ["ei", "zf", "ei", "am"],
            ["abcd", "acbd", "adbc", "badc", "dacb", "cadb", "cbda", "abad"]
        ],
        actions: [
            {
                action: ACTION.ENC,
                params: "abcd",
                expected: "eizfeiam"
            },
            {
                action: ACTION.DEC,
                params: "eizfeiam",
                expected: 2
            }
        ]
    },
    {
        build: [
            ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
            ["aa", "aa", "aa", "aa", "aa", "aa", "aa", "aa", "aa", "aa", "aa", "aa", "aa", "aa", "aa", "aa", "aa", "aa", "aa", "aa", "aa", "aa", "aa", "aa", "aa", "aa"],
            ["abcd", "acbd", "adbc", "badc", "dacb", "cadb", "cbda", "abad"]
        ],
        actions: [
            {
                action: ACTION.ENC,
                params: "abcd",
                expected: "aaaaaaaa"
            },
            {
                action: ACTION.DEC,
                params: "aaaaaaaa",
                expected: 8
            }
        ]
    }
];

describe('#4th', () => {
    testCases.forEach(testCase => {
        it(`case is`, () => {
            console.log(JSON.stringify(testCase, null, 4));
            const encrypter = new Encrypter(...testCase.build);
            for (let action of testCase.actions) {
                if (action.action === ACTION.ENC) {
                    assert.deepEqual(action.expected, encrypter.encrypt(action.params));
                } else {
                    assert.deepEqual(action.expected, encrypter.decrypt(action.params));
                }
            }
        });
    });
});