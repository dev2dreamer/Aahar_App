import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './topTab3.css';

const topTab3: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>TopTab 3</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <IonHeader collapse="condense">
                    <IonToolbar>
                        <IonTitle size="large">TopTab 3</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <ExploreContainer name="TopTab3 page" />
            </IonContent>
        </IonPage>
    );
};

export default topTab3;
