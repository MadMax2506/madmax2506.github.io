import { TextKeyArg, useTranslationContext } from 'context/TranslationContext/TranslationContext';
import { TextKey } from 'types';

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

  const { t } = useTranslationContext();

  return <CustomTag>{t(textKey, args)}</CustomTag>;
};
