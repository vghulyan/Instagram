import {Easing} from "react-native";

const getHeaderTitle = (route) => {
    const routeName = route.state ? route.state.routes[route.state.index].name : "Home";

    switch (routeName) {
        case "Home":
            return "Home";

        case "Settings":
            return "Settings";

        case "Media":
            return "Media";

        case "Likes":
            return "Likes";

        case "Search":
            return "Search";

        case "Profile":
            return "Profile";
    }
};

const shouldHeaderBeShown = (route) => {
    const routeName = route.state ? route.state.routes[route.state.index].name : "Home";
    switch (routeName) {
        case "Home":
            return false;
    }
};

const config = {
    animation: "spring",
    config: {
        stiffness: 1000,
        damping: 50,
        mass: 3,
        overshootClamping: false,
        restDisplacementThreshold: 0.01,
        restSpeedThreshold: 0.01
    }
};

const closeConfig = {
    animation: "timing",
    config: {
        duration: 500,
        easing: Easing.linear
    }
};


export { getHeaderTitle, shouldHeaderBeShown, config, closeConfig };
