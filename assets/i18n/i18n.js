import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './en.json';
import zh from './zh.json';
import hi from './hi.json';
import es from './es.json';
import fr from './fr.json';
import bn from './bn.json';
import msa from './msa.json';
import fa from './fa.json';
import ru from './ru.json';
import pt from './pt.json';
import id from './id.json';
import de from './de.json';
import ja from './ja.json';
import ng from './ng.json';
import tr from './tr.json';
import yue from './yue.json';
import vi from './vi.json';
import ko from './ko.json';
import be from './be.json';
import bg from './bg.json';
import pl from './pl.json';
import uk from './uk.json';
import hr from './hr.json';
import cs from './cs.json';
import da from './da.json';
import nl from './nl.json';
import haw from './haw.json';
import he from './he.json';
import ga from './ga.json';
import it from './it.json';
import ro from './ro.json';
import sr from './sr.json';
import sv from './sv.json';
import ur from './ur.json';
import pa from './pa.json';
import te from './te.json';
import mr from './mr.json';


i18n.use(initReactI18next).init({
    compatibilityJSON: 'v3',
    lng: 'en',
    fallbackLng: 'en',
    resources: {
        en: en,
        zh: zh,
        hi: hi,
        es: es,
        fr: fr,
        bn: bn,
        msa: msa,
        fa: fa,
        ru: ru,
        pt: pt,
        id: id,
        de: de,
        ja: ja,
        ng: ng,
        tr: tr,
        yue: yue,
        vi: vi,
        ko: ko,
        be: be,
        bg: bg,
        pl: pl,
        uk: uk,
        hr: hr,
        cs: cs,
        da: da,
        nl: nl,
        haw: haw,
        he: he,
        ga: ga,
        it: it,
        ro: ro,
        sr: sr,
        sv: sv,
        ur: ur,
        pa: pa,
        te: te,
        mr: mr,
    },
    interpolation: {
        escapeValue: false // react already safes from xss
    }
});

export default i18n;
