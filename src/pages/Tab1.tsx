
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonAvatar } from '@ionic/react';
const Tab1: React.FC = () => {

  const nombre = "Daury";
  const apellido = "De La Cruz Ubiera";

  return (

    <IonPage>

      <IonHeader>

        <IonToolbar>

          <IonTitle>Presentación</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent fullscreen className="ion-padding" ion-text-center>
          <IonAvatar style={{ width: '180px', height: '180px', margin: '40px auto 20px' }}>
            <img src="/foto.jpg" alt="Mi foto" />
            </IonAvatar>
          <h1>{nombre} {apellido}</h1>
          <p> Saludos y bienvenido a mi aplicacion soy un estudiante del ITLA </p>
        </IonContent>
        </IonPage>
  );
};

export default Tab1;