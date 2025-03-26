import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './topTab2.css';

const topTab2: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>TopTab 2</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <IonHeader collapse="condense">
                    <IonToolbar>
                        <IonTitle size="large">TopTab 2</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <ExploreContainer name="TopTab2 page" />
            </IonContent>
        </IonPage>
    );
};

export default topTab2;
