import { Typography } from "@material-ui/core";
import { ReactComponent as NoDataIllustration } from "../illustrations/undraw_no_data.svg";

export const NoDataMessage = () => {
  return (
    <div
      style={{
        height: "calc(100vh - 4rem)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <NoDataIllustration
        style={{ width: "200px", height: "200px", marginBottom: "2rem" }}
      />
      <Typography variant="h5">{"Nothing found"}</Typography>
      <Typography variant="subtitle1">
        {"No vehicle could be found based on your filter."}
      </Typography>
    </div>
  );
};
