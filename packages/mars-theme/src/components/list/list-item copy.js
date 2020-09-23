import React from "react";
import PropTypes from "prop-types";
import { connect, styled } from "frontity";
import Link from "../link";
import FeaturedMedia from "../featured-media";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Avatar from "@material-ui/core/Avatar";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Skeleton from "react-loading-skeleton";

const useStyles = makeStyles(() => ({
  image: {
    width: "100%",
  },
}));

function SkeletonChildrenDemo(props) {
  const { loading = false } = props;
  const classes = useStyles();

  return (
    <div>
      <Box display="flex" alignItems="center">
        <Box margin={1}>
          {loading ? (
            <Skeleton variant="circle">
              <Avatar />
            </Skeleton>
          ) : (
            <Avatar src="https://pbs.twimg.com/profile_images/877631054525472768/Xp5FAPD5_reasonably_small.jpg" />
          )}
        </Box>
        <Box width="100%">
          {loading ? (
            <Skeleton width="100%">
              <Typography>.</Typography>
            </Skeleton>
          ) : (
            <Typography>Ted</Typography>
          )}
        </Box>
      </Box>
      {loading ? (
        <Skeleton variant="rect" width="100%">
          <div style={{ paddingTop: "57%" }} />
        </Skeleton>
      ) : (
        <img
          src="https://pi.tedcdn.com/r/talkstar-photos.s3.amazonaws.com/uploads/72bda89f-9bbf-4685-910a-2f151c4f3a8a/NicolaSturgeon_2019T-embed.jpg?w=512"
          alt=""
        />
      )}
    </div>
  );
}

SkeletonChildrenDemo.propTypes = {
  loading: PropTypes.bool,
};

function SkeletonChildren() {
  return (
    <Grid container spacing={8}>
      <Grid item xs>
        <SkeletonChildrenDemo loading />
      </Grid>
      <Grid item xs>
        <SkeletonChildrenDemo />
      </Grid>
    </Grid>
  );
}

// Connect the Item to gain access to `state` as a prop
export default connect(SkeletonChildren);
