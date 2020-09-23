import React from "react";
import PropTypes from "prop-types";
import { connect, styled } from "frontity";
import Link from "../link";
import FeaturedMedia from "../featured-media";
import Box from "@material-ui/core/Box";
import Skeleton from "react-loading-skeleton";

function SkeletonChildrenDemo(props, item) {
  const { loading = false } = props;

  return (
    <LoadingItem>
      {loading ? <Skeleton width="100%" /> : <Excerpt>asd</Excerpt>}
    </LoadingItem>
  );
}
SkeletonChildrenDemo.propTypes = {
  loading: PropTypes.bool,
};

const Item = ({ state, item }) => {
  const author = state.source.author[item.author];
  const date = new Date(item.date);

  return (
    <article>
      <Link link={item.link}>
        <Title dangerouslySetInnerHTML={{ __html: item.title.rendered }} />
      </Link>

      <div>
        {/* If the post has an author, we render a clickable author text. */}
        {author && (
          <StyledLink link={author.link}>
            <AuthorName>
              By <b>{author.name}</b>
            </AuthorName>
          </StyledLink>
        )}
        <PublishDate>
          {" "}
          on <b>{date.toDateString()}</b>
        </PublishDate>
      </div>

      {/*
       * If the want to show featured media in the
       * list of featured posts, we render the media.
       */}
      {state.theme.featured.showOnList && (
        <FeaturedMedia id={item.featured_media} />
      )}

      {/* If the post has an excerpt (short summary text), we render it */}
      <Loading>
        <SkeletonChildrenDemo loading />
        <SkeletonChildrenDemo />
      </Loading>
    </article>
  );
};

// Connect the Item to gain access to `state` as a prop
export default connect(Item);

const Title = styled.h1`
  font-size: 2rem;
  color: rgba(12, 17, 43);
  margin: 0;
  padding-top: 24px;
  padding-bottom: 8px;
  box-sizing: border-box;
`;

const AuthorName = styled.span`
  color: rgba(12, 17, 43, 0.9);
  font-size: 0.9em;
`;

const StyledLink = styled(Link)`
  padding: 15px 0;
`;

const PublishDate = styled.span`
  color: rgba(12, 17, 43, 0.9);
  font-size: 0.9em;
`;

const Excerpt = styled.div`
  line-height: 1.6em;
  color: rgba(12, 17, 43, 0.8);
`;

const Loading = styled.div`
  position: relative;
`;
const LoadingItem = styled.div`
  position: absolute;
  left: 0;
  top: 0;
`;
