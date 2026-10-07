import { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonItem, IonInput, IonButton, IonText } from '@ionic/react';

 const Tab3: React.FC = () => {
  

  const [a, setA] = useState<string>('');
  const [b, setB] = useState<string>('');
  const [c, setC] = useState<string>('');
  const [resultado, setResultado] = useState<string[]>([]);

  // Calcula x = (-b ± √(b² - 4ac)) / 2a
  const calcular = () => {
    const numA = Number(a);
    const numB = Number(b);
    const numC = Number(c);

    // Validar que los tres campos tengan número
    if (a === '' || b === '' || c === '' || isNaN(numA) || isNaN(numB) || isNaN(numC)) {
      setResultado(['Ingresa los 3 números (A, B y C).']);
      return;
    }

    // Si A es 0 no es una ecuación cuadrática
    if (numA === 0) {
      setResultado(['A no puede ser 0.']);
      return;
    }

    // Discriminante: b² - 4ac
    const discriminante = numB * numB - 4 * numA * numC;

    // Discriminante negativo: no hay raíces reales
    if (discriminante < 0) {
      setResultado([`Discriminante = ${discriminante}`, 'No tiene solución en los números reales.']);
      return;
    }

    // Las dos soluciones: una con + y otra con -
    const raiz = Math.sqrt(discriminante);
    const x1 = (-numB + raiz) / (2 * numA);
    const x2 = (-numB - raiz) / (2 * numA);

    setResultado([`Discriminante = ${discriminante}`, `x1 = ${x1}`, `x2 = ${x2}`]);
  };

   return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Fórmula general</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className="ion-padding">
        {/* Tres campos: A, B y C */}
        <IonItem>
          <IonInput label="A" labelPlacement="floating" type="number" value={a}
            onIonInput={(e) => setA(e.detail.value ?? '')} />
        </IonItem>
        <IonItem>
          <IonInput label="B" labelPlacement="floating" type="number" value={b}
            onIonInput={(e) => setB(e.detail.value ?? '')} />
        </IonItem>
        <IonItem>
          <IonInput label="C" labelPlacement="floating" type="number" value={c}
            onIonInput={(e) => setC(e.detail.value ?? '')} />
        </IonItem>
        <IonButton expand="block" className="ion-margin-top" onClick={calcular}>
          Calcular
        </IonButton>
        {/* Muestra cada línea del resultado */}
        {resultado.map((linea, index) => (
          <IonText key={index}>
            <h3>{linea}</h3>
          </IonText>
        ))}
      </IonContent>
    </IonPage>
  );

  };

export default Tab3;
