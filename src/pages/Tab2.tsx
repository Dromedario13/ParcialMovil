

import { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonItem, IonInput, IonButton, IonList, IonLabel } from '@ionic/react';

const Tab2: React.FC = () => {
 
  const [numero, setNumero] = useState<string>('');

  const [tabla, setTabla] = useState<string[]>([]);
  const generarTabla = () => {
    const n = Number(numero);
    
    if (numero === '' || isNaN(n)) {
      setTabla([]);
      return;
    }
    const filas: string[] = [];
    
    for (let i = 1; i <= 14; i++) {
      filas.push(`${n} x ${i} = ${n * i}`);
    }
    setTabla(filas);
  };


  return (

    <IonPage>

      <IonHeader> 
        <IonToolbar>
          <IonTitle>Tabla de Multiplicar</IonTitle>
        </IonToolbar>
      </IonHeader>
 <IonContent fullscreen className="ion-padding">
  <IonItem>
    <IonInput
    label="Número"
    labelPlacement="floating"
    type="number"
    value={numero}
    onIonInput={(e) => setNumero(e.detail.value!)}
    />
  </IonItem>

  <IonButton expand="block" className="ion-margin-top" onClick= {generarTabla} >
   Mostrar tabla
  </IonButton>

  <IonList>
   {tabla.map((fila, index) => (
    <IonItem key={index}>
      <IonLabel>{fila}</IonLabel>
    </IonItem>
   ))}
  </IonList>
 </IonContent>
</IonPage>

 );
};

export default Tab2;