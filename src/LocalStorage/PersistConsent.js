import React, {Fragment} from 'react';
import ReactConfirmAlert, { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import { useDispatch, connect} from 'react-redux';
import { GiveConsent, DenyConsent } from './cookieSlice';
import { PersistGate } from 'redux-persist/integration/react';
import App from '../Components/App';
import { persistor } from '../app/store';
import { isMobile } from 'react-device-detect';


const PersistConsent = ({consent, asked}) => {
    debugger;
    let dispatch = useDispatch();

    const giveConsent = () => { 
        console.log("given");
        dispatch(GiveConsent());
    }
    const denyConsent = () => {
        console.log("deny");
        dispatch(DenyConsent());
    }
    const alertButtons = [
        {
            label: 'Accept',
            onClick: giveConsent,
            className: null
        },
        {
            label: 'Deny',
            onClick: denyConsent,
            className: null
        }
    ];

    // Mobile doesn't require cookies
    if (isMobile) {
        return (
            <App />
        )
    }
    // Require accept or deny cookies
    else {
        if (!asked) {
            return (
                <ReactConfirmAlert
                    title="Cookie Policy"
                    message="This site uses cookies in order to save progress. By accepting, you consent to the storing of cookies on your device to save your progress."
                    buttons={alertButtons}
                />
            );
        }
        else if (consent && asked) {
            return (
                <PersistGate persistor={persistor}>
                    <App />
                </PersistGate>
            )
        }
        else if (!consent && asked) {
            return (
                    <App />
            )
        }
    }
  
}

// Connect to store and couple Layout component with currentViewPage store
const getCookieStatus = (appState) => {
    return ({
        consent: appState.cookieConsent.consent,
        asked: appState.cookieConsent.asked
    })

}
export const PersistConsentComponent = connect(getCookieStatus)(PersistConsent)