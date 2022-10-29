import React from 'react'
import './ReloadPrompt.css'

import { useRegisterSW } from 'virtual:pwa-register/react'
import { Alert, Box, Button, Group } from '@mantine/core'

function ReloadPrompt() {
    const {
        offlineReady: [offlineReady, setOfflineReady],
        needRefresh: [needRefresh, setNeedRefresh],
        updateServiceWorker,
    } = useRegisterSW({
        onRegistered(r) {
            // eslint-disable-next-line prefer-template
            console.log('SW Registered: ' + r)
        },
        onRegisterError(error) {
            console.log('SW registration error', error)
        },
    })

    const close = () => {
        setOfflineReady(false)
        setNeedRefresh(false)
    }


    return (
        <Box sx={{
            position: "fixed",
            bottom: 10,
            right: 10,
        }}
        >
            {(offlineReady || needRefresh)
                &&
                <Alert
                    title={
                        offlineReady ? "App ready to work offline" :
                            "New content available, click on reload button to update."
                    }
                    icon={<i className="bi bi-arrow-clockwise"></i>}
                >
                    <Group>
                        {needRefresh && <Button variant="outline" onClick={() => updateServiceWorker(true)}>Reload</Button>}
                        <Button variant="outline" onClick={() => close()}>Close</Button>
                    </Group>

                </Alert>
            }
        </Box>
    )

    // return (
    //     <div className="ReloadPrompt-container">
    //         {(offlineReady || needRefresh)
    //             && <div className="ReloadPrompt-toast">
    //                 <div className="ReloadPrompt-message">
    //                     {offlineReady
    //                         ? <span>App ready to work offline</span>
    //                         : <span>New content available, click on reload button to update.</span>
    //                     }
    //                 </div>
    //                 {needRefresh && <button className="ReloadPrompt-toast-button" onClick={() => updateServiceWorker(true)}>Reload</button>}
    //                 <button className="ReloadPrompt-toast-button" onClick={() => close()}>Close</button>
    //             </div>
    //         }
    //     </div>
    // )
}

export default ReloadPrompt