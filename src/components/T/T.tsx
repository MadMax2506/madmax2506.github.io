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
   * {@link TextKeyArg} for the translation
   */
  args?: TextKeyArg[];
};

/**
 * Display a translated {@link TextKey}
 */
export const T = (props: TProps): JSX.Element => {
  const { textKey, as: CustomTag = 'span', args } = props;

  const { t } = useLanguageContext();

  return <CustomTag>{t(textKey, args)}</CustomTag>;
};
