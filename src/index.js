import React from 'react';
import { transcrire } from './lib/cardeva'
import { copier, copy, annuler, alpha, convertUnicode } from './lib/base'
let googleTransliterate = require('google-input-tool');

let inputLanguage = 'ne-t-i0-und';
let maxResult = 8;
let request = new XMLHttpRequest();

function LanguageTranslator() {
  return (
    <div>
     <textarea type="text" onKeyUp={(e)=>{
      googleTransliterate(request, e.target.value, inputLanguage, maxResult)
      .then(function(response) {
          document.conversion.saisie.value = response[0]
      });
     }} ></textarea>

     <form name="conversion">
      <textarea name="saisie" id="bar" onKeyUp={transcrire} rows="4" className="cadr"></textarea>
     </form>
     <table class="tab-kbd">
        <tbody>
        <tr>
            <td>
                <table class="tab-kb">
                    <tbody>
                        <tr class="arial">
                            <td>ka</td>
                            <td>kha</td>
                            <td>ga</td>
                            <td>gha</td>
                            <td>nga</td>
                        </tr>
                        <tr>
                            <td>
                                <input type="button" class="bt" onClick={()=>alpha('क')} value="क" />
                            </td>
                            <td>
                                <input type="button" class="bt" onClick={()=>alpha('ख')} value="ख" />
                            </td>
                            <td>
                                <input type="button" class="bt" onClick={()=>alpha('ग')} value="ग" />
                            </td>
                            <td>
                                <input type="button" class="bt" onClick={()=>alpha('घ')} value="घ" />
                            </td>
                            <td>
                                <input type="button" class="bt" onClick={()=>alpha('ङ')} value="ङ" />
                            </td>
                        </tr>
                        <tr class="arial">
                            <td>ca</td>
                            <td>cha</td>
                            <td>ja</td>
                            <td>jha</td>
                            <td>ña</td>
                        </tr>
                        <tr>
                            <td>
                                <input type="button" class="bt" onClick={()=>alpha('च')} value="च" />
                            </td>
                            <td>
                                <input type="button" class="bt" onClick={()=>alpha('छ')} value="छ" />
                            </td>
                            <td>
                                <input type="button" class="bt" onClick={()=>alpha('ज')} value="ज" />
                            </td>
                            <td>
                                <input type="button" class="bt" onClick={()=>alpha('झ')} value="झ" />
                            </td>
                            <td>
                                <input type="button" class="bt" onClick={()=>alpha('ञ')} value="ञ" />
                            </td>
                        </tr>
                        <tr class="arial">
                            <td>Ṭa</td>
                            <td>Ṭha</td>
                            <td>Ḍa</td>
                            <td>Ḍha</td>
                            <td>Ṇa</td>
                        </tr>
                        <tr>
                            <td>
                                <input type="button" class="bt" onClick={()=>alpha('ट')} value="ट" />
                            </td>
                            <td>
                                <input type="button" class="bt" onClick={()=>alpha('ठ')} value="ठ" />
                            </td>
                            <td>
                                <input type="button" class="bt" onClick={()=>alpha('ड')} value="ड" />
                            </td>
                            <td>
                                <input type="button" class="bt" onClick={()=>alpha('ढ')} value="ढ" />
                            </td>
                            <td>
                                <input type="button" class="bt" onClick={()=>alpha('ण')} value="ण" />
                            </td>
                        </tr>
                        <tr class="arial">
                            <td>ta</td>
                            <td>tha</td>
                            <td>da</td>
                            <td>dha</td>
                            <td>na</td>
                        </tr>
                        <tr>
                            <td>
                                <input type="button" class="bt" onClick={()=>alpha('त')} value="त" />
                            </td>
                            <td>
                                <input type="button" class="bt" onClick={()=>alpha('थ')} value="थ" />
                            </td>
                            <td>
                                <input type="button" class="bt" onClick={()=>alpha('द')} value="द" />
                            </td>
                            <td>
                                <input type="button" class="bt" onClick={()=>alpha('ध')} value="ध" />
                            </td>
                            <td>
                                <input type="button" class="bt" onClick={()=>alpha('न')} value="न" />
                            </td>
                        </tr>
                        <tr class="arial">
                            <td>pa</td>
                            <td>pha</td>
                            <td>ba</td>
                            <td>bha</td>
                            <td>ma</td>
                        </tr>
                        <tr>
                            <td>
                                <input type="button" class="bt" onClick={()=>alpha('प')} value="प" />
                            </td>
                            <td>
                                <input type="button" class="bt" onClick={()=>alpha('फ')} value="फ" />
                            </td>
                            <td>
                                <input type="button" class="bt" onClick={()=>alpha('ब')} value="ब" />
                            </td>
                            <td>
                                <input type="button" class="bt" onClick={()=>alpha('भ')} value="भ" />
                            </td>
                            <td>
                                <input type="button" class="bt" onClick={()=>alpha('म')} value="म" />
                            </td>
                        </tr>
                    </tbody>
                </table>
                <table class="tab-kb">
                    <tbody>
                        <tr class="arial">
                            <td>qa</td>
                            <td>Xa</td>
                            <td>Ya</td>
                            <td>za</td>
                            <td>Ṛa</td>
                            <td>Ṛha</td>
                            <td>fa</td>
                        </tr>
                        <tr>
                            <td>
                                <input type="button" class="bt" onClick={()=>alpha('क़')} value="क़" />
                            </td>
                            <td>
                                <input type="button" class="bt" onClick={()=>alpha('ख़')} value="ख़" />
                            </td>
                            <td>
                                <input type="button" class="bt" onClick={()=>alpha('ग़')} value="ग़" />
                            </td>
                            <td>
                                <input type="button" class="bt" onClick={()=>alpha('ज़')} value="ज़" />
                            </td>
                            <td>
                                <input type="button" class="bt" onClick={()=>alpha('ड़')} value="ड़" />
                            </td>
                            <td>
                                <input type="button" class="bt" onClick={()=>alpha('ढ़')} value="ढ़" />
                            </td>
                            <td>
                                <input type="button" class="bt" onClick={()=>alpha('फ़')} value="फ़" />
                            </td>
                        </tr>
                    </tbody>
                </table>
                <table class="tab-kb">
                    <tbody>
                        <tr class="arial">
                            <td>ya</td>
                            <td>ra</td>
                            <td>la</td>
                            <td>Ḷa</td>
                            <td>va</td>
                            <td>ha</td>
                            <td> &nbsp; &nbsp; </td>
                            <td>śa</td>
                            <td>Ṣa</td>
                            <td>sa</td>
                        </tr>
                        <tr>
                            <td>
                                <input type="button" class="bt" onClick={()=>alpha('य')} value="य" />
                            </td>
                            <td>
                                <input type="button" class="bt" onClick={()=>alpha('र')} value="र" />
                            </td>
                            <td>
                                <input type="button" class="bt" onClick={()=>alpha('ल')} value="ल" />
                            </td>
                            <td>
                                <input type="button" class="bt" onClick={()=>alpha('ळ')} value="ळ" />
                            </td>
                            <td>
                                <input type="button" class="bt" onClick={()=>alpha('व')} value="व" />
                            </td>
                            <td>
                                <input type="button" class="bt" onClick={()=>alpha('ह')} value="ह" />
                            </td>
                            <td>&nbsp;</td>
                            <td>
                                <input type="button" class="bt" onClick={()=>alpha('श')} value="श" />
                            </td>
                            <td>
                                <input type="button" class="bt" onClick={()=>alpha('ष')} value="ष" />
                            </td>
                            <td>
                                <input type="button" class="bt" onClick={()=>alpha('स')} value="स" />
                            </td>
                        </tr>
                        <tr>
                            <td>&nbsp;</td>
                            <td>
                                <input type="button" class="bt" onClick={()=>alpha('ऱ')} value="ऱ" />
                            </td>
                            <td>&nbsp;</td>
                            <td>
                                <input type="button" class="bt" onClick={()=>alpha('ऴ')} value="ऴ" />
                            </td>
                            <td>&nbsp;</td>
                            <td>&nbsp;</td>
                            <td>&nbsp;</td>
                            <td>&nbsp;</td>
                            <td>&nbsp;</td>
                            <td>&nbsp;</td>
                        </tr>
                    </tbody>
                </table>
            </td>
            <td>
                <table class="tab-kb">
                    <tbody>
                        <tr>
                            <td>&nbsp;</td>
                        </tr>
                        <tr>
                            <td>
                                <input type="button" class="bt" title="virama" onClick={()=>alpha('')} value="्" />
                            </td>
                        </tr>
                    </tbody>
                </table>
            </td>
            <td>
                <table class="tab-kb">
                    <tbody>
                        <tr class="arial">
                            <td>a</td>
                            <td>ā</td>
                            <td>i</td>
                            <td>ī</td>
                            <td>u</td>
                            <td>ū</td>
                        </tr>
                        <tr>
                            <td>
                                <input type="button" class="bt" onClick={()=>alpha('अ')} value="अ" />
                            </td>
                            <td>
                                <input type="button" class="bt" onClick={()=>alpha('आ')} value="आ" />
                            </td>
                            <td>
                                <input type="button" class="bt" onClick={()=>alpha('इ')} value="इ" />
                            </td>
                            <td>
                                <input type="button" class="bt" onClick={()=>alpha('ई')} value="ई" />
                            </td>
                            <td>
                                <input type="button" class="bt" onClick={()=>alpha('उ')} value="उ" />
                            </td>
                            <td>
                                <input type="button" class="bt" onClick={()=>alpha('ऊ')} value="ऊ" />
                            </td>
                        </tr>
                        <tr>
                            <td>&nbsp;</td>
                            <td>
                                <input type="button" class="bt" onClick={()=>alpha('')} value="ा" />
                            </td>
                            <td>
                                <input type="button" class="bt" onClick={()=>alpha('')} value="ि" />
                            </td>
                            <td>
                                <input type="button" class="bt" onClick={()=>alpha('')} value="ी" />
                            </td>
                            <td>
                                <input type="button" class="bt" onClick={()=>alpha('')} value="ु" />
                            </td>
                            <td>
                                <input type="button" class="bt" onClick={()=>alpha('')} value="ू" />
                            </td>
                        </tr>
                    </tbody>
                </table>
                <table class="tab-kb">
                    <tbody>
                        <tr class="arial">
                            <td>ri</td>
                            <td>rī</td>
                            <td>li</td>
                            <td>lī</td>
                            <td class="esps"></td>
                            <td>e</td>
                            <td>ai</td>
                            <td>o</td>
                            <td>au</td>
                        </tr>
                        <tr>
                            <td>
                                <input type="button" class="bt" onClick={()=>alpha('ऋ')} value="ऋ" />
                            </td>
                            <td>
                                <input type="button" class="bt" onClick={()=>alpha('ॠ')} value="ॠ" />
                            </td>
                            <td>
                                <input type="button" class="bt" onClick={()=>alpha('ऌ')} value="ऌ" />
                            </td>
                            <td>
                                <input type="button" class="bt" onClick={()=>alpha('ॡ')} value="ॡ" />
                            </td>
                            <td>&nbsp;</td>
                            <td>
                                <input type="button" class="bt" onClick={()=>alpha('ए')} value="ए" />
                            </td>
                            <td>
                                <input type="button" class="bt" onClick={()=>alpha('ऐ')} value="ऐ" />
                            </td>
                            <td>
                                <input type="button" class="bt" onClick={()=>alpha('ओ')} value="ओ" />
                            </td>
                            <td>
                                <input type="button" class="bt" onClick={()=>alpha('औ')} value="औ" />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <input type="button" class="bt" onClick={()=>alpha('')} value="ृ" />
                            </td>
                            <td>
                                <input type="button" class="bt" onClick={()=>alpha('')} value="ॄ" />
                            </td>
                            <td>
                                <input type="button" class="bt" onClick={()=>alpha('')} value="ॢ" />
                            </td>
                            <td>
                                <input type="button" class="bt" onClick={()=>alpha('')} value="ॣ" />
                            </td>
                            <td>&nbsp;</td>
                            <td>
                                <input type="button" class="bt" onClick={()=>alpha('')} value="े" />
                            </td>
                            <td>
                                <input type="button" class="bt" onClick={()=>alpha('')} value="ै" />
                            </td>
                            <td>
                                <input type="button" class="bt" onClick={()=>alpha('')} value="ो" />
                            </td>
                            <td>
                                <input type="button" class="bt" onClick={()=>alpha('')} value="ौ" />
                            </td>
                        </tr>
                    </tbody>
                </table>
                <table class="tab-kb">
                    <tbody>
                        <tr>
                            <td>
                                <input type="button" class="bt" title="udatta" onClick={()=>alpha('\u0951')} value={ convertUnicode('\u0951')} />
                            </td>
                            <td>
                                <input type="button" class="bt" title="anudatta" onClick={()=>alpha('')} value=" ॒" />
                            </td>
                            <td>
                                <input type="button" class="bt" title="accent grave" onClick={()=>alpha('')} value=" ॓" />
                            </td>
                            <td>
                                <input type="button" class="bt" title="accent aigu" onClick={()=>alpha('')} value=" ॔" />
                            </td>
                            <td>
                                <input type="button" class="bt" title="candra bindu" onClick={()=>alpha('')} value="ँ" />
                            </td>
                            <td>
                                <input type="button" class="bt" title="anusvara" onClick={()=>alpha('')} value="ं" />
                            </td>
                            <td>
                                <input type="button" class="bt" title="visarga" onClick={()=>alpha('')} value="ः" />
                            </td>
                            <td>
                                <input type="button" class="bt" title="nukta" onClick={()=>alpha('')} value="़" />
                            </td>
                        </tr>
                    </tbody>
                </table>
                <table class="tab-kb">
                    <tbody>
                        <tr>
                            <td>
                                <input type="button" class="bt" title="danda" onClick={()=>alpha('।')} value="।" />
                            </td>
                            <td>
                                <input type="button" class="bt" title="double danda" onClick={()=>alpha('॥')} value="॥" />
                            </td>
                            <td>
                                <input type="button" class="bt" title="avagraha" onClick={()=>alpha('ऽ')} value="ऽ" />
                            </td>
                            <td>
                                <input type="button" class="bt" title="symbole dabréviation" onClick={()=>alpha('॰')} value="॰" />
                            </td>
                            <td>
                                <input type="button" class="bt" title="OM" onClick={()=>alpha('ॐ')} value="ॐ" />
                            </td>
                        </tr>
                    </tbody>
                </table>
                <table class="tab-kb">
                    <tbody>
                        <tr class="arial">
                            <td>0</td>
                            <td>1</td>
                            <td>2</td>
                            <td>3</td>
                            <td>4</td>
                            <td>5</td>
                            <td>6</td>
                            <td>7</td>
                            <td>8</td>
                            <td>9</td>
                        </tr>
                        <tr>
                            <td>
                                <input type="button" class="bt" onClick={()=>alpha('०')} value="०" />
                            </td>
                            <td>
                                <input type="button" class="bt" onClick={()=>alpha('१')} value="१" />
                            </td>
                            <td>
                                <input type="button" class="bt" onClick={()=>alpha('२')} value="२" />
                            </td>
                            <td>
                                <input type="button" class="bt" onClick={()=>alpha('३')} value="३" />
                            </td>
                            <td>
                                <input type="button" class="bt" onClick={()=>alpha('४')} value="४" />
                            </td>
                            <td>
                                <input type="button" class="bt" onClick={()=>alpha('५')} value="५" />
                            </td>
                            <td>
                                <input type="button" class="bt" onClick={()=>alpha('६')} value="६" />
                            </td>
                            <td>
                                <input type="button" class="bt" onClick={()=>alpha('७')} value="७" />
                            </td>
                            <td>
                                <input type="button" class="bt" onClick={()=>alpha('८')} value="८" />
                            </td>
                            <td>
                                <input type="button" class="bt" onClick={()=>alpha('९')} value="९" />
                            </td>
                        </tr>
                    </tbody>
                </table>
                <table class="tab-kb">
                    <tbody>
                        <tr class="pt">
                            <td colspan="2">candra</td>
                            <td colspan="2">short</td>
                        </tr>
                        <tr class="arial">
                            <td>e</td>
                            <td>o</td>
                            <td>e</td>
                            <td>o</td>
                        </tr>
                        <tr>
                            <td>
                                <input type="button" class="bt" onClick={()=>alpha('ऍ')} value="ऍ" />
                            </td>
                            <td>
                                <input type="button" class="bt" onClick={()=>alpha('ऑ')} value="ऑ" />
                            </td>
                            <td>
                                <input type="button" class="bt" onClick={()=>alpha('ऎ')} value="ऎ" />
                            </td>
                            <td>
                                <input type="button" class="bt" onClick={()=>alpha('ऒ')} value="ऒ" />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <input type="button" class="bt" onClick={()=>alpha('')} value="ॅ" />
                            </td>
                            <td>
                                <input type="button" class="bt" onClick={()=>alpha('')} value="ॉ" />
                            </td>
                            <td>
                                <input type="button" class="bt" onClick={()=>alpha('')} value="ॆ" />
                            </td>
                            <td>
                                <input type="button" class="bt" onClick={()=>alpha('')} value="ॊ" />
                            </td>
                        </tr>
                    </tbody>
                </table>
            </td>
          </tr>
          </tbody>
      </table>
      </div>
  );
}

export default LanguageTranslator;
