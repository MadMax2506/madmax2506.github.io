import { useLanguageContext } from 'context/LanguageContext/LanguageContext';
import { TextKey } from 'types';
import { TextKeyArg } from 'context/LanguageContext/language.types';

type TProps = {
  /**
   * {@link TextKey} which will be displayed
   */
  textKey: TextKey;
  /**
   * The HTML tag to use for the translation
   * @default span
   */
  as?: keyof JSX.IntrinsicElements;
  /**
   * If true the {@link TProps#textKey textKey} contains html tags
   */
  html?: boolean;
  /**
   * {@link TextKeyArg} for the translation
   */
  args?: TextKeyArg[];
};

/**
 * Display a translated {@link TextKey}
 */
export const T = (props: TProps): JSX.Element => {
  const { textKey, as: CustomTag = 'span', html = false, args } = props;

  const { t } = useLanguageContext();

  const translatedText = t(textKey, args);

  if (html) return <CustomTag dangerouslySetInnerHTML={{ __html: translatedText }} />;
  return <CustomTag>{translatedText}</CustomTag>;
};
