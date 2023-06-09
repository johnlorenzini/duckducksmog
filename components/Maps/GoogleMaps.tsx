import { Wrapper, Status } from "@googlemaps/react-wrapper";
import React, { ReactElement, useEffect } from "react";
import MapComponent from "./MapContent";
import { newsType } from "../Newspaper";
import { tooltipOptions } from "../Tooltip";
import { clickType } from "@/pages";

type Props = {
  setNewsContent: React.Dispatch<React.SetStateAction<newsType>>;
  setOverlayStage: React.Dispatch<React.SetStateAction<string>>;
  setNumClicked: React.Dispatch<React.SetStateAction<Array<clickType>>>;
  setMouseTooltip: React.Dispatch<React.SetStateAction<tooltipOptions | null>>;
  docRef: React.RefObject<Element>;
  numClicked: Array<clickType>;
};

let mapsKey = process.env["NEXT_PUBLIC_GOOGLE_MAPS_KEY"];

const render = (status: Status): ReactElement => {
  if (status === Status.LOADING) return <h3>{status} ..</h3>;
  if (status === Status.FAILURE) return <h3>{status} ...</h3>;
  /* @ts-ignore */
  return null;
};

const GoogleMaps = ({
  setNewsContent,
  setOverlayStage,
  setMouseTooltip,
  setNumClicked,
  numClicked,
  docRef,
}: Props) => {
  const center = { lat: 34.0488, lng: -118.2518 };
  const zoom = 11;

  return (
    <Wrapper apiKey={mapsKey ?? ""} render={render}>
      <MapComponent
        center={center}
        zoom={zoom}
        setNewsContent={setNewsContent}
        setOverlayStage={setOverlayStage}
        setMouseTooltip={setMouseTooltip}
        setNumClicked={setNumClicked}
        numClicked={numClicked}
        docRef={docRef}
      />
    </Wrapper>
  );
};

export default GoogleMaps;
