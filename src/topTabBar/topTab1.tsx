import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './topTab1.css';

const topTab1: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>TopTab 1</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <IonHeader collapse="condense">
                    <IonToolbar>
                        <IonTitle size="large">TopTab 1</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <ExploreContainer name="TopTab1 page" />
            </IonContent>
        </IonPage>
    );
};

export default topTab1;
