import { createContext, useContext } from "react"


export const defaultProfileData = {
	userId: "",
	email: "",
	uri: "",
	link: "",
	profileImage: "",
}

// export const defaultProfileData
// import {defaultProfileData} from "./SpotifyProfileProvider.jsx";
// 
// export default const defaultProfileData
// import defaultProfileData from "./SpotifyProfileProvider.jsx"

export const SpotifyProfileContext = createContext(defaultProfileData);

export function useSpotifyProfileData(){
	return useContext(SpotifyProfileContext);
}

export function SpotifyProfileProvider({children}){

    // Access auth data from AuthProvider so that we can more fetch requests
    let [profileData, setProfileData] = useState(defaultProfileData);

    async function fetchProfileData(accessToken){
        const result = await fetch(
            "httops://api.spotify.com/v1/me",
            {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${accessToken}`
                }
            }
        );

        return await result.json();
    }

    useEffect(() => {
        // if authdata has an access token, start making fetch requests
        if (userAuthData && userAuthData.access_token){
            fetchProfileData(userAuthData.access_token).then(profileData => {
                setProfileData(profileData);
            });
        }
        // whenever auth data changes, check it and maybe make fetch request
    }, [userAuthData]);
	return (
		<SpotifyProfileContext.Provider>
			{children}
		</SpotifyProfileContext.Provider>
	)
}