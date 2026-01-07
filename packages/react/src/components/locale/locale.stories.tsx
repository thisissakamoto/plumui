import type { Story, StoryDefault } from "@ladle/react";
import { Locale, type LocaleProps } from ".";

export default {
  title: "Locale",
  argTypes: {
    locale: {
      control: {type: "select"},
      options: [
        "en-US",    // English (United States)
        "en-GB",    // English (United Kingdom)
        "en-CA",    // English (Canada)
        "en-AU",    // English (Australia)
        "en-IN",    // English (India)
        "en-IE",    // English (Ireland)
        "en-NZ",    // English (New Zealand)
        "en-ZA",    // English (South Africa)

        "es-ES",    // Spanish (Spain)
        "es-MX",    // Spanish (Mexico)
        "es-AR",    // Spanish (Argentina)
        "es-CO",    // Spanish (Colombia)
        "es-CL",    // Spanish (Chile)
        "es-US",    // Spanish (United States)

        "fr-FR",    // French (France)
        "fr-CA",    // French (Canada)
        "fr-BE",    // French (Belgium)
        "fr-CH",    // French (Switzerland)

        "de-DE",    // German (Germany)
        "de-AT",    // German (Austria)
        "de-CH",    // German (Switzerland)

        "zh-CN",    // Chinese (Simplified, China)
        "zh-TW",    // Chinese (Traditional, Taiwan)
        "zh-HK",    // Chinese (Traditional, Hong Kong)
        "zh-SG",    // Chinese (Simplified, Singapore)

        "pt-BR",    // Portuguese (Brazil)
        "pt-PT",    // Portuguese (Portugal)

        "ar-SA",    // Arabic (Saudi Arabia)
        "ar-EG",    // Arabic (Egypt)
        "ar-AE",    // Arabic (UAE)
        "ar-MA",    // Arabic (Morocco)

        "ja-JP",    // Japanese (Japan)
        "ko-KR",    // Korean (South Korea)
        "ru-RU",    // Russian (Russia)
        "it-IT",    // Italian (Italy)
        "nl-NL",    // Dutch (Netherlands)
        "nl-BE",    // Dutch (Belgium)
        "pl-PL",    // Polish (Poland)
        "tr-TR",    // Turkish (Turkey)
        "sv-SE",    // Swedish (Sweden)
        "da-DK",    // Danish (Denmark)
        "fi-FI",    // Finnish (Finland)
        "no-NO",    // Norwegian (Norway)
        "hi-IN",    // Hindi (India)


        "fr-LU",    // French (Luxembourg)
        "de-LU",    // German (Luxembourg)
        "en-PH",    // English (Philippines)
        "en-MY",    // English (Malaysia)
        "en-SG",    // English (Singapore)
        "es-PE",    // Spanish (Peru)
        "es-VE",    // Spanish (Venezuela)
        "es-CR",    // Spanish (Costa Rica)
        "pt-AO",    // Portuguese (Angola)
        "pt-MZ",    // Portuguese (Mozambique)

        "nb-NO",    // Norwegian Bokmål (Norway)
        "nn-NO",    // Norwegian Nynorsk (Norway)
        "is-IS",    // Icelandic (Iceland)

        "cs-CZ",    // Czech (Czech Republic)
        "sk-SK",    // Slovak (Slovakia)
        "hu-HU",    // Hungarian (Hungary)
        "ro-RO",    // Romanian (Romania)
        "bg-BG",    // Bulgarian (Bulgaria)
        "el-GR",    // Greek (Greece)
        "hr-HR",    // Croatian (Croatia)
        "sr-RS",    // Serbian (Serbia)
        "uk-UA",    // Ukrainian (Ukraine)

        "th-TH",    // Thai (Thailand)
        "vi-VN",    // Vietnamese (Vietnam)
        "id-ID",    // Indonesian (Indonesia)
        "ms-MY",    // Malay (Malaysia)
        "fil-PH",   // Filipino (Philippines)
        "bn-BD",    // Bengali (Bangladesh)
        "bn-IN",    // Bengali (India)
        "pa-IN",    // Punjabi (India)
        "ta-IN",    // Tamil (India)
        "te-IN",    // Telugu (India)
        "mr-IN",    // Marathi (India)
        "gu-IN",    // Gujarati (India)
        "kn-IN",    // Kannada (India)
        "ml-IN",    // Malayalam (India)
        "or-IN",    // Odia (India)

        "sw-KE",    // Swahili (Kenya)
        "sw-TZ",    // Swahili (Tanzania)
        "am-ET",    // Amharic (Ethiopia)
        "ha-NG",    // Hausa (Nigeria)
        "yo-NG",    // Yoruba (Nigeria)
        "ig-NG",    // Igbo (Nigeria)
        "zu-ZA",    // Zulu (South Africa)
        "xh-ZA",    // Xhosa (South Africa)
        "af-ZA",    // Afrikaans (South Africa)

        "fa-IR",    // Persian (Iran)
        "ur-PK",    // Urdu (Pakistan)
        "ps-AF",    // Pashto (Afghanistan)
        "he-IL",    // Hebrew (Israel)
        "ar-IL",    // Arabic (Israel)

        "ca-ES",    // Catalan (Spain)
        "eu-ES",    // Basque (Spain)
        "gl-ES",    // Galician (Spain)
        "cy-GB",    // Welsh (United Kingdom)
        "gd-GB",    // Scottish Gaelic (United Kingdom)
        "ga-IE",    // Irish (Ireland)
        "fy-NL",    // Frisian (Netherlands)
        "lb-LU",    // Luxembourgish (Luxembourg)
        "rm-CH",    // Romansh (Switzerland)

      ]
    },
  },
  args: {
    locale: 'en-US',
  }
} satisfies StoryDefault;

export const Base: Story<LocaleProps> = (args) => {
  return (
    <Locale {...args}>
      <p>Current date: {new Date().toLocaleDateString()}</p>
      <p>Current time: {new Date().toLocaleTimeString()}</p>
      <p>Number formatting: {1234567.89.toLocaleString()}</p>
      <p>Currency formatting: {1234567.89.toLocaleString(undefined, { style: 'currency', currency: 'EUR' })}</p>
    </Locale>
  );
};
