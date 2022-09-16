import dynamic from "next/dynamic";

const CloverIIIF = dynamic(() => import("@samvera/clover-iiif"), {
    ssr: false,
});

const customTheme = {
    colors: {
        /**
         * Black and dark grays in a light theme.
         * All must contrast to 4.5 or greater with `secondary`.
         */
        primary: "#38582F",
        primaryMuted: "#38582F",
        primaryAlt: "#38582F",

        /**
         * Key brand color(s).
         * `accent` must contrast to 4.5 or greater with `secondary`.
         */
        accent: "#34811C",
        accentMuted: "#34811C",
        accentAlt: "#34811C",

        /**
         * White and light grays in a light theme.
         * All must must contrast to 4.5 or greater with `primary` and  `accent`.
         */
        secondary: "#FFFFFF",
        secondaryMuted: "#ECEFF1",
        secondaryAlt: "#CFD8DC",
    },
    fonts: {
        sans: "'Avenir', 'Helvetica Neue', sans-serif",
        display: "Optima, Georgia, Arial, sans-serif",
    },
};

const options = {
    // Primary title (Manifest label) for top level canvas.  Defaults to true
    //showTitle: false,

    // IIIF Badge and popover containing options.  Defaults to true
    showIIIFBadge: false,

    // Ignore supplementing canvases by label value that are not for captioning
    //ignoreCaptionLabels: ['Chapters'],

    // Override canvas background color, defaults to #1a1d1e
    canvasBackgroundColor: "#000",

    // Set canvas zooming onScoll (this defaults to false)
    openSeadragon: {
        gestureSettingsMouse: {
            scrollToZoom: true
        },
        showNavigator: false,
    },
}

const IIIFViewer = ({ id }) => {
    return <CloverIIIF id={id} customTheme={customTheme} options={options} />;
};

export default IIIFViewer;