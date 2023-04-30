import { Box, Typography } from '@mui/material';
import { PrivacyPolicyContent } from 'pages/PrivacyPolicy/PrivacyPolicyContent';
import { MailLink } from 'components/MailLink';

export const PrivacyPolicy = (): JSX.Element => {
  return (
    <Box textAlign="center" minHeight="100vh" sx={{ py: 2 }}>
      <Typography variant="h4">Datenschutzerklärung</Typography>
      <Typography>
        Ich, Max Janorschke, nehmen den Schutz Ihrer persönlichen Daten sehr ernst und halten uns strikt an die Regeln
        der Datenschutzgesetze. Die nachfolgende Erklärung gibt Ihnen einen Überblick darüber, welche Art von Daten zu
        welchem Zweck erhoben werden und in welchem Umfang diese Daten Dritten zugänglich gemacht werden.
      </Typography>

      <PrivacyPolicyContent>
        <>Verantwortliche Stelle</>
        <>
          Verantwortliche Stelle im Sinne der Datenschutzgesetze ist Max Janorschke, Weizenweg 20 52134 Herzogenrath,{' '}
          <MailLink email="webmaster@max-janorschke.de" />.
        </>
      </PrivacyPolicyContent>

      <PrivacyPolicyContent deep>
        <>Erhebung und Verarbeitung von Daten</>
        <>
          Wir erheben und speichern automatisch in unseren Server Log Files Informationen, die Ihr Browser an uns
          übermittelt. Dies sind:
          <ul>
            <li>Browsertyp/ -version</li>
            <li>verwendetes Betriebssystem</li>
            <li>Referrer URL (die zuvor besuchte Seite)</li>
            <li>Hostname des zugreifenden Rechners (IP-Adresse)</li>
            <li>Uhrzeit der Serveranfrage</li>
          </ul>
          Diese Daten sind für uns nicht bestimmten Personen zuordenbar. Eine Zusammenführung dieser Daten mit anderen
          Datenquellen wird nicht vorgenommen.
        </>
      </PrivacyPolicyContent>

      <PrivacyPolicyContent>
        <>Cookies</>
        <>
          Wir verwenden auf unserer Seite Cookies, um unseren Internetauftritt benutzerfreundlich zu gestalten und auf
          die Bedürfnisse unserer Besucher abzustimmen. Cookies sind kleine Dateien, die auf Ihrem Rechner abgelegt
          werden und die Ihr Browser speichert. Die meisten der von uns verwendeten Cookies sind so genannte
          "Session-Cookies". Sie werden nach Ende Ihres Besuchs automatisch gelöscht. Cookies richten auf Ihrem Rechner
          keinen Schaden an und enthalten keine Viren.
        </>
      </PrivacyPolicyContent>

      <PrivacyPolicyContent>
        <>Weitergabe von Daten an Dritte</>
        <>Eine Weitergabe Ihrer Daten an Dritte ohne Ihre ausdrückliche Einwilligung erfolgt nicht.</>
      </PrivacyPolicyContent>

      <PrivacyPolicyContent>
        <>Auskunftsrecht</>
        <>
          Sie haben jederzeit das Recht auf Auskunft über die bezüglich Ihrer Person gespeicherten Daten, deren Herkunft
          und Empfänger sowie den Zweck der Datenverarbeitung. Auskunft über die gespeicherten Daten erhalten Sie unter
          der E-Mail-Adresse <MailLink email="webmaster@max-janorschke.de" />.
        </>
      </PrivacyPolicyContent>

      <PrivacyPolicyContent>
        <>Änderung der Datenschutzerklärung</>
        <>
          Wir behalten uns vor, diese Datenschutzerklärung gelegentlich anzupassen, damit sie stets den aktuellen
          rechtlichen Anforderungen entspricht oder um Änderungen unserer Leistungen in der Datenschutzerklärung
          umzusetzen, z. B. bei der Einführung neuer Services. Für Ihren erneuten Besuch gilt dann die neue
          Datenschutzerklärung.
        </>
      </PrivacyPolicyContent>

      <PrivacyPolicyContent>
        <>Kontaktaufnahme</>
        <>
          Wenn Sie Fragen zur Erhebung, Verarbeitung oder Nutzung Ihrer personenbezogenen Daten haben, können Sie uns
          jederzeit kontaktieren. Unsere Kontaktdaten finden Sie im Impressum.
        </>
      </PrivacyPolicyContent>
    </Box>
  );
};
