import React from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import { Ionicons } from '@expo/vector-icons';


export default function Chartre() {
  return (
    <ScrollView>
                          <TouchableOpacity onPress={() => navigation.navigate('Home')} style={{height: '15%', width: '10%', justifyContent: 'center', alignItems: 'center', position: 'absolute', zIndex: 10}}>
<Ionicons name="ios-arrow-back" style={{fontSize: 40}}/>
</TouchableOpacity>
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>
          Conditions d’utilisations relative à la location de trottinettes
          électriques en libre-service
        </Text>
      </View>
      <View style={{ margin: 20 }}>
        <Text>
          Pour une transparence maximale, la présente charte est rendue publique
          par une parution en fin de téléchargement de l’application sur un
          smartphone et peut-être reconsulter à tout moment dans les réglages de
          l’application. Si vous n’acceptez pas les conditions d’utilisations,
          vous ne pourrez pas utiliser nos services. Vous pouvez à tout moment
          choisir de cesser d’utiliser nos services. Cette Charte pourra être
          mise à jour régulièrement pour s’adapter à un contexte en constante
          évolution et prendre en compte les aspirations des habitants de
          Saint-Germain-en-Laye. Noter que la ville de Saint-Germain-en-Laye
          peut également imposer des conditions générales supplémentaires que
          vous devez connaître lorsque vous utilisez nos services. L’Utilisateur
          de la trottinette électrique après utilisation est crédité de
          l’emprunt jusqu’à la remise en place de la trottinette sur un socle.
          Pour tout renseignement, veuillez-nous contacté sur
          brunoc1702@gmail.com
        </Text>
      </View>
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>
          Conditions d’utilisations de la trottinettes électriques
        </Text>
      </View>

      <View style={{ margin: 20 }}>
        <Text>
          - L’Utilisateur des trottinettes électriques engage tout sa
          responsabilité dans l’utilisation d’un casque. Tout port de casque (à
          votre taille et ajuster) lors du déplacement en trottinettes est
          obligatoire. Un casque vous est proposé d’office, mais libre à vous de
          le prendre si vous disposée du votre.
        </Text>
      </View>

      <View style={{ margin: 20 }}>
        <Text>
          - Les trottinettes ne doivent pas constituer un obstacle, encore moins
          un danger. Leur usage doit se faire en toute sécurité́, pour tous les
          usager.ère.s de l’espace public.
        </Text>
      </View>

      <View style={{ margin: 20 }}>
        <Text>
          - Afin d’assurer la sécurité́ des piéton.ne.s il est interdit de se
          déplacé sur les trottoirs, sous peine d’une verbalisation par les
          forces de l’ordre. Nous nous désengageons de toutes responsabilités.
          En effet, ce nouveau service de trottinettes électriques doit se
          déployer dans des conditions respectueuses des autres usages de
          l’espace public. Des voies cyclables et la route sont adaptés à ce
          type de déplacement
        </Text>
      </View>

      <View style={{ margin: 20 }}>
        <Text>- La vitesse maximale autorisé est de 25km.</Text>
      </View>

      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>D’autres règles essentielles</Text>
      </View>
      <View style={{ margin: 20 }}>
        <Text>
          {" "}
          - Avoir atteint l’âge légal pour conclure des contrats. - Être le seul
          utilisateur de nos services
        </Text>
      </View>
      <View style={{ margin: 20 }}>
        <Text>
          - De pas avoir consommé de l’alcool, drogue et autres substances
        </Text>
      </View>
      <View style={{ margin: 20 }}>
        <Text>
          - Il est interdit d’emmener les trottinettes hors de la ville, de les
          faire traverser de grandes quantités d’eau ou encore dans des chemins
          boueux et avec des gravins.
        </Text>
      </View>
      <View style={{ margin: 20 }}>
        <Text>
          - Il est interdit de faire des manœuvres et figures périlleuses et
          dangereuse
        </Text>
      </View>

      <View style={{ margin: 20 }}>
        <Text>- Connaître législation, lois et règlementations en vigueur</Text>
      </View>

      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>
          La règlementation en vigueur pour les usager.ère.s
        </Text>
      </View>

      <View style={{ margin: 20 }}>
        <Text>- Le code de la route. </Text>
      </View>

      <View style={{ margin: 20 }}>
        <Text>
          - Le PAVE (Plan de mise en accessibilité́ de la voirie et des espaces
          publics) qui rappelle la règlementation nationale en faveur des
          personnes à mobilité́ réduite. Le PAVE insiste notamment sur le respect
          de la largeur minimale du cheminement de 1,40 mètre libre de tout
          obstacle éventuel.{" "}
        </Text>
      </View>

      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>
          Responsabilité concernant l’application et son utilisation
        </Text>
      </View>

      <View style={{ margin: 20 }}>
        <Text>
          - L’utilisateur est responsable des risques liés à l’utilisation de
          son identifiant de connexion et de son mot de passe.
        </Text>
      </View>

      <View style={{ margin: 20 }}>
        <Text>
          - Le mot de passe de l’Utilisateur doit rester secret. En cas de
          divulgation de mot de passe, l’éditeur décline toute responsabilité.
        </Text>
      </View>

      <View style={{ margin: 20 }}>
        <Text>
          - L’utilisateur assume l’entière responsabilité de l’utilisation qu’il
          fait des informations et contenus présents sur la charte d’utilisation
          présente sur l’application{" "}
        </Text>
      </View>

      <View style={{ margin: 20 }}>
        <Text>
          - Tout usage de l’application par l’utilisateur ayant directement ou
          indirectement pour conséquence des dommages doit faire l’objet d’une
          indemnisation au profit de l’application.{" "}
        </Text>
      </View>

      <View style={{ margin: 20 }}>
        <Text>
          - Le membre s’engage à tenir des propos respectueux des autres et de
          la loi et accepte que ces publications soient modérées ou refusées par
          l’Éditeur, sans obligation de justification.{" "}
        </Text>
      </View>

      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>Responsabilité de manière générale</Text>
      </View>

      <View style={{ margin: 20 }}>
        <Text>
          - Tout dysfonctionnement du serveur ou du réseau ne peut engager la
          responsabilité de l’Éditeur.
        </Text>
      </View>

      <View style={{ margin: 20 }}>
        <Text>
          - De même, la responsabilité de l’application ne peut être engagée en
          cas de force majeure ou du fait imprévisible et insurmontable d’un
          tiers.
        </Text>
      </View>

      <View style={{ margin: 20 }}>
        <Text>
          - L’application s’engage à mettre en œuvre tous les moyens nécessaires
          pour garantir la sécurité et la confidentialité des données.
          Toutefois, il n’apporte pas une garantie de sécurité totale.
        </Text>
      </View>

      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>En cas de problème</Text>
      </View>

      <View style={{ margin: 20 }}>
        <Text>
        Si vous faite face à un accident ou dommage, il vous incombe de nous signaler dès que possible tout
accident, collision, dommage, blessure personnelle, vol ou perte.
Les utilisateur.rice.s qui louent des trottinettes en libre-service sont responsables de leur conduite,
de leur stationnement et de tout dommage qu’ils pourraient causer à autrui, notamment en cas
d’accident corporel de la circulation ou de circulation sur des espaces publics interdits ou
règlementés. 
        </Text>
      </View>

      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>Accès au service </Text>
      </View>

      <View style={{ margin: 20 }}>
        <Text>
        Vous avez besoin d’un compte pour utiliser nos services, nécessitant une carte de crédit ou de débit
valide. Ce que vous nous communiqué doit être vrai
L’Utilisateur de l’application à accès aux services suivants : 
        </Text>
      </View>

      <View style={{ margin: 20 }}>
        <Text>
            - Louer une trottinette par carte bancaire
        </Text>
      </View>

      <View style={{ margin: 20 }}>
        <Text>
            - Aux localisations des socle de disposition des trottinettes 
        </Text>
      </View>

      <View style={{ margin: 20 }}>
        <Text>
            - Réserver une trottinette
        </Text>
      </View>

      <View style={{ margin: 20 }}>
        <Text>
            - Visibilité du pourcentage de batterie restante de la trottinette
        </Text>
      </View>

      <View style={{ margin: 20 }}>
        <Text>
            - GPS intégré
        </Text>
      </View>

      <View style={{ margin: 20 }}>
        <Text>
            L’utilisation de l’application doit être en connexion avec un réseau
        </Text>
      </View>

      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>2 versions de l’application : </Text>
      </View>

      <View style={{ margin: 20 }}>
        <Text>
         - Gratuite, proposant les services de bases
        </Text>
      </View>

      <View style={{ margin: 20 }}>
        <Text>
            - Payante, proposant les services de bases, des services supplémentaires et retirant toutes les
publicités
        </Text>
      </View>

      <View style={{ margin: 20 }}>
        <Text>
        L’application et ses différents services peuvent être interrompus ou suspendus par l’Éditeur,
notamment à l’occasion d’une maintenance, sans obligation de préavis ou de justification.
        </Text>
      </View>

      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>Qui nous sommes</Text>
      </View>

      <View style={{ margin: 20 }}>
        <Text>
        Trott&Move, une équipe de passionnés de la trottinette électrique et des nouvelles méthodes de
déplacement électriques.
        </Text>
      </View>

<View style={{ margin: 20 }}>
        <Text>
        Notre passion, notre dévouement, notre expertise ainsi que notre altruisme sont à vos services pour
vous aider à trouver la meilleure trottinette électrique pour vous.
        </Text>
      </View>

      <View style={{ margin: 20 }}>
        <Text>
        L’application Trott&Move est édité par 5 étudiants de L’IUT, domicilié à Mantes-La-Jolie.
        </Text>
      </View>


      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>Quel est notre but ?</Text>
      </View>

      <View style={{ margin: 20 }}>
        <Text>
        Notre but est de vous aider à vous déplacer dans la ville de Saint-Germain-en-Laye de manière simple
et rapide, en limitant la pollution.
        </Text>
      </View>


      <View style={{ margin: 20 }}>
        <Text>
        Nous vous fournissons en plus des trottinettes électriques, un casque de sécurité.
        </Text>
      </View>

      <View style={{ margin: 20 }}>
        <Text>
        Vous faire gagner du temps et de l’argent en vous proposons une trottinette motorisée, performante
et simple, qui facilitera tous vos déplacements.
        </Text>
      </View>




      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>1. Politique de confidentialité</Text>
      </View>

      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>Collecte des renseignements personnels</Text>
      </View>

      <View style={{ margin: 20 }}>
        <Text>
        Nous collectons les renseignements suivants :
        </Text>
      </View>

      <View style={{ margin: 20 }}>
        <Text>
        Les renseignements personnels que nous collectons sont recueillis au travers de formulaires
et grâce à l’interactivité établie entre vous et notre application
        </Text>
      </View>


      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>Formulaires et interactivité</Text>
      </View>

      <View style={{ margin: 20 }}>
        <Text>
        Des renseignements personnels sont demandés et collectés :
        </Text>
      </View>

      <View style={{ margin: 20 }}>
        <Text>
        Nom
        </Text>
      </View>

      <View style={{ margin: 20 }}>
        <Text>
        Prenom
        </Text>
      </View>

      <View style={{ margin: 20 }}>
        <Text>
        Adresse
        </Text>
      </View>

      <View style={{ margin: 20 }}>
        <Text>
        Accès au coordonnées GPS
        </Text>
      </View>

      <View style={{ margin: 20 }}>
        <Text>
        Numéro de téléphone
        </Text>
      </View>

      <View style={{ margin: 20 }}>
        <Text>
        Donnée carte bancaire
        </Text>
      </View>

      <View style={{ margin: 20 }}>
        <Text>
        Un identifiant et mot de passe sont également requis
        </Text>
      </View>

      <View style={{ margin: 20 }}>
        <Text>
        Nous utilisons les renseignements ainsi collectés pour les finalités suivantes :
        </Text>
      </View>

      <View style={{ margin: 20 }}>
        <Text>
        - Commentaires
        </Text>
      </View>

      <View style={{ margin: 20 }}>
        <Text>
        - Toutes procédures financières effectuées
        </Text>
      </View>

      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>Droit d’opposition et de retrait</Text>
      </View>

      <View style={{ margin: 20 }}>
        <Text>
        Nous nous engageons à vous offrir un droit d’opposition et de retrait quant à vos
renseignements personnels.
        </Text>
      </View>

      <View style={{ margin: 20 }}>
        <Text>
        Le droit d’opposition s’entend comme étant la possibilité offerte aux internautes de refuser
que leurs renseignements personnels soient utilisés à certaines fins mentionnées lors de la
collecte.
        </Text>
      </View>

      <View style={{ margin: 20 }}>
        <Text>
        Le droit de retrait s’entend comme étant la possibilité offerte aux internautes de demander
à ce que leurs renseignements personnels ne figurent plus, par exemple, dans une liste de
diffusion.
        </Text>
      </View>

      <View style={{ margin: 20 }}>
        <Text>
        Pour pouvoir exercer ces droits, vous pouvez :
        </Text>
      </View>

      <View style={{ margin: 20 }}>
        <Text>
        Courriel : brunoc1702@gmail.com
        </Text>
      </View>

      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>Droit d’accès</Text>
      </View>

      <View style={{ margin: 20 }}>
        <Text>
        Nous nous engageons à reconnaître un droit d’accès et de rectification aux personnes
concernées désireuses de consulter, modifier, voire radier les informations les concernant.
        </Text>
      </View>

      <View style={{ margin: 20 }}>
        <Text>
        Courriel : brunoc1702@gmail.com
        </Text>
      </View>

      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>Sécurité</Text>
      </View>

      <View style={{ margin: 20 }}>
        <Text>
        Les renseignements personnels que nous collectons sont conservés dans un environnement
sécurisé. Les personnes travaillant pour nous sont tenues de respecter la confidentialité de
vos informations.
        </Text>
      </View>
      <View style={{ margin: 20 }}>
        <Text>
        Pour assurer la sécurité de vos renseignements personnels, nous avons recours aux mesures
suivantes :
        </Text>
      </View>
      <View style={{ margin: 20 }}>
        <Text>
        - Sauvegarde informatique
        </Text>
      </View>

      <View style={{ margin: 20 }}>
        <Text>
        Nous nous engageons à maintenir un haut degré de confidentialité en intégrant les dernières
innovations technologiques permettant d’assurer la confidentialité de vos transactions.
Toutefois, comme aucun mécanisme n’offre une sécurité maximale, une part de risque est
toujours présente lorsque l’on utilise Internet pour transmettre des renseignements
personnels.
        </Text>
      </View>


      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>Nos engagements</Text>
      </View>

      <View style={{ margin: 20 }}>
        <Text>
        Mise en place
        </Text>
      </View>

      <View style={{ margin: 20 }}>
        <Text>
        Pour accompagner au mieux ces nouveaux dispositifs de mobilité, des solutions spécifiques
de stationnement sont proposées par l’entreprise Trott&Move, permettant d’assurer un
maillage dense du territoire. Le stationnement des trottinettes électriques sur socle après
utilisation est obligatoire sur ces emplacements de stationnement, tant pour la prise du
véhicule que pour sa dépose, et ne doit en aucun cas gêner la circulation des piétons. Dans
le cas inverse, une verbalisation des trottinettes et une mise en fourrière peut être
appliquées. 
        </Text>
      </View>

      <View style={{ margin: 20 }}>
        <Text>
        Les opérateurs s’engagent à faire en sorte que les usager.ère.s stationnent leur trottinette,
une fois la course terminée, dans des emplacements dûment identifiés et spécifiés, pour éviter toute gêne qui pourrait être causée sur les trottoirs et géner la circulation des
piéton.ne.s. 
        </Text>
      </View>

      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>Règlementation relative à la qualité des trottinettes électriques et à leurs conditions de
location :</Text>
      </View>

      <View style={{ margin: 20 }}>
        <Text>
        - Les opérateurs doivent proposer un matériel fiable, sécurisé et de qualité aux
utilisateur.rice.s. Ils doivent ainsi se conformer aux normes françaises et
européennes de référence en matière d’équipements et de sécurité des trottinettes
(information et notice de sécurité rédigées en langue française, éclairage,
signalisation sonore et visuelle, freinage...). Ils doivent être en mesure de fournir les
homologations correspondantes aux services de contrôle. 
        </Text>
      </View>

      <View style={{ margin: 20 }}>
        <Text>
        - Les opérateurs veillent à minimiser la pollution sonore générée par les engins, et
particulièrement la nuit. 
        </Text>
      </View>

      <View style={{ margin: 20 }}>
        <Text>
        - Les opérateurs doivent inciter les usager.ère.s au port du casque et à communiquer
sur l’importance de faire attention aux piéton.ne.s et notamment aux personnes les
plus fragiles : personnes âgées, personnes avec des poussettes, enfants, personnes
en situation de handicap. 
        </Text>
      </View>

      <View style={{ margin: 20 }}>
        <Text>
        - Les opérateurs devront obtenir de la part de chaque utilisateur.rice.s une attestation
sur l’honneur comme quoi ils sont majeurs et qu’ils ont souscrit une assurance
personnelle en responsabilité civile. 
        </Text>
      </View>

      <View style={{ margin: 20 }}>
        <Text>
        - Ils doivent s’assurer également de respecter la protection de la confidentialité de
leurs données personnelles, à la fois au moment de la location et pendant la durée
du trajet. 
        </Text>
      </View>

      <View style={{ margin: 20 }}>
        <Text>
        - Les opérateurs sont responsables des défaillances techniques de leurs équipements
entraînant des accidents, des dégâts ou des dommages. Les opérateurs souscrivent
des polices d’assurance spécifiques pour couvrir de tels risques. 
        </Text>
      </View>

      <View style={{ margin: 20 }}>
        <Text>
       - Les opérateurs s’engagent à mettre en place un service de suivi en langue française
des réclamations des usagers pour tous litiges mettant en cause le fonctionnement
de leur service (litiges financiers ou accidentels). 
        </Text>
      </View>

      <View style={{ margin: 20 }}>
        <Text>
        - Engagements des opérateurs à mettre en place d’un dispositif de maintenance et de
régulation 
        </Text>
      </View>

      <View style={{ margin: 20 }}>
        <Text>
        - Les opérateurs s’engagent à mettre en place un dispositif de maintenance et de
régulation afin d’éviter toute surconcentration de trottinettes stationnées ou de
trottinettes dégradées sur la voie publique. 
        </Text>
      </View>

      <View style={{ margin: 20 }}>
        <Text>
        - Les opérateurs informeront la Ville des dispositions prises et avec quelle fréquence,
pour veiller au maintien en bon état de marche des trottinettes. 
        </Text>
      </View>

      <View style={{ margin: 20 }}>
        <Text>
        - Les usager.ère.s devront pouvoir signaler toute trottinette endommagée ou mal
garée via l’application mise en place par l’opérateur. Cela permettra à l’opérateur
d’intervenir et de récupérer l’engin endommagé, évitant ainsi l’encombrement de
l’espace public par des trottinettes détériorées ou rendues à l’état d’épave.
        </Text>
      </View>

      <View style={{ margin: 20 }}>
        <Text>
        - Les opérateurs s’engagent à intervenir dans un délai maximal de douze heures à
compter d’un signalement, lorsqu’une trottinette en stationnement constitue un
danger ou perturbe les flux piétons. Ils rembourseront les frais engagés par la
collectivité, sur une base connue à l’avance, si celle-ci se voit contrainte de déplacer
une trottinette qui n’a pas été récupérée dans les 24h suivant son signalement. 
        </Text>
      </View>

      <View style={{ margin: 20 }}>
        <Text>
       - Les opérateurs s’engagent à récupérer la totalité de leur flotte de trottinettes, dans
un délai de 7 jours, en cas d’interruption d’activité. 
        </Text>
      </View>

      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>Organisation des échanges </Text>
      </View>

      <View style={{ margin: 20 }}>
        <Text>
        - Les opérateurs s’engagent à participer à des réunions régulières avec les services de
la Ville de Saint germain en Laye afin de partager leurs retours d’expérience et
d’évaluer les perspectives d’évolution et de développement de leur offre. Ils mettent
en place une organisation favorisant ce dialogue et permettant de répondre à
d’éventuelles situations d’urgence. Ils contribuent, en lien avec les services de la
Ville, à l’identification d’emplacements de stationnement privilégié. 
        </Text>
      </View>

      <View style={{ margin: 20 }}>
        <Text>
        - La Ville s’engage à organiser une réunion annuelle permettant de faire le bilan et
d’évaluer les perspectives d’évolution et de développement éventuelles.
        </Text>
      </View>

      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>Informations sur l’évolution de l’offre et de la demande</Text>
      </View>

      <View style={{ margin: 20 }}>
        <Text>
        Les opérateurs s’engagent, dans un esprit de coopération durable, à communiquer
régulièrement et préalablement à la Ville de Saint Germain en Laye leurs intentions relatives
au déploiement de leur flotte de trottinettes électriques. Dès signature de la Charte, tous les opérateurs transmettront à la Ville un document récapitulant leurs objectifs trimestriels en
matière de déploiement, qui sera ensuite mis à jour à la fin de chaque trimestre, selon le
calendrier grégorien. Ils s’engagent à communiquer précisément sur leurs nouveaux
déploiements (nombre de trottinettes et zone de service) quinze jours à l’avance. 
        </Text>
      </View>


      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>Données relatives à l’activité des opérateurs :</Text>
      </View>

      <View style={{ margin: 20 }}>
        <Text>
        - Les opérateurs s’engagent à mettre gracieusement à disposition de la Ville, pour son
usage propre, dans le respect de l’application de la réglementation sur la protection
des données personnelles, des données sur le déploiement et l’usage du service,
nécessaires à la meilleure connaissance des flux et à l’optimisation des espaces de
stationnement pour les trottinettes. 
        </Text>
      </View>

      <View style={{ margin: 20 }}>
        <Text>
       - Les opérateurs s’engagent à conserver ces données confidentielles et à réserver leur
usage à l’analyse des phénomènes de flotte libre. La Ville de Saint germain en Laye
s’engage à tout mettre en œuvre pour sécuriser l’intégrité de ces données une fois
enregistrées au sein de son système d’information. 
        </Text>
      </View>

      <View style={{ margin: 20 }}>
        <Text>
        - Le détail des données concernées, ainsi que leurs modalités de communication et de
protection, sont précisés en collaboration avec les opérateurs par un groupe de
travail organisé par la Mairie. Ces éléments font l’objet d’une annexe à la présente
Charte. 
        </Text>
      </View>

      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>Inscription dans une démarche solidaire et durable :</Text>
      </View>

      <View style={{ margin: 20 }}>
        <Text>
        Les opérateurs s’engagent dans une démarche qui sera attentive aux objectifs de la Ville en
termes de résilience et de développement durable. Les opérateurs veilleront, entre autres,
aux points détaillés ci-dessous : 
        </Text>
      </View>

      <View style={{ margin: 20 }}>
        <Text>
       - Véhicules en partage propres n’émettant ni gaz à effet de serre ni particules
polluantes
        </Text>
      </View>

      <View style={{ margin: 20 }}>
        <Text>
       - Conditions de conception, de fabrication et d’assemblage des trottinettes
(matériaux, méthodes, conditions, milieux de production) : éco-compatibilité,
mesures d’insertion
        </Text>
      </View>

      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>Clauses sociales et environnementales</Text>
      </View>

      <View style={{ margin: 20 }}>
        <Text>
        - Réemploi et le recyclage des trottinettes, dans une optique d’économie circulaire
        </Text>
      </View>

      <View style={{ margin: 20 }}>
        <Text>
        - Respect des objectifs de lutte contre la pollution de l’air par les véhicules de
maintenance et de régulation : utilisation des véhicules propres, dans un souci
d’exemplarité 
        </Text>
      </View>

      <View style={{ margin: 20 }}>
        <Text>
        - Approvisionnement progressif en électricité verte ; 
        </Text>
      </View>

      <View style={{ margin: 20 }}>
        <Text>
        - Soumission par les fournisseurs des opérateurs aux règles européennes en vigueur
en matière de retraitement et recyclage des batteries ;
        </Text>
      </View>

      <View style={{ margin: 20 }}>
        <Text>
        - Mise en place d’une démarche RSE (Responsabilité sociale d’entreprise) ;
        </Text>
      </View>

      <View style={{ margin: 20 }}>
        <Text>
        - Responsabilité́ sociale des opérateurs envers les salarié.e.s et prestataires veillant au
fonctionnement du service et notamment à l’enlèvement, à la recharge et à la
disposition des véhicules 
        </Text>
      </View>


      <View style={{ margin: 20 }}>
        <Text>
        - Mise en place de circuits de coopération avec les associations spécialisées dans ce
domaine, sécurité routière, atelier de réparation ;
        </Text>
      </View>

      <View style={{ margin: 20 }}>
        <Text>
        Vous faire gagner du temps et de l’argent en vous proposons une trottinette motorisée, performante
et simple, qui facilitera tous vos déplacements.
        </Text>
      </View>
      <View style={{ margin: 20 }}>
        <Text>
        Respect du règlement local en matière de publicité.
        </Text>
      </View>


      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>Législation</Text>
      </View>

      <View style={{ margin: 20 }}>
        <Text>
        Nous nous engageons à respecter les dispositions législatives énoncées dans :
        </Text>
      </View>

      <View style={{ margin: 20 }}>
        <Text>
        https://www.cnil.fr/fr/reglement-europeen-protection-donnees
        </Text>
      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  titleText: {
    fontSize: 20,
    fontWeight: "bold"
  },
  titleContainer: {
    justifyContent: "center",
    alignItems: "center"
  }
});
