import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";
import { useRouter } from "next/router"

const Code = () => {
    const router = useRouter()
    const route = router.query;
    const code = route.code + "";
    const randomID = (length: number): string => {
        let result = "";
        const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        const charactersLength = characters.length;
        for (let i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    };

    const meeting = async (e: any) => {
        const appID = 393870604;
        const serverSecret = "fc33c9c6f7fb6dd632b9a720c7bce28d";
        const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
            appID, serverSecret, code, randomID(5), randomID(5)
        );
        const zp = ZegoUIKitPrebuilt.create(kitToken);
        zp.joinRoom({
            container: e,
            maxUsers: 4,
            scenario: {
                mode: ZegoUIKitPrebuilt.GroupCall
            },
        })
    }

    return (
        <div ref={meeting} className="w-screen h-screen"></div>
    )
}

export default Code;