import Splash from "./splash";
import BlockHeader from "./landing/blockHeader";
import FeatureCard from "./landing/featureCard";
import InputWrapper from "./wrappers/inputwrapper";
import SelectWrapper from "./wrappers/selectwrapper";
import PageTitle from "./pagetitle/pagetitle";
import OptionModal from "./wrappers/optionmodal";
import Button from "./button";
import Link from "./link";

import useSplash from "../hooks/useSplash";
import useTitle from "../hooks/useTitle";
import useScrollTo from "../hooks/useScrollTo";
import useLocation from "../hooks/useLocation";
import useFavIcon from "../hooks/useFavIcon";
import useOpenClose from "../hooks/useOpenClose";

export {
  useSplash,
  useScrollTo,
  useFavIcon,
  useLocation,
  useTitle,  
  useOpenClose,
  
  Splash,
  BlockHeader,
  FeatureCard,
  InputWrapper,
  SelectWrapper,
  PageTitle,
  OptionModal,
  Button,
  Link
};
