import { Typography } from "@material-ui/core";
import { NoDataIllustration } from "../illustrations/NoDataIllustration";

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
