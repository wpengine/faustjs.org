/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  BlockAttributesObject: any;
};

/** Avatars are profile images for users. WordPress by default uses the Gravatar service to host and fetch avatars from. */
export type Avatar = {
  __typename?: 'Avatar';
  /** URL for the default image or a default type. Accepts &#039;404&#039; (return a 404 instead of a default image), &#039;retro&#039; (8bit), &#039;monsterid&#039; (monster), &#039;wavatar&#039; (cartoon face), &#039;indenticon&#039; (the &#039;quilt&#039;), &#039;mystery&#039;, &#039;mm&#039;, or &#039;mysteryman&#039; (The Oyster Man), &#039;blank&#039; (transparent GIF), or &#039;gravatar_default&#039; (the Gravatar logo). */
  default?: Maybe<Scalars['String']>;
  /** HTML attributes to insert in the IMG element. Is not sanitized. */
  extraAttr?: Maybe<Scalars['String']>;
  /** Whether to always show the default image, never the Gravatar. */
  forceDefault?: Maybe<Scalars['Boolean']>;
  /** Whether the avatar was successfully found. */
  foundAvatar?: Maybe<Scalars['Boolean']>;
  /** Height of the avatar image. */
  height?: Maybe<Scalars['Int']>;
  /** Whether the object is restricted from the current viewer */
  isRestricted?: Maybe<Scalars['Boolean']>;
  /** What rating to display avatars up to. Accepts &#039;G&#039;, &#039;PG&#039;, &#039;R&#039;, &#039;X&#039;, and are judged in that order. */
  rating?: Maybe<Scalars['String']>;
  /** Type of url scheme to use. Typically HTTP vs. HTTPS. */
  scheme?: Maybe<Scalars['String']>;
  /** The size of the avatar in pixels. A value of 96 will match a 96px x 96px gravatar image. */
  size?: Maybe<Scalars['Int']>;
  /** URL for the gravatar image source. */
  url?: Maybe<Scalars['String']>;
  /** Width of the avatar image. */
  width?: Maybe<Scalars['Int']>;
};

/** What rating to display avatars up to. Accepts 'G', 'PG', 'R', 'X', and are judged in that order. Default is the value of the 'avatar_rating' option */
export enum AvatarRatingEnum {
  /** Indicates a G level avatar rating level. */
  G = 'G',
  /** Indicates a PG level avatar rating level. */
  Pg = 'PG',
  /** Indicates an R level avatar rating level. */
  R = 'R',
  /** Indicates an X level avatar rating level. */
  X = 'X'
}

/** Block that supports Anchor field */
export type BlockWithSupportsAnchor = {
  /** The anchor field for the block. */
  anchor?: Maybe<Scalars['String']>;
};

/** The category type */
export type Category = DatabaseIdentifier & HierarchicalNode & HierarchicalTermNode & MenuItemLinkable & Node & TermNode & UniformResourceIdentifiable & {
  __typename?: 'Category';
  /** The ancestors of the node. Default ordered as lowest (closest to the child) to highest (closest to the root). */
  ancestors?: Maybe<CategoryToAncestorsCategoryConnection>;
  /**
   * The id field matches the WP_Post-&gt;ID field.
   * @deprecated Deprecated in favor of databaseId
   */
  categoryId?: Maybe<Scalars['Int']>;
  /** Connection between the category type and its children categories. */
  children?: Maybe<CategoryToCategoryConnection>;
  /** @deprecated Deprecated in favor of using Next.js pages */
  conditionalTags?: Maybe<ConditionalTags>;
  /** Connection between the Category type and the ContentNode type */
  contentNodes?: Maybe<CategoryToContentNodeConnection>;
  /** The number of objects connected to the object */
  count?: Maybe<Scalars['Int']>;
  /** The unique identifier stored in the database */
  databaseId: Scalars['Int'];
  /** The description of the object */
  description?: Maybe<Scalars['String']>;
  /** Connection between the TermNode type and the EnqueuedScript type */
  enqueuedScripts?: Maybe<TermNodeToEnqueuedScriptConnection>;
  /** Connection between the TermNode type and the EnqueuedStylesheet type */
  enqueuedStylesheets?: Maybe<TermNodeToEnqueuedStylesheetConnection>;
  /** The unique resource identifier path */
  id: Scalars['ID'];
  /** Whether the node is a Content Node */
  isContentNode: Scalars['Boolean'];
  /** Whether the object is restricted from the current viewer */
  isRestricted?: Maybe<Scalars['Boolean']>;
  /** Whether the node is a Term */
  isTermNode: Scalars['Boolean'];
  /** The link to the term */
  link?: Maybe<Scalars['String']>;
  /** The human friendly name of the object. */
  name?: Maybe<Scalars['String']>;
  /** Connection between the category type and its parent category. */
  parent?: Maybe<CategoryToParentCategoryConnectionEdge>;
  /** Database id of the parent node */
  parentDatabaseId?: Maybe<Scalars['Int']>;
  /** The globally unique identifier of the parent node. */
  parentId?: Maybe<Scalars['ID']>;
  /** Connection between the Category type and the post type */
  posts?: Maybe<CategoryToPostConnection>;
  /** An alphanumeric identifier for the object unique to its type. */
  slug?: Maybe<Scalars['String']>;
  /** Connection between the Category type and the Taxonomy type */
  taxonomy?: Maybe<CategoryToTaxonomyConnectionEdge>;
  /** The name of the taxonomy that the object is associated with */
  taxonomyName?: Maybe<Scalars['String']>;
  templates?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** The ID of the term group that this term object belongs to */
  termGroupId?: Maybe<Scalars['Int']>;
  /** The taxonomy ID that the object is associated with */
  termTaxonomyId?: Maybe<Scalars['Int']>;
  /** The unique resource identifier path */
  uri?: Maybe<Scalars['String']>;
};


/** The category type */
export type CategoryAncestorsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


/** The category type */
export type CategoryChildrenArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<CategoryToCategoryConnectionWhereArgs>;
};


/** The category type */
export type CategoryContentNodesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<CategoryToContentNodeConnectionWhereArgs>;
};


/** The category type */
export type CategoryEnqueuedScriptsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


/** The category type */
export type CategoryEnqueuedStylesheetsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


/** The category type */
export type CategoryPostsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<CategoryToPostConnectionWhereArgs>;
};

/** Connection to category Nodes */
export type CategoryConnection = {
  /** A list of edges (relational context) between RootQuery and connected category Nodes */
  edges: Array<CategoryConnectionEdge>;
  /** A list of connected category Nodes */
  nodes: Array<Category>;
  /** Information about pagination in a connection. */
  pageInfo: CategoryConnectionPageInfo;
};

/** Edge between a Node and a connected category */
export type CategoryConnectionEdge = {
  /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
  cursor?: Maybe<Scalars['String']>;
  /** The connected category Node */
  node: Category;
};

/** Page Info on the connected CategoryConnectionEdge */
export type CategoryConnectionPageInfo = {
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
};

/** The Type of Identifier used to fetch a single resource. Default is ID. */
export enum CategoryIdType {
  /** The Database ID for the node */
  DatabaseId = 'DATABASE_ID',
  /** The hashed Global ID */
  Id = 'ID',
  /** The name of the node */
  Name = 'NAME',
  /** Url friendly name of the node */
  Slug = 'SLUG',
  /** The URI for the node */
  Uri = 'URI'
}

/** Connection between the Category type and the category type */
export type CategoryToAncestorsCategoryConnection = CategoryConnection & Connection & {
  __typename?: 'CategoryToAncestorsCategoryConnection';
  /** Edges for the CategoryToAncestorsCategoryConnection connection */
  edges: Array<CategoryToAncestorsCategoryConnectionEdge>;
  /** The nodes of the connection, without the edges */
  nodes: Array<Category>;
  /** Information about pagination in a connection. */
  pageInfo: CategoryToAncestorsCategoryConnectionPageInfo;
};

/** An edge in a connection */
export type CategoryToAncestorsCategoryConnectionEdge = CategoryConnectionEdge & Edge & {
  __typename?: 'CategoryToAncestorsCategoryConnectionEdge';
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node: Category;
};

/** Page Info on the &quot;CategoryToAncestorsCategoryConnection&quot; */
export type CategoryToAncestorsCategoryConnectionPageInfo = CategoryConnectionPageInfo & PageInfo & WpPageInfo & {
  __typename?: 'CategoryToAncestorsCategoryConnectionPageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
};

/** Connection between the Category type and the category type */
export type CategoryToCategoryConnection = CategoryConnection & Connection & {
  __typename?: 'CategoryToCategoryConnection';
  /** Edges for the CategoryToCategoryConnection connection */
  edges: Array<CategoryToCategoryConnectionEdge>;
  /** The nodes of the connection, without the edges */
  nodes: Array<Category>;
  /** Information about pagination in a connection. */
  pageInfo: CategoryToCategoryConnectionPageInfo;
};

/** An edge in a connection */
export type CategoryToCategoryConnectionEdge = CategoryConnectionEdge & Edge & {
  __typename?: 'CategoryToCategoryConnectionEdge';
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node: Category;
};

/** Page Info on the &quot;CategoryToCategoryConnection&quot; */
export type CategoryToCategoryConnectionPageInfo = CategoryConnectionPageInfo & PageInfo & WpPageInfo & {
  __typename?: 'CategoryToCategoryConnectionPageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
};

/** Arguments for filtering the CategoryToCategoryConnection connection */
export type CategoryToCategoryConnectionWhereArgs = {
  /** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
  cacheDomain?: InputMaybe<Scalars['String']>;
  /** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
  childOf?: InputMaybe<Scalars['Int']>;
  /** True to limit results to terms that have no children. This parameter has no effect on non-hierarchical taxonomies. Default false. */
  childless?: InputMaybe<Scalars['Boolean']>;
  /** Retrieve terms where the description is LIKE the input value. Default empty. */
  descriptionLike?: InputMaybe<Scalars['String']>;
  /** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
  exclude?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Array of term ids to exclude along with all of their descendant terms. If $include is non-empty, $exclude_tree is ignored. Default empty array. */
  excludeTree?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Whether to hide terms not assigned to any posts. Accepts true or false. Default false */
  hideEmpty?: InputMaybe<Scalars['Boolean']>;
  /** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
  hierarchical?: InputMaybe<Scalars['Boolean']>;
  /** Array of term ids to include. Default empty array. */
  include?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Array of names to return term(s) for. Default empty. */
  name?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Retrieve terms where the name is LIKE the input value. Default empty. */
  nameLike?: InputMaybe<Scalars['String']>;
  /** Array of object IDs. Results will be limited to terms associated with these objects. */
  objectIds?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Direction the connection should be ordered in */
  order?: InputMaybe<OrderEnum>;
  /** Field(s) to order terms by. Defaults to 'name'. */
  orderby?: InputMaybe<TermObjectsConnectionOrderbyEnum>;
  /** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
  padCounts?: InputMaybe<Scalars['Boolean']>;
  /** Parent term ID to retrieve direct-child terms of. Default empty. */
  parent?: InputMaybe<Scalars['Int']>;
  /** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
  search?: InputMaybe<Scalars['String']>;
  /** Array of slugs to return term(s) for. Default empty. */
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomId?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomyId?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Whether to prime meta caches for matched terms. Default true. */
  updateTermMetaCache?: InputMaybe<Scalars['Boolean']>;
};

/** Connection between the Category type and the ContentNode type */
export type CategoryToContentNodeConnection = Connection & ContentNodeConnection & {
  __typename?: 'CategoryToContentNodeConnection';
  /** Edges for the CategoryToContentNodeConnection connection */
  edges: Array<CategoryToContentNodeConnectionEdge>;
  /** The nodes of the connection, without the edges */
  nodes: Array<ContentNode>;
  /** Information about pagination in a connection. */
  pageInfo: CategoryToContentNodeConnectionPageInfo;
};

/** An edge in a connection */
export type CategoryToContentNodeConnectionEdge = ContentNodeConnectionEdge & Edge & {
  __typename?: 'CategoryToContentNodeConnectionEdge';
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node: ContentNode;
};

/** Page Info on the &quot;CategoryToContentNodeConnection&quot; */
export type CategoryToContentNodeConnectionPageInfo = ContentNodeConnectionPageInfo & PageInfo & WpPageInfo & {
  __typename?: 'CategoryToContentNodeConnectionPageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
};

/** Arguments for filtering the CategoryToContentNodeConnection connection */
export type CategoryToContentNodeConnectionWhereArgs = {
  /** The Types of content to filter */
  contentTypes?: InputMaybe<Array<InputMaybe<ContentTypesOfCategoryEnum>>>;
  /** Filter the connection based on dates */
  dateQuery?: InputMaybe<DateQueryInput>;
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword?: InputMaybe<Scalars['Boolean']>;
  /** Specific database ID of the object */
  id?: InputMaybe<Scalars['Int']>;
  /** Array of IDs for the objects to retrieve */
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Get objects with a specific mimeType property */
  mimeType?: InputMaybe<MimeTypeEnum>;
  /** Slug / post_name of the object */
  name?: InputMaybe<Scalars['String']>;
  /** Specify objects to retrieve. Use slugs */
  nameIn?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** What paramater to use to order the objects by. */
  orderby?: InputMaybe<Array<InputMaybe<PostObjectsConnectionOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: InputMaybe<Scalars['ID']>;
  /** Specify objects whose parent is in an array */
  parentIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Specify posts whose parent is not in an array */
  parentNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Show posts with a specific password. */
  password?: InputMaybe<Scalars['String']>;
  /** Show Posts based on a keyword search */
  search?: InputMaybe<Scalars['String']>;
  /** Retrieve posts where post status is in an array. */
  stati?: InputMaybe<Array<InputMaybe<PostStatusEnum>>>;
  /** Show posts with a specific status. */
  status?: InputMaybe<PostStatusEnum>;
  /** Title of the object */
  title?: InputMaybe<Scalars['String']>;
};

/** Connection between the Category type and the category type */
export type CategoryToParentCategoryConnectionEdge = CategoryConnectionEdge & Edge & OneToOneConnection & {
  __typename?: 'CategoryToParentCategoryConnectionEdge';
  /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
  cursor?: Maybe<Scalars['String']>;
  /** The node of the connection, without the edges */
  node: Category;
};

/** Connection between the Category type and the post type */
export type CategoryToPostConnection = Connection & PostConnection & {
  __typename?: 'CategoryToPostConnection';
  /** Edges for the CategoryToPostConnection connection */
  edges: Array<CategoryToPostConnectionEdge>;
  /** The nodes of the connection, without the edges */
  nodes: Array<Post>;
  /** Information about pagination in a connection. */
  pageInfo: CategoryToPostConnectionPageInfo;
};

/** An edge in a connection */
export type CategoryToPostConnectionEdge = Edge & PostConnectionEdge & {
  __typename?: 'CategoryToPostConnectionEdge';
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node: Post;
};

/** Page Info on the &quot;CategoryToPostConnection&quot; */
export type CategoryToPostConnectionPageInfo = PageInfo & PostConnectionPageInfo & WpPageInfo & {
  __typename?: 'CategoryToPostConnectionPageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
};

/** Arguments for filtering the CategoryToPostConnection connection */
export type CategoryToPostConnectionWhereArgs = {
  /** The user that's connected as the author of the object. Use the userId for the author object. */
  author?: InputMaybe<Scalars['Int']>;
  /** Find objects connected to author(s) in the array of author's userIds */
  authorIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Find objects connected to the author by the author's nicename */
  authorName?: InputMaybe<Scalars['String']>;
  /** Find objects NOT connected to author(s) in the array of author's userIds */
  authorNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Category ID */
  categoryId?: InputMaybe<Scalars['Int']>;
  /** Array of category IDs, used to display objects from one category OR another */
  categoryIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Use Category Slug */
  categoryName?: InputMaybe<Scalars['String']>;
  /** Array of category IDs, used to display objects from one category OR another */
  categoryNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Filter the connection based on dates */
  dateQuery?: InputMaybe<DateQueryInput>;
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword?: InputMaybe<Scalars['Boolean']>;
  /** Specific database ID of the object */
  id?: InputMaybe<Scalars['Int']>;
  /** Array of IDs for the objects to retrieve */
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Get objects with a specific mimeType property */
  mimeType?: InputMaybe<MimeTypeEnum>;
  /** Slug / post_name of the object */
  name?: InputMaybe<Scalars['String']>;
  /** Specify objects to retrieve. Use slugs */
  nameIn?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** What paramater to use to order the objects by. */
  orderby?: InputMaybe<Array<InputMaybe<PostObjectsConnectionOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: InputMaybe<Scalars['ID']>;
  /** Specify objects whose parent is in an array */
  parentIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Specify posts whose parent is not in an array */
  parentNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Show posts with a specific password. */
  password?: InputMaybe<Scalars['String']>;
  /** Show Posts based on a keyword search */
  search?: InputMaybe<Scalars['String']>;
  /** Retrieve posts where post status is in an array. */
  stati?: InputMaybe<Array<InputMaybe<PostStatusEnum>>>;
  /** Show posts with a specific status. */
  status?: InputMaybe<PostStatusEnum>;
  /** Tag Slug */
  tag?: InputMaybe<Scalars['String']>;
  /** Use Tag ID */
  tagId?: InputMaybe<Scalars['String']>;
  /** Array of tag IDs, used to display objects from one tag OR another */
  tagIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Array of tag IDs, used to display objects from one tag OR another */
  tagNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Array of tag slugs, used to display objects from one tag AND another */
  tagSlugAnd?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Array of tag slugs, used to include objects in ANY specified tags */
  tagSlugIn?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Title of the object */
  title?: InputMaybe<Scalars['String']>;
};

/** Connection between the Category type and the Taxonomy type */
export type CategoryToTaxonomyConnectionEdge = Edge & OneToOneConnection & TaxonomyConnectionEdge & {
  __typename?: 'CategoryToTaxonomyConnectionEdge';
  /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
  cursor?: Maybe<Scalars['String']>;
  /** The node of the connection, without the edges */
  node: Taxonomy;
};

/** A Comment object */
export type Comment = DatabaseIdentifier & Node & {
  __typename?: 'Comment';
  /** User agent used to post the comment. This field is equivalent to WP_Comment-&gt;comment_agent and the value matching the &quot;comment_agent&quot; column in SQL. */
  agent?: Maybe<Scalars['String']>;
  /**
   * The approval status of the comment. This field is equivalent to WP_Comment-&gt;comment_approved and the value matching the &quot;comment_approved&quot; column in SQL.
   * @deprecated Deprecated in favor of the `status` field
   */
  approved?: Maybe<Scalars['Boolean']>;
  /** The author of the comment */
  author?: Maybe<CommentToCommenterConnectionEdge>;
  /** IP address for the author. This field is equivalent to WP_Comment-&gt;comment_author_IP and the value matching the &quot;comment_author_IP&quot; column in SQL. */
  authorIp?: Maybe<Scalars['String']>;
  /**
   * ID for the comment, unique among comments.
   * @deprecated Deprecated in favor of databaseId
   */
  commentId?: Maybe<Scalars['Int']>;
  /** Connection between the Comment type and the ContentNode type */
  commentedOn?: Maybe<CommentToContentNodeConnectionEdge>;
  /** Content of the comment. This field is equivalent to WP_Comment-&gt;comment_content and the value matching the &quot;comment_content&quot; column in SQL. */
  content?: Maybe<Scalars['String']>;
  /** The unique identifier stored in the database */
  databaseId: Scalars['Int'];
  /** Date the comment was posted in local time. This field is equivalent to WP_Comment-&gt;date and the value matching the &quot;date&quot; column in SQL. */
  date?: Maybe<Scalars['String']>;
  /** Date the comment was posted in GMT. This field is equivalent to WP_Comment-&gt;date_gmt and the value matching the &quot;date_gmt&quot; column in SQL. */
  dateGmt?: Maybe<Scalars['String']>;
  /** The globally unique identifier for the comment object */
  id: Scalars['ID'];
  /** Whether the object is restricted from the current viewer */
  isRestricted?: Maybe<Scalars['Boolean']>;
  /** Karma value for the comment. This field is equivalent to WP_Comment-&gt;comment_karma and the value matching the &quot;comment_karma&quot; column in SQL. */
  karma?: Maybe<Scalars['Int']>;
  /** Connection between the Comment type and the Comment type */
  parent?: Maybe<CommentToParentCommentConnectionEdge>;
  /** The database id of the parent comment node or null if it is the root comment */
  parentDatabaseId?: Maybe<Scalars['Int']>;
  /** The globally unique identifier of the parent comment node. */
  parentId?: Maybe<Scalars['ID']>;
  /** Connection between the Comment type and the Comment type */
  replies?: Maybe<CommentToCommentConnection>;
  /** The approval status of the comment. This field is equivalent to WP_Comment-&gt;comment_approved and the value matching the &quot;comment_approved&quot; column in SQL. */
  status?: Maybe<CommentStatusEnum>;
  /** Type of comment. This field is equivalent to WP_Comment-&gt;comment_type and the value matching the &quot;comment_type&quot; column in SQL. */
  type?: Maybe<Scalars['String']>;
};


/** A Comment object */
export type CommentContentArgs = {
  format?: InputMaybe<PostObjectFieldFormatEnum>;
};


/** A Comment object */
export type CommentParentArgs = {
  where?: InputMaybe<CommentToParentCommentConnectionWhereArgs>;
};


/** A Comment object */
export type CommentRepliesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<CommentToCommentConnectionWhereArgs>;
};

/** A Comment Author object */
export type CommentAuthor = Commenter & DatabaseIdentifier & Node & {
  __typename?: 'CommentAuthor';
  /** Avatar object for user. The avatar object can be retrieved in different sizes by specifying the size argument. */
  avatar?: Maybe<Avatar>;
  /** The unique identifier stored in the database */
  databaseId: Scalars['Int'];
  /** The email for the comment author */
  email?: Maybe<Scalars['String']>;
  /** The globally unique identifier for the comment author object */
  id: Scalars['ID'];
  /** Whether the object is restricted from the current viewer */
  isRestricted?: Maybe<Scalars['Boolean']>;
  /** The name for the comment author. */
  name?: Maybe<Scalars['String']>;
  /** The url the comment author. */
  url?: Maybe<Scalars['String']>;
};


/** A Comment Author object */
export type CommentAuthorAvatarArgs = {
  forceDefault?: InputMaybe<Scalars['Boolean']>;
  rating?: InputMaybe<AvatarRatingEnum>;
  size?: InputMaybe<Scalars['Int']>;
};

/** Connection to Comment Nodes */
export type CommentConnection = {
  /** A list of edges (relational context) between RootQuery and connected Comment Nodes */
  edges: Array<CommentConnectionEdge>;
  /** A list of connected Comment Nodes */
  nodes: Array<Comment>;
  /** Information about pagination in a connection. */
  pageInfo: CommentConnectionPageInfo;
};

/** Edge between a Node and a connected Comment */
export type CommentConnectionEdge = {
  /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
  cursor?: Maybe<Scalars['String']>;
  /** The connected Comment Node */
  node: Comment;
};

/** Page Info on the connected CommentConnectionEdge */
export type CommentConnectionPageInfo = {
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
};

/** The Type of Identifier used to fetch a single comment node. Default is "ID". To be used along with the "id" field. */
export enum CommentNodeIdTypeEnum {
  /** Identify a resource by the Database ID. */
  DatabaseId = 'DATABASE_ID',
  /** Identify a resource by the (hashed) Global ID. */
  Id = 'ID'
}

/** The status of the comment object. */
export enum CommentStatusEnum {
  /** Comments with the Approved status */
  Approve = 'APPROVE',
  /** Comments with the Unapproved status */
  Hold = 'HOLD',
  /** Comments with the Spam status */
  Spam = 'SPAM',
  /** Comments with the Trash status */
  Trash = 'TRASH'
}

/** Connection between the Comment type and the Comment type */
export type CommentToCommentConnection = CommentConnection & Connection & {
  __typename?: 'CommentToCommentConnection';
  /** Edges for the CommentToCommentConnection connection */
  edges: Array<CommentToCommentConnectionEdge>;
  /** The nodes of the connection, without the edges */
  nodes: Array<Comment>;
  /** Information about pagination in a connection. */
  pageInfo: CommentToCommentConnectionPageInfo;
};

/** An edge in a connection */
export type CommentToCommentConnectionEdge = CommentConnectionEdge & Edge & {
  __typename?: 'CommentToCommentConnectionEdge';
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node: Comment;
};

/** Page Info on the &quot;CommentToCommentConnection&quot; */
export type CommentToCommentConnectionPageInfo = CommentConnectionPageInfo & PageInfo & WpPageInfo & {
  __typename?: 'CommentToCommentConnectionPageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
};

/** Arguments for filtering the CommentToCommentConnection connection */
export type CommentToCommentConnectionWhereArgs = {
  /** Comment author email address. */
  authorEmail?: InputMaybe<Scalars['String']>;
  /** Array of author IDs to include comments for. */
  authorIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Array of author IDs to exclude comments for. */
  authorNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Comment author URL. */
  authorUrl?: InputMaybe<Scalars['String']>;
  /** Array of comment IDs to include. */
  commentIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Array of IDs of users whose unapproved comments will be returned by the query regardless of status. */
  commentNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Include comments of a given type. */
  commentType?: InputMaybe<Scalars['String']>;
  /** Include comments from a given array of comment types. */
  commentTypeIn?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Exclude comments from a given array of comment types. */
  commentTypeNotIn?: InputMaybe<Scalars['String']>;
  /** Content object author ID to limit results by. */
  contentAuthor?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Array of author IDs to retrieve comments for. */
  contentAuthorIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Array of author IDs *not* to retrieve comments for. */
  contentAuthorNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Limit results to those affiliated with a given content object ID. */
  contentId?: InputMaybe<Scalars['ID']>;
  /** Array of content object IDs to include affiliated comments for. */
  contentIdIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Array of content object IDs to exclude affiliated comments for. */
  contentIdNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Content object name (i.e. slug ) to retrieve affiliated comments for. */
  contentName?: InputMaybe<Scalars['String']>;
  /** Content Object parent ID to retrieve affiliated comments for. */
  contentParent?: InputMaybe<Scalars['Int']>;
  /** Array of content object statuses to retrieve affiliated comments for. Pass 'any' to match any value. */
  contentStatus?: InputMaybe<Array<InputMaybe<PostStatusEnum>>>;
  /** Content object type or array of types to retrieve affiliated comments for. Pass 'any' to match any value. */
  contentType?: InputMaybe<Array<InputMaybe<ContentTypeEnum>>>;
  /** Array of IDs or email addresses of users whose unapproved comments will be returned by the query regardless of $status. Default empty */
  includeUnapproved?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Karma score to retrieve matching comments for. */
  karma?: InputMaybe<Scalars['Int']>;
  /** The cardinality of the order of the connection */
  order?: InputMaybe<OrderEnum>;
  /** Field to order the comments by. */
  orderby?: InputMaybe<CommentsConnectionOrderbyEnum>;
  /** Parent ID of comment to retrieve children of. */
  parent?: InputMaybe<Scalars['Int']>;
  /** Array of parent IDs of comments to retrieve children for. */
  parentIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Array of parent IDs of comments *not* to retrieve children for. */
  parentNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Search term(s) to retrieve matching comments for. */
  search?: InputMaybe<Scalars['String']>;
  /** Comment status to limit results by. */
  status?: InputMaybe<Scalars['String']>;
  /** Include comments for a specific user ID. */
  userId?: InputMaybe<Scalars['ID']>;
};

/** Connection between the Comment type and the Commenter type */
export type CommentToCommenterConnectionEdge = CommenterConnectionEdge & Edge & OneToOneConnection & {
  __typename?: 'CommentToCommenterConnectionEdge';
  /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
  cursor?: Maybe<Scalars['String']>;
  /** The node of the connection, without the edges */
  node: Commenter;
};

/** Connection between the Comment type and the ContentNode type */
export type CommentToContentNodeConnectionEdge = ContentNodeConnectionEdge & Edge & OneToOneConnection & {
  __typename?: 'CommentToContentNodeConnectionEdge';
  /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
  cursor?: Maybe<Scalars['String']>;
  /** The node of the connection, without the edges */
  node: ContentNode;
};

/** Connection between the Comment type and the Comment type */
export type CommentToParentCommentConnectionEdge = CommentConnectionEdge & Edge & OneToOneConnection & {
  __typename?: 'CommentToParentCommentConnectionEdge';
  /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
  cursor?: Maybe<Scalars['String']>;
  /** The node of the connection, without the edges */
  node: Comment;
};

/** Arguments for filtering the CommentToParentCommentConnection connection */
export type CommentToParentCommentConnectionWhereArgs = {
  /** Comment author email address. */
  authorEmail?: InputMaybe<Scalars['String']>;
  /** Array of author IDs to include comments for. */
  authorIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Array of author IDs to exclude comments for. */
  authorNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Comment author URL. */
  authorUrl?: InputMaybe<Scalars['String']>;
  /** Array of comment IDs to include. */
  commentIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Array of IDs of users whose unapproved comments will be returned by the query regardless of status. */
  commentNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Include comments of a given type. */
  commentType?: InputMaybe<Scalars['String']>;
  /** Include comments from a given array of comment types. */
  commentTypeIn?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Exclude comments from a given array of comment types. */
  commentTypeNotIn?: InputMaybe<Scalars['String']>;
  /** Content object author ID to limit results by. */
  contentAuthor?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Array of author IDs to retrieve comments for. */
  contentAuthorIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Array of author IDs *not* to retrieve comments for. */
  contentAuthorNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Limit results to those affiliated with a given content object ID. */
  contentId?: InputMaybe<Scalars['ID']>;
  /** Array of content object IDs to include affiliated comments for. */
  contentIdIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Array of content object IDs to exclude affiliated comments for. */
  contentIdNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Content object name (i.e. slug ) to retrieve affiliated comments for. */
  contentName?: InputMaybe<Scalars['String']>;
  /** Content Object parent ID to retrieve affiliated comments for. */
  contentParent?: InputMaybe<Scalars['Int']>;
  /** Array of content object statuses to retrieve affiliated comments for. Pass 'any' to match any value. */
  contentStatus?: InputMaybe<Array<InputMaybe<PostStatusEnum>>>;
  /** Content object type or array of types to retrieve affiliated comments for. Pass 'any' to match any value. */
  contentType?: InputMaybe<Array<InputMaybe<ContentTypeEnum>>>;
  /** Array of IDs or email addresses of users whose unapproved comments will be returned by the query regardless of $status. Default empty */
  includeUnapproved?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Karma score to retrieve matching comments for. */
  karma?: InputMaybe<Scalars['Int']>;
  /** The cardinality of the order of the connection */
  order?: InputMaybe<OrderEnum>;
  /** Field to order the comments by. */
  orderby?: InputMaybe<CommentsConnectionOrderbyEnum>;
  /** Parent ID of comment to retrieve children of. */
  parent?: InputMaybe<Scalars['Int']>;
  /** Array of parent IDs of comments to retrieve children for. */
  parentIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Array of parent IDs of comments *not* to retrieve children for. */
  parentNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Search term(s) to retrieve matching comments for. */
  search?: InputMaybe<Scalars['String']>;
  /** Comment status to limit results by. */
  status?: InputMaybe<Scalars['String']>;
  /** Include comments for a specific user ID. */
  userId?: InputMaybe<Scalars['ID']>;
};

/** The author of a comment */
export type Commenter = {
  /** Avatar object for user. The avatar object can be retrieved in different sizes by specifying the size argument. */
  avatar?: Maybe<Avatar>;
  /** Identifies the primary key from the database. */
  databaseId: Scalars['Int'];
  /** The email address of the author of a comment. */
  email?: Maybe<Scalars['String']>;
  /** The globally unique identifier for the comment author. */
  id: Scalars['ID'];
  /** Whether the author information is considered restricted. (not fully public) */
  isRestricted?: Maybe<Scalars['Boolean']>;
  /** The name of the author of a comment. */
  name?: Maybe<Scalars['String']>;
  /** The url of the author of a comment. */
  url?: Maybe<Scalars['String']>;
};

/** Edge between a Node and a connected Commenter */
export type CommenterConnectionEdge = {
  /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
  cursor?: Maybe<Scalars['String']>;
  /** The connected Commenter Node */
  node: Commenter;
};

/** Options for ordering the connection */
export enum CommentsConnectionOrderbyEnum {
  /** Order by browser user agent of the commenter. */
  CommentAgent = 'COMMENT_AGENT',
  /** Order by approval status of the comment. */
  CommentApproved = 'COMMENT_APPROVED',
  /** Order by name of the comment author. */
  CommentAuthor = 'COMMENT_AUTHOR',
  /** Order by e-mail of the comment author. */
  CommentAuthorEmail = 'COMMENT_AUTHOR_EMAIL',
  /** Order by IP address of the comment author. */
  CommentAuthorIp = 'COMMENT_AUTHOR_IP',
  /** Order by URL address of the comment author. */
  CommentAuthorUrl = 'COMMENT_AUTHOR_URL',
  /** Order by the comment contents. */
  CommentContent = 'COMMENT_CONTENT',
  /** Order by date/time timestamp of the comment. */
  CommentDate = 'COMMENT_DATE',
  /** Order by GMT timezone date/time timestamp of the comment. */
  CommentDateGmt = 'COMMENT_DATE_GMT',
  /** Order by the globally unique identifier for the comment object */
  CommentId = 'COMMENT_ID',
  /** Order by the array list of comment IDs listed in the where clause. */
  CommentIn = 'COMMENT_IN',
  /** Order by the comment karma score. */
  CommentKarma = 'COMMENT_KARMA',
  /** Order by the comment parent ID. */
  CommentParent = 'COMMENT_PARENT',
  /** Order by the post object ID. */
  CommentPostId = 'COMMENT_POST_ID',
  /** Order by the the type of comment, such as 'comment', 'pingback', or 'trackback'. */
  CommentType = 'COMMENT_TYPE',
  /** Order by the user ID. */
  UserId = 'USER_ID'
}

/** GraphQL representation of WordPress Conditional Tags. */
export type ConditionalTags = {
  __typename?: 'ConditionalTags';
  /**
   * Determines whether the query is for an existing archive page.
   * @deprecated Deprecated in favor of using Next.js pages
   */
  isArchive?: Maybe<Scalars['Boolean']>;
  /**
   * Determines whether the query is for an existing attachment page.
   * @deprecated Deprecated in favor of using Next.js pages
   */
  isAttachment?: Maybe<Scalars['Boolean']>;
  /**
   * Determines whether the query is for an existing author archive page.
   * @deprecated Deprecated in favor of using Next.js pages
   */
  isAuthor?: Maybe<Scalars['Boolean']>;
  /**
   * Determines whether the query is for an existing category archive page.
   * @deprecated Deprecated in favor of using Next.js pages
   */
  isCategory?: Maybe<Scalars['Boolean']>;
  /**
   * Determines whether the query is for an existing date archive.
   * @deprecated Deprecated in favor of using Next.js pages
   */
  isDate?: Maybe<Scalars['Boolean']>;
  /**
   * Determines whether the query is for an existing day archive.
   * @deprecated Deprecated in favor of using Next.js pages
   */
  isDay?: Maybe<Scalars['Boolean']>;
  /**
   * Determines whether the query is for the front page of the site.
   * @deprecated Deprecated in favor of using Next.js pages
   */
  isFrontPage?: Maybe<Scalars['Boolean']>;
  /**
   * Determines whether the query is for the blog homepage.
   * @deprecated Deprecated in favor of using Next.js pages
   */
  isHome?: Maybe<Scalars['Boolean']>;
  /**
   * Determines whether the query is for an existing month archive.
   * @deprecated Deprecated in favor of using Next.js pages
   */
  isMonth?: Maybe<Scalars['Boolean']>;
  /**
   * Determines whether this site has more than one author.
   * @deprecated Deprecated in favor of using Next.js pages
   */
  isMultiAuthor?: Maybe<Scalars['Boolean']>;
  /**
   * Determines whether the query is for an existing single page.
   * @deprecated Deprecated in favor of using Next.js pages
   */
  isPage?: Maybe<Scalars['Boolean']>;
  /**
   * Determines whether currently in a page template.
   * @deprecated Deprecated in favor of using Next.js pages
   */
  isPageTemplate?: Maybe<Scalars['Boolean']>;
  /**
   * Determines whether the query is for an existing post type archive page.
   * @deprecated Deprecated in favor of using Next.js pages
   */
  isPostTypeArchive?: Maybe<Scalars['Boolean']>;
  /**
   * Determines whether the query is for a post or page preview.
   * @deprecated Deprecated in favor of using Next.js pages
   */
  isPreview?: Maybe<Scalars['Boolean']>;
  /**
   * Determines whether the query is for the Privacy Policy page.
   * @deprecated Deprecated in favor of using Next.js pages
   */
  isPrivacyPolicy?: Maybe<Scalars['Boolean']>;
  /**
   * Determines whether the query is for a search.
   * @deprecated Deprecated in favor of using Next.js pages
   */
  isSearch?: Maybe<Scalars['Boolean']>;
  /**
   * Determines whether the query is for an existing single post.
   * @deprecated Deprecated in favor of using Next.js pages
   */
  isSingle?: Maybe<Scalars['Boolean']>;
  /**
   * Determines whether the query is for an existing single post of any post type (post, attachment, page, custom post types).
   * @deprecated Deprecated in favor of using Next.js pages
   */
  isSingular?: Maybe<Scalars['Boolean']>;
  /**
   * Determines whether a post is sticky.
   * @deprecated Deprecated in favor of using Next.js pages
   */
  isSticky?: Maybe<Scalars['Boolean']>;
  /**
   * Determines whether the query is for an existing tag archive page.
   * @deprecated Deprecated in favor of using Next.js pages
   */
  isTag?: Maybe<Scalars['Boolean']>;
  /**
   * Determines whether the query is for an existing custom taxonomy archive page.
   * @deprecated Deprecated in favor of using Next.js pages
   */
  isTax?: Maybe<Scalars['Boolean']>;
  /**
   * Determines whether the query is for an existing year archive.
   * @deprecated Deprecated in favor of using Next.js pages
   */
  isYear?: Maybe<Scalars['Boolean']>;
};

/** A plural connection from one Node Type in the Graph to another Node Type, with support for relational data via &quot;edges&quot;. */
export type Connection = {
  /** A list of edges (relational context) between connected nodes */
  edges: Array<Edge>;
  /** A list of connected nodes */
  nodes: Array<Node>;
  /** Information about pagination in a connection. */
  pageInfo: PageInfo;
};

/** Nodes used to manage content */
export type ContentNode = {
  /** @deprecated Deprecated in favor of using Next.js pages */
  conditionalTags?: Maybe<ConditionalTags>;
  /** Connection between the ContentNode type and the ContentType type */
  contentType?: Maybe<ContentNodeToContentTypeConnectionEdge>;
  /** The name of the Content Type the node belongs to */
  contentTypeName: Scalars['String'];
  /** The ID of the node in the database. */
  databaseId: Scalars['Int'];
  /** Post publishing date. */
  date?: Maybe<Scalars['String']>;
  /** The publishing date set in GMT. */
  dateGmt?: Maybe<Scalars['String']>;
  /** The desired slug of the post */
  desiredSlug?: Maybe<Scalars['String']>;
  /** If a user has edited the node within the past 15 seconds, this will return the user that last edited. Null if the edit lock doesn&#039;t exist or is greater than 15 seconds */
  editingLockedBy?: Maybe<ContentNodeToEditLockConnectionEdge>;
  /** The RSS enclosure for the object */
  enclosure?: Maybe<Scalars['String']>;
  /** Connection between the ContentNode type and the EnqueuedScript type */
  enqueuedScripts?: Maybe<ContentNodeToEnqueuedScriptConnection>;
  /** Connection between the ContentNode type and the EnqueuedStylesheet type */
  enqueuedStylesheets?: Maybe<ContentNodeToEnqueuedStylesheetConnection>;
  /** The global unique identifier for this post. This currently matches the value stored in WP_Post-&gt;guid and the guid column in the &quot;post_objects&quot; database table. */
  guid?: Maybe<Scalars['String']>;
  /** The unique resource identifier path */
  id: Scalars['ID'];
  /** Whether the node is a Content Node */
  isContentNode: Scalars['Boolean'];
  /** Whether the object is a node in the preview state */
  isPreview?: Maybe<Scalars['Boolean']>;
  /** Whether the object is restricted from the current viewer */
  isRestricted?: Maybe<Scalars['Boolean']>;
  /** Whether the node is a Term */
  isTermNode: Scalars['Boolean'];
  /** The user that most recently edited the node */
  lastEditedBy?: Maybe<ContentNodeToEditLastConnectionEdge>;
  /** The permalink of the post */
  link?: Maybe<Scalars['String']>;
  /** The local modified time for a post. If a post was recently updated the modified field will change to match the corresponding time. */
  modified?: Maybe<Scalars['String']>;
  /** The GMT modified time for a post. If a post was recently updated the modified field will change to match the corresponding time in GMT. */
  modifiedGmt?: Maybe<Scalars['String']>;
  /** The database id of the preview node */
  previewRevisionDatabaseId?: Maybe<Scalars['Int']>;
  /** Whether the object is a node in the preview state */
  previewRevisionId?: Maybe<Scalars['ID']>;
  /** The uri slug for the post. This is equivalent to the WP_Post-&gt;post_name field and the post_name column in the database for the &quot;post_objects&quot; table. */
  slug?: Maybe<Scalars['String']>;
  /** The current status of the object */
  status?: Maybe<Scalars['String']>;
  /** The template assigned to a node of content */
  template?: Maybe<ContentTemplate>;
  templates?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** The unique resource identifier path */
  uri?: Maybe<Scalars['String']>;
};


/** Nodes used to manage content */
export type ContentNodeEnqueuedScriptsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


/** Nodes used to manage content */
export type ContentNodeEnqueuedStylesheetsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};

/** Connection to ContentNode Nodes */
export type ContentNodeConnection = {
  /** A list of edges (relational context) between ContentType and connected ContentNode Nodes */
  edges: Array<ContentNodeConnectionEdge>;
  /** A list of connected ContentNode Nodes */
  nodes: Array<ContentNode>;
  /** Information about pagination in a connection. */
  pageInfo: ContentNodeConnectionPageInfo;
};

/** Edge between a Node and a connected ContentNode */
export type ContentNodeConnectionEdge = {
  /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
  cursor?: Maybe<Scalars['String']>;
  /** The connected ContentNode Node */
  node: ContentNode;
};

/** Page Info on the connected ContentNodeConnectionEdge */
export type ContentNodeConnectionPageInfo = {
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
};

/** The Type of Identifier used to fetch a single resource. Default is ID. */
export enum ContentNodeIdTypeEnum {
  /** Identify a resource by the Database ID. */
  DatabaseId = 'DATABASE_ID',
  /** Identify a resource by the (hashed) Global ID. */
  Id = 'ID',
  /** Identify a resource by the URI. */
  Uri = 'URI'
}

/** Connection between the ContentNode type and the ContentType type */
export type ContentNodeToContentTypeConnectionEdge = ContentTypeConnectionEdge & Edge & OneToOneConnection & {
  __typename?: 'ContentNodeToContentTypeConnectionEdge';
  /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
  cursor?: Maybe<Scalars['String']>;
  /** The node of the connection, without the edges */
  node: ContentType;
};

/** Connection between the ContentNode type and the User type */
export type ContentNodeToEditLastConnectionEdge = Edge & OneToOneConnection & UserConnectionEdge & {
  __typename?: 'ContentNodeToEditLastConnectionEdge';
  /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
  cursor?: Maybe<Scalars['String']>;
  /** The node of the connection, without the edges */
  node: User;
};

/** Connection between the ContentNode type and the User type */
export type ContentNodeToEditLockConnectionEdge = Edge & OneToOneConnection & UserConnectionEdge & {
  __typename?: 'ContentNodeToEditLockConnectionEdge';
  /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
  cursor?: Maybe<Scalars['String']>;
  /** The timestamp for when the node was last edited */
  lockTimestamp?: Maybe<Scalars['String']>;
  /** The node of the connection, without the edges */
  node: User;
};

/** Connection between the ContentNode type and the EnqueuedScript type */
export type ContentNodeToEnqueuedScriptConnection = Connection & EnqueuedScriptConnection & {
  __typename?: 'ContentNodeToEnqueuedScriptConnection';
  /** Edges for the ContentNodeToEnqueuedScriptConnection connection */
  edges: Array<ContentNodeToEnqueuedScriptConnectionEdge>;
  /** The nodes of the connection, without the edges */
  nodes: Array<EnqueuedScript>;
  /** Information about pagination in a connection. */
  pageInfo: ContentNodeToEnqueuedScriptConnectionPageInfo;
};

/** An edge in a connection */
export type ContentNodeToEnqueuedScriptConnectionEdge = Edge & EnqueuedScriptConnectionEdge & {
  __typename?: 'ContentNodeToEnqueuedScriptConnectionEdge';
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node: EnqueuedScript;
};

/** Page Info on the &quot;ContentNodeToEnqueuedScriptConnection&quot; */
export type ContentNodeToEnqueuedScriptConnectionPageInfo = EnqueuedScriptConnectionPageInfo & PageInfo & WpPageInfo & {
  __typename?: 'ContentNodeToEnqueuedScriptConnectionPageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
};

/** Connection between the ContentNode type and the EnqueuedStylesheet type */
export type ContentNodeToEnqueuedStylesheetConnection = Connection & EnqueuedStylesheetConnection & {
  __typename?: 'ContentNodeToEnqueuedStylesheetConnection';
  /** Edges for the ContentNodeToEnqueuedStylesheetConnection connection */
  edges: Array<ContentNodeToEnqueuedStylesheetConnectionEdge>;
  /** The nodes of the connection, without the edges */
  nodes: Array<EnqueuedStylesheet>;
  /** Information about pagination in a connection. */
  pageInfo: ContentNodeToEnqueuedStylesheetConnectionPageInfo;
};

/** An edge in a connection */
export type ContentNodeToEnqueuedStylesheetConnectionEdge = Edge & EnqueuedStylesheetConnectionEdge & {
  __typename?: 'ContentNodeToEnqueuedStylesheetConnectionEdge';
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node: EnqueuedStylesheet;
};

/** Page Info on the &quot;ContentNodeToEnqueuedStylesheetConnection&quot; */
export type ContentNodeToEnqueuedStylesheetConnectionPageInfo = EnqueuedStylesheetConnectionPageInfo & PageInfo & WpPageInfo & {
  __typename?: 'ContentNodeToEnqueuedStylesheetConnectionPageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
};

/** The template assigned to a node of content */
export type ContentTemplate = {
  /** The name of the template */
  templateName?: Maybe<Scalars['String']>;
};

/** An Post Type object */
export type ContentType = Node & UniformResourceIdentifiable & {
  __typename?: 'ContentType';
  /** Whether this content type should can be exported. */
  canExport?: Maybe<Scalars['Boolean']>;
  /** @deprecated Deprecated in favor of using Next.js pages */
  conditionalTags?: Maybe<ConditionalTags>;
  /** Connection between the ContentType type and the Taxonomy type */
  connectedTaxonomies?: Maybe<ContentTypeToTaxonomyConnection>;
  /** Connection between the ContentType type and the ContentNode type */
  contentNodes?: Maybe<ContentTypeToContentNodeConnection>;
  /** Whether content of this type should be deleted when the author of it is deleted from the system. */
  deleteWithUser?: Maybe<Scalars['Boolean']>;
  /** Description of the content type. */
  description?: Maybe<Scalars['String']>;
  /** Whether to exclude nodes of this content type from front end search results. */
  excludeFromSearch?: Maybe<Scalars['Boolean']>;
  /** The plural name of the content type within the GraphQL Schema. */
  graphqlPluralName?: Maybe<Scalars['String']>;
  /** The singular name of the content type within the GraphQL Schema. */
  graphqlSingleName?: Maybe<Scalars['String']>;
  /** Whether this content type should have archives. Content archives are generated by type and by date. */
  hasArchive?: Maybe<Scalars['Boolean']>;
  /** Whether the content type is hierarchical, for example pages. */
  hierarchical?: Maybe<Scalars['Boolean']>;
  /** The globally unique identifier of the post-type object. */
  id: Scalars['ID'];
  /** Whether the node is a Content Node */
  isContentNode: Scalars['Boolean'];
  /** Whether this page is set to the static front page. */
  isFrontPage: Scalars['Boolean'];
  /** Whether this page is set to the blog posts page. */
  isPostsPage: Scalars['Boolean'];
  /** Whether the object is restricted from the current viewer */
  isRestricted?: Maybe<Scalars['Boolean']>;
  /** Whether the node is a Term */
  isTermNode: Scalars['Boolean'];
  /** Display name of the content type. */
  label?: Maybe<Scalars['String']>;
  /** Details about the content type labels. */
  labels?: Maybe<PostTypeLabelDetails>;
  /** The name of the icon file to display as a menu icon. */
  menuIcon?: Maybe<Scalars['String']>;
  /** The position of this post type in the menu. Only applies if show_in_menu is true. */
  menuPosition?: Maybe<Scalars['Int']>;
  /** The internal name of the post type. This should not be used for display purposes. */
  name?: Maybe<Scalars['String']>;
  /** Whether a content type is intended for use publicly either via the admin interface or by front-end users. While the default settings of exclude_from_search, publicly_queryable, show_ui, and show_in_nav_menus are inherited from public, each does not rely on this relationship and controls a very specific intention. */
  public?: Maybe<Scalars['Boolean']>;
  /** Whether queries can be performed on the front end for the content type as part of parse_request(). */
  publiclyQueryable?: Maybe<Scalars['Boolean']>;
  /** Name of content type to display in REST API &quot;wp/v2&quot; namespace. */
  restBase?: Maybe<Scalars['String']>;
  /** The REST Controller class assigned to handling this content type. */
  restControllerClass?: Maybe<Scalars['String']>;
  /** Makes this content type available via the admin bar. */
  showInAdminBar?: Maybe<Scalars['Boolean']>;
  /** Whether to add the content type to the GraphQL Schema. */
  showInGraphql?: Maybe<Scalars['Boolean']>;
  /** Where to show the content type in the admin menu. To work, $show_ui must be true. If true, the post type is shown in its own top level menu. If false, no menu is shown. If a string of an existing top level menu (eg. &quot;tools.php&quot; or &quot;edit.php?post_type=page&quot;), the post type will be placed as a sub-menu of that. */
  showInMenu?: Maybe<Scalars['Boolean']>;
  /** Makes this content type available for selection in navigation menus. */
  showInNavMenus?: Maybe<Scalars['Boolean']>;
  /** Whether the content type is associated with a route under the the REST API &quot;wp/v2&quot; namespace. */
  showInRest?: Maybe<Scalars['Boolean']>;
  /** Whether to generate and allow a UI for managing this content type in the admin. */
  showUi?: Maybe<Scalars['Boolean']>;
  templates?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** The unique resource identifier path */
  uri?: Maybe<Scalars['String']>;
};


/** An Post Type object */
export type ContentTypeConnectedTaxonomiesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


/** An Post Type object */
export type ContentTypeContentNodesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ContentTypeToContentNodeConnectionWhereArgs>;
};

/** Connection to ContentType Nodes */
export type ContentTypeConnection = {
  /** A list of edges (relational context) between RootQuery and connected ContentType Nodes */
  edges: Array<ContentTypeConnectionEdge>;
  /** A list of connected ContentType Nodes */
  nodes: Array<ContentType>;
  /** Information about pagination in a connection. */
  pageInfo: ContentTypeConnectionPageInfo;
};

/** Edge between a Node and a connected ContentType */
export type ContentTypeConnectionEdge = {
  /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
  cursor?: Maybe<Scalars['String']>;
  /** The connected ContentType Node */
  node: ContentType;
};

/** Page Info on the connected ContentTypeConnectionEdge */
export type ContentTypeConnectionPageInfo = {
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
};

/** Allowed Content Types */
export enum ContentTypeEnum {
  /** The Type of Content object */
  Attachment = 'ATTACHMENT',
  /** The Type of Content object */
  FaustExplanation = 'FAUST_EXPLANATION',
  /** The Type of Content object */
  FaustHowToGuide = 'FAUST_HOW_TO_GUIDE',
  /** The Type of Content object */
  FaustReference = 'FAUST_REFERENCE',
  /** The Type of Content object */
  FaustTutorial = 'FAUST_TUTORIAL',
  /** The Type of Content object */
  Page = 'PAGE',
  /** The Type of Content object */
  Post = 'POST'
}

/** The Type of Identifier used to fetch a single Content Type node. To be used along with the "id" field. Default is "ID". */
export enum ContentTypeIdTypeEnum {
  /** The globally unique ID */
  Id = 'ID',
  /** The name of the content type. */
  Name = 'NAME'
}

/** Connection between the ContentType type and the ContentNode type */
export type ContentTypeToContentNodeConnection = Connection & ContentNodeConnection & {
  __typename?: 'ContentTypeToContentNodeConnection';
  /** Edges for the ContentTypeToContentNodeConnection connection */
  edges: Array<ContentTypeToContentNodeConnectionEdge>;
  /** The nodes of the connection, without the edges */
  nodes: Array<ContentNode>;
  /** Information about pagination in a connection. */
  pageInfo: ContentTypeToContentNodeConnectionPageInfo;
};

/** An edge in a connection */
export type ContentTypeToContentNodeConnectionEdge = ContentNodeConnectionEdge & Edge & {
  __typename?: 'ContentTypeToContentNodeConnectionEdge';
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node: ContentNode;
};

/** Page Info on the &quot;ContentTypeToContentNodeConnection&quot; */
export type ContentTypeToContentNodeConnectionPageInfo = ContentNodeConnectionPageInfo & PageInfo & WpPageInfo & {
  __typename?: 'ContentTypeToContentNodeConnectionPageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
};

/** Arguments for filtering the ContentTypeToContentNodeConnection connection */
export type ContentTypeToContentNodeConnectionWhereArgs = {
  /** The Types of content to filter */
  contentTypes?: InputMaybe<Array<InputMaybe<ContentTypeEnum>>>;
  /** Filter the connection based on dates */
  dateQuery?: InputMaybe<DateQueryInput>;
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword?: InputMaybe<Scalars['Boolean']>;
  /** Specific database ID of the object */
  id?: InputMaybe<Scalars['Int']>;
  /** Array of IDs for the objects to retrieve */
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Get objects with a specific mimeType property */
  mimeType?: InputMaybe<MimeTypeEnum>;
  /** Slug / post_name of the object */
  name?: InputMaybe<Scalars['String']>;
  /** Specify objects to retrieve. Use slugs */
  nameIn?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** What paramater to use to order the objects by. */
  orderby?: InputMaybe<Array<InputMaybe<PostObjectsConnectionOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: InputMaybe<Scalars['ID']>;
  /** Specify objects whose parent is in an array */
  parentIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Specify posts whose parent is not in an array */
  parentNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Show posts with a specific password. */
  password?: InputMaybe<Scalars['String']>;
  /** Show Posts based on a keyword search */
  search?: InputMaybe<Scalars['String']>;
  /** Retrieve posts where post status is in an array. */
  stati?: InputMaybe<Array<InputMaybe<PostStatusEnum>>>;
  /** Show posts with a specific status. */
  status?: InputMaybe<PostStatusEnum>;
  /** Title of the object */
  title?: InputMaybe<Scalars['String']>;
};

/** Connection between the ContentType type and the Taxonomy type */
export type ContentTypeToTaxonomyConnection = Connection & TaxonomyConnection & {
  __typename?: 'ContentTypeToTaxonomyConnection';
  /** Edges for the ContentTypeToTaxonomyConnection connection */
  edges: Array<ContentTypeToTaxonomyConnectionEdge>;
  /** The nodes of the connection, without the edges */
  nodes: Array<Taxonomy>;
  /** Information about pagination in a connection. */
  pageInfo: ContentTypeToTaxonomyConnectionPageInfo;
};

/** An edge in a connection */
export type ContentTypeToTaxonomyConnectionEdge = Edge & TaxonomyConnectionEdge & {
  __typename?: 'ContentTypeToTaxonomyConnectionEdge';
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node: Taxonomy;
};

/** Page Info on the &quot;ContentTypeToTaxonomyConnection&quot; */
export type ContentTypeToTaxonomyConnectionPageInfo = PageInfo & TaxonomyConnectionPageInfo & WpPageInfo & {
  __typename?: 'ContentTypeToTaxonomyConnectionPageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
};

/** Allowed Content Types of the Category taxonomy. */
export enum ContentTypesOfCategoryEnum {
  /** The Type of Content object */
  Post = 'POST'
}

/** Allowed Content Types of the PostFormat taxonomy. */
export enum ContentTypesOfPostFormatEnum {
  /** The Type of Content object */
  Post = 'POST'
}

/** Allowed Content Types of the Tag taxonomy. */
export enum ContentTypesOfTagEnum {
  /** The Type of Content object */
  Post = 'POST'
}

/** A block used for editing the site */
export type CoreArchives = EditorBlock & PageEditorBlock & PostEditorBlock & {
  __typename?: 'CoreArchives';
  /** The API version of the Gutenberg Block */
  apiVersion?: Maybe<Scalars['Int']>;
  /** Attributes of the CoreArchives Block Type */
  attributes?: Maybe<CoreArchivesAttributes>;
  /** The name of the category the Block belongs to */
  blockEditorCategoryName?: Maybe<Scalars['String']>;
  /** The id of the Block */
  clientId?: Maybe<Scalars['String']>;
  /** CSS Classnames to apply to the block */
  cssClassNames?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** The inner blocks of the Block */
  innerBlocks?: Maybe<Array<Maybe<EditorBlock>>>;
  /** Whether the block is Dynamic (server rendered) */
  isDynamic: Scalars['Boolean'];
  /** The name of the block */
  name?: Maybe<Scalars['String']>;
  /** The parent id of the Block */
  parentClientId?: Maybe<Scalars['String']>;
  /** The rendered HTML for the block */
  renderedHtml?: Maybe<Scalars['String']>;
};

/** Attributes of the CoreArchives Block Type */
export type CoreArchivesAttributes = {
  __typename?: 'CoreArchivesAttributes';
  /** The &quot;align&quot; field on the &quot;CoreArchives&quot; block */
  align?: Maybe<Scalars['String']>;
  /** The &quot;className&quot; field on the &quot;CoreArchives&quot; block */
  className?: Maybe<Scalars['String']>;
  /** The &quot;displayAsDropdown&quot; field on the &quot;CoreArchives&quot; block */
  displayAsDropdown?: Maybe<Scalars['Boolean']>;
  /** The &quot;fontFamily&quot; field on the &quot;CoreArchives&quot; block */
  fontFamily?: Maybe<Scalars['String']>;
  /** The &quot;fontSize&quot; field on the &quot;CoreArchives&quot; block */
  fontSize?: Maybe<Scalars['String']>;
  /** The &quot;lock&quot; field on the &quot;CoreArchives&quot; block */
  lock?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;showLabel&quot; field on the &quot;CoreArchives&quot; block */
  showLabel?: Maybe<Scalars['Boolean']>;
  /** The &quot;showPostCounts&quot; field on the &quot;CoreArchives&quot; block */
  showPostCounts?: Maybe<Scalars['Boolean']>;
  /** The &quot;style&quot; field on the &quot;CoreArchives&quot; block */
  style?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;type&quot; field on the &quot;CoreArchives&quot; block */
  type?: Maybe<Scalars['String']>;
};

/** A block used for editing the site */
export type CoreAudio = BlockWithSupportsAnchor & EditorBlock & PageEditorBlock & PostEditorBlock & {
  __typename?: 'CoreAudio';
  /** The anchor field for the block. */
  anchor?: Maybe<Scalars['String']>;
  /** The API version of the Gutenberg Block */
  apiVersion?: Maybe<Scalars['Int']>;
  /** Attributes of the CoreAudio Block Type */
  attributes?: Maybe<CoreAudioAttributes>;
  /** The name of the category the Block belongs to */
  blockEditorCategoryName?: Maybe<Scalars['String']>;
  /** The id of the Block */
  clientId?: Maybe<Scalars['String']>;
  /** CSS Classnames to apply to the block */
  cssClassNames?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** The inner blocks of the Block */
  innerBlocks?: Maybe<Array<Maybe<EditorBlock>>>;
  /** Whether the block is Dynamic (server rendered) */
  isDynamic: Scalars['Boolean'];
  /** The name of the block */
  name?: Maybe<Scalars['String']>;
  /** The parent id of the Block */
  parentClientId?: Maybe<Scalars['String']>;
  /** The rendered HTML for the block */
  renderedHtml?: Maybe<Scalars['String']>;
};

/** Attributes of the CoreAudio Block Type */
export type CoreAudioAttributes = BlockWithSupportsAnchor & {
  __typename?: 'CoreAudioAttributes';
  /** The &quot;align&quot; field on the &quot;CoreAudio&quot; block */
  align?: Maybe<Scalars['String']>;
  /** The anchor field for the block. */
  anchor?: Maybe<Scalars['String']>;
  /** The &quot;autoplay&quot; field on the &quot;CoreAudio&quot; block */
  autoplay?: Maybe<Scalars['Boolean']>;
  /** The &quot;caption&quot; field on the &quot;CoreAudio&quot; block */
  caption?: Maybe<Scalars['String']>;
  /** The &quot;className&quot; field on the &quot;CoreAudio&quot; block */
  className?: Maybe<Scalars['String']>;
  /** The &quot;id&quot; field on the &quot;CoreAudio&quot; block */
  id?: Maybe<Scalars['Float']>;
  /** The &quot;lock&quot; field on the &quot;CoreAudio&quot; block */
  lock?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;loop&quot; field on the &quot;CoreAudio&quot; block */
  loop?: Maybe<Scalars['Boolean']>;
  /** The &quot;preload&quot; field on the &quot;CoreAudio&quot; block */
  preload?: Maybe<Scalars['String']>;
  /** The &quot;src&quot; field on the &quot;CoreAudio&quot; block */
  src?: Maybe<Scalars['String']>;
  /** The &quot;style&quot; field on the &quot;CoreAudio&quot; block */
  style?: Maybe<Scalars['BlockAttributesObject']>;
};

/** A block used for editing the site */
export type CoreAvatar = EditorBlock & PageEditorBlock & PostEditorBlock & {
  __typename?: 'CoreAvatar';
  /** The API version of the Gutenberg Block */
  apiVersion?: Maybe<Scalars['Int']>;
  /** Attributes of the CoreAvatar Block Type */
  attributes?: Maybe<CoreAvatarAttributes>;
  /** The name of the category the Block belongs to */
  blockEditorCategoryName?: Maybe<Scalars['String']>;
  /** The id of the Block */
  clientId?: Maybe<Scalars['String']>;
  /** CSS Classnames to apply to the block */
  cssClassNames?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** The inner blocks of the Block */
  innerBlocks?: Maybe<Array<Maybe<EditorBlock>>>;
  /** Whether the block is Dynamic (server rendered) */
  isDynamic: Scalars['Boolean'];
  /** The name of the block */
  name?: Maybe<Scalars['String']>;
  /** The parent id of the Block */
  parentClientId?: Maybe<Scalars['String']>;
  /** The rendered HTML for the block */
  renderedHtml?: Maybe<Scalars['String']>;
};

/** Attributes of the CoreAvatar Block Type */
export type CoreAvatarAttributes = {
  __typename?: 'CoreAvatarAttributes';
  /** The &quot;align&quot; field on the &quot;CoreAvatar&quot; block */
  align?: Maybe<Scalars['String']>;
  /** The &quot;borderColor&quot; field on the &quot;CoreAvatar&quot; block */
  borderColor?: Maybe<Scalars['String']>;
  /** The &quot;className&quot; field on the &quot;CoreAvatar&quot; block */
  className?: Maybe<Scalars['String']>;
  /** The &quot;isLink&quot; field on the &quot;CoreAvatar&quot; block */
  isLink?: Maybe<Scalars['Boolean']>;
  /** The &quot;linkTarget&quot; field on the &quot;CoreAvatar&quot; block */
  linkTarget?: Maybe<Scalars['String']>;
  /** The &quot;lock&quot; field on the &quot;CoreAvatar&quot; block */
  lock?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;size&quot; field on the &quot;CoreAvatar&quot; block */
  size?: Maybe<Scalars['Float']>;
  /** The &quot;style&quot; field on the &quot;CoreAvatar&quot; block */
  style?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;userId&quot; field on the &quot;CoreAvatar&quot; block */
  userId?: Maybe<Scalars['Float']>;
};

/** A block used for editing the site */
export type CoreBlock = EditorBlock & PageEditorBlock & PostEditorBlock & {
  __typename?: 'CoreBlock';
  /** The API version of the Gutenberg Block */
  apiVersion?: Maybe<Scalars['Int']>;
  /** Attributes of the CoreBlock Block Type */
  attributes?: Maybe<CoreBlockAttributes>;
  /** The name of the category the Block belongs to */
  blockEditorCategoryName?: Maybe<Scalars['String']>;
  /** The id of the Block */
  clientId?: Maybe<Scalars['String']>;
  /** CSS Classnames to apply to the block */
  cssClassNames?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** The inner blocks of the Block */
  innerBlocks?: Maybe<Array<Maybe<EditorBlock>>>;
  /** Whether the block is Dynamic (server rendered) */
  isDynamic: Scalars['Boolean'];
  /** The name of the block */
  name?: Maybe<Scalars['String']>;
  /** The parent id of the Block */
  parentClientId?: Maybe<Scalars['String']>;
  /** The rendered HTML for the block */
  renderedHtml?: Maybe<Scalars['String']>;
};

/** Attributes of the CoreBlock Block Type */
export type CoreBlockAttributes = {
  __typename?: 'CoreBlockAttributes';
  /** The &quot;lock&quot; field on the &quot;CoreBlock&quot; block */
  lock?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;ref&quot; field on the &quot;CoreBlock&quot; block */
  ref?: Maybe<Scalars['Float']>;
};

/** A block used for editing the site */
export type CoreButton = BlockWithSupportsAnchor & EditorBlock & PageEditorBlock & PostEditorBlock & {
  __typename?: 'CoreButton';
  /** The anchor field for the block. */
  anchor?: Maybe<Scalars['String']>;
  /** The API version of the Gutenberg Block */
  apiVersion?: Maybe<Scalars['Int']>;
  /** Attributes of the CoreButton Block Type */
  attributes?: Maybe<CoreButtonAttributes>;
  /** The name of the category the Block belongs to */
  blockEditorCategoryName?: Maybe<Scalars['String']>;
  /** The id of the Block */
  clientId?: Maybe<Scalars['String']>;
  /** CSS Classnames to apply to the block */
  cssClassNames?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** The inner blocks of the Block */
  innerBlocks?: Maybe<Array<Maybe<EditorBlock>>>;
  /** Whether the block is Dynamic (server rendered) */
  isDynamic: Scalars['Boolean'];
  /** The name of the block */
  name?: Maybe<Scalars['String']>;
  /** The parent id of the Block */
  parentClientId?: Maybe<Scalars['String']>;
  /** The rendered HTML for the block */
  renderedHtml?: Maybe<Scalars['String']>;
};

/** Attributes of the CoreButton Block Type */
export type CoreButtonAttributes = BlockWithSupportsAnchor & {
  __typename?: 'CoreButtonAttributes';
  /** The anchor field for the block. */
  anchor?: Maybe<Scalars['String']>;
  /** The &quot;backgroundColor&quot; field on the &quot;CoreButton&quot; block */
  backgroundColor?: Maybe<Scalars['String']>;
  /** The &quot;className&quot; field on the &quot;CoreButton&quot; block */
  className?: Maybe<Scalars['String']>;
  /** The &quot;fontFamily&quot; field on the &quot;CoreButton&quot; block */
  fontFamily?: Maybe<Scalars['String']>;
  /** The &quot;fontSize&quot; field on the &quot;CoreButton&quot; block */
  fontSize?: Maybe<Scalars['String']>;
  /** The &quot;gradient&quot; field on the &quot;CoreButton&quot; block */
  gradient?: Maybe<Scalars['String']>;
  /** The &quot;linkTarget&quot; field on the &quot;CoreButton&quot; block */
  linkTarget?: Maybe<Scalars['String']>;
  /** The &quot;lock&quot; field on the &quot;CoreButton&quot; block */
  lock?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;placeholder&quot; field on the &quot;CoreButton&quot; block */
  placeholder?: Maybe<Scalars['String']>;
  /** The &quot;rel&quot; field on the &quot;CoreButton&quot; block */
  rel?: Maybe<Scalars['String']>;
  /** The &quot;style&quot; field on the &quot;CoreButton&quot; block */
  style?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;text&quot; field on the &quot;CoreButton&quot; block */
  text?: Maybe<Scalars['String']>;
  /** The &quot;textAlign&quot; field on the &quot;CoreButton&quot; block */
  textAlign?: Maybe<Scalars['String']>;
  /** The &quot;textColor&quot; field on the &quot;CoreButton&quot; block */
  textColor?: Maybe<Scalars['String']>;
  /** The &quot;title&quot; field on the &quot;CoreButton&quot; block */
  title?: Maybe<Scalars['String']>;
  /** The &quot;url&quot; field on the &quot;CoreButton&quot; block */
  url?: Maybe<Scalars['String']>;
  /** The &quot;width&quot; field on the &quot;CoreButton&quot; block */
  width?: Maybe<Scalars['Float']>;
};

/** A block used for editing the site */
export type CoreButtons = BlockWithSupportsAnchor & EditorBlock & PageEditorBlock & PostEditorBlock & {
  __typename?: 'CoreButtons';
  /** The anchor field for the block. */
  anchor?: Maybe<Scalars['String']>;
  /** The API version of the Gutenberg Block */
  apiVersion?: Maybe<Scalars['Int']>;
  /** Attributes of the CoreButtons Block Type */
  attributes?: Maybe<CoreButtonsAttributes>;
  /** The name of the category the Block belongs to */
  blockEditorCategoryName?: Maybe<Scalars['String']>;
  /** The id of the Block */
  clientId?: Maybe<Scalars['String']>;
  /** CSS Classnames to apply to the block */
  cssClassNames?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** The inner blocks of the Block */
  innerBlocks?: Maybe<Array<Maybe<EditorBlock>>>;
  /** Whether the block is Dynamic (server rendered) */
  isDynamic: Scalars['Boolean'];
  /** The name of the block */
  name?: Maybe<Scalars['String']>;
  /** The parent id of the Block */
  parentClientId?: Maybe<Scalars['String']>;
  /** The rendered HTML for the block */
  renderedHtml?: Maybe<Scalars['String']>;
};

/** Attributes of the CoreButtons Block Type */
export type CoreButtonsAttributes = BlockWithSupportsAnchor & {
  __typename?: 'CoreButtonsAttributes';
  /** The &quot;align&quot; field on the &quot;CoreButtons&quot; block */
  align?: Maybe<Scalars['String']>;
  /** The anchor field for the block. */
  anchor?: Maybe<Scalars['String']>;
  /** The &quot;className&quot; field on the &quot;CoreButtons&quot; block */
  className?: Maybe<Scalars['String']>;
  /** The &quot;fontFamily&quot; field on the &quot;CoreButtons&quot; block */
  fontFamily?: Maybe<Scalars['String']>;
  /** The &quot;fontSize&quot; field on the &quot;CoreButtons&quot; block */
  fontSize?: Maybe<Scalars['String']>;
  /** The &quot;layout&quot; field on the &quot;CoreButtons&quot; block */
  layout?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;lock&quot; field on the &quot;CoreButtons&quot; block */
  lock?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;style&quot; field on the &quot;CoreButtons&quot; block */
  style?: Maybe<Scalars['BlockAttributesObject']>;
};

/** A block used for editing the site */
export type CoreCalendar = EditorBlock & PageEditorBlock & PostEditorBlock & {
  __typename?: 'CoreCalendar';
  /** The API version of the Gutenberg Block */
  apiVersion?: Maybe<Scalars['Int']>;
  /** Attributes of the CoreCalendar Block Type */
  attributes?: Maybe<CoreCalendarAttributes>;
  /** The name of the category the Block belongs to */
  blockEditorCategoryName?: Maybe<Scalars['String']>;
  /** The id of the Block */
  clientId?: Maybe<Scalars['String']>;
  /** CSS Classnames to apply to the block */
  cssClassNames?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** The inner blocks of the Block */
  innerBlocks?: Maybe<Array<Maybe<EditorBlock>>>;
  /** Whether the block is Dynamic (server rendered) */
  isDynamic: Scalars['Boolean'];
  /** The name of the block */
  name?: Maybe<Scalars['String']>;
  /** The parent id of the Block */
  parentClientId?: Maybe<Scalars['String']>;
  /** The rendered HTML for the block */
  renderedHtml?: Maybe<Scalars['String']>;
};

/** Attributes of the CoreCalendar Block Type */
export type CoreCalendarAttributes = {
  __typename?: 'CoreCalendarAttributes';
  /** The &quot;align&quot; field on the &quot;CoreCalendar&quot; block */
  align?: Maybe<Scalars['String']>;
  /** The &quot;backgroundColor&quot; field on the &quot;CoreCalendar&quot; block */
  backgroundColor?: Maybe<Scalars['String']>;
  /** The &quot;className&quot; field on the &quot;CoreCalendar&quot; block */
  className?: Maybe<Scalars['String']>;
  /** The &quot;fontFamily&quot; field on the &quot;CoreCalendar&quot; block */
  fontFamily?: Maybe<Scalars['String']>;
  /** The &quot;fontSize&quot; field on the &quot;CoreCalendar&quot; block */
  fontSize?: Maybe<Scalars['String']>;
  /** The &quot;lock&quot; field on the &quot;CoreCalendar&quot; block */
  lock?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;month&quot; field on the &quot;CoreCalendar&quot; block */
  month?: Maybe<Scalars['Int']>;
  /** The &quot;style&quot; field on the &quot;CoreCalendar&quot; block */
  style?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;textColor&quot; field on the &quot;CoreCalendar&quot; block */
  textColor?: Maybe<Scalars['String']>;
  /** The &quot;year&quot; field on the &quot;CoreCalendar&quot; block */
  year?: Maybe<Scalars['Int']>;
};

/** A block used for editing the site */
export type CoreCategories = EditorBlock & PageEditorBlock & PostEditorBlock & {
  __typename?: 'CoreCategories';
  /** The API version of the Gutenberg Block */
  apiVersion?: Maybe<Scalars['Int']>;
  /** Attributes of the CoreCategories Block Type */
  attributes?: Maybe<CoreCategoriesAttributes>;
  /** The name of the category the Block belongs to */
  blockEditorCategoryName?: Maybe<Scalars['String']>;
  /** The id of the Block */
  clientId?: Maybe<Scalars['String']>;
  /** CSS Classnames to apply to the block */
  cssClassNames?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** The inner blocks of the Block */
  innerBlocks?: Maybe<Array<Maybe<EditorBlock>>>;
  /** Whether the block is Dynamic (server rendered) */
  isDynamic: Scalars['Boolean'];
  /** The name of the block */
  name?: Maybe<Scalars['String']>;
  /** The parent id of the Block */
  parentClientId?: Maybe<Scalars['String']>;
  /** The rendered HTML for the block */
  renderedHtml?: Maybe<Scalars['String']>;
};

/** Attributes of the CoreCategories Block Type */
export type CoreCategoriesAttributes = {
  __typename?: 'CoreCategoriesAttributes';
  /** The &quot;align&quot; field on the &quot;CoreCategories&quot; block */
  align?: Maybe<Scalars['String']>;
  /** The &quot;className&quot; field on the &quot;CoreCategories&quot; block */
  className?: Maybe<Scalars['String']>;
  /** The &quot;displayAsDropdown&quot; field on the &quot;CoreCategories&quot; block */
  displayAsDropdown?: Maybe<Scalars['Boolean']>;
  /** The &quot;fontFamily&quot; field on the &quot;CoreCategories&quot; block */
  fontFamily?: Maybe<Scalars['String']>;
  /** The &quot;fontSize&quot; field on the &quot;CoreCategories&quot; block */
  fontSize?: Maybe<Scalars['String']>;
  /** The &quot;lock&quot; field on the &quot;CoreCategories&quot; block */
  lock?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;showEmpty&quot; field on the &quot;CoreCategories&quot; block */
  showEmpty?: Maybe<Scalars['Boolean']>;
  /** The &quot;showHierarchy&quot; field on the &quot;CoreCategories&quot; block */
  showHierarchy?: Maybe<Scalars['Boolean']>;
  /** The &quot;showOnlyTopLevel&quot; field on the &quot;CoreCategories&quot; block */
  showOnlyTopLevel?: Maybe<Scalars['Boolean']>;
  /** The &quot;showPostCounts&quot; field on the &quot;CoreCategories&quot; block */
  showPostCounts?: Maybe<Scalars['Boolean']>;
  /** The &quot;style&quot; field on the &quot;CoreCategories&quot; block */
  style?: Maybe<Scalars['BlockAttributesObject']>;
};

/** A block used for editing the site */
export type CoreCode = BlockWithSupportsAnchor & EditorBlock & PageEditorBlock & PostEditorBlock & {
  __typename?: 'CoreCode';
  /** The anchor field for the block. */
  anchor?: Maybe<Scalars['String']>;
  /** The API version of the Gutenberg Block */
  apiVersion?: Maybe<Scalars['Int']>;
  /** Attributes of the CoreCode Block Type */
  attributes?: Maybe<CoreCodeAttributes>;
  /** The name of the category the Block belongs to */
  blockEditorCategoryName?: Maybe<Scalars['String']>;
  /** The id of the Block */
  clientId?: Maybe<Scalars['String']>;
  /** CSS Classnames to apply to the block */
  cssClassNames?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** The inner blocks of the Block */
  innerBlocks?: Maybe<Array<Maybe<EditorBlock>>>;
  /** Whether the block is Dynamic (server rendered) */
  isDynamic: Scalars['Boolean'];
  /** The name of the block */
  name?: Maybe<Scalars['String']>;
  /** The parent id of the Block */
  parentClientId?: Maybe<Scalars['String']>;
  /** The rendered HTML for the block */
  renderedHtml?: Maybe<Scalars['String']>;
};

/** Attributes of the CoreCode Block Type */
export type CoreCodeAttributes = BlockWithSupportsAnchor & {
  __typename?: 'CoreCodeAttributes';
  /** The anchor field for the block. */
  anchor?: Maybe<Scalars['String']>;
  /** The &quot;backgroundColor&quot; field on the &quot;CoreCode&quot; block */
  backgroundColor?: Maybe<Scalars['String']>;
  /** The &quot;borderColor&quot; field on the &quot;CoreCode&quot; block */
  borderColor?: Maybe<Scalars['String']>;
  /** The &quot;className&quot; field on the &quot;CoreCode&quot; block */
  className?: Maybe<Scalars['String']>;
  /** The &quot;content&quot; field on the &quot;CoreCode&quot; block */
  content?: Maybe<Scalars['String']>;
  /** The &quot;cssClassName&quot; field on the &quot;CoreCode&quot; block */
  cssClassName?: Maybe<Scalars['String']>;
  /** The &quot;fontFamily&quot; field on the &quot;CoreCode&quot; block */
  fontFamily?: Maybe<Scalars['String']>;
  /** The &quot;fontSize&quot; field on the &quot;CoreCode&quot; block */
  fontSize?: Maybe<Scalars['String']>;
  /** The &quot;gradient&quot; field on the &quot;CoreCode&quot; block */
  gradient?: Maybe<Scalars['String']>;
  /** The &quot;highlightedLines&quot; field on the &quot;CoreCode&quot; block */
  highlightedLines?: Maybe<Scalars['String']>;
  /** The &quot;language&quot; field on the &quot;CoreCode&quot; block */
  language?: Maybe<Scalars['String']>;
  /** The &quot;lock&quot; field on the &quot;CoreCode&quot; block */
  lock?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;showLineNumbers&quot; field on the &quot;CoreCode&quot; block */
  showLineNumbers?: Maybe<Scalars['Boolean']>;
  /** The &quot;style&quot; field on the &quot;CoreCode&quot; block */
  style?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;textColor&quot; field on the &quot;CoreCode&quot; block */
  textColor?: Maybe<Scalars['String']>;
  /** The &quot;wrapLines&quot; field on the &quot;CoreCode&quot; block */
  wrapLines?: Maybe<Scalars['Boolean']>;
};

/** A block used for editing the site */
export type CoreColumn = BlockWithSupportsAnchor & EditorBlock & PageEditorBlock & PostEditorBlock & {
  __typename?: 'CoreColumn';
  /** The anchor field for the block. */
  anchor?: Maybe<Scalars['String']>;
  /** The API version of the Gutenberg Block */
  apiVersion?: Maybe<Scalars['Int']>;
  /** Attributes of the CoreColumn Block Type */
  attributes?: Maybe<CoreColumnAttributes>;
  /** The name of the category the Block belongs to */
  blockEditorCategoryName?: Maybe<Scalars['String']>;
  /** The id of the Block */
  clientId?: Maybe<Scalars['String']>;
  /** CSS Classnames to apply to the block */
  cssClassNames?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** The inner blocks of the Block */
  innerBlocks?: Maybe<Array<Maybe<EditorBlock>>>;
  /** Whether the block is Dynamic (server rendered) */
  isDynamic: Scalars['Boolean'];
  /** The name of the block */
  name?: Maybe<Scalars['String']>;
  /** The parent id of the Block */
  parentClientId?: Maybe<Scalars['String']>;
  /** The rendered HTML for the block */
  renderedHtml?: Maybe<Scalars['String']>;
};

/** Attributes of the CoreColumn Block Type */
export type CoreColumnAttributes = BlockWithSupportsAnchor & {
  __typename?: 'CoreColumnAttributes';
  /** The &quot;allowedBlocks&quot; field on the &quot;CoreColumn&quot; block */
  allowedBlocks?: Maybe<Scalars['BlockAttributesObject']>;
  /** The anchor field for the block. */
  anchor?: Maybe<Scalars['String']>;
  /** The &quot;backgroundColor&quot; field on the &quot;CoreColumn&quot; block */
  backgroundColor?: Maybe<Scalars['String']>;
  /** The &quot;borderColor&quot; field on the &quot;CoreColumn&quot; block */
  borderColor?: Maybe<Scalars['String']>;
  /** The &quot;className&quot; field on the &quot;CoreColumn&quot; block */
  className?: Maybe<Scalars['String']>;
  /** The &quot;cssClassName&quot; field on the &quot;CoreColumn&quot; block */
  cssClassName?: Maybe<Scalars['String']>;
  /** The &quot;fontFamily&quot; field on the &quot;CoreColumn&quot; block */
  fontFamily?: Maybe<Scalars['String']>;
  /** The &quot;fontSize&quot; field on the &quot;CoreColumn&quot; block */
  fontSize?: Maybe<Scalars['String']>;
  /** The &quot;gradient&quot; field on the &quot;CoreColumn&quot; block */
  gradient?: Maybe<Scalars['String']>;
  /** The &quot;layout&quot; field on the &quot;CoreColumn&quot; block */
  layout?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;lock&quot; field on the &quot;CoreColumn&quot; block */
  lock?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;style&quot; field on the &quot;CoreColumn&quot; block */
  style?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;textColor&quot; field on the &quot;CoreColumn&quot; block */
  textColor?: Maybe<Scalars['String']>;
  /** The &quot;verticalAlignment&quot; field on the &quot;CoreColumn&quot; block */
  verticalAlignment?: Maybe<Scalars['String']>;
  /** The &quot;width&quot; field on the &quot;CoreColumn&quot; block */
  width?: Maybe<Scalars['String']>;
};

/** A block used for editing the site */
export type CoreColumns = BlockWithSupportsAnchor & EditorBlock & PageEditorBlock & PostEditorBlock & {
  __typename?: 'CoreColumns';
  /** The anchor field for the block. */
  anchor?: Maybe<Scalars['String']>;
  /** The API version of the Gutenberg Block */
  apiVersion?: Maybe<Scalars['Int']>;
  /** Attributes of the CoreColumns Block Type */
  attributes?: Maybe<CoreColumnsAttributes>;
  /** The name of the category the Block belongs to */
  blockEditorCategoryName?: Maybe<Scalars['String']>;
  /** The id of the Block */
  clientId?: Maybe<Scalars['String']>;
  /** CSS Classnames to apply to the block */
  cssClassNames?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** The inner blocks of the Block */
  innerBlocks?: Maybe<Array<Maybe<EditorBlock>>>;
  /** Whether the block is Dynamic (server rendered) */
  isDynamic: Scalars['Boolean'];
  /** The name of the block */
  name?: Maybe<Scalars['String']>;
  /** The parent id of the Block */
  parentClientId?: Maybe<Scalars['String']>;
  /** The rendered HTML for the block */
  renderedHtml?: Maybe<Scalars['String']>;
};

/** Attributes of the CoreColumns Block Type */
export type CoreColumnsAttributes = BlockWithSupportsAnchor & {
  __typename?: 'CoreColumnsAttributes';
  /** The &quot;align&quot; field on the &quot;CoreColumns&quot; block */
  align?: Maybe<Scalars['String']>;
  /** The anchor field for the block. */
  anchor?: Maybe<Scalars['String']>;
  /** The &quot;backgroundColor&quot; field on the &quot;CoreColumns&quot; block */
  backgroundColor?: Maybe<Scalars['String']>;
  /** The &quot;borderColor&quot; field on the &quot;CoreColumns&quot; block */
  borderColor?: Maybe<Scalars['String']>;
  /** The &quot;className&quot; field on the &quot;CoreColumns&quot; block */
  className?: Maybe<Scalars['String']>;
  /** The &quot;cssClassName&quot; field on the &quot;CoreColumns&quot; block */
  cssClassName?: Maybe<Scalars['String']>;
  /** The &quot;fontFamily&quot; field on the &quot;CoreColumns&quot; block */
  fontFamily?: Maybe<Scalars['String']>;
  /** The &quot;fontSize&quot; field on the &quot;CoreColumns&quot; block */
  fontSize?: Maybe<Scalars['String']>;
  /** The &quot;gradient&quot; field on the &quot;CoreColumns&quot; block */
  gradient?: Maybe<Scalars['String']>;
  /** The &quot;isStackedOnMobile&quot; field on the &quot;CoreColumns&quot; block */
  isStackedOnMobile?: Maybe<Scalars['Boolean']>;
  /** The &quot;layout&quot; field on the &quot;CoreColumns&quot; block */
  layout?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;lock&quot; field on the &quot;CoreColumns&quot; block */
  lock?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;style&quot; field on the &quot;CoreColumns&quot; block */
  style?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;textColor&quot; field on the &quot;CoreColumns&quot; block */
  textColor?: Maybe<Scalars['String']>;
  /** The &quot;verticalAlignment&quot; field on the &quot;CoreColumns&quot; block */
  verticalAlignment?: Maybe<Scalars['String']>;
};

/** A block used for editing the site */
export type CoreCommentAuthorName = EditorBlock & PageEditorBlock & PostEditorBlock & {
  __typename?: 'CoreCommentAuthorName';
  /** The API version of the Gutenberg Block */
  apiVersion?: Maybe<Scalars['Int']>;
  /** Attributes of the CoreCommentAuthorName Block Type */
  attributes?: Maybe<CoreCommentAuthorNameAttributes>;
  /** The name of the category the Block belongs to */
  blockEditorCategoryName?: Maybe<Scalars['String']>;
  /** The id of the Block */
  clientId?: Maybe<Scalars['String']>;
  /** CSS Classnames to apply to the block */
  cssClassNames?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** The inner blocks of the Block */
  innerBlocks?: Maybe<Array<Maybe<EditorBlock>>>;
  /** Whether the block is Dynamic (server rendered) */
  isDynamic: Scalars['Boolean'];
  /** The name of the block */
  name?: Maybe<Scalars['String']>;
  /** The parent id of the Block */
  parentClientId?: Maybe<Scalars['String']>;
  /** The rendered HTML for the block */
  renderedHtml?: Maybe<Scalars['String']>;
};

/** Attributes of the CoreCommentAuthorName Block Type */
export type CoreCommentAuthorNameAttributes = {
  __typename?: 'CoreCommentAuthorNameAttributes';
  /** The &quot;backgroundColor&quot; field on the &quot;CoreCommentAuthorName&quot; block */
  backgroundColor?: Maybe<Scalars['String']>;
  /** The &quot;className&quot; field on the &quot;CoreCommentAuthorName&quot; block */
  className?: Maybe<Scalars['String']>;
  /** The &quot;fontFamily&quot; field on the &quot;CoreCommentAuthorName&quot; block */
  fontFamily?: Maybe<Scalars['String']>;
  /** The &quot;fontSize&quot; field on the &quot;CoreCommentAuthorName&quot; block */
  fontSize?: Maybe<Scalars['String']>;
  /** The &quot;gradient&quot; field on the &quot;CoreCommentAuthorName&quot; block */
  gradient?: Maybe<Scalars['String']>;
  /** The &quot;isLink&quot; field on the &quot;CoreCommentAuthorName&quot; block */
  isLink?: Maybe<Scalars['Boolean']>;
  /** The &quot;linkTarget&quot; field on the &quot;CoreCommentAuthorName&quot; block */
  linkTarget?: Maybe<Scalars['String']>;
  /** The &quot;lock&quot; field on the &quot;CoreCommentAuthorName&quot; block */
  lock?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;style&quot; field on the &quot;CoreCommentAuthorName&quot; block */
  style?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;textAlign&quot; field on the &quot;CoreCommentAuthorName&quot; block */
  textAlign?: Maybe<Scalars['String']>;
  /** The &quot;textColor&quot; field on the &quot;CoreCommentAuthorName&quot; block */
  textColor?: Maybe<Scalars['String']>;
};

/** A block used for editing the site */
export type CoreCommentContent = EditorBlock & PageEditorBlock & PostEditorBlock & {
  __typename?: 'CoreCommentContent';
  /** The API version of the Gutenberg Block */
  apiVersion?: Maybe<Scalars['Int']>;
  /** Attributes of the CoreCommentContent Block Type */
  attributes?: Maybe<CoreCommentContentAttributes>;
  /** The name of the category the Block belongs to */
  blockEditorCategoryName?: Maybe<Scalars['String']>;
  /** The id of the Block */
  clientId?: Maybe<Scalars['String']>;
  /** CSS Classnames to apply to the block */
  cssClassNames?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** The inner blocks of the Block */
  innerBlocks?: Maybe<Array<Maybe<EditorBlock>>>;
  /** Whether the block is Dynamic (server rendered) */
  isDynamic: Scalars['Boolean'];
  /** The name of the block */
  name?: Maybe<Scalars['String']>;
  /** The parent id of the Block */
  parentClientId?: Maybe<Scalars['String']>;
  /** The rendered HTML for the block */
  renderedHtml?: Maybe<Scalars['String']>;
};

/** Attributes of the CoreCommentContent Block Type */
export type CoreCommentContentAttributes = {
  __typename?: 'CoreCommentContentAttributes';
  /** The &quot;backgroundColor&quot; field on the &quot;CoreCommentContent&quot; block */
  backgroundColor?: Maybe<Scalars['String']>;
  /** The &quot;className&quot; field on the &quot;CoreCommentContent&quot; block */
  className?: Maybe<Scalars['String']>;
  /** The &quot;fontFamily&quot; field on the &quot;CoreCommentContent&quot; block */
  fontFamily?: Maybe<Scalars['String']>;
  /** The &quot;fontSize&quot; field on the &quot;CoreCommentContent&quot; block */
  fontSize?: Maybe<Scalars['String']>;
  /** The &quot;gradient&quot; field on the &quot;CoreCommentContent&quot; block */
  gradient?: Maybe<Scalars['String']>;
  /** The &quot;lock&quot; field on the &quot;CoreCommentContent&quot; block */
  lock?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;style&quot; field on the &quot;CoreCommentContent&quot; block */
  style?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;textAlign&quot; field on the &quot;CoreCommentContent&quot; block */
  textAlign?: Maybe<Scalars['String']>;
  /** The &quot;textColor&quot; field on the &quot;CoreCommentContent&quot; block */
  textColor?: Maybe<Scalars['String']>;
};

/** A block used for editing the site */
export type CoreCommentDate = EditorBlock & PageEditorBlock & PostEditorBlock & {
  __typename?: 'CoreCommentDate';
  /** The API version of the Gutenberg Block */
  apiVersion?: Maybe<Scalars['Int']>;
  /** Attributes of the CoreCommentDate Block Type */
  attributes?: Maybe<CoreCommentDateAttributes>;
  /** The name of the category the Block belongs to */
  blockEditorCategoryName?: Maybe<Scalars['String']>;
  /** The id of the Block */
  clientId?: Maybe<Scalars['String']>;
  /** CSS Classnames to apply to the block */
  cssClassNames?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** The inner blocks of the Block */
  innerBlocks?: Maybe<Array<Maybe<EditorBlock>>>;
  /** Whether the block is Dynamic (server rendered) */
  isDynamic: Scalars['Boolean'];
  /** The name of the block */
  name?: Maybe<Scalars['String']>;
  /** The parent id of the Block */
  parentClientId?: Maybe<Scalars['String']>;
  /** The rendered HTML for the block */
  renderedHtml?: Maybe<Scalars['String']>;
};

/** Attributes of the CoreCommentDate Block Type */
export type CoreCommentDateAttributes = {
  __typename?: 'CoreCommentDateAttributes';
  /** The &quot;backgroundColor&quot; field on the &quot;CoreCommentDate&quot; block */
  backgroundColor?: Maybe<Scalars['String']>;
  /** The &quot;className&quot; field on the &quot;CoreCommentDate&quot; block */
  className?: Maybe<Scalars['String']>;
  /** The &quot;fontFamily&quot; field on the &quot;CoreCommentDate&quot; block */
  fontFamily?: Maybe<Scalars['String']>;
  /** The &quot;fontSize&quot; field on the &quot;CoreCommentDate&quot; block */
  fontSize?: Maybe<Scalars['String']>;
  /** The &quot;format&quot; field on the &quot;CoreCommentDate&quot; block */
  format?: Maybe<Scalars['String']>;
  /** The &quot;gradient&quot; field on the &quot;CoreCommentDate&quot; block */
  gradient?: Maybe<Scalars['String']>;
  /** The &quot;isLink&quot; field on the &quot;CoreCommentDate&quot; block */
  isLink?: Maybe<Scalars['Boolean']>;
  /** The &quot;lock&quot; field on the &quot;CoreCommentDate&quot; block */
  lock?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;style&quot; field on the &quot;CoreCommentDate&quot; block */
  style?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;textColor&quot; field on the &quot;CoreCommentDate&quot; block */
  textColor?: Maybe<Scalars['String']>;
};

/** A block used for editing the site */
export type CoreCommentEditLink = EditorBlock & PageEditorBlock & PostEditorBlock & {
  __typename?: 'CoreCommentEditLink';
  /** The API version of the Gutenberg Block */
  apiVersion?: Maybe<Scalars['Int']>;
  /** Attributes of the CoreCommentEditLink Block Type */
  attributes?: Maybe<CoreCommentEditLinkAttributes>;
  /** The name of the category the Block belongs to */
  blockEditorCategoryName?: Maybe<Scalars['String']>;
  /** The id of the Block */
  clientId?: Maybe<Scalars['String']>;
  /** CSS Classnames to apply to the block */
  cssClassNames?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** The inner blocks of the Block */
  innerBlocks?: Maybe<Array<Maybe<EditorBlock>>>;
  /** Whether the block is Dynamic (server rendered) */
  isDynamic: Scalars['Boolean'];
  /** The name of the block */
  name?: Maybe<Scalars['String']>;
  /** The parent id of the Block */
  parentClientId?: Maybe<Scalars['String']>;
  /** The rendered HTML for the block */
  renderedHtml?: Maybe<Scalars['String']>;
};

/** Attributes of the CoreCommentEditLink Block Type */
export type CoreCommentEditLinkAttributes = {
  __typename?: 'CoreCommentEditLinkAttributes';
  /** The &quot;backgroundColor&quot; field on the &quot;CoreCommentEditLink&quot; block */
  backgroundColor?: Maybe<Scalars['String']>;
  /** The &quot;className&quot; field on the &quot;CoreCommentEditLink&quot; block */
  className?: Maybe<Scalars['String']>;
  /** The &quot;fontFamily&quot; field on the &quot;CoreCommentEditLink&quot; block */
  fontFamily?: Maybe<Scalars['String']>;
  /** The &quot;fontSize&quot; field on the &quot;CoreCommentEditLink&quot; block */
  fontSize?: Maybe<Scalars['String']>;
  /** The &quot;gradient&quot; field on the &quot;CoreCommentEditLink&quot; block */
  gradient?: Maybe<Scalars['String']>;
  /** The &quot;linkTarget&quot; field on the &quot;CoreCommentEditLink&quot; block */
  linkTarget?: Maybe<Scalars['String']>;
  /** The &quot;lock&quot; field on the &quot;CoreCommentEditLink&quot; block */
  lock?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;style&quot; field on the &quot;CoreCommentEditLink&quot; block */
  style?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;textAlign&quot; field on the &quot;CoreCommentEditLink&quot; block */
  textAlign?: Maybe<Scalars['String']>;
};

/** A block used for editing the site */
export type CoreCommentReplyLink = EditorBlock & PageEditorBlock & PostEditorBlock & {
  __typename?: 'CoreCommentReplyLink';
  /** The API version of the Gutenberg Block */
  apiVersion?: Maybe<Scalars['Int']>;
  /** Attributes of the CoreCommentReplyLink Block Type */
  attributes?: Maybe<CoreCommentReplyLinkAttributes>;
  /** The name of the category the Block belongs to */
  blockEditorCategoryName?: Maybe<Scalars['String']>;
  /** The id of the Block */
  clientId?: Maybe<Scalars['String']>;
  /** CSS Classnames to apply to the block */
  cssClassNames?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** The inner blocks of the Block */
  innerBlocks?: Maybe<Array<Maybe<EditorBlock>>>;
  /** Whether the block is Dynamic (server rendered) */
  isDynamic: Scalars['Boolean'];
  /** The name of the block */
  name?: Maybe<Scalars['String']>;
  /** The parent id of the Block */
  parentClientId?: Maybe<Scalars['String']>;
  /** The rendered HTML for the block */
  renderedHtml?: Maybe<Scalars['String']>;
};

/** Attributes of the CoreCommentReplyLink Block Type */
export type CoreCommentReplyLinkAttributes = {
  __typename?: 'CoreCommentReplyLinkAttributes';
  /** The &quot;backgroundColor&quot; field on the &quot;CoreCommentReplyLink&quot; block */
  backgroundColor?: Maybe<Scalars['String']>;
  /** The &quot;className&quot; field on the &quot;CoreCommentReplyLink&quot; block */
  className?: Maybe<Scalars['String']>;
  /** The &quot;fontFamily&quot; field on the &quot;CoreCommentReplyLink&quot; block */
  fontFamily?: Maybe<Scalars['String']>;
  /** The &quot;fontSize&quot; field on the &quot;CoreCommentReplyLink&quot; block */
  fontSize?: Maybe<Scalars['String']>;
  /** The &quot;gradient&quot; field on the &quot;CoreCommentReplyLink&quot; block */
  gradient?: Maybe<Scalars['String']>;
  /** The &quot;lock&quot; field on the &quot;CoreCommentReplyLink&quot; block */
  lock?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;style&quot; field on the &quot;CoreCommentReplyLink&quot; block */
  style?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;textAlign&quot; field on the &quot;CoreCommentReplyLink&quot; block */
  textAlign?: Maybe<Scalars['String']>;
};

/** A block used for editing the site */
export type CoreCommentTemplate = EditorBlock & PageEditorBlock & PostEditorBlock & {
  __typename?: 'CoreCommentTemplate';
  /** The API version of the Gutenberg Block */
  apiVersion?: Maybe<Scalars['Int']>;
  /** Attributes of the CoreCommentTemplate Block Type */
  attributes?: Maybe<CoreCommentTemplateAttributes>;
  /** The name of the category the Block belongs to */
  blockEditorCategoryName?: Maybe<Scalars['String']>;
  /** The id of the Block */
  clientId?: Maybe<Scalars['String']>;
  /** CSS Classnames to apply to the block */
  cssClassNames?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** The inner blocks of the Block */
  innerBlocks?: Maybe<Array<Maybe<EditorBlock>>>;
  /** Whether the block is Dynamic (server rendered) */
  isDynamic: Scalars['Boolean'];
  /** The name of the block */
  name?: Maybe<Scalars['String']>;
  /** The parent id of the Block */
  parentClientId?: Maybe<Scalars['String']>;
  /** The rendered HTML for the block */
  renderedHtml?: Maybe<Scalars['String']>;
};

/** Attributes of the CoreCommentTemplate Block Type */
export type CoreCommentTemplateAttributes = {
  __typename?: 'CoreCommentTemplateAttributes';
  /** The &quot;align&quot; field on the &quot;CoreCommentTemplate&quot; block */
  align?: Maybe<Scalars['String']>;
  /** The &quot;className&quot; field on the &quot;CoreCommentTemplate&quot; block */
  className?: Maybe<Scalars['String']>;
  /** The &quot;fontFamily&quot; field on the &quot;CoreCommentTemplate&quot; block */
  fontFamily?: Maybe<Scalars['String']>;
  /** The &quot;fontSize&quot; field on the &quot;CoreCommentTemplate&quot; block */
  fontSize?: Maybe<Scalars['String']>;
  /** The &quot;lock&quot; field on the &quot;CoreCommentTemplate&quot; block */
  lock?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;style&quot; field on the &quot;CoreCommentTemplate&quot; block */
  style?: Maybe<Scalars['BlockAttributesObject']>;
};

/** A block used for editing the site */
export type CoreComments = EditorBlock & PageEditorBlock & PostEditorBlock & {
  __typename?: 'CoreComments';
  /** The API version of the Gutenberg Block */
  apiVersion?: Maybe<Scalars['Int']>;
  /** Attributes of the CoreComments Block Type */
  attributes?: Maybe<CoreCommentsAttributes>;
  /** The name of the category the Block belongs to */
  blockEditorCategoryName?: Maybe<Scalars['String']>;
  /** The id of the Block */
  clientId?: Maybe<Scalars['String']>;
  /** CSS Classnames to apply to the block */
  cssClassNames?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** The inner blocks of the Block */
  innerBlocks?: Maybe<Array<Maybe<EditorBlock>>>;
  /** Whether the block is Dynamic (server rendered) */
  isDynamic: Scalars['Boolean'];
  /** The name of the block */
  name?: Maybe<Scalars['String']>;
  /** The parent id of the Block */
  parentClientId?: Maybe<Scalars['String']>;
  /** The rendered HTML for the block */
  renderedHtml?: Maybe<Scalars['String']>;
};

/** Attributes of the CoreComments Block Type */
export type CoreCommentsAttributes = {
  __typename?: 'CoreCommentsAttributes';
  /** The &quot;align&quot; field on the &quot;CoreComments&quot; block */
  align?: Maybe<Scalars['String']>;
  /** The &quot;backgroundColor&quot; field on the &quot;CoreComments&quot; block */
  backgroundColor?: Maybe<Scalars['String']>;
  /** The &quot;className&quot; field on the &quot;CoreComments&quot; block */
  className?: Maybe<Scalars['String']>;
  /** The &quot;fontFamily&quot; field on the &quot;CoreComments&quot; block */
  fontFamily?: Maybe<Scalars['String']>;
  /** The &quot;fontSize&quot; field on the &quot;CoreComments&quot; block */
  fontSize?: Maybe<Scalars['String']>;
  /** The &quot;gradient&quot; field on the &quot;CoreComments&quot; block */
  gradient?: Maybe<Scalars['String']>;
  /** The &quot;legacy&quot; field on the &quot;CoreComments&quot; block */
  legacy?: Maybe<Scalars['Boolean']>;
  /** The &quot;lock&quot; field on the &quot;CoreComments&quot; block */
  lock?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;style&quot; field on the &quot;CoreComments&quot; block */
  style?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;tagName&quot; field on the &quot;CoreComments&quot; block */
  tagName?: Maybe<Scalars['String']>;
  /** The &quot;textColor&quot; field on the &quot;CoreComments&quot; block */
  textColor?: Maybe<Scalars['String']>;
};

/** A block used for editing the site */
export type CoreCommentsPagination = EditorBlock & PageEditorBlock & PostEditorBlock & {
  __typename?: 'CoreCommentsPagination';
  /** The API version of the Gutenberg Block */
  apiVersion?: Maybe<Scalars['Int']>;
  /** Attributes of the CoreCommentsPagination Block Type */
  attributes?: Maybe<CoreCommentsPaginationAttributes>;
  /** The name of the category the Block belongs to */
  blockEditorCategoryName?: Maybe<Scalars['String']>;
  /** The id of the Block */
  clientId?: Maybe<Scalars['String']>;
  /** CSS Classnames to apply to the block */
  cssClassNames?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** The inner blocks of the Block */
  innerBlocks?: Maybe<Array<Maybe<EditorBlock>>>;
  /** Whether the block is Dynamic (server rendered) */
  isDynamic: Scalars['Boolean'];
  /** The name of the block */
  name?: Maybe<Scalars['String']>;
  /** The parent id of the Block */
  parentClientId?: Maybe<Scalars['String']>;
  /** The rendered HTML for the block */
  renderedHtml?: Maybe<Scalars['String']>;
};

/** Attributes of the CoreCommentsPagination Block Type */
export type CoreCommentsPaginationAttributes = {
  __typename?: 'CoreCommentsPaginationAttributes';
  /** The &quot;align&quot; field on the &quot;CoreCommentsPagination&quot; block */
  align?: Maybe<Scalars['String']>;
  /** The &quot;backgroundColor&quot; field on the &quot;CoreCommentsPagination&quot; block */
  backgroundColor?: Maybe<Scalars['String']>;
  /** The &quot;className&quot; field on the &quot;CoreCommentsPagination&quot; block */
  className?: Maybe<Scalars['String']>;
  /** The &quot;fontFamily&quot; field on the &quot;CoreCommentsPagination&quot; block */
  fontFamily?: Maybe<Scalars['String']>;
  /** The &quot;fontSize&quot; field on the &quot;CoreCommentsPagination&quot; block */
  fontSize?: Maybe<Scalars['String']>;
  /** The &quot;gradient&quot; field on the &quot;CoreCommentsPagination&quot; block */
  gradient?: Maybe<Scalars['String']>;
  /** The &quot;layout&quot; field on the &quot;CoreCommentsPagination&quot; block */
  layout?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;lock&quot; field on the &quot;CoreCommentsPagination&quot; block */
  lock?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;paginationArrow&quot; field on the &quot;CoreCommentsPagination&quot; block */
  paginationArrow?: Maybe<Scalars['String']>;
  /** The &quot;style&quot; field on the &quot;CoreCommentsPagination&quot; block */
  style?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;textColor&quot; field on the &quot;CoreCommentsPagination&quot; block */
  textColor?: Maybe<Scalars['String']>;
};

/** A block used for editing the site */
export type CoreCommentsPaginationNext = EditorBlock & PageEditorBlock & PostEditorBlock & {
  __typename?: 'CoreCommentsPaginationNext';
  /** The API version of the Gutenberg Block */
  apiVersion?: Maybe<Scalars['Int']>;
  /** Attributes of the CoreCommentsPaginationNext Block Type */
  attributes?: Maybe<CoreCommentsPaginationNextAttributes>;
  /** The name of the category the Block belongs to */
  blockEditorCategoryName?: Maybe<Scalars['String']>;
  /** The id of the Block */
  clientId?: Maybe<Scalars['String']>;
  /** CSS Classnames to apply to the block */
  cssClassNames?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** The inner blocks of the Block */
  innerBlocks?: Maybe<Array<Maybe<EditorBlock>>>;
  /** Whether the block is Dynamic (server rendered) */
  isDynamic: Scalars['Boolean'];
  /** The name of the block */
  name?: Maybe<Scalars['String']>;
  /** The parent id of the Block */
  parentClientId?: Maybe<Scalars['String']>;
  /** The rendered HTML for the block */
  renderedHtml?: Maybe<Scalars['String']>;
};

/** Attributes of the CoreCommentsPaginationNext Block Type */
export type CoreCommentsPaginationNextAttributes = {
  __typename?: 'CoreCommentsPaginationNextAttributes';
  /** The &quot;backgroundColor&quot; field on the &quot;CoreCommentsPaginationNext&quot; block */
  backgroundColor?: Maybe<Scalars['String']>;
  /** The &quot;className&quot; field on the &quot;CoreCommentsPaginationNext&quot; block */
  className?: Maybe<Scalars['String']>;
  /** The &quot;fontFamily&quot; field on the &quot;CoreCommentsPaginationNext&quot; block */
  fontFamily?: Maybe<Scalars['String']>;
  /** The &quot;fontSize&quot; field on the &quot;CoreCommentsPaginationNext&quot; block */
  fontSize?: Maybe<Scalars['String']>;
  /** The &quot;gradient&quot; field on the &quot;CoreCommentsPaginationNext&quot; block */
  gradient?: Maybe<Scalars['String']>;
  /** The &quot;label&quot; field on the &quot;CoreCommentsPaginationNext&quot; block */
  label?: Maybe<Scalars['String']>;
  /** The &quot;lock&quot; field on the &quot;CoreCommentsPaginationNext&quot; block */
  lock?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;style&quot; field on the &quot;CoreCommentsPaginationNext&quot; block */
  style?: Maybe<Scalars['BlockAttributesObject']>;
};

/** A block used for editing the site */
export type CoreCommentsPaginationNumbers = EditorBlock & PageEditorBlock & PostEditorBlock & {
  __typename?: 'CoreCommentsPaginationNumbers';
  /** The API version of the Gutenberg Block */
  apiVersion?: Maybe<Scalars['Int']>;
  /** Attributes of the CoreCommentsPaginationNumbers Block Type */
  attributes?: Maybe<CoreCommentsPaginationNumbersAttributes>;
  /** The name of the category the Block belongs to */
  blockEditorCategoryName?: Maybe<Scalars['String']>;
  /** The id of the Block */
  clientId?: Maybe<Scalars['String']>;
  /** CSS Classnames to apply to the block */
  cssClassNames?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** The inner blocks of the Block */
  innerBlocks?: Maybe<Array<Maybe<EditorBlock>>>;
  /** Whether the block is Dynamic (server rendered) */
  isDynamic: Scalars['Boolean'];
  /** The name of the block */
  name?: Maybe<Scalars['String']>;
  /** The parent id of the Block */
  parentClientId?: Maybe<Scalars['String']>;
  /** The rendered HTML for the block */
  renderedHtml?: Maybe<Scalars['String']>;
};

/** Attributes of the CoreCommentsPaginationNumbers Block Type */
export type CoreCommentsPaginationNumbersAttributes = {
  __typename?: 'CoreCommentsPaginationNumbersAttributes';
  /** The &quot;backgroundColor&quot; field on the &quot;CoreCommentsPaginationNumbers&quot; block */
  backgroundColor?: Maybe<Scalars['String']>;
  /** The &quot;className&quot; field on the &quot;CoreCommentsPaginationNumbers&quot; block */
  className?: Maybe<Scalars['String']>;
  /** The &quot;fontFamily&quot; field on the &quot;CoreCommentsPaginationNumbers&quot; block */
  fontFamily?: Maybe<Scalars['String']>;
  /** The &quot;fontSize&quot; field on the &quot;CoreCommentsPaginationNumbers&quot; block */
  fontSize?: Maybe<Scalars['String']>;
  /** The &quot;gradient&quot; field on the &quot;CoreCommentsPaginationNumbers&quot; block */
  gradient?: Maybe<Scalars['String']>;
  /** The &quot;lock&quot; field on the &quot;CoreCommentsPaginationNumbers&quot; block */
  lock?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;style&quot; field on the &quot;CoreCommentsPaginationNumbers&quot; block */
  style?: Maybe<Scalars['BlockAttributesObject']>;
};

/** A block used for editing the site */
export type CoreCommentsPaginationPrevious = EditorBlock & PageEditorBlock & PostEditorBlock & {
  __typename?: 'CoreCommentsPaginationPrevious';
  /** The API version of the Gutenberg Block */
  apiVersion?: Maybe<Scalars['Int']>;
  /** Attributes of the CoreCommentsPaginationPrevious Block Type */
  attributes?: Maybe<CoreCommentsPaginationPreviousAttributes>;
  /** The name of the category the Block belongs to */
  blockEditorCategoryName?: Maybe<Scalars['String']>;
  /** The id of the Block */
  clientId?: Maybe<Scalars['String']>;
  /** CSS Classnames to apply to the block */
  cssClassNames?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** The inner blocks of the Block */
  innerBlocks?: Maybe<Array<Maybe<EditorBlock>>>;
  /** Whether the block is Dynamic (server rendered) */
  isDynamic: Scalars['Boolean'];
  /** The name of the block */
  name?: Maybe<Scalars['String']>;
  /** The parent id of the Block */
  parentClientId?: Maybe<Scalars['String']>;
  /** The rendered HTML for the block */
  renderedHtml?: Maybe<Scalars['String']>;
};

/** Attributes of the CoreCommentsPaginationPrevious Block Type */
export type CoreCommentsPaginationPreviousAttributes = {
  __typename?: 'CoreCommentsPaginationPreviousAttributes';
  /** The &quot;backgroundColor&quot; field on the &quot;CoreCommentsPaginationPrevious&quot; block */
  backgroundColor?: Maybe<Scalars['String']>;
  /** The &quot;className&quot; field on the &quot;CoreCommentsPaginationPrevious&quot; block */
  className?: Maybe<Scalars['String']>;
  /** The &quot;fontFamily&quot; field on the &quot;CoreCommentsPaginationPrevious&quot; block */
  fontFamily?: Maybe<Scalars['String']>;
  /** The &quot;fontSize&quot; field on the &quot;CoreCommentsPaginationPrevious&quot; block */
  fontSize?: Maybe<Scalars['String']>;
  /** The &quot;gradient&quot; field on the &quot;CoreCommentsPaginationPrevious&quot; block */
  gradient?: Maybe<Scalars['String']>;
  /** The &quot;label&quot; field on the &quot;CoreCommentsPaginationPrevious&quot; block */
  label?: Maybe<Scalars['String']>;
  /** The &quot;lock&quot; field on the &quot;CoreCommentsPaginationPrevious&quot; block */
  lock?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;style&quot; field on the &quot;CoreCommentsPaginationPrevious&quot; block */
  style?: Maybe<Scalars['BlockAttributesObject']>;
};

/** A block used for editing the site */
export type CoreCommentsTitle = EditorBlock & PageEditorBlock & PostEditorBlock & {
  __typename?: 'CoreCommentsTitle';
  /** The API version of the Gutenberg Block */
  apiVersion?: Maybe<Scalars['Int']>;
  /** Attributes of the CoreCommentsTitle Block Type */
  attributes?: Maybe<CoreCommentsTitleAttributes>;
  /** The name of the category the Block belongs to */
  blockEditorCategoryName?: Maybe<Scalars['String']>;
  /** The id of the Block */
  clientId?: Maybe<Scalars['String']>;
  /** CSS Classnames to apply to the block */
  cssClassNames?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** The inner blocks of the Block */
  innerBlocks?: Maybe<Array<Maybe<EditorBlock>>>;
  /** Whether the block is Dynamic (server rendered) */
  isDynamic: Scalars['Boolean'];
  /** The name of the block */
  name?: Maybe<Scalars['String']>;
  /** The parent id of the Block */
  parentClientId?: Maybe<Scalars['String']>;
  /** The rendered HTML for the block */
  renderedHtml?: Maybe<Scalars['String']>;
};

/** Attributes of the CoreCommentsTitle Block Type */
export type CoreCommentsTitleAttributes = {
  __typename?: 'CoreCommentsTitleAttributes';
  /** The &quot;align&quot; field on the &quot;CoreCommentsTitle&quot; block */
  align?: Maybe<Scalars['String']>;
  /** The &quot;backgroundColor&quot; field on the &quot;CoreCommentsTitle&quot; block */
  backgroundColor?: Maybe<Scalars['String']>;
  /** The &quot;borderColor&quot; field on the &quot;CoreCommentsTitle&quot; block */
  borderColor?: Maybe<Scalars['String']>;
  /** The &quot;className&quot; field on the &quot;CoreCommentsTitle&quot; block */
  className?: Maybe<Scalars['String']>;
  /** The &quot;fontFamily&quot; field on the &quot;CoreCommentsTitle&quot; block */
  fontFamily?: Maybe<Scalars['String']>;
  /** The &quot;fontSize&quot; field on the &quot;CoreCommentsTitle&quot; block */
  fontSize?: Maybe<Scalars['String']>;
  /** The &quot;gradient&quot; field on the &quot;CoreCommentsTitle&quot; block */
  gradient?: Maybe<Scalars['String']>;
  /** The &quot;level&quot; field on the &quot;CoreCommentsTitle&quot; block */
  level?: Maybe<Scalars['Float']>;
  /** The &quot;lock&quot; field on the &quot;CoreCommentsTitle&quot; block */
  lock?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;showCommentsCount&quot; field on the &quot;CoreCommentsTitle&quot; block */
  showCommentsCount?: Maybe<Scalars['Boolean']>;
  /** The &quot;showPostTitle&quot; field on the &quot;CoreCommentsTitle&quot; block */
  showPostTitle?: Maybe<Scalars['Boolean']>;
  /** The &quot;style&quot; field on the &quot;CoreCommentsTitle&quot; block */
  style?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;textAlign&quot; field on the &quot;CoreCommentsTitle&quot; block */
  textAlign?: Maybe<Scalars['String']>;
  /** The &quot;textColor&quot; field on the &quot;CoreCommentsTitle&quot; block */
  textColor?: Maybe<Scalars['String']>;
};

/** A block used for editing the site */
export type CoreCover = BlockWithSupportsAnchor & EditorBlock & PageEditorBlock & PostEditorBlock & {
  __typename?: 'CoreCover';
  /** The anchor field for the block. */
  anchor?: Maybe<Scalars['String']>;
  /** The API version of the Gutenberg Block */
  apiVersion?: Maybe<Scalars['Int']>;
  /** Attributes of the CoreCover Block Type */
  attributes?: Maybe<CoreCoverAttributes>;
  /** The name of the category the Block belongs to */
  blockEditorCategoryName?: Maybe<Scalars['String']>;
  /** The id of the Block */
  clientId?: Maybe<Scalars['String']>;
  /** CSS Classnames to apply to the block */
  cssClassNames?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** The inner blocks of the Block */
  innerBlocks?: Maybe<Array<Maybe<EditorBlock>>>;
  /** Whether the block is Dynamic (server rendered) */
  isDynamic: Scalars['Boolean'];
  /** The name of the block */
  name?: Maybe<Scalars['String']>;
  /** The parent id of the Block */
  parentClientId?: Maybe<Scalars['String']>;
  /** The rendered HTML for the block */
  renderedHtml?: Maybe<Scalars['String']>;
};

/** Attributes of the CoreCover Block Type */
export type CoreCoverAttributes = BlockWithSupportsAnchor & {
  __typename?: 'CoreCoverAttributes';
  /** The &quot;align&quot; field on the &quot;CoreCover&quot; block */
  align?: Maybe<Scalars['String']>;
  /** The &quot;allowedBlocks&quot; field on the &quot;CoreCover&quot; block */
  allowedBlocks?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;alt&quot; field on the &quot;CoreCover&quot; block */
  alt?: Maybe<Scalars['String']>;
  /** The anchor field for the block. */
  anchor?: Maybe<Scalars['String']>;
  /** The &quot;backgroundType&quot; field on the &quot;CoreCover&quot; block */
  backgroundType?: Maybe<Scalars['String']>;
  /** The &quot;className&quot; field on the &quot;CoreCover&quot; block */
  className?: Maybe<Scalars['String']>;
  /** The &quot;contentPosition&quot; field on the &quot;CoreCover&quot; block */
  contentPosition?: Maybe<Scalars['String']>;
  /** The &quot;customGradient&quot; field on the &quot;CoreCover&quot; block */
  customGradient?: Maybe<Scalars['String']>;
  /** The &quot;customOverlayColor&quot; field on the &quot;CoreCover&quot; block */
  customOverlayColor?: Maybe<Scalars['String']>;
  /** The &quot;dimRatio&quot; field on the &quot;CoreCover&quot; block */
  dimRatio?: Maybe<Scalars['Float']>;
  /** The &quot;focalPoint&quot; field on the &quot;CoreCover&quot; block */
  focalPoint?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;fontFamily&quot; field on the &quot;CoreCover&quot; block */
  fontFamily?: Maybe<Scalars['String']>;
  /** The &quot;fontSize&quot; field on the &quot;CoreCover&quot; block */
  fontSize?: Maybe<Scalars['String']>;
  /** The &quot;gradient&quot; field on the &quot;CoreCover&quot; block */
  gradient?: Maybe<Scalars['String']>;
  /** The &quot;hasParallax&quot; field on the &quot;CoreCover&quot; block */
  hasParallax?: Maybe<Scalars['Boolean']>;
  /** The &quot;id&quot; field on the &quot;CoreCover&quot; block */
  id?: Maybe<Scalars['Float']>;
  /** The &quot;isDark&quot; field on the &quot;CoreCover&quot; block */
  isDark?: Maybe<Scalars['Boolean']>;
  /** The &quot;isRepeated&quot; field on the &quot;CoreCover&quot; block */
  isRepeated?: Maybe<Scalars['Boolean']>;
  /** The &quot;lock&quot; field on the &quot;CoreCover&quot; block */
  lock?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;minHeight&quot; field on the &quot;CoreCover&quot; block */
  minHeight?: Maybe<Scalars['Float']>;
  /** The &quot;minHeightUnit&quot; field on the &quot;CoreCover&quot; block */
  minHeightUnit?: Maybe<Scalars['String']>;
  /** The &quot;overlayColor&quot; field on the &quot;CoreCover&quot; block */
  overlayColor?: Maybe<Scalars['String']>;
  /** The &quot;style&quot; field on the &quot;CoreCover&quot; block */
  style?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;tagName&quot; field on the &quot;CoreCover&quot; block */
  tagName?: Maybe<Scalars['String']>;
  /** The &quot;url&quot; field on the &quot;CoreCover&quot; block */
  url?: Maybe<Scalars['String']>;
  /** The &quot;useFeaturedImage&quot; field on the &quot;CoreCover&quot; block */
  useFeaturedImage?: Maybe<Scalars['Boolean']>;
};

/** A block used for editing the site */
export type CoreEmbed = EditorBlock & PageEditorBlock & PostEditorBlock & {
  __typename?: 'CoreEmbed';
  /** The API version of the Gutenberg Block */
  apiVersion?: Maybe<Scalars['Int']>;
  /** Attributes of the CoreEmbed Block Type */
  attributes?: Maybe<CoreEmbedAttributes>;
  /** The name of the category the Block belongs to */
  blockEditorCategoryName?: Maybe<Scalars['String']>;
  /** The id of the Block */
  clientId?: Maybe<Scalars['String']>;
  /** CSS Classnames to apply to the block */
  cssClassNames?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** The inner blocks of the Block */
  innerBlocks?: Maybe<Array<Maybe<EditorBlock>>>;
  /** Whether the block is Dynamic (server rendered) */
  isDynamic: Scalars['Boolean'];
  /** The name of the block */
  name?: Maybe<Scalars['String']>;
  /** The parent id of the Block */
  parentClientId?: Maybe<Scalars['String']>;
  /** The rendered HTML for the block */
  renderedHtml?: Maybe<Scalars['String']>;
};

/** Attributes of the CoreEmbed Block Type */
export type CoreEmbedAttributes = {
  __typename?: 'CoreEmbedAttributes';
  /** The &quot;align&quot; field on the &quot;CoreEmbed&quot; block */
  align?: Maybe<Scalars['String']>;
  /** The &quot;allowResponsive&quot; field on the &quot;CoreEmbed&quot; block */
  allowResponsive?: Maybe<Scalars['Boolean']>;
  /** The &quot;caption&quot; field on the &quot;CoreEmbed&quot; block */
  caption?: Maybe<Scalars['String']>;
  /** The &quot;className&quot; field on the &quot;CoreEmbed&quot; block */
  className?: Maybe<Scalars['String']>;
  /** The &quot;lock&quot; field on the &quot;CoreEmbed&quot; block */
  lock?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;previewable&quot; field on the &quot;CoreEmbed&quot; block */
  previewable?: Maybe<Scalars['Boolean']>;
  /** The &quot;providerNameSlug&quot; field on the &quot;CoreEmbed&quot; block */
  providerNameSlug?: Maybe<Scalars['String']>;
  /** The &quot;responsive&quot; field on the &quot;CoreEmbed&quot; block */
  responsive?: Maybe<Scalars['Boolean']>;
  /** The &quot;type&quot; field on the &quot;CoreEmbed&quot; block */
  type?: Maybe<Scalars['String']>;
  /** The &quot;url&quot; field on the &quot;CoreEmbed&quot; block */
  url?: Maybe<Scalars['String']>;
};

/** A block used for editing the site */
export type CoreFile = BlockWithSupportsAnchor & EditorBlock & PageEditorBlock & PostEditorBlock & {
  __typename?: 'CoreFile';
  /** The anchor field for the block. */
  anchor?: Maybe<Scalars['String']>;
  /** The API version of the Gutenberg Block */
  apiVersion?: Maybe<Scalars['Int']>;
  /** Attributes of the CoreFile Block Type */
  attributes?: Maybe<CoreFileAttributes>;
  /** The name of the category the Block belongs to */
  blockEditorCategoryName?: Maybe<Scalars['String']>;
  /** The id of the Block */
  clientId?: Maybe<Scalars['String']>;
  /** CSS Classnames to apply to the block */
  cssClassNames?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** The inner blocks of the Block */
  innerBlocks?: Maybe<Array<Maybe<EditorBlock>>>;
  /** Whether the block is Dynamic (server rendered) */
  isDynamic: Scalars['Boolean'];
  /** The name of the block */
  name?: Maybe<Scalars['String']>;
  /** The parent id of the Block */
  parentClientId?: Maybe<Scalars['String']>;
  /** The rendered HTML for the block */
  renderedHtml?: Maybe<Scalars['String']>;
};

/** Attributes of the CoreFile Block Type */
export type CoreFileAttributes = BlockWithSupportsAnchor & {
  __typename?: 'CoreFileAttributes';
  /** The &quot;align&quot; field on the &quot;CoreFile&quot; block */
  align?: Maybe<Scalars['String']>;
  /** The anchor field for the block. */
  anchor?: Maybe<Scalars['String']>;
  /** The &quot;className&quot; field on the &quot;CoreFile&quot; block */
  className?: Maybe<Scalars['String']>;
  /** The &quot;displayPreview&quot; field on the &quot;CoreFile&quot; block */
  displayPreview?: Maybe<Scalars['Boolean']>;
  /** The &quot;downloadButtonText&quot; field on the &quot;CoreFile&quot; block */
  downloadButtonText?: Maybe<Scalars['String']>;
  /** The &quot;fileId&quot; field on the &quot;CoreFile&quot; block */
  fileId?: Maybe<Scalars['String']>;
  /** The &quot;fileName&quot; field on the &quot;CoreFile&quot; block */
  fileName?: Maybe<Scalars['String']>;
  /** The &quot;href&quot; field on the &quot;CoreFile&quot; block */
  href?: Maybe<Scalars['String']>;
  /** The &quot;id&quot; field on the &quot;CoreFile&quot; block */
  id?: Maybe<Scalars['Float']>;
  /** The &quot;lock&quot; field on the &quot;CoreFile&quot; block */
  lock?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;previewHeight&quot; field on the &quot;CoreFile&quot; block */
  previewHeight?: Maybe<Scalars['Float']>;
  /** The &quot;showDownloadButton&quot; field on the &quot;CoreFile&quot; block */
  showDownloadButton?: Maybe<Scalars['Boolean']>;
  /** The &quot;textLinkHref&quot; field on the &quot;CoreFile&quot; block */
  textLinkHref?: Maybe<Scalars['String']>;
  /** The &quot;textLinkTarget&quot; field on the &quot;CoreFile&quot; block */
  textLinkTarget?: Maybe<Scalars['String']>;
};

/** A block used for editing the site */
export type CoreFreeform = EditorBlock & PageEditorBlock & PostEditorBlock & {
  __typename?: 'CoreFreeform';
  /** The API version of the Gutenberg Block */
  apiVersion?: Maybe<Scalars['Int']>;
  /** Attributes of the CoreFreeform Block Type */
  attributes?: Maybe<CoreFreeformAttributes>;
  /** The name of the category the Block belongs to */
  blockEditorCategoryName?: Maybe<Scalars['String']>;
  /** The id of the Block */
  clientId?: Maybe<Scalars['String']>;
  /** CSS Classnames to apply to the block */
  cssClassNames?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** The inner blocks of the Block */
  innerBlocks?: Maybe<Array<Maybe<EditorBlock>>>;
  /** Whether the block is Dynamic (server rendered) */
  isDynamic: Scalars['Boolean'];
  /** The name of the block */
  name?: Maybe<Scalars['String']>;
  /** The parent id of the Block */
  parentClientId?: Maybe<Scalars['String']>;
  /** The rendered HTML for the block */
  renderedHtml?: Maybe<Scalars['String']>;
};

/** Attributes of the CoreFreeform Block Type */
export type CoreFreeformAttributes = {
  __typename?: 'CoreFreeformAttributes';
  /** The &quot;content&quot; field on the &quot;CoreFreeform&quot; block */
  content?: Maybe<Scalars['String']>;
  /** The &quot;lock&quot; field on the &quot;CoreFreeform&quot; block */
  lock?: Maybe<Scalars['BlockAttributesObject']>;
};

/** A block used for editing the site */
export type CoreGallery = BlockWithSupportsAnchor & EditorBlock & PageEditorBlock & PostEditorBlock & {
  __typename?: 'CoreGallery';
  /** The anchor field for the block. */
  anchor?: Maybe<Scalars['String']>;
  /** The API version of the Gutenberg Block */
  apiVersion?: Maybe<Scalars['Int']>;
  /** Attributes of the CoreGallery Block Type */
  attributes?: Maybe<CoreGalleryAttributes>;
  /** The name of the category the Block belongs to */
  blockEditorCategoryName?: Maybe<Scalars['String']>;
  /** The id of the Block */
  clientId?: Maybe<Scalars['String']>;
  /** CSS Classnames to apply to the block */
  cssClassNames?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** The inner blocks of the Block */
  innerBlocks?: Maybe<Array<Maybe<EditorBlock>>>;
  /** Whether the block is Dynamic (server rendered) */
  isDynamic: Scalars['Boolean'];
  /** The name of the block */
  name?: Maybe<Scalars['String']>;
  /** The parent id of the Block */
  parentClientId?: Maybe<Scalars['String']>;
  /** The rendered HTML for the block */
  renderedHtml?: Maybe<Scalars['String']>;
};

/** Attributes of the CoreGallery Block Type */
export type CoreGalleryAttributes = BlockWithSupportsAnchor & {
  __typename?: 'CoreGalleryAttributes';
  /** The &quot;align&quot; field on the &quot;CoreGallery&quot; block */
  align?: Maybe<Scalars['String']>;
  /** The &quot;allowResize&quot; field on the &quot;CoreGallery&quot; block */
  allowResize?: Maybe<Scalars['Boolean']>;
  /** The anchor field for the block. */
  anchor?: Maybe<Scalars['String']>;
  /** The &quot;backgroundColor&quot; field on the &quot;CoreGallery&quot; block */
  backgroundColor?: Maybe<Scalars['String']>;
  /** The &quot;caption&quot; field on the &quot;CoreGallery&quot; block */
  caption?: Maybe<Scalars['String']>;
  /** The &quot;className&quot; field on the &quot;CoreGallery&quot; block */
  className?: Maybe<Scalars['String']>;
  /** The &quot;columns&quot; field on the &quot;CoreGallery&quot; block */
  columns?: Maybe<Scalars['Float']>;
  /** The &quot;fixedHeight&quot; field on the &quot;CoreGallery&quot; block */
  fixedHeight?: Maybe<Scalars['Boolean']>;
  /** The &quot;gradient&quot; field on the &quot;CoreGallery&quot; block */
  gradient?: Maybe<Scalars['String']>;
  /** The &quot;ids&quot; field on the &quot;CoreGallery&quot; block */
  ids?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;imageCrop&quot; field on the &quot;CoreGallery&quot; block */
  imageCrop?: Maybe<Scalars['Boolean']>;
  /** The &quot;images&quot; field on the &quot;CoreGallery&quot; block */
  images?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;layout&quot; field on the &quot;CoreGallery&quot; block */
  layout?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;linkTarget&quot; field on the &quot;CoreGallery&quot; block */
  linkTarget?: Maybe<Scalars['String']>;
  /** The &quot;linkTo&quot; field on the &quot;CoreGallery&quot; block */
  linkTo?: Maybe<Scalars['String']>;
  /** The &quot;lock&quot; field on the &quot;CoreGallery&quot; block */
  lock?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;shortCodeTransforms&quot; field on the &quot;CoreGallery&quot; block */
  shortCodeTransforms?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;sizeSlug&quot; field on the &quot;CoreGallery&quot; block */
  sizeSlug?: Maybe<Scalars['String']>;
  /** The &quot;style&quot; field on the &quot;CoreGallery&quot; block */
  style?: Maybe<Scalars['BlockAttributesObject']>;
};

/** A block used for editing the site */
export type CoreGroup = BlockWithSupportsAnchor & EditorBlock & PageEditorBlock & PostEditorBlock & {
  __typename?: 'CoreGroup';
  /** The anchor field for the block. */
  anchor?: Maybe<Scalars['String']>;
  /** The API version of the Gutenberg Block */
  apiVersion?: Maybe<Scalars['Int']>;
  /** Attributes of the CoreGroup Block Type */
  attributes?: Maybe<CoreGroupAttributes>;
  /** The name of the category the Block belongs to */
  blockEditorCategoryName?: Maybe<Scalars['String']>;
  /** The id of the Block */
  clientId?: Maybe<Scalars['String']>;
  /** CSS Classnames to apply to the block */
  cssClassNames?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** The inner blocks of the Block */
  innerBlocks?: Maybe<Array<Maybe<EditorBlock>>>;
  /** Whether the block is Dynamic (server rendered) */
  isDynamic: Scalars['Boolean'];
  /** The name of the block */
  name?: Maybe<Scalars['String']>;
  /** The parent id of the Block */
  parentClientId?: Maybe<Scalars['String']>;
  /** The rendered HTML for the block */
  renderedHtml?: Maybe<Scalars['String']>;
};

/** Attributes of the CoreGroup Block Type */
export type CoreGroupAttributes = BlockWithSupportsAnchor & {
  __typename?: 'CoreGroupAttributes';
  /** The &quot;align&quot; field on the &quot;CoreGroup&quot; block */
  align?: Maybe<Scalars['String']>;
  /** The anchor field for the block. */
  anchor?: Maybe<Scalars['String']>;
  /** The &quot;backgroundColor&quot; field on the &quot;CoreGroup&quot; block */
  backgroundColor?: Maybe<Scalars['String']>;
  /** The &quot;borderColor&quot; field on the &quot;CoreGroup&quot; block */
  borderColor?: Maybe<Scalars['String']>;
  /** The &quot;className&quot; field on the &quot;CoreGroup&quot; block */
  className?: Maybe<Scalars['String']>;
  /** The &quot;fontFamily&quot; field on the &quot;CoreGroup&quot; block */
  fontFamily?: Maybe<Scalars['String']>;
  /** The &quot;fontSize&quot; field on the &quot;CoreGroup&quot; block */
  fontSize?: Maybe<Scalars['String']>;
  /** The &quot;gradient&quot; field on the &quot;CoreGroup&quot; block */
  gradient?: Maybe<Scalars['String']>;
  /** The &quot;layout&quot; field on the &quot;CoreGroup&quot; block */
  layout?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;lock&quot; field on the &quot;CoreGroup&quot; block */
  lock?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;style&quot; field on the &quot;CoreGroup&quot; block */
  style?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;tagName&quot; field on the &quot;CoreGroup&quot; block */
  tagName?: Maybe<Scalars['String']>;
  /** The &quot;textColor&quot; field on the &quot;CoreGroup&quot; block */
  textColor?: Maybe<Scalars['String']>;
};

/** A block used for editing the site */
export type CoreHeading = BlockWithSupportsAnchor & EditorBlock & PageEditorBlock & PostEditorBlock & {
  __typename?: 'CoreHeading';
  /** The anchor field for the block. */
  anchor?: Maybe<Scalars['String']>;
  /** The API version of the Gutenberg Block */
  apiVersion?: Maybe<Scalars['Int']>;
  /** Attributes of the CoreHeading Block Type */
  attributes?: Maybe<CoreHeadingAttributes>;
  /** The name of the category the Block belongs to */
  blockEditorCategoryName?: Maybe<Scalars['String']>;
  /** The id of the Block */
  clientId?: Maybe<Scalars['String']>;
  /** CSS Classnames to apply to the block */
  cssClassNames?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** The inner blocks of the Block */
  innerBlocks?: Maybe<Array<Maybe<EditorBlock>>>;
  /** Whether the block is Dynamic (server rendered) */
  isDynamic: Scalars['Boolean'];
  /** The name of the block */
  name?: Maybe<Scalars['String']>;
  /** The parent id of the Block */
  parentClientId?: Maybe<Scalars['String']>;
  /** The rendered HTML for the block */
  renderedHtml?: Maybe<Scalars['String']>;
};

/** Attributes of the CoreHeading Block Type */
export type CoreHeadingAttributes = BlockWithSupportsAnchor & {
  __typename?: 'CoreHeadingAttributes';
  /** The &quot;align&quot; field on the &quot;CoreHeading&quot; block */
  align?: Maybe<Scalars['String']>;
  /** The anchor field for the block. */
  anchor?: Maybe<Scalars['String']>;
  /** The &quot;backgroundColor&quot; field on the &quot;CoreHeading&quot; block */
  backgroundColor?: Maybe<Scalars['String']>;
  /** The &quot;className&quot; field on the &quot;CoreHeading&quot; block */
  className?: Maybe<Scalars['String']>;
  /** The &quot;content&quot; field on the &quot;CoreHeading&quot; block */
  content?: Maybe<Scalars['String']>;
  /** The &quot;fontFamily&quot; field on the &quot;CoreHeading&quot; block */
  fontFamily?: Maybe<Scalars['String']>;
  /** The &quot;fontSize&quot; field on the &quot;CoreHeading&quot; block */
  fontSize?: Maybe<Scalars['String']>;
  /** The &quot;gradient&quot; field on the &quot;CoreHeading&quot; block */
  gradient?: Maybe<Scalars['String']>;
  /** The &quot;level&quot; field on the &quot;CoreHeading&quot; block */
  level?: Maybe<Scalars['Float']>;
  /** The &quot;lock&quot; field on the &quot;CoreHeading&quot; block */
  lock?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;placeholder&quot; field on the &quot;CoreHeading&quot; block */
  placeholder?: Maybe<Scalars['String']>;
  /** The &quot;style&quot; field on the &quot;CoreHeading&quot; block */
  style?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;textAlign&quot; field on the &quot;CoreHeading&quot; block */
  textAlign?: Maybe<Scalars['String']>;
  /** The &quot;textColor&quot; field on the &quot;CoreHeading&quot; block */
  textColor?: Maybe<Scalars['String']>;
};

/** A block used for editing the site */
export type CoreHomeLink = EditorBlock & PageEditorBlock & PostEditorBlock & {
  __typename?: 'CoreHomeLink';
  /** The API version of the Gutenberg Block */
  apiVersion?: Maybe<Scalars['Int']>;
  /** Attributes of the CoreHomeLink Block Type */
  attributes?: Maybe<CoreHomeLinkAttributes>;
  /** The name of the category the Block belongs to */
  blockEditorCategoryName?: Maybe<Scalars['String']>;
  /** The id of the Block */
  clientId?: Maybe<Scalars['String']>;
  /** CSS Classnames to apply to the block */
  cssClassNames?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** The inner blocks of the Block */
  innerBlocks?: Maybe<Array<Maybe<EditorBlock>>>;
  /** Whether the block is Dynamic (server rendered) */
  isDynamic: Scalars['Boolean'];
  /** The name of the block */
  name?: Maybe<Scalars['String']>;
  /** The parent id of the Block */
  parentClientId?: Maybe<Scalars['String']>;
  /** The rendered HTML for the block */
  renderedHtml?: Maybe<Scalars['String']>;
};

/** Attributes of the CoreHomeLink Block Type */
export type CoreHomeLinkAttributes = {
  __typename?: 'CoreHomeLinkAttributes';
  /** The &quot;className&quot; field on the &quot;CoreHomeLink&quot; block */
  className?: Maybe<Scalars['String']>;
  /** The &quot;fontFamily&quot; field on the &quot;CoreHomeLink&quot; block */
  fontFamily?: Maybe<Scalars['String']>;
  /** The &quot;fontSize&quot; field on the &quot;CoreHomeLink&quot; block */
  fontSize?: Maybe<Scalars['String']>;
  /** The &quot;label&quot; field on the &quot;CoreHomeLink&quot; block */
  label?: Maybe<Scalars['String']>;
  /** The &quot;lock&quot; field on the &quot;CoreHomeLink&quot; block */
  lock?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;style&quot; field on the &quot;CoreHomeLink&quot; block */
  style?: Maybe<Scalars['BlockAttributesObject']>;
};

/** A block used for editing the site */
export type CoreHtml = EditorBlock & PageEditorBlock & PostEditorBlock & {
  __typename?: 'CoreHtml';
  /** The API version of the Gutenberg Block */
  apiVersion?: Maybe<Scalars['Int']>;
  /** Attributes of the CoreHtml Block Type */
  attributes?: Maybe<CoreHtmlAttributes>;
  /** The name of the category the Block belongs to */
  blockEditorCategoryName?: Maybe<Scalars['String']>;
  /** The id of the Block */
  clientId?: Maybe<Scalars['String']>;
  /** CSS Classnames to apply to the block */
  cssClassNames?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** The inner blocks of the Block */
  innerBlocks?: Maybe<Array<Maybe<EditorBlock>>>;
  /** Whether the block is Dynamic (server rendered) */
  isDynamic: Scalars['Boolean'];
  /** The name of the block */
  name?: Maybe<Scalars['String']>;
  /** The parent id of the Block */
  parentClientId?: Maybe<Scalars['String']>;
  /** The rendered HTML for the block */
  renderedHtml?: Maybe<Scalars['String']>;
};

/** Attributes of the CoreHtml Block Type */
export type CoreHtmlAttributes = {
  __typename?: 'CoreHtmlAttributes';
  /** The &quot;content&quot; field on the &quot;CoreHtml&quot; block */
  content?: Maybe<Scalars['String']>;
  /** The &quot;lock&quot; field on the &quot;CoreHtml&quot; block */
  lock?: Maybe<Scalars['BlockAttributesObject']>;
};

/** A block used for editing the site */
export type CoreImage = BlockWithSupportsAnchor & EditorBlock & PageEditorBlock & PostEditorBlock & {
  __typename?: 'CoreImage';
  /** The anchor field for the block. */
  anchor?: Maybe<Scalars['String']>;
  /** The API version of the Gutenberg Block */
  apiVersion?: Maybe<Scalars['Int']>;
  /** Attributes of the CoreImage Block Type */
  attributes?: Maybe<CoreImageAttributes>;
  /** The name of the category the Block belongs to */
  blockEditorCategoryName?: Maybe<Scalars['String']>;
  /** The id of the Block */
  clientId?: Maybe<Scalars['String']>;
  /** CSS Classnames to apply to the block */
  cssClassNames?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** The inner blocks of the Block */
  innerBlocks?: Maybe<Array<Maybe<EditorBlock>>>;
  /** Whether the block is Dynamic (server rendered) */
  isDynamic: Scalars['Boolean'];
  /** The name of the block */
  name?: Maybe<Scalars['String']>;
  /** The parent id of the Block */
  parentClientId?: Maybe<Scalars['String']>;
  /** The rendered HTML for the block */
  renderedHtml?: Maybe<Scalars['String']>;
};

/** Attributes of the CoreImage Block Type */
export type CoreImageAttributes = BlockWithSupportsAnchor & {
  __typename?: 'CoreImageAttributes';
  /** The &quot;align&quot; field on the &quot;CoreImage&quot; block */
  align?: Maybe<Scalars['String']>;
  /** The &quot;alt&quot; field on the &quot;CoreImage&quot; block */
  alt?: Maybe<Scalars['String']>;
  /** The anchor field for the block. */
  anchor?: Maybe<Scalars['String']>;
  /** The &quot;borderColor&quot; field on the &quot;CoreImage&quot; block */
  borderColor?: Maybe<Scalars['String']>;
  /** The &quot;caption&quot; field on the &quot;CoreImage&quot; block */
  caption?: Maybe<Scalars['String']>;
  /** The &quot;className&quot; field on the &quot;CoreImage&quot; block */
  className?: Maybe<Scalars['String']>;
  /** The &quot;cssClassName&quot; field on the &quot;CoreImage&quot; block */
  cssClassName?: Maybe<Scalars['String']>;
  /** The &quot;height&quot; field on the &quot;CoreImage&quot; block */
  height?: Maybe<Scalars['Float']>;
  /** The &quot;href&quot; field on the &quot;CoreImage&quot; block */
  href?: Maybe<Scalars['String']>;
  /** The &quot;id&quot; field on the &quot;CoreImage&quot; block */
  id?: Maybe<Scalars['Float']>;
  /** The &quot;linkClass&quot; field on the &quot;CoreImage&quot; block */
  linkClass?: Maybe<Scalars['String']>;
  /** The &quot;linkDestination&quot; field on the &quot;CoreImage&quot; block */
  linkDestination?: Maybe<Scalars['String']>;
  /** The &quot;linkTarget&quot; field on the &quot;CoreImage&quot; block */
  linkTarget?: Maybe<Scalars['String']>;
  /** The &quot;lock&quot; field on the &quot;CoreImage&quot; block */
  lock?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;rel&quot; field on the &quot;CoreImage&quot; block */
  rel?: Maybe<Scalars['String']>;
  /** The &quot;sizeSlug&quot; field on the &quot;CoreImage&quot; block */
  sizeSlug?: Maybe<Scalars['String']>;
  /** The &quot;src&quot; field on the &quot;CoreImage&quot; block */
  src?: Maybe<Scalars['String']>;
  /** The &quot;style&quot; field on the &quot;CoreImage&quot; block */
  style?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;title&quot; field on the &quot;CoreImage&quot; block */
  title?: Maybe<Scalars['String']>;
  /** The &quot;url&quot; field on the &quot;CoreImage&quot; block */
  url?: Maybe<Scalars['String']>;
  /** The &quot;width&quot; field on the &quot;CoreImage&quot; block */
  width?: Maybe<Scalars['Float']>;
};

/** A block used for editing the site */
export type CoreLatestComments = EditorBlock & PageEditorBlock & PostEditorBlock & {
  __typename?: 'CoreLatestComments';
  /** The API version of the Gutenberg Block */
  apiVersion?: Maybe<Scalars['Int']>;
  /** Attributes of the CoreLatestComments Block Type */
  attributes?: Maybe<CoreLatestCommentsAttributes>;
  /** The name of the category the Block belongs to */
  blockEditorCategoryName?: Maybe<Scalars['String']>;
  /** The id of the Block */
  clientId?: Maybe<Scalars['String']>;
  /** CSS Classnames to apply to the block */
  cssClassNames?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** The inner blocks of the Block */
  innerBlocks?: Maybe<Array<Maybe<EditorBlock>>>;
  /** Whether the block is Dynamic (server rendered) */
  isDynamic: Scalars['Boolean'];
  /** The name of the block */
  name?: Maybe<Scalars['String']>;
  /** The parent id of the Block */
  parentClientId?: Maybe<Scalars['String']>;
  /** The rendered HTML for the block */
  renderedHtml?: Maybe<Scalars['String']>;
};

/** Attributes of the CoreLatestComments Block Type */
export type CoreLatestCommentsAttributes = {
  __typename?: 'CoreLatestCommentsAttributes';
  /** The &quot;align&quot; field on the &quot;CoreLatestComments&quot; block */
  align?: Maybe<Scalars['String']>;
  /** The &quot;className&quot; field on the &quot;CoreLatestComments&quot; block */
  className?: Maybe<Scalars['String']>;
  /** The &quot;commentsToShow&quot; field on the &quot;CoreLatestComments&quot; block */
  commentsToShow?: Maybe<Scalars['Float']>;
  /** The &quot;displayAvatar&quot; field on the &quot;CoreLatestComments&quot; block */
  displayAvatar?: Maybe<Scalars['Boolean']>;
  /** The &quot;displayDate&quot; field on the &quot;CoreLatestComments&quot; block */
  displayDate?: Maybe<Scalars['Boolean']>;
  /** The &quot;displayExcerpt&quot; field on the &quot;CoreLatestComments&quot; block */
  displayExcerpt?: Maybe<Scalars['Boolean']>;
  /** The &quot;lock&quot; field on the &quot;CoreLatestComments&quot; block */
  lock?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;style&quot; field on the &quot;CoreLatestComments&quot; block */
  style?: Maybe<Scalars['BlockAttributesObject']>;
};

/** A block used for editing the site */
export type CoreLatestPosts = EditorBlock & PageEditorBlock & PostEditorBlock & {
  __typename?: 'CoreLatestPosts';
  /** The API version of the Gutenberg Block */
  apiVersion?: Maybe<Scalars['Int']>;
  /** Attributes of the CoreLatestPosts Block Type */
  attributes?: Maybe<CoreLatestPostsAttributes>;
  /** The name of the category the Block belongs to */
  blockEditorCategoryName?: Maybe<Scalars['String']>;
  /** The id of the Block */
  clientId?: Maybe<Scalars['String']>;
  /** CSS Classnames to apply to the block */
  cssClassNames?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** The inner blocks of the Block */
  innerBlocks?: Maybe<Array<Maybe<EditorBlock>>>;
  /** Whether the block is Dynamic (server rendered) */
  isDynamic: Scalars['Boolean'];
  /** The name of the block */
  name?: Maybe<Scalars['String']>;
  /** The parent id of the Block */
  parentClientId?: Maybe<Scalars['String']>;
  /** The rendered HTML for the block */
  renderedHtml?: Maybe<Scalars['String']>;
};

/** Attributes of the CoreLatestPosts Block Type */
export type CoreLatestPostsAttributes = {
  __typename?: 'CoreLatestPostsAttributes';
  /** The &quot;addLinkToFeaturedImage&quot; field on the &quot;CoreLatestPosts&quot; block */
  addLinkToFeaturedImage?: Maybe<Scalars['Boolean']>;
  /** The &quot;align&quot; field on the &quot;CoreLatestPosts&quot; block */
  align?: Maybe<Scalars['String']>;
  /** The &quot;backgroundColor&quot; field on the &quot;CoreLatestPosts&quot; block */
  backgroundColor?: Maybe<Scalars['String']>;
  /** The &quot;categories&quot; field on the &quot;CoreLatestPosts&quot; block */
  categories?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;className&quot; field on the &quot;CoreLatestPosts&quot; block */
  className?: Maybe<Scalars['String']>;
  /** The &quot;columns&quot; field on the &quot;CoreLatestPosts&quot; block */
  columns?: Maybe<Scalars['Float']>;
  /** The &quot;displayAuthor&quot; field on the &quot;CoreLatestPosts&quot; block */
  displayAuthor?: Maybe<Scalars['Boolean']>;
  /** The &quot;displayFeaturedImage&quot; field on the &quot;CoreLatestPosts&quot; block */
  displayFeaturedImage?: Maybe<Scalars['Boolean']>;
  /** The &quot;displayPostContent&quot; field on the &quot;CoreLatestPosts&quot; block */
  displayPostContent?: Maybe<Scalars['Boolean']>;
  /** The &quot;displayPostContentRadio&quot; field on the &quot;CoreLatestPosts&quot; block */
  displayPostContentRadio?: Maybe<Scalars['String']>;
  /** The &quot;displayPostDate&quot; field on the &quot;CoreLatestPosts&quot; block */
  displayPostDate?: Maybe<Scalars['Boolean']>;
  /** The &quot;excerptLength&quot; field on the &quot;CoreLatestPosts&quot; block */
  excerptLength?: Maybe<Scalars['Float']>;
  /** The &quot;featuredImageAlign&quot; field on the &quot;CoreLatestPosts&quot; block */
  featuredImageAlign?: Maybe<Scalars['String']>;
  /** The &quot;featuredImageSizeHeight&quot; field on the &quot;CoreLatestPosts&quot; block */
  featuredImageSizeHeight?: Maybe<Scalars['Float']>;
  /** The &quot;featuredImageSizeSlug&quot; field on the &quot;CoreLatestPosts&quot; block */
  featuredImageSizeSlug?: Maybe<Scalars['String']>;
  /** The &quot;featuredImageSizeWidth&quot; field on the &quot;CoreLatestPosts&quot; block */
  featuredImageSizeWidth?: Maybe<Scalars['Float']>;
  /** The &quot;fontFamily&quot; field on the &quot;CoreLatestPosts&quot; block */
  fontFamily?: Maybe<Scalars['String']>;
  /** The &quot;fontSize&quot; field on the &quot;CoreLatestPosts&quot; block */
  fontSize?: Maybe<Scalars['String']>;
  /** The &quot;gradient&quot; field on the &quot;CoreLatestPosts&quot; block */
  gradient?: Maybe<Scalars['String']>;
  /** The &quot;lock&quot; field on the &quot;CoreLatestPosts&quot; block */
  lock?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;order&quot; field on the &quot;CoreLatestPosts&quot; block */
  order?: Maybe<Scalars['String']>;
  /** The &quot;orderBy&quot; field on the &quot;CoreLatestPosts&quot; block */
  orderBy?: Maybe<Scalars['String']>;
  /** The &quot;postLayout&quot; field on the &quot;CoreLatestPosts&quot; block */
  postLayout?: Maybe<Scalars['String']>;
  /** The &quot;postsToShow&quot; field on the &quot;CoreLatestPosts&quot; block */
  postsToShow?: Maybe<Scalars['Float']>;
  /** The &quot;selectedAuthor&quot; field on the &quot;CoreLatestPosts&quot; block */
  selectedAuthor?: Maybe<Scalars['Float']>;
  /** The &quot;style&quot; field on the &quot;CoreLatestPosts&quot; block */
  style?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;textColor&quot; field on the &quot;CoreLatestPosts&quot; block */
  textColor?: Maybe<Scalars['String']>;
};

/** A block used for editing the site */
export type CoreLegacyWidget = EditorBlock & PageEditorBlock & PostEditorBlock & {
  __typename?: 'CoreLegacyWidget';
  /** The API version of the Gutenberg Block */
  apiVersion?: Maybe<Scalars['Int']>;
  /** Attributes of the CoreLegacyWidget Block Type */
  attributes?: Maybe<CoreLegacyWidgetAttributes>;
  /** The name of the category the Block belongs to */
  blockEditorCategoryName?: Maybe<Scalars['String']>;
  /** The id of the Block */
  clientId?: Maybe<Scalars['String']>;
  /** CSS Classnames to apply to the block */
  cssClassNames?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** The inner blocks of the Block */
  innerBlocks?: Maybe<Array<Maybe<EditorBlock>>>;
  /** Whether the block is Dynamic (server rendered) */
  isDynamic: Scalars['Boolean'];
  /** The name of the block */
  name?: Maybe<Scalars['String']>;
  /** The parent id of the Block */
  parentClientId?: Maybe<Scalars['String']>;
  /** The rendered HTML for the block */
  renderedHtml?: Maybe<Scalars['String']>;
};

/** Attributes of the CoreLegacyWidget Block Type */
export type CoreLegacyWidgetAttributes = {
  __typename?: 'CoreLegacyWidgetAttributes';
  /** The &quot;id&quot; field on the &quot;CoreLegacyWidget&quot; block */
  id?: Maybe<Scalars['String']>;
  /** The &quot;idBase&quot; field on the &quot;CoreLegacyWidget&quot; block */
  idBase?: Maybe<Scalars['String']>;
  /** The &quot;instance&quot; field on the &quot;CoreLegacyWidget&quot; block */
  instance?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;lock&quot; field on the &quot;CoreLegacyWidget&quot; block */
  lock?: Maybe<Scalars['BlockAttributesObject']>;
};

/** A block used for editing the site */
export type CoreList = BlockWithSupportsAnchor & EditorBlock & PageEditorBlock & PostEditorBlock & {
  __typename?: 'CoreList';
  /** The anchor field for the block. */
  anchor?: Maybe<Scalars['String']>;
  /** The API version of the Gutenberg Block */
  apiVersion?: Maybe<Scalars['Int']>;
  /** Attributes of the CoreList Block Type */
  attributes?: Maybe<CoreListAttributes>;
  /** The name of the category the Block belongs to */
  blockEditorCategoryName?: Maybe<Scalars['String']>;
  /** The id of the Block */
  clientId?: Maybe<Scalars['String']>;
  /** CSS Classnames to apply to the block */
  cssClassNames?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** The inner blocks of the Block */
  innerBlocks?: Maybe<Array<Maybe<EditorBlock>>>;
  /** Whether the block is Dynamic (server rendered) */
  isDynamic: Scalars['Boolean'];
  /** The name of the block */
  name?: Maybe<Scalars['String']>;
  /** The parent id of the Block */
  parentClientId?: Maybe<Scalars['String']>;
  /** The rendered HTML for the block */
  renderedHtml?: Maybe<Scalars['String']>;
};

/** Attributes of the CoreList Block Type */
export type CoreListAttributes = BlockWithSupportsAnchor & {
  __typename?: 'CoreListAttributes';
  /** The anchor field for the block. */
  anchor?: Maybe<Scalars['String']>;
  /** The &quot;backgroundColor&quot; field on the &quot;CoreList&quot; block */
  backgroundColor?: Maybe<Scalars['String']>;
  /** The &quot;className&quot; field on the &quot;CoreList&quot; block */
  className?: Maybe<Scalars['String']>;
  /** The &quot;fontFamily&quot; field on the &quot;CoreList&quot; block */
  fontFamily?: Maybe<Scalars['String']>;
  /** The &quot;fontSize&quot; field on the &quot;CoreList&quot; block */
  fontSize?: Maybe<Scalars['String']>;
  /** The &quot;gradient&quot; field on the &quot;CoreList&quot; block */
  gradient?: Maybe<Scalars['String']>;
  /** The &quot;lock&quot; field on the &quot;CoreList&quot; block */
  lock?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;ordered&quot; field on the &quot;CoreList&quot; block */
  ordered?: Maybe<Scalars['Boolean']>;
  /** The &quot;placeholder&quot; field on the &quot;CoreList&quot; block */
  placeholder?: Maybe<Scalars['String']>;
  /** The &quot;reversed&quot; field on the &quot;CoreList&quot; block */
  reversed?: Maybe<Scalars['Boolean']>;
  /** The &quot;start&quot; field on the &quot;CoreList&quot; block */
  start?: Maybe<Scalars['Float']>;
  /** The &quot;style&quot; field on the &quot;CoreList&quot; block */
  style?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;textColor&quot; field on the &quot;CoreList&quot; block */
  textColor?: Maybe<Scalars['String']>;
  /** The &quot;type&quot; field on the &quot;CoreList&quot; block */
  type?: Maybe<Scalars['String']>;
  /** The &quot;values&quot; field on the &quot;CoreList&quot; block */
  values?: Maybe<Scalars['String']>;
};

/** A block used for editing the site */
export type CoreListItem = EditorBlock & PageEditorBlock & PostEditorBlock & {
  __typename?: 'CoreListItem';
  /** The API version of the Gutenberg Block */
  apiVersion?: Maybe<Scalars['Int']>;
  /** Attributes of the CoreListItem Block Type */
  attributes?: Maybe<CoreListItemAttributes>;
  /** The name of the category the Block belongs to */
  blockEditorCategoryName?: Maybe<Scalars['String']>;
  /** The id of the Block */
  clientId?: Maybe<Scalars['String']>;
  /** CSS Classnames to apply to the block */
  cssClassNames?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** The inner blocks of the Block */
  innerBlocks?: Maybe<Array<Maybe<EditorBlock>>>;
  /** Whether the block is Dynamic (server rendered) */
  isDynamic: Scalars['Boolean'];
  /** The name of the block */
  name?: Maybe<Scalars['String']>;
  /** The parent id of the Block */
  parentClientId?: Maybe<Scalars['String']>;
  /** The rendered HTML for the block */
  renderedHtml?: Maybe<Scalars['String']>;
};

/** Attributes of the CoreListItem Block Type */
export type CoreListItemAttributes = {
  __typename?: 'CoreListItemAttributes';
  /** The &quot;className&quot; field on the &quot;CoreListItem&quot; block */
  className?: Maybe<Scalars['String']>;
  /** The &quot;content&quot; field on the &quot;CoreListItem&quot; block */
  content?: Maybe<Scalars['String']>;
  /** The &quot;fontFamily&quot; field on the &quot;CoreListItem&quot; block */
  fontFamily?: Maybe<Scalars['String']>;
  /** The &quot;fontSize&quot; field on the &quot;CoreListItem&quot; block */
  fontSize?: Maybe<Scalars['String']>;
  /** The &quot;lock&quot; field on the &quot;CoreListItem&quot; block */
  lock?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;placeholder&quot; field on the &quot;CoreListItem&quot; block */
  placeholder?: Maybe<Scalars['String']>;
  /** The &quot;style&quot; field on the &quot;CoreListItem&quot; block */
  style?: Maybe<Scalars['BlockAttributesObject']>;
};

/** A block used for editing the site */
export type CoreLoginout = EditorBlock & PageEditorBlock & PostEditorBlock & {
  __typename?: 'CoreLoginout';
  /** The API version of the Gutenberg Block */
  apiVersion?: Maybe<Scalars['Int']>;
  /** Attributes of the CoreLoginout Block Type */
  attributes?: Maybe<CoreLoginoutAttributes>;
  /** The name of the category the Block belongs to */
  blockEditorCategoryName?: Maybe<Scalars['String']>;
  /** The id of the Block */
  clientId?: Maybe<Scalars['String']>;
  /** CSS Classnames to apply to the block */
  cssClassNames?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** The inner blocks of the Block */
  innerBlocks?: Maybe<Array<Maybe<EditorBlock>>>;
  /** Whether the block is Dynamic (server rendered) */
  isDynamic: Scalars['Boolean'];
  /** The name of the block */
  name?: Maybe<Scalars['String']>;
  /** The parent id of the Block */
  parentClientId?: Maybe<Scalars['String']>;
  /** The rendered HTML for the block */
  renderedHtml?: Maybe<Scalars['String']>;
};

/** Attributes of the CoreLoginout Block Type */
export type CoreLoginoutAttributes = {
  __typename?: 'CoreLoginoutAttributes';
  /** The &quot;className&quot; field on the &quot;CoreLoginout&quot; block */
  className?: Maybe<Scalars['String']>;
  /** The &quot;displayLoginAsForm&quot; field on the &quot;CoreLoginout&quot; block */
  displayLoginAsForm?: Maybe<Scalars['Boolean']>;
  /** The &quot;lock&quot; field on the &quot;CoreLoginout&quot; block */
  lock?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;redirectToCurrent&quot; field on the &quot;CoreLoginout&quot; block */
  redirectToCurrent?: Maybe<Scalars['Boolean']>;
};

/** A block used for editing the site */
export type CoreMediaText = BlockWithSupportsAnchor & EditorBlock & PageEditorBlock & PostEditorBlock & {
  __typename?: 'CoreMediaText';
  /** The anchor field for the block. */
  anchor?: Maybe<Scalars['String']>;
  /** The API version of the Gutenberg Block */
  apiVersion?: Maybe<Scalars['Int']>;
  /** Attributes of the CoreMediaText Block Type */
  attributes?: Maybe<CoreMediaTextAttributes>;
  /** The name of the category the Block belongs to */
  blockEditorCategoryName?: Maybe<Scalars['String']>;
  /** The id of the Block */
  clientId?: Maybe<Scalars['String']>;
  /** CSS Classnames to apply to the block */
  cssClassNames?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** The inner blocks of the Block */
  innerBlocks?: Maybe<Array<Maybe<EditorBlock>>>;
  /** Whether the block is Dynamic (server rendered) */
  isDynamic: Scalars['Boolean'];
  /** The name of the block */
  name?: Maybe<Scalars['String']>;
  /** The parent id of the Block */
  parentClientId?: Maybe<Scalars['String']>;
  /** The rendered HTML for the block */
  renderedHtml?: Maybe<Scalars['String']>;
};

/** Attributes of the CoreMediaText Block Type */
export type CoreMediaTextAttributes = BlockWithSupportsAnchor & {
  __typename?: 'CoreMediaTextAttributes';
  /** The &quot;align&quot; field on the &quot;CoreMediaText&quot; block */
  align?: Maybe<Scalars['String']>;
  /** The anchor field for the block. */
  anchor?: Maybe<Scalars['String']>;
  /** The &quot;backgroundColor&quot; field on the &quot;CoreMediaText&quot; block */
  backgroundColor?: Maybe<Scalars['String']>;
  /** The &quot;className&quot; field on the &quot;CoreMediaText&quot; block */
  className?: Maybe<Scalars['String']>;
  /** The &quot;focalPoint&quot; field on the &quot;CoreMediaText&quot; block */
  focalPoint?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;fontFamily&quot; field on the &quot;CoreMediaText&quot; block */
  fontFamily?: Maybe<Scalars['String']>;
  /** The &quot;fontSize&quot; field on the &quot;CoreMediaText&quot; block */
  fontSize?: Maybe<Scalars['String']>;
  /** The &quot;gradient&quot; field on the &quot;CoreMediaText&quot; block */
  gradient?: Maybe<Scalars['String']>;
  /** The &quot;href&quot; field on the &quot;CoreMediaText&quot; block */
  href?: Maybe<Scalars['String']>;
  /** The &quot;imageFill&quot; field on the &quot;CoreMediaText&quot; block */
  imageFill?: Maybe<Scalars['Boolean']>;
  /** The &quot;isStackedOnMobile&quot; field on the &quot;CoreMediaText&quot; block */
  isStackedOnMobile?: Maybe<Scalars['Boolean']>;
  /** The &quot;linkClass&quot; field on the &quot;CoreMediaText&quot; block */
  linkClass?: Maybe<Scalars['String']>;
  /** The &quot;linkDestination&quot; field on the &quot;CoreMediaText&quot; block */
  linkDestination?: Maybe<Scalars['String']>;
  /** The &quot;linkTarget&quot; field on the &quot;CoreMediaText&quot; block */
  linkTarget?: Maybe<Scalars['String']>;
  /** The &quot;lock&quot; field on the &quot;CoreMediaText&quot; block */
  lock?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;mediaAlt&quot; field on the &quot;CoreMediaText&quot; block */
  mediaAlt?: Maybe<Scalars['String']>;
  /** The &quot;mediaId&quot; field on the &quot;CoreMediaText&quot; block */
  mediaId?: Maybe<Scalars['Float']>;
  /** The &quot;mediaLink&quot; field on the &quot;CoreMediaText&quot; block */
  mediaLink?: Maybe<Scalars['String']>;
  /** The &quot;mediaPosition&quot; field on the &quot;CoreMediaText&quot; block */
  mediaPosition?: Maybe<Scalars['String']>;
  /** The &quot;mediaSizeSlug&quot; field on the &quot;CoreMediaText&quot; block */
  mediaSizeSlug?: Maybe<Scalars['String']>;
  /** The &quot;mediaType&quot; field on the &quot;CoreMediaText&quot; block */
  mediaType?: Maybe<Scalars['String']>;
  /** The &quot;mediaUrl&quot; field on the &quot;CoreMediaText&quot; block */
  mediaUrl?: Maybe<Scalars['String']>;
  /** The &quot;mediaWidth&quot; field on the &quot;CoreMediaText&quot; block */
  mediaWidth?: Maybe<Scalars['Float']>;
  /** The &quot;rel&quot; field on the &quot;CoreMediaText&quot; block */
  rel?: Maybe<Scalars['String']>;
  /** The &quot;style&quot; field on the &quot;CoreMediaText&quot; block */
  style?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;textColor&quot; field on the &quot;CoreMediaText&quot; block */
  textColor?: Maybe<Scalars['String']>;
  /** The &quot;verticalAlignment&quot; field on the &quot;CoreMediaText&quot; block */
  verticalAlignment?: Maybe<Scalars['String']>;
};

/** A block used for editing the site */
export type CoreMissing = EditorBlock & PageEditorBlock & PostEditorBlock & {
  __typename?: 'CoreMissing';
  /** The API version of the Gutenberg Block */
  apiVersion?: Maybe<Scalars['Int']>;
  /** Attributes of the CoreMissing Block Type */
  attributes?: Maybe<CoreMissingAttributes>;
  /** The name of the category the Block belongs to */
  blockEditorCategoryName?: Maybe<Scalars['String']>;
  /** The id of the Block */
  clientId?: Maybe<Scalars['String']>;
  /** CSS Classnames to apply to the block */
  cssClassNames?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** The inner blocks of the Block */
  innerBlocks?: Maybe<Array<Maybe<EditorBlock>>>;
  /** Whether the block is Dynamic (server rendered) */
  isDynamic: Scalars['Boolean'];
  /** The name of the block */
  name?: Maybe<Scalars['String']>;
  /** The parent id of the Block */
  parentClientId?: Maybe<Scalars['String']>;
  /** The rendered HTML for the block */
  renderedHtml?: Maybe<Scalars['String']>;
};

/** Attributes of the CoreMissing Block Type */
export type CoreMissingAttributes = {
  __typename?: 'CoreMissingAttributes';
  /** The &quot;lock&quot; field on the &quot;CoreMissing&quot; block */
  lock?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;originalContent&quot; field on the &quot;CoreMissing&quot; block */
  originalContent?: Maybe<Scalars['String']>;
  /** The &quot;originalName&quot; field on the &quot;CoreMissing&quot; block */
  originalName?: Maybe<Scalars['String']>;
  /** The &quot;originalUndelimitedContent&quot; field on the &quot;CoreMissing&quot; block */
  originalUndelimitedContent?: Maybe<Scalars['String']>;
};

/** A block used for editing the site */
export type CoreMore = EditorBlock & PageEditorBlock & PostEditorBlock & {
  __typename?: 'CoreMore';
  /** The API version of the Gutenberg Block */
  apiVersion?: Maybe<Scalars['Int']>;
  /** Attributes of the CoreMore Block Type */
  attributes?: Maybe<CoreMoreAttributes>;
  /** The name of the category the Block belongs to */
  blockEditorCategoryName?: Maybe<Scalars['String']>;
  /** The id of the Block */
  clientId?: Maybe<Scalars['String']>;
  /** CSS Classnames to apply to the block */
  cssClassNames?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** The inner blocks of the Block */
  innerBlocks?: Maybe<Array<Maybe<EditorBlock>>>;
  /** Whether the block is Dynamic (server rendered) */
  isDynamic: Scalars['Boolean'];
  /** The name of the block */
  name?: Maybe<Scalars['String']>;
  /** The parent id of the Block */
  parentClientId?: Maybe<Scalars['String']>;
  /** The rendered HTML for the block */
  renderedHtml?: Maybe<Scalars['String']>;
};

/** Attributes of the CoreMore Block Type */
export type CoreMoreAttributes = {
  __typename?: 'CoreMoreAttributes';
  /** The &quot;customText&quot; field on the &quot;CoreMore&quot; block */
  customText?: Maybe<Scalars['String']>;
  /** The &quot;lock&quot; field on the &quot;CoreMore&quot; block */
  lock?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;noTeaser&quot; field on the &quot;CoreMore&quot; block */
  noTeaser?: Maybe<Scalars['Boolean']>;
};

/** A block used for editing the site */
export type CoreNavigation = EditorBlock & PageEditorBlock & PostEditorBlock & {
  __typename?: 'CoreNavigation';
  /** The API version of the Gutenberg Block */
  apiVersion?: Maybe<Scalars['Int']>;
  /** Attributes of the CoreNavigation Block Type */
  attributes?: Maybe<CoreNavigationAttributes>;
  /** The name of the category the Block belongs to */
  blockEditorCategoryName?: Maybe<Scalars['String']>;
  /** The id of the Block */
  clientId?: Maybe<Scalars['String']>;
  /** CSS Classnames to apply to the block */
  cssClassNames?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** The inner blocks of the Block */
  innerBlocks?: Maybe<Array<Maybe<EditorBlock>>>;
  /** Whether the block is Dynamic (server rendered) */
  isDynamic: Scalars['Boolean'];
  /** The name of the block */
  name?: Maybe<Scalars['String']>;
  /** The parent id of the Block */
  parentClientId?: Maybe<Scalars['String']>;
  /** The rendered HTML for the block */
  renderedHtml?: Maybe<Scalars['String']>;
};

/** Attributes of the CoreNavigation Block Type */
export type CoreNavigationAttributes = {
  __typename?: 'CoreNavigationAttributes';
  /** The &quot;align&quot; field on the &quot;CoreNavigation&quot; block */
  align?: Maybe<Scalars['String']>;
  /** The &quot;backgroundColor&quot; field on the &quot;CoreNavigation&quot; block */
  backgroundColor?: Maybe<Scalars['String']>;
  /** The &quot;className&quot; field on the &quot;CoreNavigation&quot; block */
  className?: Maybe<Scalars['String']>;
  /** The &quot;customBackgroundColor&quot; field on the &quot;CoreNavigation&quot; block */
  customBackgroundColor?: Maybe<Scalars['String']>;
  /** The &quot;customOverlayBackgroundColor&quot; field on the &quot;CoreNavigation&quot; block */
  customOverlayBackgroundColor?: Maybe<Scalars['String']>;
  /** The &quot;customOverlayTextColor&quot; field on the &quot;CoreNavigation&quot; block */
  customOverlayTextColor?: Maybe<Scalars['String']>;
  /** The &quot;customTextColor&quot; field on the &quot;CoreNavigation&quot; block */
  customTextColor?: Maybe<Scalars['String']>;
  /** The &quot;fontFamily&quot; field on the &quot;CoreNavigation&quot; block */
  fontFamily?: Maybe<Scalars['String']>;
  /** The &quot;fontSize&quot; field on the &quot;CoreNavigation&quot; block */
  fontSize?: Maybe<Scalars['String']>;
  /** The &quot;hasIcon&quot; field on the &quot;CoreNavigation&quot; block */
  hasIcon?: Maybe<Scalars['Boolean']>;
  /** The &quot;icon&quot; field on the &quot;CoreNavigation&quot; block */
  icon?: Maybe<Scalars['String']>;
  /** The &quot;layout&quot; field on the &quot;CoreNavigation&quot; block */
  layout?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;lock&quot; field on the &quot;CoreNavigation&quot; block */
  lock?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;maxNestingLevel&quot; field on the &quot;CoreNavigation&quot; block */
  maxNestingLevel?: Maybe<Scalars['Float']>;
  /** The &quot;openSubmenusOnClick&quot; field on the &quot;CoreNavigation&quot; block */
  openSubmenusOnClick?: Maybe<Scalars['Boolean']>;
  /** The &quot;overlayBackgroundColor&quot; field on the &quot;CoreNavigation&quot; block */
  overlayBackgroundColor?: Maybe<Scalars['String']>;
  /** The &quot;overlayMenu&quot; field on the &quot;CoreNavigation&quot; block */
  overlayMenu?: Maybe<Scalars['String']>;
  /** The &quot;overlayTextColor&quot; field on the &quot;CoreNavigation&quot; block */
  overlayTextColor?: Maybe<Scalars['String']>;
  /** The &quot;ref&quot; field on the &quot;CoreNavigation&quot; block */
  ref?: Maybe<Scalars['Float']>;
  /** The &quot;rgbBackgroundColor&quot; field on the &quot;CoreNavigation&quot; block */
  rgbBackgroundColor?: Maybe<Scalars['String']>;
  /** The &quot;rgbTextColor&quot; field on the &quot;CoreNavigation&quot; block */
  rgbTextColor?: Maybe<Scalars['String']>;
  /** The &quot;showSubmenuIcon&quot; field on the &quot;CoreNavigation&quot; block */
  showSubmenuIcon?: Maybe<Scalars['Boolean']>;
  /** The &quot;style&quot; field on the &quot;CoreNavigation&quot; block */
  style?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;textColor&quot; field on the &quot;CoreNavigation&quot; block */
  textColor?: Maybe<Scalars['String']>;
  /** The &quot;__unstableLocation&quot; field on the &quot;CoreNavigation&quot; block */
  unstableLocation?: Maybe<Scalars['String']>;
};

/** A block used for editing the site */
export type CoreNavigationLink = EditorBlock & PageEditorBlock & PostEditorBlock & {
  __typename?: 'CoreNavigationLink';
  /** The API version of the Gutenberg Block */
  apiVersion?: Maybe<Scalars['Int']>;
  /** Attributes of the CoreNavigationLink Block Type */
  attributes?: Maybe<CoreNavigationLinkAttributes>;
  /** The name of the category the Block belongs to */
  blockEditorCategoryName?: Maybe<Scalars['String']>;
  /** The id of the Block */
  clientId?: Maybe<Scalars['String']>;
  /** CSS Classnames to apply to the block */
  cssClassNames?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** The inner blocks of the Block */
  innerBlocks?: Maybe<Array<Maybe<EditorBlock>>>;
  /** Whether the block is Dynamic (server rendered) */
  isDynamic: Scalars['Boolean'];
  /** The name of the block */
  name?: Maybe<Scalars['String']>;
  /** The parent id of the Block */
  parentClientId?: Maybe<Scalars['String']>;
  /** The rendered HTML for the block */
  renderedHtml?: Maybe<Scalars['String']>;
};

/** Attributes of the CoreNavigationLink Block Type */
export type CoreNavigationLinkAttributes = {
  __typename?: 'CoreNavigationLinkAttributes';
  /** The &quot;className&quot; field on the &quot;CoreNavigationLink&quot; block */
  className?: Maybe<Scalars['String']>;
  /** The &quot;description&quot; field on the &quot;CoreNavigationLink&quot; block */
  description?: Maybe<Scalars['String']>;
  /** The &quot;fontFamily&quot; field on the &quot;CoreNavigationLink&quot; block */
  fontFamily?: Maybe<Scalars['String']>;
  /** The &quot;fontSize&quot; field on the &quot;CoreNavigationLink&quot; block */
  fontSize?: Maybe<Scalars['String']>;
  /** The &quot;id&quot; field on the &quot;CoreNavigationLink&quot; block */
  id?: Maybe<Scalars['Float']>;
  /** The &quot;isTopLevelLink&quot; field on the &quot;CoreNavigationLink&quot; block */
  isTopLevelLink?: Maybe<Scalars['Boolean']>;
  /** The &quot;kind&quot; field on the &quot;CoreNavigationLink&quot; block */
  kind?: Maybe<Scalars['String']>;
  /** The &quot;label&quot; field on the &quot;CoreNavigationLink&quot; block */
  label?: Maybe<Scalars['String']>;
  /** The &quot;lock&quot; field on the &quot;CoreNavigationLink&quot; block */
  lock?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;opensInNewTab&quot; field on the &quot;CoreNavigationLink&quot; block */
  opensInNewTab?: Maybe<Scalars['Boolean']>;
  /** The &quot;rel&quot; field on the &quot;CoreNavigationLink&quot; block */
  rel?: Maybe<Scalars['String']>;
  /** The &quot;style&quot; field on the &quot;CoreNavigationLink&quot; block */
  style?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;title&quot; field on the &quot;CoreNavigationLink&quot; block */
  title?: Maybe<Scalars['String']>;
  /** The &quot;type&quot; field on the &quot;CoreNavigationLink&quot; block */
  type?: Maybe<Scalars['String']>;
  /** The &quot;url&quot; field on the &quot;CoreNavigationLink&quot; block */
  url?: Maybe<Scalars['String']>;
};

/** A block used for editing the site */
export type CoreNavigationSubmenu = EditorBlock & PageEditorBlock & PostEditorBlock & {
  __typename?: 'CoreNavigationSubmenu';
  /** The API version of the Gutenberg Block */
  apiVersion?: Maybe<Scalars['Int']>;
  /** Attributes of the CoreNavigationSubmenu Block Type */
  attributes?: Maybe<CoreNavigationSubmenuAttributes>;
  /** The name of the category the Block belongs to */
  blockEditorCategoryName?: Maybe<Scalars['String']>;
  /** The id of the Block */
  clientId?: Maybe<Scalars['String']>;
  /** CSS Classnames to apply to the block */
  cssClassNames?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** The inner blocks of the Block */
  innerBlocks?: Maybe<Array<Maybe<EditorBlock>>>;
  /** Whether the block is Dynamic (server rendered) */
  isDynamic: Scalars['Boolean'];
  /** The name of the block */
  name?: Maybe<Scalars['String']>;
  /** The parent id of the Block */
  parentClientId?: Maybe<Scalars['String']>;
  /** The rendered HTML for the block */
  renderedHtml?: Maybe<Scalars['String']>;
};

/** Attributes of the CoreNavigationSubmenu Block Type */
export type CoreNavigationSubmenuAttributes = {
  __typename?: 'CoreNavigationSubmenuAttributes';
  /** The &quot;className&quot; field on the &quot;CoreNavigationSubmenu&quot; block */
  className?: Maybe<Scalars['String']>;
  /** The &quot;description&quot; field on the &quot;CoreNavigationSubmenu&quot; block */
  description?: Maybe<Scalars['String']>;
  /** The &quot;id&quot; field on the &quot;CoreNavigationSubmenu&quot; block */
  id?: Maybe<Scalars['Float']>;
  /** The &quot;isTopLevelItem&quot; field on the &quot;CoreNavigationSubmenu&quot; block */
  isTopLevelItem?: Maybe<Scalars['Boolean']>;
  /** The &quot;kind&quot; field on the &quot;CoreNavigationSubmenu&quot; block */
  kind?: Maybe<Scalars['String']>;
  /** The &quot;label&quot; field on the &quot;CoreNavigationSubmenu&quot; block */
  label?: Maybe<Scalars['String']>;
  /** The &quot;lock&quot; field on the &quot;CoreNavigationSubmenu&quot; block */
  lock?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;opensInNewTab&quot; field on the &quot;CoreNavigationSubmenu&quot; block */
  opensInNewTab?: Maybe<Scalars['Boolean']>;
  /** The &quot;rel&quot; field on the &quot;CoreNavigationSubmenu&quot; block */
  rel?: Maybe<Scalars['String']>;
  /** The &quot;title&quot; field on the &quot;CoreNavigationSubmenu&quot; block */
  title?: Maybe<Scalars['String']>;
  /** The &quot;type&quot; field on the &quot;CoreNavigationSubmenu&quot; block */
  type?: Maybe<Scalars['String']>;
  /** The &quot;url&quot; field on the &quot;CoreNavigationSubmenu&quot; block */
  url?: Maybe<Scalars['String']>;
};

/** A block used for editing the site */
export type CoreNextpage = EditorBlock & PageEditorBlock & PostEditorBlock & {
  __typename?: 'CoreNextpage';
  /** The API version of the Gutenberg Block */
  apiVersion?: Maybe<Scalars['Int']>;
  /** Attributes of the CoreNextpage Block Type */
  attributes?: Maybe<CoreNextpageAttributes>;
  /** The name of the category the Block belongs to */
  blockEditorCategoryName?: Maybe<Scalars['String']>;
  /** The id of the Block */
  clientId?: Maybe<Scalars['String']>;
  /** CSS Classnames to apply to the block */
  cssClassNames?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** The inner blocks of the Block */
  innerBlocks?: Maybe<Array<Maybe<EditorBlock>>>;
  /** Whether the block is Dynamic (server rendered) */
  isDynamic: Scalars['Boolean'];
  /** The name of the block */
  name?: Maybe<Scalars['String']>;
  /** The parent id of the Block */
  parentClientId?: Maybe<Scalars['String']>;
  /** The rendered HTML for the block */
  renderedHtml?: Maybe<Scalars['String']>;
};

/** Attributes of the CoreNextpage Block Type */
export type CoreNextpageAttributes = {
  __typename?: 'CoreNextpageAttributes';
  /** The &quot;lock&quot; field on the &quot;CoreNextpage&quot; block */
  lock?: Maybe<Scalars['BlockAttributesObject']>;
};

/** A block used for editing the site */
export type CorePageList = EditorBlock & PageEditorBlock & PostEditorBlock & {
  __typename?: 'CorePageList';
  /** The API version of the Gutenberg Block */
  apiVersion?: Maybe<Scalars['Int']>;
  /** Attributes of the CorePageList Block Type */
  attributes?: Maybe<CorePageListAttributes>;
  /** The name of the category the Block belongs to */
  blockEditorCategoryName?: Maybe<Scalars['String']>;
  /** The id of the Block */
  clientId?: Maybe<Scalars['String']>;
  /** CSS Classnames to apply to the block */
  cssClassNames?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** The inner blocks of the Block */
  innerBlocks?: Maybe<Array<Maybe<EditorBlock>>>;
  /** Whether the block is Dynamic (server rendered) */
  isDynamic: Scalars['Boolean'];
  /** The name of the block */
  name?: Maybe<Scalars['String']>;
  /** The parent id of the Block */
  parentClientId?: Maybe<Scalars['String']>;
  /** The rendered HTML for the block */
  renderedHtml?: Maybe<Scalars['String']>;
};

/** Attributes of the CorePageList Block Type */
export type CorePageListAttributes = {
  __typename?: 'CorePageListAttributes';
  /** The &quot;className&quot; field on the &quot;CorePageList&quot; block */
  className?: Maybe<Scalars['String']>;
  /** The &quot;fontFamily&quot; field on the &quot;CorePageList&quot; block */
  fontFamily?: Maybe<Scalars['String']>;
  /** The &quot;fontSize&quot; field on the &quot;CorePageList&quot; block */
  fontSize?: Maybe<Scalars['String']>;
  /** The &quot;isNested&quot; field on the &quot;CorePageList&quot; block */
  isNested?: Maybe<Scalars['Boolean']>;
  /** The &quot;lock&quot; field on the &quot;CorePageList&quot; block */
  lock?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;parentPageID&quot; field on the &quot;CorePageList&quot; block */
  parentPageID?: Maybe<Scalars['Int']>;
  /** The &quot;style&quot; field on the &quot;CorePageList&quot; block */
  style?: Maybe<Scalars['BlockAttributesObject']>;
};

/** A block used for editing the site */
export type CorePageListItem = EditorBlock & PageEditorBlock & PostEditorBlock & {
  __typename?: 'CorePageListItem';
  /** The API version of the Gutenberg Block */
  apiVersion?: Maybe<Scalars['Int']>;
  /** Attributes of the CorePageListItem Block Type */
  attributes?: Maybe<CorePageListItemAttributes>;
  /** The name of the category the Block belongs to */
  blockEditorCategoryName?: Maybe<Scalars['String']>;
  /** The id of the Block */
  clientId?: Maybe<Scalars['String']>;
  /** CSS Classnames to apply to the block */
  cssClassNames?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** The inner blocks of the Block */
  innerBlocks?: Maybe<Array<Maybe<EditorBlock>>>;
  /** Whether the block is Dynamic (server rendered) */
  isDynamic: Scalars['Boolean'];
  /** The name of the block */
  name?: Maybe<Scalars['String']>;
  /** The parent id of the Block */
  parentClientId?: Maybe<Scalars['String']>;
  /** The rendered HTML for the block */
  renderedHtml?: Maybe<Scalars['String']>;
};

/** Attributes of the CorePageListItem Block Type */
export type CorePageListItemAttributes = {
  __typename?: 'CorePageListItemAttributes';
  /** The &quot;className&quot; field on the &quot;CorePageListItem&quot; block */
  className?: Maybe<Scalars['String']>;
  /** The &quot;hasChildren&quot; field on the &quot;CorePageListItem&quot; block */
  hasChildren?: Maybe<Scalars['Boolean']>;
  /** The &quot;id&quot; field on the &quot;CorePageListItem&quot; block */
  id?: Maybe<Scalars['Float']>;
  /** The &quot;label&quot; field on the &quot;CorePageListItem&quot; block */
  label?: Maybe<Scalars['String']>;
  /** The &quot;link&quot; field on the &quot;CorePageListItem&quot; block */
  link?: Maybe<Scalars['String']>;
  /** The &quot;lock&quot; field on the &quot;CorePageListItem&quot; block */
  lock?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;title&quot; field on the &quot;CorePageListItem&quot; block */
  title?: Maybe<Scalars['String']>;
};

/** A block used for editing the site */
export type CoreParagraph = BlockWithSupportsAnchor & EditorBlock & PageEditorBlock & PostEditorBlock & {
  __typename?: 'CoreParagraph';
  /** The anchor field for the block. */
  anchor?: Maybe<Scalars['String']>;
  /** The API version of the Gutenberg Block */
  apiVersion?: Maybe<Scalars['Int']>;
  /** Attributes of the CoreParagraph Block Type */
  attributes?: Maybe<CoreParagraphAttributes>;
  /** The name of the category the Block belongs to */
  blockEditorCategoryName?: Maybe<Scalars['String']>;
  /** The id of the Block */
  clientId?: Maybe<Scalars['String']>;
  /** CSS Classnames to apply to the block */
  cssClassNames?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** The inner blocks of the Block */
  innerBlocks?: Maybe<Array<Maybe<EditorBlock>>>;
  /** Whether the block is Dynamic (server rendered) */
  isDynamic: Scalars['Boolean'];
  /** The name of the block */
  name?: Maybe<Scalars['String']>;
  /** The parent id of the Block */
  parentClientId?: Maybe<Scalars['String']>;
  /** The rendered HTML for the block */
  renderedHtml?: Maybe<Scalars['String']>;
};

/** Attributes of the CoreParagraph Block Type */
export type CoreParagraphAttributes = BlockWithSupportsAnchor & {
  __typename?: 'CoreParagraphAttributes';
  /** The &quot;align&quot; field on the &quot;CoreParagraph&quot; block */
  align?: Maybe<Scalars['String']>;
  /** The anchor field for the block. */
  anchor?: Maybe<Scalars['String']>;
  /** The &quot;backgroundColor&quot; field on the &quot;CoreParagraph&quot; block */
  backgroundColor?: Maybe<Scalars['String']>;
  /** The &quot;className&quot; field on the &quot;CoreParagraph&quot; block */
  className?: Maybe<Scalars['String']>;
  /** The &quot;content&quot; field on the &quot;CoreParagraph&quot; block */
  content?: Maybe<Scalars['String']>;
  /** The &quot;cssClassName&quot; field on the &quot;CoreParagraph&quot; block */
  cssClassName?: Maybe<Scalars['String']>;
  /** The &quot;direction&quot; field on the &quot;CoreParagraph&quot; block */
  direction?: Maybe<Scalars['String']>;
  /** The &quot;dropCap&quot; field on the &quot;CoreParagraph&quot; block */
  dropCap?: Maybe<Scalars['Boolean']>;
  /** The &quot;fontFamily&quot; field on the &quot;CoreParagraph&quot; block */
  fontFamily?: Maybe<Scalars['String']>;
  /** The &quot;fontSize&quot; field on the &quot;CoreParagraph&quot; block */
  fontSize?: Maybe<Scalars['String']>;
  /** The &quot;gradient&quot; field on the &quot;CoreParagraph&quot; block */
  gradient?: Maybe<Scalars['String']>;
  /** The &quot;lock&quot; field on the &quot;CoreParagraph&quot; block */
  lock?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;placeholder&quot; field on the &quot;CoreParagraph&quot; block */
  placeholder?: Maybe<Scalars['String']>;
  /** The &quot;style&quot; field on the &quot;CoreParagraph&quot; block */
  style?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;textColor&quot; field on the &quot;CoreParagraph&quot; block */
  textColor?: Maybe<Scalars['String']>;
};

/** A block used for editing the site */
export type CorePattern = EditorBlock & PageEditorBlock & PostEditorBlock & {
  __typename?: 'CorePattern';
  /** The API version of the Gutenberg Block */
  apiVersion?: Maybe<Scalars['Int']>;
  /** Attributes of the CorePattern Block Type */
  attributes?: Maybe<CorePatternAttributes>;
  /** The name of the category the Block belongs to */
  blockEditorCategoryName?: Maybe<Scalars['String']>;
  /** The id of the Block */
  clientId?: Maybe<Scalars['String']>;
  /** CSS Classnames to apply to the block */
  cssClassNames?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** The inner blocks of the Block */
  innerBlocks?: Maybe<Array<Maybe<EditorBlock>>>;
  /** Whether the block is Dynamic (server rendered) */
  isDynamic: Scalars['Boolean'];
  /** The name of the block */
  name?: Maybe<Scalars['String']>;
  /** The parent id of the Block */
  parentClientId?: Maybe<Scalars['String']>;
  /** The rendered HTML for the block */
  renderedHtml?: Maybe<Scalars['String']>;
};

/** Attributes of the CorePattern Block Type */
export type CorePatternAttributes = {
  __typename?: 'CorePatternAttributes';
  /** The &quot;className&quot; field on the &quot;CorePattern&quot; block */
  className?: Maybe<Scalars['String']>;
  /** The &quot;lock&quot; field on the &quot;CorePattern&quot; block */
  lock?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;slug&quot; field on the &quot;CorePattern&quot; block */
  slug?: Maybe<Scalars['String']>;
};

/** A block used for editing the site */
export type CorePostAuthor = EditorBlock & PageEditorBlock & PostEditorBlock & {
  __typename?: 'CorePostAuthor';
  /** The API version of the Gutenberg Block */
  apiVersion?: Maybe<Scalars['Int']>;
  /** Attributes of the CorePostAuthor Block Type */
  attributes?: Maybe<CorePostAuthorAttributes>;
  /** The name of the category the Block belongs to */
  blockEditorCategoryName?: Maybe<Scalars['String']>;
  /** The id of the Block */
  clientId?: Maybe<Scalars['String']>;
  /** CSS Classnames to apply to the block */
  cssClassNames?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** The inner blocks of the Block */
  innerBlocks?: Maybe<Array<Maybe<EditorBlock>>>;
  /** Whether the block is Dynamic (server rendered) */
  isDynamic: Scalars['Boolean'];
  /** The name of the block */
  name?: Maybe<Scalars['String']>;
  /** The parent id of the Block */
  parentClientId?: Maybe<Scalars['String']>;
  /** The rendered HTML for the block */
  renderedHtml?: Maybe<Scalars['String']>;
};

/** Attributes of the CorePostAuthor Block Type */
export type CorePostAuthorAttributes = {
  __typename?: 'CorePostAuthorAttributes';
  /** The &quot;avatarSize&quot; field on the &quot;CorePostAuthor&quot; block */
  avatarSize?: Maybe<Scalars['Float']>;
  /** The &quot;backgroundColor&quot; field on the &quot;CorePostAuthor&quot; block */
  backgroundColor?: Maybe<Scalars['String']>;
  /** The &quot;byline&quot; field on the &quot;CorePostAuthor&quot; block */
  byline?: Maybe<Scalars['String']>;
  /** The &quot;className&quot; field on the &quot;CorePostAuthor&quot; block */
  className?: Maybe<Scalars['String']>;
  /** The &quot;fontFamily&quot; field on the &quot;CorePostAuthor&quot; block */
  fontFamily?: Maybe<Scalars['String']>;
  /** The &quot;fontSize&quot; field on the &quot;CorePostAuthor&quot; block */
  fontSize?: Maybe<Scalars['String']>;
  /** The &quot;gradient&quot; field on the &quot;CorePostAuthor&quot; block */
  gradient?: Maybe<Scalars['String']>;
  /** The &quot;isLink&quot; field on the &quot;CorePostAuthor&quot; block */
  isLink?: Maybe<Scalars['Boolean']>;
  /** The &quot;linkTarget&quot; field on the &quot;CorePostAuthor&quot; block */
  linkTarget?: Maybe<Scalars['String']>;
  /** The &quot;lock&quot; field on the &quot;CorePostAuthor&quot; block */
  lock?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;showAvatar&quot; field on the &quot;CorePostAuthor&quot; block */
  showAvatar?: Maybe<Scalars['Boolean']>;
  /** The &quot;showBio&quot; field on the &quot;CorePostAuthor&quot; block */
  showBio?: Maybe<Scalars['Boolean']>;
  /** The &quot;style&quot; field on the &quot;CorePostAuthor&quot; block */
  style?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;textAlign&quot; field on the &quot;CorePostAuthor&quot; block */
  textAlign?: Maybe<Scalars['String']>;
  /** The &quot;textColor&quot; field on the &quot;CorePostAuthor&quot; block */
  textColor?: Maybe<Scalars['String']>;
};

/** A block used for editing the site */
export type CorePostAuthorBiography = EditorBlock & PageEditorBlock & PostEditorBlock & {
  __typename?: 'CorePostAuthorBiography';
  /** The API version of the Gutenberg Block */
  apiVersion?: Maybe<Scalars['Int']>;
  /** Attributes of the CorePostAuthorBiography Block Type */
  attributes?: Maybe<CorePostAuthorBiographyAttributes>;
  /** The name of the category the Block belongs to */
  blockEditorCategoryName?: Maybe<Scalars['String']>;
  /** The id of the Block */
  clientId?: Maybe<Scalars['String']>;
  /** CSS Classnames to apply to the block */
  cssClassNames?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** The inner blocks of the Block */
  innerBlocks?: Maybe<Array<Maybe<EditorBlock>>>;
  /** Whether the block is Dynamic (server rendered) */
  isDynamic: Scalars['Boolean'];
  /** The name of the block */
  name?: Maybe<Scalars['String']>;
  /** The parent id of the Block */
  parentClientId?: Maybe<Scalars['String']>;
  /** The rendered HTML for the block */
  renderedHtml?: Maybe<Scalars['String']>;
};

/** Attributes of the CorePostAuthorBiography Block Type */
export type CorePostAuthorBiographyAttributes = {
  __typename?: 'CorePostAuthorBiographyAttributes';
  /** The &quot;backgroundColor&quot; field on the &quot;CorePostAuthorBiography&quot; block */
  backgroundColor?: Maybe<Scalars['String']>;
  /** The &quot;className&quot; field on the &quot;CorePostAuthorBiography&quot; block */
  className?: Maybe<Scalars['String']>;
  /** The &quot;fontFamily&quot; field on the &quot;CorePostAuthorBiography&quot; block */
  fontFamily?: Maybe<Scalars['String']>;
  /** The &quot;fontSize&quot; field on the &quot;CorePostAuthorBiography&quot; block */
  fontSize?: Maybe<Scalars['String']>;
  /** The &quot;gradient&quot; field on the &quot;CorePostAuthorBiography&quot; block */
  gradient?: Maybe<Scalars['String']>;
  /** The &quot;lock&quot; field on the &quot;CorePostAuthorBiography&quot; block */
  lock?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;style&quot; field on the &quot;CorePostAuthorBiography&quot; block */
  style?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;textAlign&quot; field on the &quot;CorePostAuthorBiography&quot; block */
  textAlign?: Maybe<Scalars['String']>;
  /** The &quot;textColor&quot; field on the &quot;CorePostAuthorBiography&quot; block */
  textColor?: Maybe<Scalars['String']>;
};

/** A block used for editing the site */
export type CorePostAuthorName = EditorBlock & PageEditorBlock & PostEditorBlock & {
  __typename?: 'CorePostAuthorName';
  /** The API version of the Gutenberg Block */
  apiVersion?: Maybe<Scalars['Int']>;
  /** Attributes of the CorePostAuthorName Block Type */
  attributes?: Maybe<CorePostAuthorNameAttributes>;
  /** The name of the category the Block belongs to */
  blockEditorCategoryName?: Maybe<Scalars['String']>;
  /** The id of the Block */
  clientId?: Maybe<Scalars['String']>;
  /** CSS Classnames to apply to the block */
  cssClassNames?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** The inner blocks of the Block */
  innerBlocks?: Maybe<Array<Maybe<EditorBlock>>>;
  /** Whether the block is Dynamic (server rendered) */
  isDynamic: Scalars['Boolean'];
  /** The name of the block */
  name?: Maybe<Scalars['String']>;
  /** The parent id of the Block */
  parentClientId?: Maybe<Scalars['String']>;
  /** The rendered HTML for the block */
  renderedHtml?: Maybe<Scalars['String']>;
};

/** Attributes of the CorePostAuthorName Block Type */
export type CorePostAuthorNameAttributes = {
  __typename?: 'CorePostAuthorNameAttributes';
  /** The &quot;backgroundColor&quot; field on the &quot;CorePostAuthorName&quot; block */
  backgroundColor?: Maybe<Scalars['String']>;
  /** The &quot;className&quot; field on the &quot;CorePostAuthorName&quot; block */
  className?: Maybe<Scalars['String']>;
  /** The &quot;fontFamily&quot; field on the &quot;CorePostAuthorName&quot; block */
  fontFamily?: Maybe<Scalars['String']>;
  /** The &quot;fontSize&quot; field on the &quot;CorePostAuthorName&quot; block */
  fontSize?: Maybe<Scalars['String']>;
  /** The &quot;gradient&quot; field on the &quot;CorePostAuthorName&quot; block */
  gradient?: Maybe<Scalars['String']>;
  /** The &quot;isLink&quot; field on the &quot;CorePostAuthorName&quot; block */
  isLink?: Maybe<Scalars['Boolean']>;
  /** The &quot;linkTarget&quot; field on the &quot;CorePostAuthorName&quot; block */
  linkTarget?: Maybe<Scalars['String']>;
  /** The &quot;lock&quot; field on the &quot;CorePostAuthorName&quot; block */
  lock?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;style&quot; field on the &quot;CorePostAuthorName&quot; block */
  style?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;textAlign&quot; field on the &quot;CorePostAuthorName&quot; block */
  textAlign?: Maybe<Scalars['String']>;
  /** The &quot;textColor&quot; field on the &quot;CorePostAuthorName&quot; block */
  textColor?: Maybe<Scalars['String']>;
};

/** A block used for editing the site */
export type CorePostComments = EditorBlock & PageEditorBlock & PostEditorBlock & {
  __typename?: 'CorePostComments';
  /** The API version of the Gutenberg Block */
  apiVersion?: Maybe<Scalars['Int']>;
  /** Attributes of the CorePostComments Block Type */
  attributes?: Maybe<CorePostCommentsAttributes>;
  /** The name of the category the Block belongs to */
  blockEditorCategoryName?: Maybe<Scalars['String']>;
  /** The id of the Block */
  clientId?: Maybe<Scalars['String']>;
  /** CSS Classnames to apply to the block */
  cssClassNames?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** The inner blocks of the Block */
  innerBlocks?: Maybe<Array<Maybe<EditorBlock>>>;
  /** Whether the block is Dynamic (server rendered) */
  isDynamic: Scalars['Boolean'];
  /** The name of the block */
  name?: Maybe<Scalars['String']>;
  /** The parent id of the Block */
  parentClientId?: Maybe<Scalars['String']>;
  /** The rendered HTML for the block */
  renderedHtml?: Maybe<Scalars['String']>;
};

/** Attributes of the CorePostComments Block Type */
export type CorePostCommentsAttributes = {
  __typename?: 'CorePostCommentsAttributes';
  /** The &quot;align&quot; field on the &quot;CorePostComments&quot; block */
  align?: Maybe<Scalars['String']>;
  /** The &quot;backgroundColor&quot; field on the &quot;CorePostComments&quot; block */
  backgroundColor?: Maybe<Scalars['String']>;
  /** The &quot;className&quot; field on the &quot;CorePostComments&quot; block */
  className?: Maybe<Scalars['String']>;
  /** The &quot;fontSize&quot; field on the &quot;CorePostComments&quot; block */
  fontSize?: Maybe<Scalars['String']>;
  /** The &quot;gradient&quot; field on the &quot;CorePostComments&quot; block */
  gradient?: Maybe<Scalars['String']>;
  /** The &quot;lock&quot; field on the &quot;CorePostComments&quot; block */
  lock?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;style&quot; field on the &quot;CorePostComments&quot; block */
  style?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;textAlign&quot; field on the &quot;CorePostComments&quot; block */
  textAlign?: Maybe<Scalars['String']>;
  /** The &quot;textColor&quot; field on the &quot;CorePostComments&quot; block */
  textColor?: Maybe<Scalars['String']>;
};

/** A block used for editing the site */
export type CorePostCommentsForm = EditorBlock & PageEditorBlock & PostEditorBlock & {
  __typename?: 'CorePostCommentsForm';
  /** The API version of the Gutenberg Block */
  apiVersion?: Maybe<Scalars['Int']>;
  /** Attributes of the CorePostCommentsForm Block Type */
  attributes?: Maybe<CorePostCommentsFormAttributes>;
  /** The name of the category the Block belongs to */
  blockEditorCategoryName?: Maybe<Scalars['String']>;
  /** The id of the Block */
  clientId?: Maybe<Scalars['String']>;
  /** CSS Classnames to apply to the block */
  cssClassNames?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** The inner blocks of the Block */
  innerBlocks?: Maybe<Array<Maybe<EditorBlock>>>;
  /** Whether the block is Dynamic (server rendered) */
  isDynamic: Scalars['Boolean'];
  /** The name of the block */
  name?: Maybe<Scalars['String']>;
  /** The parent id of the Block */
  parentClientId?: Maybe<Scalars['String']>;
  /** The rendered HTML for the block */
  renderedHtml?: Maybe<Scalars['String']>;
};

/** Attributes of the CorePostCommentsForm Block Type */
export type CorePostCommentsFormAttributes = {
  __typename?: 'CorePostCommentsFormAttributes';
  /** The &quot;backgroundColor&quot; field on the &quot;CorePostCommentsForm&quot; block */
  backgroundColor?: Maybe<Scalars['String']>;
  /** The &quot;className&quot; field on the &quot;CorePostCommentsForm&quot; block */
  className?: Maybe<Scalars['String']>;
  /** The &quot;fontSize&quot; field on the &quot;CorePostCommentsForm&quot; block */
  fontSize?: Maybe<Scalars['String']>;
  /** The &quot;gradient&quot; field on the &quot;CorePostCommentsForm&quot; block */
  gradient?: Maybe<Scalars['String']>;
  /** The &quot;lock&quot; field on the &quot;CorePostCommentsForm&quot; block */
  lock?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;style&quot; field on the &quot;CorePostCommentsForm&quot; block */
  style?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;textAlign&quot; field on the &quot;CorePostCommentsForm&quot; block */
  textAlign?: Maybe<Scalars['String']>;
  /** The &quot;textColor&quot; field on the &quot;CorePostCommentsForm&quot; block */
  textColor?: Maybe<Scalars['String']>;
};

/** A block used for editing the site */
export type CorePostContent = EditorBlock & PageEditorBlock & PostEditorBlock & {
  __typename?: 'CorePostContent';
  /** The API version of the Gutenberg Block */
  apiVersion?: Maybe<Scalars['Int']>;
  /** Attributes of the CorePostContent Block Type */
  attributes?: Maybe<CorePostContentAttributes>;
  /** The name of the category the Block belongs to */
  blockEditorCategoryName?: Maybe<Scalars['String']>;
  /** The id of the Block */
  clientId?: Maybe<Scalars['String']>;
  /** CSS Classnames to apply to the block */
  cssClassNames?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** The inner blocks of the Block */
  innerBlocks?: Maybe<Array<Maybe<EditorBlock>>>;
  /** Whether the block is Dynamic (server rendered) */
  isDynamic: Scalars['Boolean'];
  /** The name of the block */
  name?: Maybe<Scalars['String']>;
  /** The parent id of the Block */
  parentClientId?: Maybe<Scalars['String']>;
  /** The rendered HTML for the block */
  renderedHtml?: Maybe<Scalars['String']>;
};

/** Attributes of the CorePostContent Block Type */
export type CorePostContentAttributes = {
  __typename?: 'CorePostContentAttributes';
  /** The &quot;align&quot; field on the &quot;CorePostContent&quot; block */
  align?: Maybe<Scalars['String']>;
  /** The &quot;className&quot; field on the &quot;CorePostContent&quot; block */
  className?: Maybe<Scalars['String']>;
  /** The &quot;fontFamily&quot; field on the &quot;CorePostContent&quot; block */
  fontFamily?: Maybe<Scalars['String']>;
  /** The &quot;fontSize&quot; field on the &quot;CorePostContent&quot; block */
  fontSize?: Maybe<Scalars['String']>;
  /** The &quot;layout&quot; field on the &quot;CorePostContent&quot; block */
  layout?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;lock&quot; field on the &quot;CorePostContent&quot; block */
  lock?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;style&quot; field on the &quot;CorePostContent&quot; block */
  style?: Maybe<Scalars['BlockAttributesObject']>;
};

/** A block used for editing the site */
export type CorePostDate = EditorBlock & PageEditorBlock & PostEditorBlock & {
  __typename?: 'CorePostDate';
  /** The API version of the Gutenberg Block */
  apiVersion?: Maybe<Scalars['Int']>;
  /** Attributes of the CorePostDate Block Type */
  attributes?: Maybe<CorePostDateAttributes>;
  /** The name of the category the Block belongs to */
  blockEditorCategoryName?: Maybe<Scalars['String']>;
  /** The id of the Block */
  clientId?: Maybe<Scalars['String']>;
  /** CSS Classnames to apply to the block */
  cssClassNames?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** The inner blocks of the Block */
  innerBlocks?: Maybe<Array<Maybe<EditorBlock>>>;
  /** Whether the block is Dynamic (server rendered) */
  isDynamic: Scalars['Boolean'];
  /** The name of the block */
  name?: Maybe<Scalars['String']>;
  /** The parent id of the Block */
  parentClientId?: Maybe<Scalars['String']>;
  /** The rendered HTML for the block */
  renderedHtml?: Maybe<Scalars['String']>;
};

/** Attributes of the CorePostDate Block Type */
export type CorePostDateAttributes = {
  __typename?: 'CorePostDateAttributes';
  /** The &quot;backgroundColor&quot; field on the &quot;CorePostDate&quot; block */
  backgroundColor?: Maybe<Scalars['String']>;
  /** The &quot;className&quot; field on the &quot;CorePostDate&quot; block */
  className?: Maybe<Scalars['String']>;
  /** The &quot;displayType&quot; field on the &quot;CorePostDate&quot; block */
  displayType?: Maybe<Scalars['String']>;
  /** The &quot;fontFamily&quot; field on the &quot;CorePostDate&quot; block */
  fontFamily?: Maybe<Scalars['String']>;
  /** The &quot;fontSize&quot; field on the &quot;CorePostDate&quot; block */
  fontSize?: Maybe<Scalars['String']>;
  /** The &quot;format&quot; field on the &quot;CorePostDate&quot; block */
  format?: Maybe<Scalars['String']>;
  /** The &quot;gradient&quot; field on the &quot;CorePostDate&quot; block */
  gradient?: Maybe<Scalars['String']>;
  /** The &quot;isLink&quot; field on the &quot;CorePostDate&quot; block */
  isLink?: Maybe<Scalars['Boolean']>;
  /** The &quot;lock&quot; field on the &quot;CorePostDate&quot; block */
  lock?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;style&quot; field on the &quot;CorePostDate&quot; block */
  style?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;textAlign&quot; field on the &quot;CorePostDate&quot; block */
  textAlign?: Maybe<Scalars['String']>;
  /** The &quot;textColor&quot; field on the &quot;CorePostDate&quot; block */
  textColor?: Maybe<Scalars['String']>;
};

/** A block used for editing the site */
export type CorePostExcerpt = EditorBlock & PageEditorBlock & PostEditorBlock & {
  __typename?: 'CorePostExcerpt';
  /** The API version of the Gutenberg Block */
  apiVersion?: Maybe<Scalars['Int']>;
  /** Attributes of the CorePostExcerpt Block Type */
  attributes?: Maybe<CorePostExcerptAttributes>;
  /** The name of the category the Block belongs to */
  blockEditorCategoryName?: Maybe<Scalars['String']>;
  /** The id of the Block */
  clientId?: Maybe<Scalars['String']>;
  /** CSS Classnames to apply to the block */
  cssClassNames?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** The inner blocks of the Block */
  innerBlocks?: Maybe<Array<Maybe<EditorBlock>>>;
  /** Whether the block is Dynamic (server rendered) */
  isDynamic: Scalars['Boolean'];
  /** The name of the block */
  name?: Maybe<Scalars['String']>;
  /** The parent id of the Block */
  parentClientId?: Maybe<Scalars['String']>;
  /** The rendered HTML for the block */
  renderedHtml?: Maybe<Scalars['String']>;
};

/** Attributes of the CorePostExcerpt Block Type */
export type CorePostExcerptAttributes = {
  __typename?: 'CorePostExcerptAttributes';
  /** The &quot;backgroundColor&quot; field on the &quot;CorePostExcerpt&quot; block */
  backgroundColor?: Maybe<Scalars['String']>;
  /** The &quot;className&quot; field on the &quot;CorePostExcerpt&quot; block */
  className?: Maybe<Scalars['String']>;
  /** The &quot;fontFamily&quot; field on the &quot;CorePostExcerpt&quot; block */
  fontFamily?: Maybe<Scalars['String']>;
  /** The &quot;fontSize&quot; field on the &quot;CorePostExcerpt&quot; block */
  fontSize?: Maybe<Scalars['String']>;
  /** The &quot;gradient&quot; field on the &quot;CorePostExcerpt&quot; block */
  gradient?: Maybe<Scalars['String']>;
  /** The &quot;lock&quot; field on the &quot;CorePostExcerpt&quot; block */
  lock?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;moreText&quot; field on the &quot;CorePostExcerpt&quot; block */
  moreText?: Maybe<Scalars['String']>;
  /** The &quot;showMoreOnNewLine&quot; field on the &quot;CorePostExcerpt&quot; block */
  showMoreOnNewLine?: Maybe<Scalars['Boolean']>;
  /** The &quot;style&quot; field on the &quot;CorePostExcerpt&quot; block */
  style?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;textAlign&quot; field on the &quot;CorePostExcerpt&quot; block */
  textAlign?: Maybe<Scalars['String']>;
  /** The &quot;textColor&quot; field on the &quot;CorePostExcerpt&quot; block */
  textColor?: Maybe<Scalars['String']>;
};

/** A block used for editing the site */
export type CorePostFeaturedImage = EditorBlock & PageEditorBlock & PostEditorBlock & {
  __typename?: 'CorePostFeaturedImage';
  /** The API version of the Gutenberg Block */
  apiVersion?: Maybe<Scalars['Int']>;
  /** Attributes of the CorePostFeaturedImage Block Type */
  attributes?: Maybe<CorePostFeaturedImageAttributes>;
  /** The name of the category the Block belongs to */
  blockEditorCategoryName?: Maybe<Scalars['String']>;
  /** The id of the Block */
  clientId?: Maybe<Scalars['String']>;
  /** CSS Classnames to apply to the block */
  cssClassNames?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** The inner blocks of the Block */
  innerBlocks?: Maybe<Array<Maybe<EditorBlock>>>;
  /** Whether the block is Dynamic (server rendered) */
  isDynamic: Scalars['Boolean'];
  /** The name of the block */
  name?: Maybe<Scalars['String']>;
  /** The parent id of the Block */
  parentClientId?: Maybe<Scalars['String']>;
  /** The rendered HTML for the block */
  renderedHtml?: Maybe<Scalars['String']>;
};

/** Attributes of the CorePostFeaturedImage Block Type */
export type CorePostFeaturedImageAttributes = {
  __typename?: 'CorePostFeaturedImageAttributes';
  /** The &quot;align&quot; field on the &quot;CorePostFeaturedImage&quot; block */
  align?: Maybe<Scalars['String']>;
  /** The &quot;borderColor&quot; field on the &quot;CorePostFeaturedImage&quot; block */
  borderColor?: Maybe<Scalars['String']>;
  /** The &quot;className&quot; field on the &quot;CorePostFeaturedImage&quot; block */
  className?: Maybe<Scalars['String']>;
  /** The &quot;customGradient&quot; field on the &quot;CorePostFeaturedImage&quot; block */
  customGradient?: Maybe<Scalars['String']>;
  /** The &quot;customOverlayColor&quot; field on the &quot;CorePostFeaturedImage&quot; block */
  customOverlayColor?: Maybe<Scalars['String']>;
  /** The &quot;dimRatio&quot; field on the &quot;CorePostFeaturedImage&quot; block */
  dimRatio?: Maybe<Scalars['Float']>;
  /** The &quot;gradient&quot; field on the &quot;CorePostFeaturedImage&quot; block */
  gradient?: Maybe<Scalars['String']>;
  /** The &quot;height&quot; field on the &quot;CorePostFeaturedImage&quot; block */
  height?: Maybe<Scalars['String']>;
  /** The &quot;isLink&quot; field on the &quot;CorePostFeaturedImage&quot; block */
  isLink?: Maybe<Scalars['Boolean']>;
  /** The &quot;linkTarget&quot; field on the &quot;CorePostFeaturedImage&quot; block */
  linkTarget?: Maybe<Scalars['String']>;
  /** The &quot;lock&quot; field on the &quot;CorePostFeaturedImage&quot; block */
  lock?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;overlayColor&quot; field on the &quot;CorePostFeaturedImage&quot; block */
  overlayColor?: Maybe<Scalars['String']>;
  /** The &quot;rel&quot; field on the &quot;CorePostFeaturedImage&quot; block */
  rel?: Maybe<Scalars['String']>;
  /** The &quot;scale&quot; field on the &quot;CorePostFeaturedImage&quot; block */
  scale?: Maybe<Scalars['String']>;
  /** The &quot;sizeSlug&quot; field on the &quot;CorePostFeaturedImage&quot; block */
  sizeSlug?: Maybe<Scalars['String']>;
  /** The &quot;style&quot; field on the &quot;CorePostFeaturedImage&quot; block */
  style?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;width&quot; field on the &quot;CorePostFeaturedImage&quot; block */
  width?: Maybe<Scalars['String']>;
};

/** A block used for editing the site */
export type CorePostNavigationLink = EditorBlock & PageEditorBlock & PostEditorBlock & {
  __typename?: 'CorePostNavigationLink';
  /** The API version of the Gutenberg Block */
  apiVersion?: Maybe<Scalars['Int']>;
  /** Attributes of the CorePostNavigationLink Block Type */
  attributes?: Maybe<CorePostNavigationLinkAttributes>;
  /** The name of the category the Block belongs to */
  blockEditorCategoryName?: Maybe<Scalars['String']>;
  /** The id of the Block */
  clientId?: Maybe<Scalars['String']>;
  /** CSS Classnames to apply to the block */
  cssClassNames?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** The inner blocks of the Block */
  innerBlocks?: Maybe<Array<Maybe<EditorBlock>>>;
  /** Whether the block is Dynamic (server rendered) */
  isDynamic: Scalars['Boolean'];
  /** The name of the block */
  name?: Maybe<Scalars['String']>;
  /** The parent id of the Block */
  parentClientId?: Maybe<Scalars['String']>;
  /** The rendered HTML for the block */
  renderedHtml?: Maybe<Scalars['String']>;
};

/** Attributes of the CorePostNavigationLink Block Type */
export type CorePostNavigationLinkAttributes = {
  __typename?: 'CorePostNavigationLinkAttributes';
  /** The &quot;arrow&quot; field on the &quot;CorePostNavigationLink&quot; block */
  arrow?: Maybe<Scalars['String']>;
  /** The &quot;backgroundColor&quot; field on the &quot;CorePostNavigationLink&quot; block */
  backgroundColor?: Maybe<Scalars['String']>;
  /** The &quot;className&quot; field on the &quot;CorePostNavigationLink&quot; block */
  className?: Maybe<Scalars['String']>;
  /** The &quot;fontFamily&quot; field on the &quot;CorePostNavigationLink&quot; block */
  fontFamily?: Maybe<Scalars['String']>;
  /** The &quot;fontSize&quot; field on the &quot;CorePostNavigationLink&quot; block */
  fontSize?: Maybe<Scalars['String']>;
  /** The &quot;label&quot; field on the &quot;CorePostNavigationLink&quot; block */
  label?: Maybe<Scalars['String']>;
  /** The &quot;linkLabel&quot; field on the &quot;CorePostNavigationLink&quot; block */
  linkLabel?: Maybe<Scalars['Boolean']>;
  /** The &quot;lock&quot; field on the &quot;CorePostNavigationLink&quot; block */
  lock?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;showTitle&quot; field on the &quot;CorePostNavigationLink&quot; block */
  showTitle?: Maybe<Scalars['Boolean']>;
  /** The &quot;style&quot; field on the &quot;CorePostNavigationLink&quot; block */
  style?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;textAlign&quot; field on the &quot;CorePostNavigationLink&quot; block */
  textAlign?: Maybe<Scalars['String']>;
  /** The &quot;textColor&quot; field on the &quot;CorePostNavigationLink&quot; block */
  textColor?: Maybe<Scalars['String']>;
  /** The &quot;type&quot; field on the &quot;CorePostNavigationLink&quot; block */
  type?: Maybe<Scalars['String']>;
};

/** A block used for editing the site */
export type CorePostTemplate = EditorBlock & PageEditorBlock & PostEditorBlock & {
  __typename?: 'CorePostTemplate';
  /** The API version of the Gutenberg Block */
  apiVersion?: Maybe<Scalars['Int']>;
  /** Attributes of the CorePostTemplate Block Type */
  attributes?: Maybe<CorePostTemplateAttributes>;
  /** The name of the category the Block belongs to */
  blockEditorCategoryName?: Maybe<Scalars['String']>;
  /** The id of the Block */
  clientId?: Maybe<Scalars['String']>;
  /** CSS Classnames to apply to the block */
  cssClassNames?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** The inner blocks of the Block */
  innerBlocks?: Maybe<Array<Maybe<EditorBlock>>>;
  /** Whether the block is Dynamic (server rendered) */
  isDynamic: Scalars['Boolean'];
  /** The name of the block */
  name?: Maybe<Scalars['String']>;
  /** The parent id of the Block */
  parentClientId?: Maybe<Scalars['String']>;
  /** The rendered HTML for the block */
  renderedHtml?: Maybe<Scalars['String']>;
};

/** Attributes of the CorePostTemplate Block Type */
export type CorePostTemplateAttributes = {
  __typename?: 'CorePostTemplateAttributes';
  /** The &quot;align&quot; field on the &quot;CorePostTemplate&quot; block */
  align?: Maybe<Scalars['String']>;
  /** The &quot;backgroundColor&quot; field on the &quot;CorePostTemplate&quot; block */
  backgroundColor?: Maybe<Scalars['String']>;
  /** The &quot;className&quot; field on the &quot;CorePostTemplate&quot; block */
  className?: Maybe<Scalars['String']>;
  /** The &quot;fontFamily&quot; field on the &quot;CorePostTemplate&quot; block */
  fontFamily?: Maybe<Scalars['String']>;
  /** The &quot;fontSize&quot; field on the &quot;CorePostTemplate&quot; block */
  fontSize?: Maybe<Scalars['String']>;
  /** The &quot;gradient&quot; field on the &quot;CorePostTemplate&quot; block */
  gradient?: Maybe<Scalars['String']>;
  /** The &quot;layout&quot; field on the &quot;CorePostTemplate&quot; block */
  layout?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;lock&quot; field on the &quot;CorePostTemplate&quot; block */
  lock?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;style&quot; field on the &quot;CorePostTemplate&quot; block */
  style?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;textColor&quot; field on the &quot;CorePostTemplate&quot; block */
  textColor?: Maybe<Scalars['String']>;
};

/** A block used for editing the site */
export type CorePostTerms = EditorBlock & PageEditorBlock & PostEditorBlock & {
  __typename?: 'CorePostTerms';
  /** The API version of the Gutenberg Block */
  apiVersion?: Maybe<Scalars['Int']>;
  /** Attributes of the CorePostTerms Block Type */
  attributes?: Maybe<CorePostTermsAttributes>;
  /** The name of the category the Block belongs to */
  blockEditorCategoryName?: Maybe<Scalars['String']>;
  /** The id of the Block */
  clientId?: Maybe<Scalars['String']>;
  /** CSS Classnames to apply to the block */
  cssClassNames?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** The inner blocks of the Block */
  innerBlocks?: Maybe<Array<Maybe<EditorBlock>>>;
  /** Whether the block is Dynamic (server rendered) */
  isDynamic: Scalars['Boolean'];
  /** The name of the block */
  name?: Maybe<Scalars['String']>;
  /** The parent id of the Block */
  parentClientId?: Maybe<Scalars['String']>;
  /** The rendered HTML for the block */
  renderedHtml?: Maybe<Scalars['String']>;
};

/** Attributes of the CorePostTerms Block Type */
export type CorePostTermsAttributes = {
  __typename?: 'CorePostTermsAttributes';
  /** The &quot;backgroundColor&quot; field on the &quot;CorePostTerms&quot; block */
  backgroundColor?: Maybe<Scalars['String']>;
  /** The &quot;className&quot; field on the &quot;CorePostTerms&quot; block */
  className?: Maybe<Scalars['String']>;
  /** The &quot;fontFamily&quot; field on the &quot;CorePostTerms&quot; block */
  fontFamily?: Maybe<Scalars['String']>;
  /** The &quot;fontSize&quot; field on the &quot;CorePostTerms&quot; block */
  fontSize?: Maybe<Scalars['String']>;
  /** The &quot;gradient&quot; field on the &quot;CorePostTerms&quot; block */
  gradient?: Maybe<Scalars['String']>;
  /** The &quot;lock&quot; field on the &quot;CorePostTerms&quot; block */
  lock?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;prefix&quot; field on the &quot;CorePostTerms&quot; block */
  prefix?: Maybe<Scalars['String']>;
  /** The &quot;separator&quot; field on the &quot;CorePostTerms&quot; block */
  separator?: Maybe<Scalars['String']>;
  /** The &quot;style&quot; field on the &quot;CorePostTerms&quot; block */
  style?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;suffix&quot; field on the &quot;CorePostTerms&quot; block */
  suffix?: Maybe<Scalars['String']>;
  /** The &quot;term&quot; field on the &quot;CorePostTerms&quot; block */
  term?: Maybe<Scalars['String']>;
  /** The &quot;textAlign&quot; field on the &quot;CorePostTerms&quot; block */
  textAlign?: Maybe<Scalars['String']>;
  /** The &quot;textColor&quot; field on the &quot;CorePostTerms&quot; block */
  textColor?: Maybe<Scalars['String']>;
};

/** A block used for editing the site */
export type CorePostTitle = EditorBlock & PageEditorBlock & PostEditorBlock & {
  __typename?: 'CorePostTitle';
  /** The API version of the Gutenberg Block */
  apiVersion?: Maybe<Scalars['Int']>;
  /** Attributes of the CorePostTitle Block Type */
  attributes?: Maybe<CorePostTitleAttributes>;
  /** The name of the category the Block belongs to */
  blockEditorCategoryName?: Maybe<Scalars['String']>;
  /** The id of the Block */
  clientId?: Maybe<Scalars['String']>;
  /** CSS Classnames to apply to the block */
  cssClassNames?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** The inner blocks of the Block */
  innerBlocks?: Maybe<Array<Maybe<EditorBlock>>>;
  /** Whether the block is Dynamic (server rendered) */
  isDynamic: Scalars['Boolean'];
  /** The name of the block */
  name?: Maybe<Scalars['String']>;
  /** The parent id of the Block */
  parentClientId?: Maybe<Scalars['String']>;
  /** The rendered HTML for the block */
  renderedHtml?: Maybe<Scalars['String']>;
};

/** Attributes of the CorePostTitle Block Type */
export type CorePostTitleAttributes = {
  __typename?: 'CorePostTitleAttributes';
  /** The &quot;align&quot; field on the &quot;CorePostTitle&quot; block */
  align?: Maybe<Scalars['String']>;
  /** The &quot;backgroundColor&quot; field on the &quot;CorePostTitle&quot; block */
  backgroundColor?: Maybe<Scalars['String']>;
  /** The &quot;className&quot; field on the &quot;CorePostTitle&quot; block */
  className?: Maybe<Scalars['String']>;
  /** The &quot;fontFamily&quot; field on the &quot;CorePostTitle&quot; block */
  fontFamily?: Maybe<Scalars['String']>;
  /** The &quot;fontSize&quot; field on the &quot;CorePostTitle&quot; block */
  fontSize?: Maybe<Scalars['String']>;
  /** The &quot;gradient&quot; field on the &quot;CorePostTitle&quot; block */
  gradient?: Maybe<Scalars['String']>;
  /** The &quot;isLink&quot; field on the &quot;CorePostTitle&quot; block */
  isLink?: Maybe<Scalars['Boolean']>;
  /** The &quot;level&quot; field on the &quot;CorePostTitle&quot; block */
  level?: Maybe<Scalars['Float']>;
  /** The &quot;linkTarget&quot; field on the &quot;CorePostTitle&quot; block */
  linkTarget?: Maybe<Scalars['String']>;
  /** The &quot;lock&quot; field on the &quot;CorePostTitle&quot; block */
  lock?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;rel&quot; field on the &quot;CorePostTitle&quot; block */
  rel?: Maybe<Scalars['String']>;
  /** The &quot;style&quot; field on the &quot;CorePostTitle&quot; block */
  style?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;textAlign&quot; field on the &quot;CorePostTitle&quot; block */
  textAlign?: Maybe<Scalars['String']>;
  /** The &quot;textColor&quot; field on the &quot;CorePostTitle&quot; block */
  textColor?: Maybe<Scalars['String']>;
};

/** A block used for editing the site */
export type CorePreformatted = BlockWithSupportsAnchor & EditorBlock & PageEditorBlock & PostEditorBlock & {
  __typename?: 'CorePreformatted';
  /** The anchor field for the block. */
  anchor?: Maybe<Scalars['String']>;
  /** The API version of the Gutenberg Block */
  apiVersion?: Maybe<Scalars['Int']>;
  /** Attributes of the CorePreformatted Block Type */
  attributes?: Maybe<CorePreformattedAttributes>;
  /** The name of the category the Block belongs to */
  blockEditorCategoryName?: Maybe<Scalars['String']>;
  /** The id of the Block */
  clientId?: Maybe<Scalars['String']>;
  /** CSS Classnames to apply to the block */
  cssClassNames?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** The inner blocks of the Block */
  innerBlocks?: Maybe<Array<Maybe<EditorBlock>>>;
  /** Whether the block is Dynamic (server rendered) */
  isDynamic: Scalars['Boolean'];
  /** The name of the block */
  name?: Maybe<Scalars['String']>;
  /** The parent id of the Block */
  parentClientId?: Maybe<Scalars['String']>;
  /** The rendered HTML for the block */
  renderedHtml?: Maybe<Scalars['String']>;
};

/** Attributes of the CorePreformatted Block Type */
export type CorePreformattedAttributes = BlockWithSupportsAnchor & {
  __typename?: 'CorePreformattedAttributes';
  /** The anchor field for the block. */
  anchor?: Maybe<Scalars['String']>;
  /** The &quot;backgroundColor&quot; field on the &quot;CorePreformatted&quot; block */
  backgroundColor?: Maybe<Scalars['String']>;
  /** The &quot;className&quot; field on the &quot;CorePreformatted&quot; block */
  className?: Maybe<Scalars['String']>;
  /** The &quot;content&quot; field on the &quot;CorePreformatted&quot; block */
  content?: Maybe<Scalars['String']>;
  /** The &quot;fontFamily&quot; field on the &quot;CorePreformatted&quot; block */
  fontFamily?: Maybe<Scalars['String']>;
  /** The &quot;fontSize&quot; field on the &quot;CorePreformatted&quot; block */
  fontSize?: Maybe<Scalars['String']>;
  /** The &quot;gradient&quot; field on the &quot;CorePreformatted&quot; block */
  gradient?: Maybe<Scalars['String']>;
  /** The &quot;lock&quot; field on the &quot;CorePreformatted&quot; block */
  lock?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;style&quot; field on the &quot;CorePreformatted&quot; block */
  style?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;textColor&quot; field on the &quot;CorePreformatted&quot; block */
  textColor?: Maybe<Scalars['String']>;
};

/** A block used for editing the site */
export type CorePullquote = BlockWithSupportsAnchor & EditorBlock & PageEditorBlock & PostEditorBlock & {
  __typename?: 'CorePullquote';
  /** The anchor field for the block. */
  anchor?: Maybe<Scalars['String']>;
  /** The API version of the Gutenberg Block */
  apiVersion?: Maybe<Scalars['Int']>;
  /** Attributes of the CorePullquote Block Type */
  attributes?: Maybe<CorePullquoteAttributes>;
  /** The name of the category the Block belongs to */
  blockEditorCategoryName?: Maybe<Scalars['String']>;
  /** The id of the Block */
  clientId?: Maybe<Scalars['String']>;
  /** CSS Classnames to apply to the block */
  cssClassNames?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** The inner blocks of the Block */
  innerBlocks?: Maybe<Array<Maybe<EditorBlock>>>;
  /** Whether the block is Dynamic (server rendered) */
  isDynamic: Scalars['Boolean'];
  /** The name of the block */
  name?: Maybe<Scalars['String']>;
  /** The parent id of the Block */
  parentClientId?: Maybe<Scalars['String']>;
  /** The rendered HTML for the block */
  renderedHtml?: Maybe<Scalars['String']>;
};

/** Attributes of the CorePullquote Block Type */
export type CorePullquoteAttributes = BlockWithSupportsAnchor & {
  __typename?: 'CorePullquoteAttributes';
  /** The &quot;align&quot; field on the &quot;CorePullquote&quot; block */
  align?: Maybe<Scalars['String']>;
  /** The anchor field for the block. */
  anchor?: Maybe<Scalars['String']>;
  /** The &quot;backgroundColor&quot; field on the &quot;CorePullquote&quot; block */
  backgroundColor?: Maybe<Scalars['String']>;
  /** The &quot;borderColor&quot; field on the &quot;CorePullquote&quot; block */
  borderColor?: Maybe<Scalars['String']>;
  /** The &quot;citation&quot; field on the &quot;CorePullquote&quot; block */
  citation?: Maybe<Scalars['String']>;
  /** The &quot;className&quot; field on the &quot;CorePullquote&quot; block */
  className?: Maybe<Scalars['String']>;
  /** The &quot;fontFamily&quot; field on the &quot;CorePullquote&quot; block */
  fontFamily?: Maybe<Scalars['String']>;
  /** The &quot;fontSize&quot; field on the &quot;CorePullquote&quot; block */
  fontSize?: Maybe<Scalars['String']>;
  /** The &quot;gradient&quot; field on the &quot;CorePullquote&quot; block */
  gradient?: Maybe<Scalars['String']>;
  /** The &quot;lock&quot; field on the &quot;CorePullquote&quot; block */
  lock?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;style&quot; field on the &quot;CorePullquote&quot; block */
  style?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;textAlign&quot; field on the &quot;CorePullquote&quot; block */
  textAlign?: Maybe<Scalars['String']>;
  /** The &quot;textColor&quot; field on the &quot;CorePullquote&quot; block */
  textColor?: Maybe<Scalars['String']>;
  /** The &quot;value&quot; field on the &quot;CorePullquote&quot; block */
  value?: Maybe<Scalars['String']>;
};

/** A block used for editing the site */
export type CoreQuery = EditorBlock & PageEditorBlock & PostEditorBlock & {
  __typename?: 'CoreQuery';
  /** The API version of the Gutenberg Block */
  apiVersion?: Maybe<Scalars['Int']>;
  /** Attributes of the CoreQuery Block Type */
  attributes?: Maybe<CoreQueryAttributes>;
  /** The name of the category the Block belongs to */
  blockEditorCategoryName?: Maybe<Scalars['String']>;
  /** The id of the Block */
  clientId?: Maybe<Scalars['String']>;
  /** CSS Classnames to apply to the block */
  cssClassNames?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** The inner blocks of the Block */
  innerBlocks?: Maybe<Array<Maybe<EditorBlock>>>;
  /** Whether the block is Dynamic (server rendered) */
  isDynamic: Scalars['Boolean'];
  /** The name of the block */
  name?: Maybe<Scalars['String']>;
  /** The parent id of the Block */
  parentClientId?: Maybe<Scalars['String']>;
  /** The rendered HTML for the block */
  renderedHtml?: Maybe<Scalars['String']>;
};

/** Attributes of the CoreQuery Block Type */
export type CoreQueryAttributes = {
  __typename?: 'CoreQueryAttributes';
  /** The &quot;align&quot; field on the &quot;CoreQuery&quot; block */
  align?: Maybe<Scalars['String']>;
  /** The &quot;className&quot; field on the &quot;CoreQuery&quot; block */
  className?: Maybe<Scalars['String']>;
  /** The &quot;displayLayout&quot; field on the &quot;CoreQuery&quot; block */
  displayLayout?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;layout&quot; field on the &quot;CoreQuery&quot; block */
  layout?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;lock&quot; field on the &quot;CoreQuery&quot; block */
  lock?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;namespace&quot; field on the &quot;CoreQuery&quot; block */
  namespace?: Maybe<Scalars['String']>;
  /** The &quot;query&quot; field on the &quot;CoreQuery&quot; block */
  query?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;queryId&quot; field on the &quot;CoreQuery&quot; block */
  queryId?: Maybe<Scalars['Float']>;
  /** The &quot;tagName&quot; field on the &quot;CoreQuery&quot; block */
  tagName?: Maybe<Scalars['String']>;
};

/** A block used for editing the site */
export type CoreQueryNoResults = EditorBlock & PageEditorBlock & PostEditorBlock & {
  __typename?: 'CoreQueryNoResults';
  /** The API version of the Gutenberg Block */
  apiVersion?: Maybe<Scalars['Int']>;
  /** Attributes of the CoreQueryNoResults Block Type */
  attributes?: Maybe<CoreQueryNoResultsAttributes>;
  /** The name of the category the Block belongs to */
  blockEditorCategoryName?: Maybe<Scalars['String']>;
  /** The id of the Block */
  clientId?: Maybe<Scalars['String']>;
  /** CSS Classnames to apply to the block */
  cssClassNames?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** The inner blocks of the Block */
  innerBlocks?: Maybe<Array<Maybe<EditorBlock>>>;
  /** Whether the block is Dynamic (server rendered) */
  isDynamic: Scalars['Boolean'];
  /** The name of the block */
  name?: Maybe<Scalars['String']>;
  /** The parent id of the Block */
  parentClientId?: Maybe<Scalars['String']>;
  /** The rendered HTML for the block */
  renderedHtml?: Maybe<Scalars['String']>;
};

/** Attributes of the CoreQueryNoResults Block Type */
export type CoreQueryNoResultsAttributes = {
  __typename?: 'CoreQueryNoResultsAttributes';
  /** The &quot;align&quot; field on the &quot;CoreQueryNoResults&quot; block */
  align?: Maybe<Scalars['String']>;
  /** The &quot;backgroundColor&quot; field on the &quot;CoreQueryNoResults&quot; block */
  backgroundColor?: Maybe<Scalars['String']>;
  /** The &quot;className&quot; field on the &quot;CoreQueryNoResults&quot; block */
  className?: Maybe<Scalars['String']>;
  /** The &quot;fontFamily&quot; field on the &quot;CoreQueryNoResults&quot; block */
  fontFamily?: Maybe<Scalars['String']>;
  /** The &quot;fontSize&quot; field on the &quot;CoreQueryNoResults&quot; block */
  fontSize?: Maybe<Scalars['String']>;
  /** The &quot;gradient&quot; field on the &quot;CoreQueryNoResults&quot; block */
  gradient?: Maybe<Scalars['String']>;
  /** The &quot;lock&quot; field on the &quot;CoreQueryNoResults&quot; block */
  lock?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;style&quot; field on the &quot;CoreQueryNoResults&quot; block */
  style?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;textColor&quot; field on the &quot;CoreQueryNoResults&quot; block */
  textColor?: Maybe<Scalars['String']>;
};

/** A block used for editing the site */
export type CoreQueryPagination = EditorBlock & PageEditorBlock & PostEditorBlock & {
  __typename?: 'CoreQueryPagination';
  /** The API version of the Gutenberg Block */
  apiVersion?: Maybe<Scalars['Int']>;
  /** Attributes of the CoreQueryPagination Block Type */
  attributes?: Maybe<CoreQueryPaginationAttributes>;
  /** The name of the category the Block belongs to */
  blockEditorCategoryName?: Maybe<Scalars['String']>;
  /** The id of the Block */
  clientId?: Maybe<Scalars['String']>;
  /** CSS Classnames to apply to the block */
  cssClassNames?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** The inner blocks of the Block */
  innerBlocks?: Maybe<Array<Maybe<EditorBlock>>>;
  /** Whether the block is Dynamic (server rendered) */
  isDynamic: Scalars['Boolean'];
  /** The name of the block */
  name?: Maybe<Scalars['String']>;
  /** The parent id of the Block */
  parentClientId?: Maybe<Scalars['String']>;
  /** The rendered HTML for the block */
  renderedHtml?: Maybe<Scalars['String']>;
};

/** Attributes of the CoreQueryPagination Block Type */
export type CoreQueryPaginationAttributes = {
  __typename?: 'CoreQueryPaginationAttributes';
  /** The &quot;align&quot; field on the &quot;CoreQueryPagination&quot; block */
  align?: Maybe<Scalars['String']>;
  /** The &quot;backgroundColor&quot; field on the &quot;CoreQueryPagination&quot; block */
  backgroundColor?: Maybe<Scalars['String']>;
  /** The &quot;className&quot; field on the &quot;CoreQueryPagination&quot; block */
  className?: Maybe<Scalars['String']>;
  /** The &quot;fontFamily&quot; field on the &quot;CoreQueryPagination&quot; block */
  fontFamily?: Maybe<Scalars['String']>;
  /** The &quot;fontSize&quot; field on the &quot;CoreQueryPagination&quot; block */
  fontSize?: Maybe<Scalars['String']>;
  /** The &quot;gradient&quot; field on the &quot;CoreQueryPagination&quot; block */
  gradient?: Maybe<Scalars['String']>;
  /** The &quot;layout&quot; field on the &quot;CoreQueryPagination&quot; block */
  layout?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;lock&quot; field on the &quot;CoreQueryPagination&quot; block */
  lock?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;paginationArrow&quot; field on the &quot;CoreQueryPagination&quot; block */
  paginationArrow?: Maybe<Scalars['String']>;
  /** The &quot;style&quot; field on the &quot;CoreQueryPagination&quot; block */
  style?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;textColor&quot; field on the &quot;CoreQueryPagination&quot; block */
  textColor?: Maybe<Scalars['String']>;
};

/** A block used for editing the site */
export type CoreQueryPaginationNext = EditorBlock & PageEditorBlock & PostEditorBlock & {
  __typename?: 'CoreQueryPaginationNext';
  /** The API version of the Gutenberg Block */
  apiVersion?: Maybe<Scalars['Int']>;
  /** Attributes of the CoreQueryPaginationNext Block Type */
  attributes?: Maybe<CoreQueryPaginationNextAttributes>;
  /** The name of the category the Block belongs to */
  blockEditorCategoryName?: Maybe<Scalars['String']>;
  /** The id of the Block */
  clientId?: Maybe<Scalars['String']>;
  /** CSS Classnames to apply to the block */
  cssClassNames?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** The inner blocks of the Block */
  innerBlocks?: Maybe<Array<Maybe<EditorBlock>>>;
  /** Whether the block is Dynamic (server rendered) */
  isDynamic: Scalars['Boolean'];
  /** The name of the block */
  name?: Maybe<Scalars['String']>;
  /** The parent id of the Block */
  parentClientId?: Maybe<Scalars['String']>;
  /** The rendered HTML for the block */
  renderedHtml?: Maybe<Scalars['String']>;
};

/** Attributes of the CoreQueryPaginationNext Block Type */
export type CoreQueryPaginationNextAttributes = {
  __typename?: 'CoreQueryPaginationNextAttributes';
  /** The &quot;backgroundColor&quot; field on the &quot;CoreQueryPaginationNext&quot; block */
  backgroundColor?: Maybe<Scalars['String']>;
  /** The &quot;className&quot; field on the &quot;CoreQueryPaginationNext&quot; block */
  className?: Maybe<Scalars['String']>;
  /** The &quot;fontFamily&quot; field on the &quot;CoreQueryPaginationNext&quot; block */
  fontFamily?: Maybe<Scalars['String']>;
  /** The &quot;fontSize&quot; field on the &quot;CoreQueryPaginationNext&quot; block */
  fontSize?: Maybe<Scalars['String']>;
  /** The &quot;gradient&quot; field on the &quot;CoreQueryPaginationNext&quot; block */
  gradient?: Maybe<Scalars['String']>;
  /** The &quot;label&quot; field on the &quot;CoreQueryPaginationNext&quot; block */
  label?: Maybe<Scalars['String']>;
  /** The &quot;lock&quot; field on the &quot;CoreQueryPaginationNext&quot; block */
  lock?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;style&quot; field on the &quot;CoreQueryPaginationNext&quot; block */
  style?: Maybe<Scalars['BlockAttributesObject']>;
};

/** A block used for editing the site */
export type CoreQueryPaginationNumbers = EditorBlock & PageEditorBlock & PostEditorBlock & {
  __typename?: 'CoreQueryPaginationNumbers';
  /** The API version of the Gutenberg Block */
  apiVersion?: Maybe<Scalars['Int']>;
  /** Attributes of the CoreQueryPaginationNumbers Block Type */
  attributes?: Maybe<CoreQueryPaginationNumbersAttributes>;
  /** The name of the category the Block belongs to */
  blockEditorCategoryName?: Maybe<Scalars['String']>;
  /** The id of the Block */
  clientId?: Maybe<Scalars['String']>;
  /** CSS Classnames to apply to the block */
  cssClassNames?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** The inner blocks of the Block */
  innerBlocks?: Maybe<Array<Maybe<EditorBlock>>>;
  /** Whether the block is Dynamic (server rendered) */
  isDynamic: Scalars['Boolean'];
  /** The name of the block */
  name?: Maybe<Scalars['String']>;
  /** The parent id of the Block */
  parentClientId?: Maybe<Scalars['String']>;
  /** The rendered HTML for the block */
  renderedHtml?: Maybe<Scalars['String']>;
};

/** Attributes of the CoreQueryPaginationNumbers Block Type */
export type CoreQueryPaginationNumbersAttributes = {
  __typename?: 'CoreQueryPaginationNumbersAttributes';
  /** The &quot;backgroundColor&quot; field on the &quot;CoreQueryPaginationNumbers&quot; block */
  backgroundColor?: Maybe<Scalars['String']>;
  /** The &quot;className&quot; field on the &quot;CoreQueryPaginationNumbers&quot; block */
  className?: Maybe<Scalars['String']>;
  /** The &quot;fontFamily&quot; field on the &quot;CoreQueryPaginationNumbers&quot; block */
  fontFamily?: Maybe<Scalars['String']>;
  /** The &quot;fontSize&quot; field on the &quot;CoreQueryPaginationNumbers&quot; block */
  fontSize?: Maybe<Scalars['String']>;
  /** The &quot;gradient&quot; field on the &quot;CoreQueryPaginationNumbers&quot; block */
  gradient?: Maybe<Scalars['String']>;
  /** The &quot;lock&quot; field on the &quot;CoreQueryPaginationNumbers&quot; block */
  lock?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;style&quot; field on the &quot;CoreQueryPaginationNumbers&quot; block */
  style?: Maybe<Scalars['BlockAttributesObject']>;
};

/** A block used for editing the site */
export type CoreQueryPaginationPrevious = EditorBlock & PageEditorBlock & PostEditorBlock & {
  __typename?: 'CoreQueryPaginationPrevious';
  /** The API version of the Gutenberg Block */
  apiVersion?: Maybe<Scalars['Int']>;
  /** Attributes of the CoreQueryPaginationPrevious Block Type */
  attributes?: Maybe<CoreQueryPaginationPreviousAttributes>;
  /** The name of the category the Block belongs to */
  blockEditorCategoryName?: Maybe<Scalars['String']>;
  /** The id of the Block */
  clientId?: Maybe<Scalars['String']>;
  /** CSS Classnames to apply to the block */
  cssClassNames?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** The inner blocks of the Block */
  innerBlocks?: Maybe<Array<Maybe<EditorBlock>>>;
  /** Whether the block is Dynamic (server rendered) */
  isDynamic: Scalars['Boolean'];
  /** The name of the block */
  name?: Maybe<Scalars['String']>;
  /** The parent id of the Block */
  parentClientId?: Maybe<Scalars['String']>;
  /** The rendered HTML for the block */
  renderedHtml?: Maybe<Scalars['String']>;
};

/** Attributes of the CoreQueryPaginationPrevious Block Type */
export type CoreQueryPaginationPreviousAttributes = {
  __typename?: 'CoreQueryPaginationPreviousAttributes';
  /** The &quot;backgroundColor&quot; field on the &quot;CoreQueryPaginationPrevious&quot; block */
  backgroundColor?: Maybe<Scalars['String']>;
  /** The &quot;className&quot; field on the &quot;CoreQueryPaginationPrevious&quot; block */
  className?: Maybe<Scalars['String']>;
  /** The &quot;fontFamily&quot; field on the &quot;CoreQueryPaginationPrevious&quot; block */
  fontFamily?: Maybe<Scalars['String']>;
  /** The &quot;fontSize&quot; field on the &quot;CoreQueryPaginationPrevious&quot; block */
  fontSize?: Maybe<Scalars['String']>;
  /** The &quot;gradient&quot; field on the &quot;CoreQueryPaginationPrevious&quot; block */
  gradient?: Maybe<Scalars['String']>;
  /** The &quot;label&quot; field on the &quot;CoreQueryPaginationPrevious&quot; block */
  label?: Maybe<Scalars['String']>;
  /** The &quot;lock&quot; field on the &quot;CoreQueryPaginationPrevious&quot; block */
  lock?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;style&quot; field on the &quot;CoreQueryPaginationPrevious&quot; block */
  style?: Maybe<Scalars['BlockAttributesObject']>;
};

/** A block used for editing the site */
export type CoreQueryTitle = EditorBlock & PageEditorBlock & PostEditorBlock & {
  __typename?: 'CoreQueryTitle';
  /** The API version of the Gutenberg Block */
  apiVersion?: Maybe<Scalars['Int']>;
  /** Attributes of the CoreQueryTitle Block Type */
  attributes?: Maybe<CoreQueryTitleAttributes>;
  /** The name of the category the Block belongs to */
  blockEditorCategoryName?: Maybe<Scalars['String']>;
  /** The id of the Block */
  clientId?: Maybe<Scalars['String']>;
  /** CSS Classnames to apply to the block */
  cssClassNames?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** The inner blocks of the Block */
  innerBlocks?: Maybe<Array<Maybe<EditorBlock>>>;
  /** Whether the block is Dynamic (server rendered) */
  isDynamic: Scalars['Boolean'];
  /** The name of the block */
  name?: Maybe<Scalars['String']>;
  /** The parent id of the Block */
  parentClientId?: Maybe<Scalars['String']>;
  /** The rendered HTML for the block */
  renderedHtml?: Maybe<Scalars['String']>;
};

/** Attributes of the CoreQueryTitle Block Type */
export type CoreQueryTitleAttributes = {
  __typename?: 'CoreQueryTitleAttributes';
  /** The &quot;align&quot; field on the &quot;CoreQueryTitle&quot; block */
  align?: Maybe<Scalars['String']>;
  /** The &quot;backgroundColor&quot; field on the &quot;CoreQueryTitle&quot; block */
  backgroundColor?: Maybe<Scalars['String']>;
  /** The &quot;className&quot; field on the &quot;CoreQueryTitle&quot; block */
  className?: Maybe<Scalars['String']>;
  /** The &quot;fontFamily&quot; field on the &quot;CoreQueryTitle&quot; block */
  fontFamily?: Maybe<Scalars['String']>;
  /** The &quot;fontSize&quot; field on the &quot;CoreQueryTitle&quot; block */
  fontSize?: Maybe<Scalars['String']>;
  /** The &quot;gradient&quot; field on the &quot;CoreQueryTitle&quot; block */
  gradient?: Maybe<Scalars['String']>;
  /** The &quot;level&quot; field on the &quot;CoreQueryTitle&quot; block */
  level?: Maybe<Scalars['Float']>;
  /** The &quot;lock&quot; field on the &quot;CoreQueryTitle&quot; block */
  lock?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;showPrefix&quot; field on the &quot;CoreQueryTitle&quot; block */
  showPrefix?: Maybe<Scalars['Boolean']>;
  /** The &quot;showSearchTerm&quot; field on the &quot;CoreQueryTitle&quot; block */
  showSearchTerm?: Maybe<Scalars['Boolean']>;
  /** The &quot;style&quot; field on the &quot;CoreQueryTitle&quot; block */
  style?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;textAlign&quot; field on the &quot;CoreQueryTitle&quot; block */
  textAlign?: Maybe<Scalars['String']>;
  /** The &quot;textColor&quot; field on the &quot;CoreQueryTitle&quot; block */
  textColor?: Maybe<Scalars['String']>;
  /** The &quot;type&quot; field on the &quot;CoreQueryTitle&quot; block */
  type?: Maybe<Scalars['String']>;
};

/** A block used for editing the site */
export type CoreQuote = BlockWithSupportsAnchor & EditorBlock & PageEditorBlock & PostEditorBlock & {
  __typename?: 'CoreQuote';
  /** The anchor field for the block. */
  anchor?: Maybe<Scalars['String']>;
  /** The API version of the Gutenberg Block */
  apiVersion?: Maybe<Scalars['Int']>;
  /** Attributes of the CoreQuote Block Type */
  attributes?: Maybe<CoreQuoteAttributes>;
  /** The name of the category the Block belongs to */
  blockEditorCategoryName?: Maybe<Scalars['String']>;
  /** The id of the Block */
  clientId?: Maybe<Scalars['String']>;
  /** CSS Classnames to apply to the block */
  cssClassNames?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** The inner blocks of the Block */
  innerBlocks?: Maybe<Array<Maybe<EditorBlock>>>;
  /** Whether the block is Dynamic (server rendered) */
  isDynamic: Scalars['Boolean'];
  /** The name of the block */
  name?: Maybe<Scalars['String']>;
  /** The parent id of the Block */
  parentClientId?: Maybe<Scalars['String']>;
  /** The rendered HTML for the block */
  renderedHtml?: Maybe<Scalars['String']>;
};

/** Attributes of the CoreQuote Block Type */
export type CoreQuoteAttributes = BlockWithSupportsAnchor & {
  __typename?: 'CoreQuoteAttributes';
  /** The &quot;align&quot; field on the &quot;CoreQuote&quot; block */
  align?: Maybe<Scalars['String']>;
  /** The anchor field for the block. */
  anchor?: Maybe<Scalars['String']>;
  /** The &quot;backgroundColor&quot; field on the &quot;CoreQuote&quot; block */
  backgroundColor?: Maybe<Scalars['String']>;
  /** The &quot;citation&quot; field on the &quot;CoreQuote&quot; block */
  citation?: Maybe<Scalars['String']>;
  /** The &quot;className&quot; field on the &quot;CoreQuote&quot; block */
  className?: Maybe<Scalars['String']>;
  /** The &quot;cssClassName&quot; field on the &quot;CoreQuote&quot; block */
  cssClassName?: Maybe<Scalars['String']>;
  /** The &quot;fontFamily&quot; field on the &quot;CoreQuote&quot; block */
  fontFamily?: Maybe<Scalars['String']>;
  /** The &quot;fontSize&quot; field on the &quot;CoreQuote&quot; block */
  fontSize?: Maybe<Scalars['String']>;
  /** The &quot;gradient&quot; field on the &quot;CoreQuote&quot; block */
  gradient?: Maybe<Scalars['String']>;
  /** The &quot;lock&quot; field on the &quot;CoreQuote&quot; block */
  lock?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;style&quot; field on the &quot;CoreQuote&quot; block */
  style?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;textColor&quot; field on the &quot;CoreQuote&quot; block */
  textColor?: Maybe<Scalars['String']>;
  /** The &quot;value&quot; field on the &quot;CoreQuote&quot; block */
  value?: Maybe<Scalars['String']>;
};

/** A block used for editing the site */
export type CoreReadMore = EditorBlock & PageEditorBlock & PostEditorBlock & {
  __typename?: 'CoreReadMore';
  /** The API version of the Gutenberg Block */
  apiVersion?: Maybe<Scalars['Int']>;
  /** Attributes of the CoreReadMore Block Type */
  attributes?: Maybe<CoreReadMoreAttributes>;
  /** The name of the category the Block belongs to */
  blockEditorCategoryName?: Maybe<Scalars['String']>;
  /** The id of the Block */
  clientId?: Maybe<Scalars['String']>;
  /** CSS Classnames to apply to the block */
  cssClassNames?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** The inner blocks of the Block */
  innerBlocks?: Maybe<Array<Maybe<EditorBlock>>>;
  /** Whether the block is Dynamic (server rendered) */
  isDynamic: Scalars['Boolean'];
  /** The name of the block */
  name?: Maybe<Scalars['String']>;
  /** The parent id of the Block */
  parentClientId?: Maybe<Scalars['String']>;
  /** The rendered HTML for the block */
  renderedHtml?: Maybe<Scalars['String']>;
};

/** Attributes of the CoreReadMore Block Type */
export type CoreReadMoreAttributes = {
  __typename?: 'CoreReadMoreAttributes';
  /** The &quot;backgroundColor&quot; field on the &quot;CoreReadMore&quot; block */
  backgroundColor?: Maybe<Scalars['String']>;
  /** The &quot;borderColor&quot; field on the &quot;CoreReadMore&quot; block */
  borderColor?: Maybe<Scalars['String']>;
  /** The &quot;className&quot; field on the &quot;CoreReadMore&quot; block */
  className?: Maybe<Scalars['String']>;
  /** The &quot;content&quot; field on the &quot;CoreReadMore&quot; block */
  content?: Maybe<Scalars['String']>;
  /** The &quot;fontFamily&quot; field on the &quot;CoreReadMore&quot; block */
  fontFamily?: Maybe<Scalars['String']>;
  /** The &quot;fontSize&quot; field on the &quot;CoreReadMore&quot; block */
  fontSize?: Maybe<Scalars['String']>;
  /** The &quot;gradient&quot; field on the &quot;CoreReadMore&quot; block */
  gradient?: Maybe<Scalars['String']>;
  /** The &quot;linkTarget&quot; field on the &quot;CoreReadMore&quot; block */
  linkTarget?: Maybe<Scalars['String']>;
  /** The &quot;lock&quot; field on the &quot;CoreReadMore&quot; block */
  lock?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;style&quot; field on the &quot;CoreReadMore&quot; block */
  style?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;textColor&quot; field on the &quot;CoreReadMore&quot; block */
  textColor?: Maybe<Scalars['String']>;
};

/** A block used for editing the site */
export type CoreRss = EditorBlock & PageEditorBlock & PostEditorBlock & {
  __typename?: 'CoreRss';
  /** The API version of the Gutenberg Block */
  apiVersion?: Maybe<Scalars['Int']>;
  /** Attributes of the CoreRss Block Type */
  attributes?: Maybe<CoreRssAttributes>;
  /** The name of the category the Block belongs to */
  blockEditorCategoryName?: Maybe<Scalars['String']>;
  /** The id of the Block */
  clientId?: Maybe<Scalars['String']>;
  /** CSS Classnames to apply to the block */
  cssClassNames?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** The inner blocks of the Block */
  innerBlocks?: Maybe<Array<Maybe<EditorBlock>>>;
  /** Whether the block is Dynamic (server rendered) */
  isDynamic: Scalars['Boolean'];
  /** The name of the block */
  name?: Maybe<Scalars['String']>;
  /** The parent id of the Block */
  parentClientId?: Maybe<Scalars['String']>;
  /** The rendered HTML for the block */
  renderedHtml?: Maybe<Scalars['String']>;
};

/** Attributes of the CoreRss Block Type */
export type CoreRssAttributes = {
  __typename?: 'CoreRssAttributes';
  /** The &quot;align&quot; field on the &quot;CoreRss&quot; block */
  align?: Maybe<Scalars['String']>;
  /** The &quot;blockLayout&quot; field on the &quot;CoreRss&quot; block */
  blockLayout?: Maybe<Scalars['String']>;
  /** The &quot;className&quot; field on the &quot;CoreRss&quot; block */
  className?: Maybe<Scalars['String']>;
  /** The &quot;columns&quot; field on the &quot;CoreRss&quot; block */
  columns?: Maybe<Scalars['Float']>;
  /** The &quot;displayAuthor&quot; field on the &quot;CoreRss&quot; block */
  displayAuthor?: Maybe<Scalars['Boolean']>;
  /** The &quot;displayDate&quot; field on the &quot;CoreRss&quot; block */
  displayDate?: Maybe<Scalars['Boolean']>;
  /** The &quot;displayExcerpt&quot; field on the &quot;CoreRss&quot; block */
  displayExcerpt?: Maybe<Scalars['Boolean']>;
  /** The &quot;excerptLength&quot; field on the &quot;CoreRss&quot; block */
  excerptLength?: Maybe<Scalars['Float']>;
  /** The &quot;feedURL&quot; field on the &quot;CoreRss&quot; block */
  feedURL?: Maybe<Scalars['String']>;
  /** The &quot;itemsToShow&quot; field on the &quot;CoreRss&quot; block */
  itemsToShow?: Maybe<Scalars['Float']>;
  /** The &quot;lock&quot; field on the &quot;CoreRss&quot; block */
  lock?: Maybe<Scalars['BlockAttributesObject']>;
};

/** A block used for editing the site */
export type CoreSearch = EditorBlock & PageEditorBlock & PostEditorBlock & {
  __typename?: 'CoreSearch';
  /** The API version of the Gutenberg Block */
  apiVersion?: Maybe<Scalars['Int']>;
  /** Attributes of the CoreSearch Block Type */
  attributes?: Maybe<CoreSearchAttributes>;
  /** The name of the category the Block belongs to */
  blockEditorCategoryName?: Maybe<Scalars['String']>;
  /** The id of the Block */
  clientId?: Maybe<Scalars['String']>;
  /** CSS Classnames to apply to the block */
  cssClassNames?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** The inner blocks of the Block */
  innerBlocks?: Maybe<Array<Maybe<EditorBlock>>>;
  /** Whether the block is Dynamic (server rendered) */
  isDynamic: Scalars['Boolean'];
  /** The name of the block */
  name?: Maybe<Scalars['String']>;
  /** The parent id of the Block */
  parentClientId?: Maybe<Scalars['String']>;
  /** The rendered HTML for the block */
  renderedHtml?: Maybe<Scalars['String']>;
};

/** Attributes of the CoreSearch Block Type */
export type CoreSearchAttributes = {
  __typename?: 'CoreSearchAttributes';
  /** The &quot;align&quot; field on the &quot;CoreSearch&quot; block */
  align?: Maybe<Scalars['String']>;
  /** The &quot;backgroundColor&quot; field on the &quot;CoreSearch&quot; block */
  backgroundColor?: Maybe<Scalars['String']>;
  /** The &quot;borderColor&quot; field on the &quot;CoreSearch&quot; block */
  borderColor?: Maybe<Scalars['String']>;
  /** The &quot;buttonPosition&quot; field on the &quot;CoreSearch&quot; block */
  buttonPosition?: Maybe<Scalars['String']>;
  /** The &quot;buttonText&quot; field on the &quot;CoreSearch&quot; block */
  buttonText?: Maybe<Scalars['String']>;
  /** The &quot;buttonUseIcon&quot; field on the &quot;CoreSearch&quot; block */
  buttonUseIcon?: Maybe<Scalars['Boolean']>;
  /** The &quot;className&quot; field on the &quot;CoreSearch&quot; block */
  className?: Maybe<Scalars['String']>;
  /** The &quot;fontFamily&quot; field on the &quot;CoreSearch&quot; block */
  fontFamily?: Maybe<Scalars['String']>;
  /** The &quot;fontSize&quot; field on the &quot;CoreSearch&quot; block */
  fontSize?: Maybe<Scalars['String']>;
  /** The &quot;gradient&quot; field on the &quot;CoreSearch&quot; block */
  gradient?: Maybe<Scalars['String']>;
  /** The &quot;label&quot; field on the &quot;CoreSearch&quot; block */
  label?: Maybe<Scalars['String']>;
  /** The &quot;lock&quot; field on the &quot;CoreSearch&quot; block */
  lock?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;placeholder&quot; field on the &quot;CoreSearch&quot; block */
  placeholder?: Maybe<Scalars['String']>;
  /** The &quot;query&quot; field on the &quot;CoreSearch&quot; block */
  query?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;showLabel&quot; field on the &quot;CoreSearch&quot; block */
  showLabel?: Maybe<Scalars['Boolean']>;
  /** The &quot;style&quot; field on the &quot;CoreSearch&quot; block */
  style?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;textColor&quot; field on the &quot;CoreSearch&quot; block */
  textColor?: Maybe<Scalars['String']>;
  /** The &quot;width&quot; field on the &quot;CoreSearch&quot; block */
  width?: Maybe<Scalars['Float']>;
  /** The &quot;widthUnit&quot; field on the &quot;CoreSearch&quot; block */
  widthUnit?: Maybe<Scalars['String']>;
};

/** A block used for editing the site */
export type CoreSeparator = BlockWithSupportsAnchor & EditorBlock & PageEditorBlock & PostEditorBlock & {
  __typename?: 'CoreSeparator';
  /** The anchor field for the block. */
  anchor?: Maybe<Scalars['String']>;
  /** The API version of the Gutenberg Block */
  apiVersion?: Maybe<Scalars['Int']>;
  /** Attributes of the CoreSeparator Block Type */
  attributes?: Maybe<CoreSeparatorAttributes>;
  /** The name of the category the Block belongs to */
  blockEditorCategoryName?: Maybe<Scalars['String']>;
  /** The id of the Block */
  clientId?: Maybe<Scalars['String']>;
  /** CSS Classnames to apply to the block */
  cssClassNames?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** The inner blocks of the Block */
  innerBlocks?: Maybe<Array<Maybe<EditorBlock>>>;
  /** Whether the block is Dynamic (server rendered) */
  isDynamic: Scalars['Boolean'];
  /** The name of the block */
  name?: Maybe<Scalars['String']>;
  /** The parent id of the Block */
  parentClientId?: Maybe<Scalars['String']>;
  /** The rendered HTML for the block */
  renderedHtml?: Maybe<Scalars['String']>;
};

/** Attributes of the CoreSeparator Block Type */
export type CoreSeparatorAttributes = BlockWithSupportsAnchor & {
  __typename?: 'CoreSeparatorAttributes';
  /** The &quot;align&quot; field on the &quot;CoreSeparator&quot; block */
  align?: Maybe<Scalars['String']>;
  /** The anchor field for the block. */
  anchor?: Maybe<Scalars['String']>;
  /** The &quot;backgroundColor&quot; field on the &quot;CoreSeparator&quot; block */
  backgroundColor?: Maybe<Scalars['String']>;
  /** The &quot;className&quot; field on the &quot;CoreSeparator&quot; block */
  className?: Maybe<Scalars['String']>;
  /** The &quot;gradient&quot; field on the &quot;CoreSeparator&quot; block */
  gradient?: Maybe<Scalars['String']>;
  /** The &quot;lock&quot; field on the &quot;CoreSeparator&quot; block */
  lock?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;opacity&quot; field on the &quot;CoreSeparator&quot; block */
  opacity?: Maybe<Scalars['String']>;
  /** The &quot;style&quot; field on the &quot;CoreSeparator&quot; block */
  style?: Maybe<Scalars['BlockAttributesObject']>;
};

/** A block used for editing the site */
export type CoreShortcode = EditorBlock & PageEditorBlock & PostEditorBlock & {
  __typename?: 'CoreShortcode';
  /** The API version of the Gutenberg Block */
  apiVersion?: Maybe<Scalars['Int']>;
  /** Attributes of the CoreShortcode Block Type */
  attributes?: Maybe<CoreShortcodeAttributes>;
  /** The name of the category the Block belongs to */
  blockEditorCategoryName?: Maybe<Scalars['String']>;
  /** The id of the Block */
  clientId?: Maybe<Scalars['String']>;
  /** CSS Classnames to apply to the block */
  cssClassNames?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** The inner blocks of the Block */
  innerBlocks?: Maybe<Array<Maybe<EditorBlock>>>;
  /** Whether the block is Dynamic (server rendered) */
  isDynamic: Scalars['Boolean'];
  /** The name of the block */
  name?: Maybe<Scalars['String']>;
  /** The parent id of the Block */
  parentClientId?: Maybe<Scalars['String']>;
  /** The rendered HTML for the block */
  renderedHtml?: Maybe<Scalars['String']>;
};

/** Attributes of the CoreShortcode Block Type */
export type CoreShortcodeAttributes = {
  __typename?: 'CoreShortcodeAttributes';
  /** The &quot;lock&quot; field on the &quot;CoreShortcode&quot; block */
  lock?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;text&quot; field on the &quot;CoreShortcode&quot; block */
  text?: Maybe<Scalars['String']>;
};

/** A block used for editing the site */
export type CoreSiteLogo = EditorBlock & PageEditorBlock & PostEditorBlock & {
  __typename?: 'CoreSiteLogo';
  /** The API version of the Gutenberg Block */
  apiVersion?: Maybe<Scalars['Int']>;
  /** Attributes of the CoreSiteLogo Block Type */
  attributes?: Maybe<CoreSiteLogoAttributes>;
  /** The name of the category the Block belongs to */
  blockEditorCategoryName?: Maybe<Scalars['String']>;
  /** The id of the Block */
  clientId?: Maybe<Scalars['String']>;
  /** CSS Classnames to apply to the block */
  cssClassNames?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** The inner blocks of the Block */
  innerBlocks?: Maybe<Array<Maybe<EditorBlock>>>;
  /** Whether the block is Dynamic (server rendered) */
  isDynamic: Scalars['Boolean'];
  /** The name of the block */
  name?: Maybe<Scalars['String']>;
  /** The parent id of the Block */
  parentClientId?: Maybe<Scalars['String']>;
  /** The rendered HTML for the block */
  renderedHtml?: Maybe<Scalars['String']>;
};

/** Attributes of the CoreSiteLogo Block Type */
export type CoreSiteLogoAttributes = {
  __typename?: 'CoreSiteLogoAttributes';
  /** The &quot;align&quot; field on the &quot;CoreSiteLogo&quot; block */
  align?: Maybe<Scalars['String']>;
  /** The &quot;className&quot; field on the &quot;CoreSiteLogo&quot; block */
  className?: Maybe<Scalars['String']>;
  /** The &quot;isLink&quot; field on the &quot;CoreSiteLogo&quot; block */
  isLink?: Maybe<Scalars['Boolean']>;
  /** The &quot;linkTarget&quot; field on the &quot;CoreSiteLogo&quot; block */
  linkTarget?: Maybe<Scalars['String']>;
  /** The &quot;lock&quot; field on the &quot;CoreSiteLogo&quot; block */
  lock?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;shouldSyncIcon&quot; field on the &quot;CoreSiteLogo&quot; block */
  shouldSyncIcon?: Maybe<Scalars['Boolean']>;
  /** The &quot;style&quot; field on the &quot;CoreSiteLogo&quot; block */
  style?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;width&quot; field on the &quot;CoreSiteLogo&quot; block */
  width?: Maybe<Scalars['Float']>;
};

/** A block used for editing the site */
export type CoreSiteTagline = EditorBlock & PageEditorBlock & PostEditorBlock & {
  __typename?: 'CoreSiteTagline';
  /** The API version of the Gutenberg Block */
  apiVersion?: Maybe<Scalars['Int']>;
  /** Attributes of the CoreSiteTagline Block Type */
  attributes?: Maybe<CoreSiteTaglineAttributes>;
  /** The name of the category the Block belongs to */
  blockEditorCategoryName?: Maybe<Scalars['String']>;
  /** The id of the Block */
  clientId?: Maybe<Scalars['String']>;
  /** CSS Classnames to apply to the block */
  cssClassNames?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** The inner blocks of the Block */
  innerBlocks?: Maybe<Array<Maybe<EditorBlock>>>;
  /** Whether the block is Dynamic (server rendered) */
  isDynamic: Scalars['Boolean'];
  /** The name of the block */
  name?: Maybe<Scalars['String']>;
  /** The parent id of the Block */
  parentClientId?: Maybe<Scalars['String']>;
  /** The rendered HTML for the block */
  renderedHtml?: Maybe<Scalars['String']>;
};

/** Attributes of the CoreSiteTagline Block Type */
export type CoreSiteTaglineAttributes = {
  __typename?: 'CoreSiteTaglineAttributes';
  /** The &quot;align&quot; field on the &quot;CoreSiteTagline&quot; block */
  align?: Maybe<Scalars['String']>;
  /** The &quot;backgroundColor&quot; field on the &quot;CoreSiteTagline&quot; block */
  backgroundColor?: Maybe<Scalars['String']>;
  /** The &quot;className&quot; field on the &quot;CoreSiteTagline&quot; block */
  className?: Maybe<Scalars['String']>;
  /** The &quot;fontFamily&quot; field on the &quot;CoreSiteTagline&quot; block */
  fontFamily?: Maybe<Scalars['String']>;
  /** The &quot;fontSize&quot; field on the &quot;CoreSiteTagline&quot; block */
  fontSize?: Maybe<Scalars['String']>;
  /** The &quot;gradient&quot; field on the &quot;CoreSiteTagline&quot; block */
  gradient?: Maybe<Scalars['String']>;
  /** The &quot;lock&quot; field on the &quot;CoreSiteTagline&quot; block */
  lock?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;style&quot; field on the &quot;CoreSiteTagline&quot; block */
  style?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;textAlign&quot; field on the &quot;CoreSiteTagline&quot; block */
  textAlign?: Maybe<Scalars['String']>;
  /** The &quot;textColor&quot; field on the &quot;CoreSiteTagline&quot; block */
  textColor?: Maybe<Scalars['String']>;
};

/** A block used for editing the site */
export type CoreSiteTitle = EditorBlock & PageEditorBlock & PostEditorBlock & {
  __typename?: 'CoreSiteTitle';
  /** The API version of the Gutenberg Block */
  apiVersion?: Maybe<Scalars['Int']>;
  /** Attributes of the CoreSiteTitle Block Type */
  attributes?: Maybe<CoreSiteTitleAttributes>;
  /** The name of the category the Block belongs to */
  blockEditorCategoryName?: Maybe<Scalars['String']>;
  /** The id of the Block */
  clientId?: Maybe<Scalars['String']>;
  /** CSS Classnames to apply to the block */
  cssClassNames?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** The inner blocks of the Block */
  innerBlocks?: Maybe<Array<Maybe<EditorBlock>>>;
  /** Whether the block is Dynamic (server rendered) */
  isDynamic: Scalars['Boolean'];
  /** The name of the block */
  name?: Maybe<Scalars['String']>;
  /** The parent id of the Block */
  parentClientId?: Maybe<Scalars['String']>;
  /** The rendered HTML for the block */
  renderedHtml?: Maybe<Scalars['String']>;
};

/** Attributes of the CoreSiteTitle Block Type */
export type CoreSiteTitleAttributes = {
  __typename?: 'CoreSiteTitleAttributes';
  /** The &quot;align&quot; field on the &quot;CoreSiteTitle&quot; block */
  align?: Maybe<Scalars['String']>;
  /** The &quot;backgroundColor&quot; field on the &quot;CoreSiteTitle&quot; block */
  backgroundColor?: Maybe<Scalars['String']>;
  /** The &quot;className&quot; field on the &quot;CoreSiteTitle&quot; block */
  className?: Maybe<Scalars['String']>;
  /** The &quot;fontFamily&quot; field on the &quot;CoreSiteTitle&quot; block */
  fontFamily?: Maybe<Scalars['String']>;
  /** The &quot;fontSize&quot; field on the &quot;CoreSiteTitle&quot; block */
  fontSize?: Maybe<Scalars['String']>;
  /** The &quot;gradient&quot; field on the &quot;CoreSiteTitle&quot; block */
  gradient?: Maybe<Scalars['String']>;
  /** The &quot;isLink&quot; field on the &quot;CoreSiteTitle&quot; block */
  isLink?: Maybe<Scalars['Boolean']>;
  /** The &quot;level&quot; field on the &quot;CoreSiteTitle&quot; block */
  level?: Maybe<Scalars['Float']>;
  /** The &quot;linkTarget&quot; field on the &quot;CoreSiteTitle&quot; block */
  linkTarget?: Maybe<Scalars['String']>;
  /** The &quot;lock&quot; field on the &quot;CoreSiteTitle&quot; block */
  lock?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;style&quot; field on the &quot;CoreSiteTitle&quot; block */
  style?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;textAlign&quot; field on the &quot;CoreSiteTitle&quot; block */
  textAlign?: Maybe<Scalars['String']>;
  /** The &quot;textColor&quot; field on the &quot;CoreSiteTitle&quot; block */
  textColor?: Maybe<Scalars['String']>;
};

/** A block used for editing the site */
export type CoreSocialLink = EditorBlock & PageEditorBlock & PostEditorBlock & {
  __typename?: 'CoreSocialLink';
  /** The API version of the Gutenberg Block */
  apiVersion?: Maybe<Scalars['Int']>;
  /** Attributes of the CoreSocialLink Block Type */
  attributes?: Maybe<CoreSocialLinkAttributes>;
  /** The name of the category the Block belongs to */
  blockEditorCategoryName?: Maybe<Scalars['String']>;
  /** The id of the Block */
  clientId?: Maybe<Scalars['String']>;
  /** CSS Classnames to apply to the block */
  cssClassNames?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** The inner blocks of the Block */
  innerBlocks?: Maybe<Array<Maybe<EditorBlock>>>;
  /** Whether the block is Dynamic (server rendered) */
  isDynamic: Scalars['Boolean'];
  /** The name of the block */
  name?: Maybe<Scalars['String']>;
  /** The parent id of the Block */
  parentClientId?: Maybe<Scalars['String']>;
  /** The rendered HTML for the block */
  renderedHtml?: Maybe<Scalars['String']>;
};

/** Attributes of the CoreSocialLink Block Type */
export type CoreSocialLinkAttributes = {
  __typename?: 'CoreSocialLinkAttributes';
  /** The &quot;className&quot; field on the &quot;CoreSocialLink&quot; block */
  className?: Maybe<Scalars['String']>;
  /** The &quot;label&quot; field on the &quot;CoreSocialLink&quot; block */
  label?: Maybe<Scalars['String']>;
  /** The &quot;lock&quot; field on the &quot;CoreSocialLink&quot; block */
  lock?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;rel&quot; field on the &quot;CoreSocialLink&quot; block */
  rel?: Maybe<Scalars['String']>;
  /** The &quot;service&quot; field on the &quot;CoreSocialLink&quot; block */
  service?: Maybe<Scalars['String']>;
  /** The &quot;url&quot; field on the &quot;CoreSocialLink&quot; block */
  url?: Maybe<Scalars['String']>;
};

/** A block used for editing the site */
export type CoreSocialLinks = BlockWithSupportsAnchor & EditorBlock & PageEditorBlock & PostEditorBlock & {
  __typename?: 'CoreSocialLinks';
  /** The anchor field for the block. */
  anchor?: Maybe<Scalars['String']>;
  /** The API version of the Gutenberg Block */
  apiVersion?: Maybe<Scalars['Int']>;
  /** Attributes of the CoreSocialLinks Block Type */
  attributes?: Maybe<CoreSocialLinksAttributes>;
  /** The name of the category the Block belongs to */
  blockEditorCategoryName?: Maybe<Scalars['String']>;
  /** The id of the Block */
  clientId?: Maybe<Scalars['String']>;
  /** CSS Classnames to apply to the block */
  cssClassNames?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** The inner blocks of the Block */
  innerBlocks?: Maybe<Array<Maybe<EditorBlock>>>;
  /** Whether the block is Dynamic (server rendered) */
  isDynamic: Scalars['Boolean'];
  /** The name of the block */
  name?: Maybe<Scalars['String']>;
  /** The parent id of the Block */
  parentClientId?: Maybe<Scalars['String']>;
  /** The rendered HTML for the block */
  renderedHtml?: Maybe<Scalars['String']>;
};

/** Attributes of the CoreSocialLinks Block Type */
export type CoreSocialLinksAttributes = BlockWithSupportsAnchor & {
  __typename?: 'CoreSocialLinksAttributes';
  /** The &quot;align&quot; field on the &quot;CoreSocialLinks&quot; block */
  align?: Maybe<Scalars['String']>;
  /** The anchor field for the block. */
  anchor?: Maybe<Scalars['String']>;
  /** The &quot;backgroundColor&quot; field on the &quot;CoreSocialLinks&quot; block */
  backgroundColor?: Maybe<Scalars['String']>;
  /** The &quot;className&quot; field on the &quot;CoreSocialLinks&quot; block */
  className?: Maybe<Scalars['String']>;
  /** The &quot;customIconBackgroundColor&quot; field on the &quot;CoreSocialLinks&quot; block */
  customIconBackgroundColor?: Maybe<Scalars['String']>;
  /** The &quot;customIconColor&quot; field on the &quot;CoreSocialLinks&quot; block */
  customIconColor?: Maybe<Scalars['String']>;
  /** The &quot;gradient&quot; field on the &quot;CoreSocialLinks&quot; block */
  gradient?: Maybe<Scalars['String']>;
  /** The &quot;iconBackgroundColor&quot; field on the &quot;CoreSocialLinks&quot; block */
  iconBackgroundColor?: Maybe<Scalars['String']>;
  /** The &quot;iconBackgroundColorValue&quot; field on the &quot;CoreSocialLinks&quot; block */
  iconBackgroundColorValue?: Maybe<Scalars['String']>;
  /** The &quot;iconColor&quot; field on the &quot;CoreSocialLinks&quot; block */
  iconColor?: Maybe<Scalars['String']>;
  /** The &quot;iconColorValue&quot; field on the &quot;CoreSocialLinks&quot; block */
  iconColorValue?: Maybe<Scalars['String']>;
  /** The &quot;layout&quot; field on the &quot;CoreSocialLinks&quot; block */
  layout?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;lock&quot; field on the &quot;CoreSocialLinks&quot; block */
  lock?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;openInNewTab&quot; field on the &quot;CoreSocialLinks&quot; block */
  openInNewTab?: Maybe<Scalars['Boolean']>;
  /** The &quot;showLabels&quot; field on the &quot;CoreSocialLinks&quot; block */
  showLabels?: Maybe<Scalars['Boolean']>;
  /** The &quot;size&quot; field on the &quot;CoreSocialLinks&quot; block */
  size?: Maybe<Scalars['String']>;
  /** The &quot;style&quot; field on the &quot;CoreSocialLinks&quot; block */
  style?: Maybe<Scalars['BlockAttributesObject']>;
};

/** A block used for editing the site */
export type CoreSpacer = BlockWithSupportsAnchor & EditorBlock & PageEditorBlock & PostEditorBlock & {
  __typename?: 'CoreSpacer';
  /** The anchor field for the block. */
  anchor?: Maybe<Scalars['String']>;
  /** The API version of the Gutenberg Block */
  apiVersion?: Maybe<Scalars['Int']>;
  /** Attributes of the CoreSpacer Block Type */
  attributes?: Maybe<CoreSpacerAttributes>;
  /** The name of the category the Block belongs to */
  blockEditorCategoryName?: Maybe<Scalars['String']>;
  /** The id of the Block */
  clientId?: Maybe<Scalars['String']>;
  /** CSS Classnames to apply to the block */
  cssClassNames?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** The inner blocks of the Block */
  innerBlocks?: Maybe<Array<Maybe<EditorBlock>>>;
  /** Whether the block is Dynamic (server rendered) */
  isDynamic: Scalars['Boolean'];
  /** The name of the block */
  name?: Maybe<Scalars['String']>;
  /** The parent id of the Block */
  parentClientId?: Maybe<Scalars['String']>;
  /** The rendered HTML for the block */
  renderedHtml?: Maybe<Scalars['String']>;
};

/** Attributes of the CoreSpacer Block Type */
export type CoreSpacerAttributes = BlockWithSupportsAnchor & {
  __typename?: 'CoreSpacerAttributes';
  /** The anchor field for the block. */
  anchor?: Maybe<Scalars['String']>;
  /** The &quot;className&quot; field on the &quot;CoreSpacer&quot; block */
  className?: Maybe<Scalars['String']>;
  /** The &quot;height&quot; field on the &quot;CoreSpacer&quot; block */
  height?: Maybe<Scalars['String']>;
  /** The &quot;lock&quot; field on the &quot;CoreSpacer&quot; block */
  lock?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;style&quot; field on the &quot;CoreSpacer&quot; block */
  style?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;width&quot; field on the &quot;CoreSpacer&quot; block */
  width?: Maybe<Scalars['String']>;
};

/** A block used for editing the site */
export type CoreTable = BlockWithSupportsAnchor & EditorBlock & PageEditorBlock & PostEditorBlock & {
  __typename?: 'CoreTable';
  /** The anchor field for the block. */
  anchor?: Maybe<Scalars['String']>;
  /** The API version of the Gutenberg Block */
  apiVersion?: Maybe<Scalars['Int']>;
  /** Attributes of the CoreTable Block Type */
  attributes?: Maybe<CoreTableAttributes>;
  /** The name of the category the Block belongs to */
  blockEditorCategoryName?: Maybe<Scalars['String']>;
  /** The id of the Block */
  clientId?: Maybe<Scalars['String']>;
  /** CSS Classnames to apply to the block */
  cssClassNames?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** The inner blocks of the Block */
  innerBlocks?: Maybe<Array<Maybe<EditorBlock>>>;
  /** Whether the block is Dynamic (server rendered) */
  isDynamic: Scalars['Boolean'];
  /** The name of the block */
  name?: Maybe<Scalars['String']>;
  /** The parent id of the Block */
  parentClientId?: Maybe<Scalars['String']>;
  /** The rendered HTML for the block */
  renderedHtml?: Maybe<Scalars['String']>;
};

/** Attributes of the CoreTable Block Type */
export type CoreTableAttributes = BlockWithSupportsAnchor & {
  __typename?: 'CoreTableAttributes';
  /** The &quot;align&quot; field on the &quot;CoreTable&quot; block */
  align?: Maybe<Scalars['String']>;
  /** The anchor field for the block. */
  anchor?: Maybe<Scalars['String']>;
  /** The &quot;backgroundColor&quot; field on the &quot;CoreTable&quot; block */
  backgroundColor?: Maybe<Scalars['String']>;
  /** The &quot;body&quot; field on the &quot;CoreTable&quot; block */
  body?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;borderColor&quot; field on the &quot;CoreTable&quot; block */
  borderColor?: Maybe<Scalars['String']>;
  /** The &quot;caption&quot; field on the &quot;CoreTable&quot; block */
  caption?: Maybe<Scalars['String']>;
  /** The &quot;className&quot; field on the &quot;CoreTable&quot; block */
  className?: Maybe<Scalars['String']>;
  /** The &quot;fontFamily&quot; field on the &quot;CoreTable&quot; block */
  fontFamily?: Maybe<Scalars['String']>;
  /** The &quot;fontSize&quot; field on the &quot;CoreTable&quot; block */
  fontSize?: Maybe<Scalars['String']>;
  /** The &quot;foot&quot; field on the &quot;CoreTable&quot; block */
  foot?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;gradient&quot; field on the &quot;CoreTable&quot; block */
  gradient?: Maybe<Scalars['String']>;
  /** The &quot;hasFixedLayout&quot; field on the &quot;CoreTable&quot; block */
  hasFixedLayout?: Maybe<Scalars['Boolean']>;
  /** The &quot;head&quot; field on the &quot;CoreTable&quot; block */
  head?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;lock&quot; field on the &quot;CoreTable&quot; block */
  lock?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;style&quot; field on the &quot;CoreTable&quot; block */
  style?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;textColor&quot; field on the &quot;CoreTable&quot; block */
  textColor?: Maybe<Scalars['String']>;
};

/** A block used for editing the site */
export type CoreTagCloud = EditorBlock & PageEditorBlock & PostEditorBlock & {
  __typename?: 'CoreTagCloud';
  /** The API version of the Gutenberg Block */
  apiVersion?: Maybe<Scalars['Int']>;
  /** Attributes of the CoreTagCloud Block Type */
  attributes?: Maybe<CoreTagCloudAttributes>;
  /** The name of the category the Block belongs to */
  blockEditorCategoryName?: Maybe<Scalars['String']>;
  /** The id of the Block */
  clientId?: Maybe<Scalars['String']>;
  /** CSS Classnames to apply to the block */
  cssClassNames?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** The inner blocks of the Block */
  innerBlocks?: Maybe<Array<Maybe<EditorBlock>>>;
  /** Whether the block is Dynamic (server rendered) */
  isDynamic: Scalars['Boolean'];
  /** The name of the block */
  name?: Maybe<Scalars['String']>;
  /** The parent id of the Block */
  parentClientId?: Maybe<Scalars['String']>;
  /** The rendered HTML for the block */
  renderedHtml?: Maybe<Scalars['String']>;
};

/** Attributes of the CoreTagCloud Block Type */
export type CoreTagCloudAttributes = {
  __typename?: 'CoreTagCloudAttributes';
  /** The &quot;align&quot; field on the &quot;CoreTagCloud&quot; block */
  align?: Maybe<Scalars['String']>;
  /** The &quot;className&quot; field on the &quot;CoreTagCloud&quot; block */
  className?: Maybe<Scalars['String']>;
  /** The &quot;fontFamily&quot; field on the &quot;CoreTagCloud&quot; block */
  fontFamily?: Maybe<Scalars['String']>;
  /** The &quot;largestFontSize&quot; field on the &quot;CoreTagCloud&quot; block */
  largestFontSize?: Maybe<Scalars['String']>;
  /** The &quot;lock&quot; field on the &quot;CoreTagCloud&quot; block */
  lock?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;numberOfTags&quot; field on the &quot;CoreTagCloud&quot; block */
  numberOfTags?: Maybe<Scalars['Float']>;
  /** The &quot;showTagCounts&quot; field on the &quot;CoreTagCloud&quot; block */
  showTagCounts?: Maybe<Scalars['Boolean']>;
  /** The &quot;smallestFontSize&quot; field on the &quot;CoreTagCloud&quot; block */
  smallestFontSize?: Maybe<Scalars['String']>;
  /** The &quot;style&quot; field on the &quot;CoreTagCloud&quot; block */
  style?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;taxonomy&quot; field on the &quot;CoreTagCloud&quot; block */
  taxonomy?: Maybe<Scalars['String']>;
};

/** A block used for editing the site */
export type CoreTemplatePart = EditorBlock & PageEditorBlock & PostEditorBlock & {
  __typename?: 'CoreTemplatePart';
  /** The API version of the Gutenberg Block */
  apiVersion?: Maybe<Scalars['Int']>;
  /** Attributes of the CoreTemplatePart Block Type */
  attributes?: Maybe<CoreTemplatePartAttributes>;
  /** The name of the category the Block belongs to */
  blockEditorCategoryName?: Maybe<Scalars['String']>;
  /** The id of the Block */
  clientId?: Maybe<Scalars['String']>;
  /** CSS Classnames to apply to the block */
  cssClassNames?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** The inner blocks of the Block */
  innerBlocks?: Maybe<Array<Maybe<EditorBlock>>>;
  /** Whether the block is Dynamic (server rendered) */
  isDynamic: Scalars['Boolean'];
  /** The name of the block */
  name?: Maybe<Scalars['String']>;
  /** The parent id of the Block */
  parentClientId?: Maybe<Scalars['String']>;
  /** The rendered HTML for the block */
  renderedHtml?: Maybe<Scalars['String']>;
};

/** Attributes of the CoreTemplatePart Block Type */
export type CoreTemplatePartAttributes = {
  __typename?: 'CoreTemplatePartAttributes';
  /** The &quot;align&quot; field on the &quot;CoreTemplatePart&quot; block */
  align?: Maybe<Scalars['String']>;
  /** The &quot;area&quot; field on the &quot;CoreTemplatePart&quot; block */
  area?: Maybe<Scalars['String']>;
  /** The &quot;className&quot; field on the &quot;CoreTemplatePart&quot; block */
  className?: Maybe<Scalars['String']>;
  /** The &quot;lock&quot; field on the &quot;CoreTemplatePart&quot; block */
  lock?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;slug&quot; field on the &quot;CoreTemplatePart&quot; block */
  slug?: Maybe<Scalars['String']>;
  /** The &quot;tagName&quot; field on the &quot;CoreTemplatePart&quot; block */
  tagName?: Maybe<Scalars['String']>;
  /** The &quot;theme&quot; field on the &quot;CoreTemplatePart&quot; block */
  theme?: Maybe<Scalars['String']>;
};

/** A block used for editing the site */
export type CoreTermDescription = EditorBlock & PageEditorBlock & PostEditorBlock & {
  __typename?: 'CoreTermDescription';
  /** The API version of the Gutenberg Block */
  apiVersion?: Maybe<Scalars['Int']>;
  /** Attributes of the CoreTermDescription Block Type */
  attributes?: Maybe<CoreTermDescriptionAttributes>;
  /** The name of the category the Block belongs to */
  blockEditorCategoryName?: Maybe<Scalars['String']>;
  /** The id of the Block */
  clientId?: Maybe<Scalars['String']>;
  /** CSS Classnames to apply to the block */
  cssClassNames?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** The inner blocks of the Block */
  innerBlocks?: Maybe<Array<Maybe<EditorBlock>>>;
  /** Whether the block is Dynamic (server rendered) */
  isDynamic: Scalars['Boolean'];
  /** The name of the block */
  name?: Maybe<Scalars['String']>;
  /** The parent id of the Block */
  parentClientId?: Maybe<Scalars['String']>;
  /** The rendered HTML for the block */
  renderedHtml?: Maybe<Scalars['String']>;
};

/** Attributes of the CoreTermDescription Block Type */
export type CoreTermDescriptionAttributes = {
  __typename?: 'CoreTermDescriptionAttributes';
  /** The &quot;align&quot; field on the &quot;CoreTermDescription&quot; block */
  align?: Maybe<Scalars['String']>;
  /** The &quot;backgroundColor&quot; field on the &quot;CoreTermDescription&quot; block */
  backgroundColor?: Maybe<Scalars['String']>;
  /** The &quot;className&quot; field on the &quot;CoreTermDescription&quot; block */
  className?: Maybe<Scalars['String']>;
  /** The &quot;fontFamily&quot; field on the &quot;CoreTermDescription&quot; block */
  fontFamily?: Maybe<Scalars['String']>;
  /** The &quot;fontSize&quot; field on the &quot;CoreTermDescription&quot; block */
  fontSize?: Maybe<Scalars['String']>;
  /** The &quot;lock&quot; field on the &quot;CoreTermDescription&quot; block */
  lock?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;style&quot; field on the &quot;CoreTermDescription&quot; block */
  style?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;textAlign&quot; field on the &quot;CoreTermDescription&quot; block */
  textAlign?: Maybe<Scalars['String']>;
  /** The &quot;textColor&quot; field on the &quot;CoreTermDescription&quot; block */
  textColor?: Maybe<Scalars['String']>;
};

/** A block used for editing the site */
export type CoreTextColumns = EditorBlock & PageEditorBlock & PostEditorBlock & {
  __typename?: 'CoreTextColumns';
  /** The API version of the Gutenberg Block */
  apiVersion?: Maybe<Scalars['Int']>;
  /** Attributes of the CoreTextColumns Block Type */
  attributes?: Maybe<CoreTextColumnsAttributes>;
  /** The name of the category the Block belongs to */
  blockEditorCategoryName?: Maybe<Scalars['String']>;
  /** The id of the Block */
  clientId?: Maybe<Scalars['String']>;
  /** CSS Classnames to apply to the block */
  cssClassNames?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** The inner blocks of the Block */
  innerBlocks?: Maybe<Array<Maybe<EditorBlock>>>;
  /** Whether the block is Dynamic (server rendered) */
  isDynamic: Scalars['Boolean'];
  /** The name of the block */
  name?: Maybe<Scalars['String']>;
  /** The parent id of the Block */
  parentClientId?: Maybe<Scalars['String']>;
  /** The rendered HTML for the block */
  renderedHtml?: Maybe<Scalars['String']>;
};

/** Attributes of the CoreTextColumns Block Type */
export type CoreTextColumnsAttributes = {
  __typename?: 'CoreTextColumnsAttributes';
  /** The &quot;className&quot; field on the &quot;CoreTextColumns&quot; block */
  className?: Maybe<Scalars['String']>;
  /** The &quot;columns&quot; field on the &quot;CoreTextColumns&quot; block */
  columns?: Maybe<Scalars['Float']>;
  /** The &quot;content&quot; field on the &quot;CoreTextColumns&quot; block */
  content?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;lock&quot; field on the &quot;CoreTextColumns&quot; block */
  lock?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;width&quot; field on the &quot;CoreTextColumns&quot; block */
  width?: Maybe<Scalars['String']>;
};

/** A block used for editing the site */
export type CoreVerse = BlockWithSupportsAnchor & EditorBlock & PageEditorBlock & PostEditorBlock & {
  __typename?: 'CoreVerse';
  /** The anchor field for the block. */
  anchor?: Maybe<Scalars['String']>;
  /** The API version of the Gutenberg Block */
  apiVersion?: Maybe<Scalars['Int']>;
  /** Attributes of the CoreVerse Block Type */
  attributes?: Maybe<CoreVerseAttributes>;
  /** The name of the category the Block belongs to */
  blockEditorCategoryName?: Maybe<Scalars['String']>;
  /** The id of the Block */
  clientId?: Maybe<Scalars['String']>;
  /** CSS Classnames to apply to the block */
  cssClassNames?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** The inner blocks of the Block */
  innerBlocks?: Maybe<Array<Maybe<EditorBlock>>>;
  /** Whether the block is Dynamic (server rendered) */
  isDynamic: Scalars['Boolean'];
  /** The name of the block */
  name?: Maybe<Scalars['String']>;
  /** The parent id of the Block */
  parentClientId?: Maybe<Scalars['String']>;
  /** The rendered HTML for the block */
  renderedHtml?: Maybe<Scalars['String']>;
};

/** Attributes of the CoreVerse Block Type */
export type CoreVerseAttributes = BlockWithSupportsAnchor & {
  __typename?: 'CoreVerseAttributes';
  /** The anchor field for the block. */
  anchor?: Maybe<Scalars['String']>;
  /** The &quot;backgroundColor&quot; field on the &quot;CoreVerse&quot; block */
  backgroundColor?: Maybe<Scalars['String']>;
  /** The &quot;className&quot; field on the &quot;CoreVerse&quot; block */
  className?: Maybe<Scalars['String']>;
  /** The &quot;content&quot; field on the &quot;CoreVerse&quot; block */
  content?: Maybe<Scalars['String']>;
  /** The &quot;fontFamily&quot; field on the &quot;CoreVerse&quot; block */
  fontFamily?: Maybe<Scalars['String']>;
  /** The &quot;fontSize&quot; field on the &quot;CoreVerse&quot; block */
  fontSize?: Maybe<Scalars['String']>;
  /** The &quot;gradient&quot; field on the &quot;CoreVerse&quot; block */
  gradient?: Maybe<Scalars['String']>;
  /** The &quot;lock&quot; field on the &quot;CoreVerse&quot; block */
  lock?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;style&quot; field on the &quot;CoreVerse&quot; block */
  style?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;textAlign&quot; field on the &quot;CoreVerse&quot; block */
  textAlign?: Maybe<Scalars['String']>;
  /** The &quot;textColor&quot; field on the &quot;CoreVerse&quot; block */
  textColor?: Maybe<Scalars['String']>;
};

/** A block used for editing the site */
export type CoreVideo = BlockWithSupportsAnchor & EditorBlock & PageEditorBlock & PostEditorBlock & {
  __typename?: 'CoreVideo';
  /** The anchor field for the block. */
  anchor?: Maybe<Scalars['String']>;
  /** The API version of the Gutenberg Block */
  apiVersion?: Maybe<Scalars['Int']>;
  /** Attributes of the CoreVideo Block Type */
  attributes?: Maybe<CoreVideoAttributes>;
  /** The name of the category the Block belongs to */
  blockEditorCategoryName?: Maybe<Scalars['String']>;
  /** The id of the Block */
  clientId?: Maybe<Scalars['String']>;
  /** CSS Classnames to apply to the block */
  cssClassNames?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** The inner blocks of the Block */
  innerBlocks?: Maybe<Array<Maybe<EditorBlock>>>;
  /** Whether the block is Dynamic (server rendered) */
  isDynamic: Scalars['Boolean'];
  /** The name of the block */
  name?: Maybe<Scalars['String']>;
  /** The parent id of the Block */
  parentClientId?: Maybe<Scalars['String']>;
  /** The rendered HTML for the block */
  renderedHtml?: Maybe<Scalars['String']>;
};

/** Attributes of the CoreVideo Block Type */
export type CoreVideoAttributes = BlockWithSupportsAnchor & {
  __typename?: 'CoreVideoAttributes';
  /** The &quot;align&quot; field on the &quot;CoreVideo&quot; block */
  align?: Maybe<Scalars['String']>;
  /** The anchor field for the block. */
  anchor?: Maybe<Scalars['String']>;
  /** The &quot;autoplay&quot; field on the &quot;CoreVideo&quot; block */
  autoplay?: Maybe<Scalars['Boolean']>;
  /** The &quot;caption&quot; field on the &quot;CoreVideo&quot; block */
  caption?: Maybe<Scalars['String']>;
  /** The &quot;className&quot; field on the &quot;CoreVideo&quot; block */
  className?: Maybe<Scalars['String']>;
  /** The &quot;controls&quot; field on the &quot;CoreVideo&quot; block */
  controls?: Maybe<Scalars['Boolean']>;
  /** The &quot;id&quot; field on the &quot;CoreVideo&quot; block */
  id?: Maybe<Scalars['Float']>;
  /** The &quot;lock&quot; field on the &quot;CoreVideo&quot; block */
  lock?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;loop&quot; field on the &quot;CoreVideo&quot; block */
  loop?: Maybe<Scalars['Boolean']>;
  /** The &quot;muted&quot; field on the &quot;CoreVideo&quot; block */
  muted?: Maybe<Scalars['Boolean']>;
  /** The &quot;playsInline&quot; field on the &quot;CoreVideo&quot; block */
  playsInline?: Maybe<Scalars['Boolean']>;
  /** The &quot;poster&quot; field on the &quot;CoreVideo&quot; block */
  poster?: Maybe<Scalars['String']>;
  /** The &quot;preload&quot; field on the &quot;CoreVideo&quot; block */
  preload?: Maybe<Scalars['String']>;
  /** The &quot;src&quot; field on the &quot;CoreVideo&quot; block */
  src?: Maybe<Scalars['String']>;
  /** The &quot;style&quot; field on the &quot;CoreVideo&quot; block */
  style?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;tracks&quot; field on the &quot;CoreVideo&quot; block */
  tracks?: Maybe<Scalars['BlockAttributesObject']>;
};

/** A block used for editing the site */
export type CoreWidgetGroup = EditorBlock & PageEditorBlock & PostEditorBlock & {
  __typename?: 'CoreWidgetGroup';
  /** The API version of the Gutenberg Block */
  apiVersion?: Maybe<Scalars['Int']>;
  /** Attributes of the CoreWidgetGroup Block Type */
  attributes?: Maybe<CoreWidgetGroupAttributes>;
  /** The name of the category the Block belongs to */
  blockEditorCategoryName?: Maybe<Scalars['String']>;
  /** The id of the Block */
  clientId?: Maybe<Scalars['String']>;
  /** CSS Classnames to apply to the block */
  cssClassNames?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** The inner blocks of the Block */
  innerBlocks?: Maybe<Array<Maybe<EditorBlock>>>;
  /** Whether the block is Dynamic (server rendered) */
  isDynamic: Scalars['Boolean'];
  /** The name of the block */
  name?: Maybe<Scalars['String']>;
  /** The parent id of the Block */
  parentClientId?: Maybe<Scalars['String']>;
  /** The rendered HTML for the block */
  renderedHtml?: Maybe<Scalars['String']>;
};

/** Attributes of the CoreWidgetGroup Block Type */
export type CoreWidgetGroupAttributes = {
  __typename?: 'CoreWidgetGroupAttributes';
  /** The &quot;className&quot; field on the &quot;CoreWidgetGroup&quot; block */
  className?: Maybe<Scalars['String']>;
  /** The &quot;lock&quot; field on the &quot;CoreWidgetGroup&quot; block */
  lock?: Maybe<Scalars['BlockAttributesObject']>;
  /** The &quot;title&quot; field on the &quot;CoreWidgetGroup&quot; block */
  title?: Maybe<Scalars['String']>;
};

/** Input for the createCategory mutation. */
export type CreateCategoryInput = {
  /** The slug that the category will be an alias of */
  aliasOf?: InputMaybe<Scalars['String']>;
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The description of the category object */
  description?: InputMaybe<Scalars['String']>;
  /** The name of the category object to mutate */
  name: Scalars['String'];
  /** The ID of the category that should be set as the parent */
  parentId?: InputMaybe<Scalars['ID']>;
  /** If this argument exists then the slug will be checked to see if it is not an existing valid term. If that check succeeds (it is not a valid term), then it is added and the term id is given. If it fails, then a check is made to whether the taxonomy is hierarchical and the parent argument is not empty. If the second check succeeds, the term will be inserted and the term id will be given. If the slug argument is empty, then it will be calculated from the term name. */
  slug?: InputMaybe<Scalars['String']>;
};

/** The payload for the createCategory mutation. */
export type CreateCategoryPayload = {
  __typename?: 'CreateCategoryPayload';
  /** The created category */
  category?: Maybe<Category>;
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: Maybe<Scalars['String']>;
};

/** Input for the createComment mutation. */
export type CreateCommentInput = {
  /** The approval status of the comment. */
  approved?: InputMaybe<Scalars['String']>;
  /** The name of the comment's author. */
  author?: InputMaybe<Scalars['String']>;
  /** The email of the comment's author. */
  authorEmail?: InputMaybe<Scalars['String']>;
  /** The url of the comment's author. */
  authorUrl?: InputMaybe<Scalars['String']>;
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The database ID of the post object the comment belongs to. */
  commentOn?: InputMaybe<Scalars['Int']>;
  /** Content of the comment. */
  content?: InputMaybe<Scalars['String']>;
  /** The date of the object. Preferable to enter as year/month/day ( e.g. 01/31/2017 ) as it will rearrange date as fit if it is not specified. Incomplete dates may have unintended results for example, "2017" as the input will use current date with timestamp 20:17  */
  date?: InputMaybe<Scalars['String']>;
  /** Parent comment ID of current comment. */
  parent?: InputMaybe<Scalars['ID']>;
  /** The approval status of the comment */
  status?: InputMaybe<CommentStatusEnum>;
  /** Type of comment. */
  type?: InputMaybe<Scalars['String']>;
};

/** The payload for the createComment mutation. */
export type CreateCommentPayload = {
  __typename?: 'CreateCommentPayload';
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The comment that was created */
  comment?: Maybe<Comment>;
  /** Whether the mutation succeeded. If the comment is not approved, the server will not return the comment to a non authenticated user, but a success message can be returned if the create succeeded, and the client can optimistically add the comment to the client cache */
  success?: Maybe<Scalars['Boolean']>;
};

/** Input for the createExplanation mutation. */
export type CreateExplanationInput = {
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The content of the object */
  content?: InputMaybe<Scalars['String']>;
  /** The date of the object. Preferable to enter as year/month/day (e.g. 01/31/2017) as it will rearrange date as fit if it is not specified. Incomplete dates may have unintended results for example, "2017" as the input will use current date with timestamp 20:17  */
  date?: InputMaybe<Scalars['String']>;
  /** A field used for ordering posts. This is typically used with nav menu items or for special ordering of hierarchical content types. */
  menuOrder?: InputMaybe<Scalars['Int']>;
  /** The password used to protect the content of the object */
  password?: InputMaybe<Scalars['String']>;
  /** The slug of the object */
  slug?: InputMaybe<Scalars['String']>;
  /** The status of the object */
  status?: InputMaybe<PostStatusEnum>;
  /** The title of the object */
  title?: InputMaybe<Scalars['String']>;
};

/** The payload for the createExplanation mutation. */
export type CreateExplanationPayload = {
  __typename?: 'CreateExplanationPayload';
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The Post object mutation type. */
  explanation?: Maybe<Explanation>;
};

/** Input for the createHowToGuide mutation. */
export type CreateHowToGuideInput = {
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The content of the object */
  content?: InputMaybe<Scalars['String']>;
  /** The date of the object. Preferable to enter as year/month/day (e.g. 01/31/2017) as it will rearrange date as fit if it is not specified. Incomplete dates may have unintended results for example, "2017" as the input will use current date with timestamp 20:17  */
  date?: InputMaybe<Scalars['String']>;
  /** A field used for ordering posts. This is typically used with nav menu items or for special ordering of hierarchical content types. */
  menuOrder?: InputMaybe<Scalars['Int']>;
  /** The password used to protect the content of the object */
  password?: InputMaybe<Scalars['String']>;
  /** The slug of the object */
  slug?: InputMaybe<Scalars['String']>;
  /** The status of the object */
  status?: InputMaybe<PostStatusEnum>;
  /** The title of the object */
  title?: InputMaybe<Scalars['String']>;
};

/** The payload for the createHowToGuide mutation. */
export type CreateHowToGuidePayload = {
  __typename?: 'CreateHowToGuidePayload';
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The Post object mutation type. */
  howToGuide?: Maybe<HowToGuide>;
};

/** Input for the createMediaItem mutation. */
export type CreateMediaItemInput = {
  /** Alternative text to display when mediaItem is not displayed */
  altText?: InputMaybe<Scalars['String']>;
  /** The userId to assign as the author of the mediaItem */
  authorId?: InputMaybe<Scalars['ID']>;
  /** The caption for the mediaItem */
  caption?: InputMaybe<Scalars['String']>;
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The comment status for the mediaItem */
  commentStatus?: InputMaybe<Scalars['String']>;
  /** The date of the mediaItem */
  date?: InputMaybe<Scalars['String']>;
  /** The date (in GMT zone) of the mediaItem */
  dateGmt?: InputMaybe<Scalars['String']>;
  /** Description of the mediaItem */
  description?: InputMaybe<Scalars['String']>;
  /** The file name of the mediaItem */
  filePath?: InputMaybe<Scalars['String']>;
  /** The file type of the mediaItem */
  fileType?: InputMaybe<MimeTypeEnum>;
  /** The ID of the parent object */
  parentId?: InputMaybe<Scalars['ID']>;
  /** The ping status for the mediaItem */
  pingStatus?: InputMaybe<Scalars['String']>;
  /** The slug of the mediaItem */
  slug?: InputMaybe<Scalars['String']>;
  /** The status of the mediaItem */
  status?: InputMaybe<MediaItemStatusEnum>;
  /** The title of the mediaItem */
  title?: InputMaybe<Scalars['String']>;
};

/** The payload for the createMediaItem mutation. */
export type CreateMediaItemPayload = {
  __typename?: 'CreateMediaItemPayload';
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The MediaItem object mutation type. */
  mediaItem?: Maybe<MediaItem>;
};

/** Input for the createPage mutation. */
export type CreatePageInput = {
  /** The userId to assign as the author of the object */
  authorId?: InputMaybe<Scalars['ID']>;
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The content of the object */
  content?: InputMaybe<Scalars['String']>;
  /** The date of the object. Preferable to enter as year/month/day (e.g. 01/31/2017) as it will rearrange date as fit if it is not specified. Incomplete dates may have unintended results for example, "2017" as the input will use current date with timestamp 20:17  */
  date?: InputMaybe<Scalars['String']>;
  /** A field used for ordering posts. This is typically used with nav menu items or for special ordering of hierarchical content types. */
  menuOrder?: InputMaybe<Scalars['Int']>;
  /** The ID of the parent object */
  parentId?: InputMaybe<Scalars['ID']>;
  /** The password used to protect the content of the object */
  password?: InputMaybe<Scalars['String']>;
  /** The slug of the object */
  slug?: InputMaybe<Scalars['String']>;
  /** The status of the object */
  status?: InputMaybe<PostStatusEnum>;
  /** The title of the object */
  title?: InputMaybe<Scalars['String']>;
};

/** The payload for the createPage mutation. */
export type CreatePagePayload = {
  __typename?: 'CreatePagePayload';
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The Post object mutation type. */
  page?: Maybe<Page>;
};

/** Input for the createPostFormat mutation. */
export type CreatePostFormatInput = {
  /** The slug that the post_format will be an alias of */
  aliasOf?: InputMaybe<Scalars['String']>;
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The description of the post_format object */
  description?: InputMaybe<Scalars['String']>;
  /** The name of the post_format object to mutate */
  name: Scalars['String'];
  /** If this argument exists then the slug will be checked to see if it is not an existing valid term. If that check succeeds (it is not a valid term), then it is added and the term id is given. If it fails, then a check is made to whether the taxonomy is hierarchical and the parent argument is not empty. If the second check succeeds, the term will be inserted and the term id will be given. If the slug argument is empty, then it will be calculated from the term name. */
  slug?: InputMaybe<Scalars['String']>;
};

/** The payload for the createPostFormat mutation. */
export type CreatePostFormatPayload = {
  __typename?: 'CreatePostFormatPayload';
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The created post_format */
  postFormat?: Maybe<PostFormat>;
};

/** Input for the createPost mutation. */
export type CreatePostInput = {
  /** The userId to assign as the author of the object */
  authorId?: InputMaybe<Scalars['ID']>;
  /** Set connections between the post and categories */
  categories?: InputMaybe<PostCategoriesInput>;
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The content of the object */
  content?: InputMaybe<Scalars['String']>;
  /** The date of the object. Preferable to enter as year/month/day (e.g. 01/31/2017) as it will rearrange date as fit if it is not specified. Incomplete dates may have unintended results for example, "2017" as the input will use current date with timestamp 20:17  */
  date?: InputMaybe<Scalars['String']>;
  /** The excerpt of the object */
  excerpt?: InputMaybe<Scalars['String']>;
  /** A field used for ordering posts. This is typically used with nav menu items or for special ordering of hierarchical content types. */
  menuOrder?: InputMaybe<Scalars['Int']>;
  /** The password used to protect the content of the object */
  password?: InputMaybe<Scalars['String']>;
  /** Set connections between the post and postFormats */
  postFormats?: InputMaybe<PostPostFormatsInput>;
  /** The slug of the object */
  slug?: InputMaybe<Scalars['String']>;
  /** The status of the object */
  status?: InputMaybe<PostStatusEnum>;
  /** Set connections between the post and tags */
  tags?: InputMaybe<PostTagsInput>;
  /** The title of the object */
  title?: InputMaybe<Scalars['String']>;
};

/** The payload for the createPost mutation. */
export type CreatePostPayload = {
  __typename?: 'CreatePostPayload';
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The Post object mutation type. */
  post?: Maybe<Post>;
};

/** Input for the createReference mutation. */
export type CreateReferenceInput = {
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The content of the object */
  content?: InputMaybe<Scalars['String']>;
  /** The date of the object. Preferable to enter as year/month/day (e.g. 01/31/2017) as it will rearrange date as fit if it is not specified. Incomplete dates may have unintended results for example, "2017" as the input will use current date with timestamp 20:17  */
  date?: InputMaybe<Scalars['String']>;
  /** A field used for ordering posts. This is typically used with nav menu items or for special ordering of hierarchical content types. */
  menuOrder?: InputMaybe<Scalars['Int']>;
  /** The password used to protect the content of the object */
  password?: InputMaybe<Scalars['String']>;
  /** The slug of the object */
  slug?: InputMaybe<Scalars['String']>;
  /** The status of the object */
  status?: InputMaybe<PostStatusEnum>;
  /** The title of the object */
  title?: InputMaybe<Scalars['String']>;
};

/** The payload for the createReference mutation. */
export type CreateReferencePayload = {
  __typename?: 'CreateReferencePayload';
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The Post object mutation type. */
  reference?: Maybe<Reference>;
};

/** Input for the createTag mutation. */
export type CreateTagInput = {
  /** The slug that the post_tag will be an alias of */
  aliasOf?: InputMaybe<Scalars['String']>;
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The description of the post_tag object */
  description?: InputMaybe<Scalars['String']>;
  /** The name of the post_tag object to mutate */
  name: Scalars['String'];
  /** If this argument exists then the slug will be checked to see if it is not an existing valid term. If that check succeeds (it is not a valid term), then it is added and the term id is given. If it fails, then a check is made to whether the taxonomy is hierarchical and the parent argument is not empty. If the second check succeeds, the term will be inserted and the term id will be given. If the slug argument is empty, then it will be calculated from the term name. */
  slug?: InputMaybe<Scalars['String']>;
};

/** The payload for the createTag mutation. */
export type CreateTagPayload = {
  __typename?: 'CreateTagPayload';
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The created post_tag */
  tag?: Maybe<Tag>;
};

/** Input for the createTutorial mutation. */
export type CreateTutorialInput = {
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The content of the object */
  content?: InputMaybe<Scalars['String']>;
  /** The date of the object. Preferable to enter as year/month/day (e.g. 01/31/2017) as it will rearrange date as fit if it is not specified. Incomplete dates may have unintended results for example, "2017" as the input will use current date with timestamp 20:17  */
  date?: InputMaybe<Scalars['String']>;
  /** A field used for ordering posts. This is typically used with nav menu items or for special ordering of hierarchical content types. */
  menuOrder?: InputMaybe<Scalars['Int']>;
  /** The password used to protect the content of the object */
  password?: InputMaybe<Scalars['String']>;
  /** The slug of the object */
  slug?: InputMaybe<Scalars['String']>;
  /** The status of the object */
  status?: InputMaybe<PostStatusEnum>;
  /** The title of the object */
  title?: InputMaybe<Scalars['String']>;
};

/** The payload for the createTutorial mutation. */
export type CreateTutorialPayload = {
  __typename?: 'CreateTutorialPayload';
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The Post object mutation type. */
  tutorial?: Maybe<Tutorial>;
};

/** Input for the createUser mutation. */
export type CreateUserInput = {
  /** User's AOL IM account. */
  aim?: InputMaybe<Scalars['String']>;
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** A string containing content about the user. */
  description?: InputMaybe<Scalars['String']>;
  /** A string that will be shown on the site. Defaults to user's username. It is likely that you will want to change this, for both appearance and security through obscurity (that is if you dont use and delete the default admin user). */
  displayName?: InputMaybe<Scalars['String']>;
  /** A string containing the user's email address. */
  email?: InputMaybe<Scalars['String']>;
  /** 	The user's first name. */
  firstName?: InputMaybe<Scalars['String']>;
  /** User's Jabber account. */
  jabber?: InputMaybe<Scalars['String']>;
  /** The user's last name. */
  lastName?: InputMaybe<Scalars['String']>;
  /** User's locale. */
  locale?: InputMaybe<Scalars['String']>;
  /** A string that contains a URL-friendly name for the user. The default is the user's username. */
  nicename?: InputMaybe<Scalars['String']>;
  /** The user's nickname, defaults to the user's username. */
  nickname?: InputMaybe<Scalars['String']>;
  /** A string that contains the plain text password for the user. */
  password?: InputMaybe<Scalars['String']>;
  /** The date the user registered. Format is Y-m-d H:i:s. */
  registered?: InputMaybe<Scalars['String']>;
  /** A string for whether to enable the rich editor or not. False if not empty. */
  richEditing?: InputMaybe<Scalars['String']>;
  /** An array of roles to be assigned to the user. */
  roles?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** A string that contains the user's username for logging in. */
  username: Scalars['String'];
  /** A string containing the user's URL for the user's web site. */
  websiteUrl?: InputMaybe<Scalars['String']>;
  /** User's Yahoo IM account. */
  yim?: InputMaybe<Scalars['String']>;
};

/** The payload for the createUser mutation. */
export type CreateUserPayload = {
  __typename?: 'CreateUserPayload';
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The User object mutation type. */
  user?: Maybe<User>;
};

/** Object that can be identified with a Database ID */
export type DatabaseIdentifier = {
  /** The unique identifier stored in the database */
  databaseId: Scalars['Int'];
};

/** Date values */
export type DateInput = {
  /** Day of the month (from 1 to 31) */
  day?: InputMaybe<Scalars['Int']>;
  /** Month number (from 1 to 12) */
  month?: InputMaybe<Scalars['Int']>;
  /** 4 digit year (e.g. 2017) */
  year?: InputMaybe<Scalars['Int']>;
};

/** Filter the connection based on input */
export type DateQueryInput = {
  /** Nodes should be returned after this date */
  after?: InputMaybe<DateInput>;
  /** Nodes should be returned before this date */
  before?: InputMaybe<DateInput>;
  /** Column to query against */
  column?: InputMaybe<PostObjectsConnectionDateColumnEnum>;
  /** For after/before, whether exact value should be matched or not */
  compare?: InputMaybe<Scalars['String']>;
  /** Day of the month (from 1 to 31) */
  day?: InputMaybe<Scalars['Int']>;
  /** Hour (from 0 to 23) */
  hour?: InputMaybe<Scalars['Int']>;
  /** For after/before, whether exact value should be matched or not */
  inclusive?: InputMaybe<Scalars['Boolean']>;
  /** Minute (from 0 to 59) */
  minute?: InputMaybe<Scalars['Int']>;
  /** Month number (from 1 to 12) */
  month?: InputMaybe<Scalars['Int']>;
  /** OR or AND, how the sub-arrays should be compared */
  relation?: InputMaybe<RelationEnum>;
  /** Second (0 to 59) */
  second?: InputMaybe<Scalars['Int']>;
  /** Week of the year (from 0 to 53) */
  week?: InputMaybe<Scalars['Int']>;
  /** 4 digit year (e.g. 2017) */
  year?: InputMaybe<Scalars['Int']>;
};

/** The template assigned to the node */
export type DefaultTemplate = ContentTemplate & {
  __typename?: 'DefaultTemplate';
  /** The name of the template */
  templateName?: Maybe<Scalars['String']>;
};

/** Input for the deleteCategory mutation. */
export type DeleteCategoryInput = {
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The ID of the category to delete */
  id: Scalars['ID'];
};

/** The payload for the deleteCategory mutation. */
export type DeleteCategoryPayload = {
  __typename?: 'DeleteCategoryPayload';
  /** The deteted term object */
  category?: Maybe<Category>;
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The ID of the deleted object */
  deletedId?: Maybe<Scalars['ID']>;
};

/** Input for the deleteComment mutation. */
export type DeleteCommentInput = {
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** Whether the comment should be force deleted instead of being moved to the trash */
  forceDelete?: InputMaybe<Scalars['Boolean']>;
  /** The deleted comment ID */
  id: Scalars['ID'];
};

/** The payload for the deleteComment mutation. */
export type DeleteCommentPayload = {
  __typename?: 'DeleteCommentPayload';
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The deleted comment object */
  comment?: Maybe<Comment>;
  /** The deleted comment ID */
  deletedId?: Maybe<Scalars['ID']>;
};

/** Input for the deleteExplanation mutation. */
export type DeleteExplanationInput = {
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** Whether the object should be force deleted instead of being moved to the trash */
  forceDelete?: InputMaybe<Scalars['Boolean']>;
  /** The ID of the explanation to delete */
  id: Scalars['ID'];
  /** Override the edit lock when another user is editing the post */
  ignoreEditLock?: InputMaybe<Scalars['Boolean']>;
};

/** The payload for the deleteExplanation mutation. */
export type DeleteExplanationPayload = {
  __typename?: 'DeleteExplanationPayload';
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The ID of the deleted object */
  deletedId?: Maybe<Scalars['ID']>;
  /** The object before it was deleted */
  explanation?: Maybe<Explanation>;
};

/** Input for the deleteHowToGuide mutation. */
export type DeleteHowToGuideInput = {
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** Whether the object should be force deleted instead of being moved to the trash */
  forceDelete?: InputMaybe<Scalars['Boolean']>;
  /** The ID of the howToGuide to delete */
  id: Scalars['ID'];
  /** Override the edit lock when another user is editing the post */
  ignoreEditLock?: InputMaybe<Scalars['Boolean']>;
};

/** The payload for the deleteHowToGuide mutation. */
export type DeleteHowToGuidePayload = {
  __typename?: 'DeleteHowToGuidePayload';
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The ID of the deleted object */
  deletedId?: Maybe<Scalars['ID']>;
  /** The object before it was deleted */
  howToGuide?: Maybe<HowToGuide>;
};

/** Input for the deleteMediaItem mutation. */
export type DeleteMediaItemInput = {
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** Whether the mediaItem should be force deleted instead of being moved to the trash */
  forceDelete?: InputMaybe<Scalars['Boolean']>;
  /** The ID of the mediaItem to delete */
  id: Scalars['ID'];
};

/** The payload for the deleteMediaItem mutation. */
export type DeleteMediaItemPayload = {
  __typename?: 'DeleteMediaItemPayload';
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The ID of the deleted mediaItem */
  deletedId?: Maybe<Scalars['ID']>;
  /** The mediaItem before it was deleted */
  mediaItem?: Maybe<MediaItem>;
};

/** Input for the deletePage mutation. */
export type DeletePageInput = {
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** Whether the object should be force deleted instead of being moved to the trash */
  forceDelete?: InputMaybe<Scalars['Boolean']>;
  /** The ID of the page to delete */
  id: Scalars['ID'];
  /** Override the edit lock when another user is editing the post */
  ignoreEditLock?: InputMaybe<Scalars['Boolean']>;
};

/** The payload for the deletePage mutation. */
export type DeletePagePayload = {
  __typename?: 'DeletePagePayload';
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The ID of the deleted object */
  deletedId?: Maybe<Scalars['ID']>;
  /** The object before it was deleted */
  page?: Maybe<Page>;
};

/** Input for the deletePostFormat mutation. */
export type DeletePostFormatInput = {
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The ID of the postFormat to delete */
  id: Scalars['ID'];
};

/** The payload for the deletePostFormat mutation. */
export type DeletePostFormatPayload = {
  __typename?: 'DeletePostFormatPayload';
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The ID of the deleted object */
  deletedId?: Maybe<Scalars['ID']>;
  /** The deteted term object */
  postFormat?: Maybe<PostFormat>;
};

/** Input for the deletePost mutation. */
export type DeletePostInput = {
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** Whether the object should be force deleted instead of being moved to the trash */
  forceDelete?: InputMaybe<Scalars['Boolean']>;
  /** The ID of the post to delete */
  id: Scalars['ID'];
  /** Override the edit lock when another user is editing the post */
  ignoreEditLock?: InputMaybe<Scalars['Boolean']>;
};

/** The payload for the deletePost mutation. */
export type DeletePostPayload = {
  __typename?: 'DeletePostPayload';
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The ID of the deleted object */
  deletedId?: Maybe<Scalars['ID']>;
  /** The object before it was deleted */
  post?: Maybe<Post>;
};

/** Input for the deleteReference mutation. */
export type DeleteReferenceInput = {
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** Whether the object should be force deleted instead of being moved to the trash */
  forceDelete?: InputMaybe<Scalars['Boolean']>;
  /** The ID of the reference to delete */
  id: Scalars['ID'];
  /** Override the edit lock when another user is editing the post */
  ignoreEditLock?: InputMaybe<Scalars['Boolean']>;
};

/** The payload for the deleteReference mutation. */
export type DeleteReferencePayload = {
  __typename?: 'DeleteReferencePayload';
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The ID of the deleted object */
  deletedId?: Maybe<Scalars['ID']>;
  /** The object before it was deleted */
  reference?: Maybe<Reference>;
};

/** Input for the deleteTag mutation. */
export type DeleteTagInput = {
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The ID of the tag to delete */
  id: Scalars['ID'];
};

/** The payload for the deleteTag mutation. */
export type DeleteTagPayload = {
  __typename?: 'DeleteTagPayload';
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The ID of the deleted object */
  deletedId?: Maybe<Scalars['ID']>;
  /** The deteted term object */
  tag?: Maybe<Tag>;
};

/** Input for the deleteTutorial mutation. */
export type DeleteTutorialInput = {
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** Whether the object should be force deleted instead of being moved to the trash */
  forceDelete?: InputMaybe<Scalars['Boolean']>;
  /** The ID of the tutorial to delete */
  id: Scalars['ID'];
  /** Override the edit lock when another user is editing the post */
  ignoreEditLock?: InputMaybe<Scalars['Boolean']>;
};

/** The payload for the deleteTutorial mutation. */
export type DeleteTutorialPayload = {
  __typename?: 'DeleteTutorialPayload';
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The ID of the deleted object */
  deletedId?: Maybe<Scalars['ID']>;
  /** The object before it was deleted */
  tutorial?: Maybe<Tutorial>;
};

/** Input for the deleteUser mutation. */
export type DeleteUserInput = {
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The ID of the user you want to delete */
  id: Scalars['ID'];
  /** Reassign posts and links to new User ID. */
  reassignId?: InputMaybe<Scalars['ID']>;
};

/** The payload for the deleteUser mutation. */
export type DeleteUserPayload = {
  __typename?: 'DeleteUserPayload';
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The ID of the user that you just deleted */
  deletedId?: Maybe<Scalars['ID']>;
  /** The deleted user object */
  user?: Maybe<User>;
};

/** The discussion setting type */
export type DiscussionSettings = {
  __typename?: 'DiscussionSettings';
  /** Allow people to submit comments on new posts. */
  defaultCommentStatus?: Maybe<Scalars['String']>;
  /** Allow link notifications from other blogs (pingbacks and trackbacks) on new articles. */
  defaultPingStatus?: Maybe<Scalars['String']>;
};

/** Relational context between connected nodes */
export type Edge = {
  /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
  cursor?: Maybe<Scalars['String']>;
  /** The connected node */
  node: Node;
};

/** Blocks that can be edited to create content and layouts */
export type EditorBlock = {
  /** The API version of the Gutenberg Block */
  apiVersion?: Maybe<Scalars['Int']>;
  /** The name of the category the Block belongs to */
  blockEditorCategoryName?: Maybe<Scalars['String']>;
  /** The id of the Block */
  clientId?: Maybe<Scalars['String']>;
  /** CSS Classnames to apply to the block */
  cssClassNames?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** The inner blocks of the Block */
  innerBlocks?: Maybe<Array<Maybe<EditorBlock>>>;
  /** Whether the block is Dynamic (server rendered) */
  isDynamic: Scalars['Boolean'];
  /** The name of the Block */
  name?: Maybe<Scalars['String']>;
  /** The parent id of the Block */
  parentClientId?: Maybe<Scalars['String']>;
  /** The rendered HTML for the block */
  renderedHtml?: Maybe<Scalars['String']>;
};

/** Asset enqueued by the CMS */
export type EnqueuedAsset = {
  /** @todo */
  args?: Maybe<Scalars['Boolean']>;
  /** Dependencies needed to use this asset */
  dependencies?: Maybe<Array<Maybe<EnqueuedScript>>>;
  /** Extra information needed for the script */
  extra?: Maybe<Scalars['String']>;
  /** The handle of the enqueued asset */
  handle?: Maybe<Scalars['String']>;
  /** The ID of the enqueued asset */
  id: Scalars['ID'];
  /** The source of the asset */
  src?: Maybe<Scalars['String']>;
  /** The version of the enqueued asset */
  version?: Maybe<Scalars['String']>;
};

/** Script enqueued by the CMS */
export type EnqueuedScript = EnqueuedAsset & Node & {
  __typename?: 'EnqueuedScript';
  /** @todo */
  args?: Maybe<Scalars['Boolean']>;
  /** Dependencies needed to use this asset */
  dependencies?: Maybe<Array<Maybe<EnqueuedScript>>>;
  /** Extra information needed for the script */
  extra?: Maybe<Scalars['String']>;
  /** The handle of the enqueued asset */
  handle?: Maybe<Scalars['String']>;
  /** The ID of the enqueued asset */
  id: Scalars['ID'];
  /** The source of the asset */
  src?: Maybe<Scalars['String']>;
  /** The version of the enqueued asset */
  version?: Maybe<Scalars['String']>;
};

/** Connection to EnqueuedScript Nodes */
export type EnqueuedScriptConnection = {
  /** A list of edges (relational context) between ContentNode and connected EnqueuedScript Nodes */
  edges: Array<EnqueuedScriptConnectionEdge>;
  /** A list of connected EnqueuedScript Nodes */
  nodes: Array<EnqueuedScript>;
  /** Information about pagination in a connection. */
  pageInfo: EnqueuedScriptConnectionPageInfo;
};

/** Edge between a Node and a connected EnqueuedScript */
export type EnqueuedScriptConnectionEdge = {
  /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
  cursor?: Maybe<Scalars['String']>;
  /** The connected EnqueuedScript Node */
  node: EnqueuedScript;
};

/** Page Info on the connected EnqueuedScriptConnectionEdge */
export type EnqueuedScriptConnectionPageInfo = {
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
};

/** Stylesheet enqueued by the CMS */
export type EnqueuedStylesheet = EnqueuedAsset & Node & {
  __typename?: 'EnqueuedStylesheet';
  /** @todo */
  args?: Maybe<Scalars['Boolean']>;
  /** Dependencies needed to use this asset */
  dependencies?: Maybe<Array<Maybe<EnqueuedScript>>>;
  /** Extra information needed for the script */
  extra?: Maybe<Scalars['String']>;
  /** The handle of the enqueued asset */
  handle?: Maybe<Scalars['String']>;
  /** The ID of the enqueued asset */
  id: Scalars['ID'];
  /** The source of the asset */
  src?: Maybe<Scalars['String']>;
  /** The version of the enqueued asset */
  version?: Maybe<Scalars['String']>;
};

/** Connection to EnqueuedStylesheet Nodes */
export type EnqueuedStylesheetConnection = {
  /** A list of edges (relational context) between ContentNode and connected EnqueuedStylesheet Nodes */
  edges: Array<EnqueuedStylesheetConnectionEdge>;
  /** A list of connected EnqueuedStylesheet Nodes */
  nodes: Array<EnqueuedStylesheet>;
  /** Information about pagination in a connection. */
  pageInfo: EnqueuedStylesheetConnectionPageInfo;
};

/** Edge between a Node and a connected EnqueuedStylesheet */
export type EnqueuedStylesheetConnectionEdge = {
  /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
  cursor?: Maybe<Scalars['String']>;
  /** The connected EnqueuedStylesheet Node */
  node: EnqueuedStylesheet;
};

/** Page Info on the connected EnqueuedStylesheetConnectionEdge */
export type EnqueuedStylesheetConnectionPageInfo = {
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
};

/** The explanation type */
export type Explanation = ContentNode & DatabaseIdentifier & MenuItemLinkable & Node & NodeWithContentEditor & NodeWithEditorBlocks & NodeWithFeaturedImage & NodeWithTemplate & NodeWithTitle & Previewable & UniformResourceIdentifiable & {
  __typename?: 'Explanation';
  /** @deprecated Deprecated in favor of using Next.js pages */
  conditionalTags?: Maybe<ConditionalTags>;
  /** The content of the post. */
  content?: Maybe<Scalars['String']>;
  /** Connection between the ContentNode type and the ContentType type */
  contentType?: Maybe<ContentNodeToContentTypeConnectionEdge>;
  /** The name of the Content Type the node belongs to */
  contentTypeName: Scalars['String'];
  /** The unique identifier stored in the database */
  databaseId: Scalars['Int'];
  /** Post publishing date. */
  date?: Maybe<Scalars['String']>;
  /** The publishing date set in GMT. */
  dateGmt?: Maybe<Scalars['String']>;
  /** The desired slug of the post */
  desiredSlug?: Maybe<Scalars['String']>;
  /** If a user has edited the node within the past 15 seconds, this will return the user that last edited. Null if the edit lock doesn&#039;t exist or is greater than 15 seconds */
  editingLockedBy?: Maybe<ContentNodeToEditLockConnectionEdge>;
  /** List of editor blocks */
  editorBlocks?: Maybe<Array<Maybe<EditorBlock>>>;
  /** The RSS enclosure for the object */
  enclosure?: Maybe<Scalars['String']>;
  /** Connection between the ContentNode type and the EnqueuedScript type */
  enqueuedScripts?: Maybe<ContentNodeToEnqueuedScriptConnection>;
  /** Connection between the ContentNode type and the EnqueuedStylesheet type */
  enqueuedStylesheets?: Maybe<ContentNodeToEnqueuedStylesheetConnection>;
  /**
   * The id field matches the WP_Post-&gt;ID field.
   * @deprecated Deprecated in favor of the databaseId field
   */
  explanationId: Scalars['Int'];
  /** Connection between the NodeWithFeaturedImage type and the MediaItem type */
  featuredImage?: Maybe<NodeWithFeaturedImageToMediaItemConnectionEdge>;
  /** The database identifier for the featured image node assigned to the content node */
  featuredImageDatabaseId?: Maybe<Scalars['Int']>;
  /** Globally unique ID of the featured image assigned to the node */
  featuredImageId?: Maybe<Scalars['ID']>;
  /** The global unique identifier for this post. This currently matches the value stored in WP_Post-&gt;guid and the guid column in the &quot;post_objects&quot; database table. */
  guid?: Maybe<Scalars['String']>;
  /** The globally unique identifier of the faust_explanation object. */
  id: Scalars['ID'];
  /** Whether the node is a Content Node */
  isContentNode: Scalars['Boolean'];
  /** Whether the object is a node in the preview state */
  isPreview?: Maybe<Scalars['Boolean']>;
  /** Whether the object is restricted from the current viewer */
  isRestricted?: Maybe<Scalars['Boolean']>;
  /** Whether the node is a Term */
  isTermNode: Scalars['Boolean'];
  /** The user that most recently edited the node */
  lastEditedBy?: Maybe<ContentNodeToEditLastConnectionEdge>;
  /** The permalink of the post */
  link?: Maybe<Scalars['String']>;
  /** The local modified time for a post. If a post was recently updated the modified field will change to match the corresponding time. */
  modified?: Maybe<Scalars['String']>;
  /** The GMT modified time for a post. If a post was recently updated the modified field will change to match the corresponding time in GMT. */
  modifiedGmt?: Maybe<Scalars['String']>;
  /** Connection between the Explanation type and the explanation type */
  preview?: Maybe<ExplanationToPreviewConnectionEdge>;
  /** The database id of the preview node */
  previewRevisionDatabaseId?: Maybe<Scalars['Int']>;
  /** Whether the object is a node in the preview state */
  previewRevisionId?: Maybe<Scalars['ID']>;
  /** The uri slug for the post. This is equivalent to the WP_Post-&gt;post_name field and the post_name column in the database for the &quot;post_objects&quot; table. */
  slug?: Maybe<Scalars['String']>;
  /** The current status of the object */
  status?: Maybe<Scalars['String']>;
  /** The template assigned to the node */
  template?: Maybe<ContentTemplate>;
  templates?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** The title of the post. This is currently just the raw title. An amendment to support rendered title needs to be made. */
  title?: Maybe<Scalars['String']>;
  /** The unique resource identifier path */
  uri?: Maybe<Scalars['String']>;
};


/** The explanation type */
export type ExplanationContentArgs = {
  format?: InputMaybe<PostObjectFieldFormatEnum>;
};


/** The explanation type */
export type ExplanationEditorBlocksArgs = {
  flat?: InputMaybe<Scalars['Boolean']>;
};


/** The explanation type */
export type ExplanationEnqueuedScriptsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


/** The explanation type */
export type ExplanationEnqueuedStylesheetsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


/** The explanation type */
export type ExplanationTitleArgs = {
  format?: InputMaybe<PostObjectFieldFormatEnum>;
};

/** Connection to explanation Nodes */
export type ExplanationConnection = {
  /** A list of edges (relational context) between RootQuery and connected explanation Nodes */
  edges: Array<ExplanationConnectionEdge>;
  /** A list of connected explanation Nodes */
  nodes: Array<Explanation>;
  /** Information about pagination in a connection. */
  pageInfo: ExplanationConnectionPageInfo;
};

/** Edge between a Node and a connected explanation */
export type ExplanationConnectionEdge = {
  /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
  cursor?: Maybe<Scalars['String']>;
  /** The connected explanation Node */
  node: Explanation;
};

/** Page Info on the connected ExplanationConnectionEdge */
export type ExplanationConnectionPageInfo = {
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
};

/** The Type of Identifier used to fetch a single resource. Default is ID. */
export enum ExplanationIdType {
  /** Identify a resource by the Database ID. */
  DatabaseId = 'DATABASE_ID',
  /** Identify a resource by the (hashed) Global ID. */
  Id = 'ID',
  /** Identify a resource by the slug. Available to non-hierarchcial Types where the slug is a unique identifier. */
  Slug = 'SLUG',
  /** Identify a resource by the URI. */
  Uri = 'URI'
}

/** Connection between the Explanation type and the explanation type */
export type ExplanationToPreviewConnectionEdge = Edge & ExplanationConnectionEdge & OneToOneConnection & {
  __typename?: 'ExplanationToPreviewConnectionEdge';
  /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
  cursor?: Maybe<Scalars['String']>;
  /** The node of the connection, without the edges */
  node: Explanation;
};

export type FaustExplanationEditorBlock = {
  /** The API version of the Gutenberg Block */
  apiVersion?: Maybe<Scalars['Int']>;
  /** The name of the category the Block belongs to */
  blockEditorCategoryName?: Maybe<Scalars['String']>;
  /** The id of the Block */
  clientId?: Maybe<Scalars['String']>;
  /** CSS Classnames to apply to the block */
  cssClassNames?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** The inner blocks of the Block */
  innerBlocks?: Maybe<Array<Maybe<EditorBlock>>>;
  /** Whether the block is Dynamic (server rendered) */
  isDynamic: Scalars['Boolean'];
  /** The name of the Block */
  name?: Maybe<Scalars['String']>;
  /** The parent id of the Block */
  parentClientId?: Maybe<Scalars['String']>;
  /** The rendered HTML for the block */
  renderedHtml?: Maybe<Scalars['String']>;
};

export type FaustHowToGuideEditorBlock = {
  /** The API version of the Gutenberg Block */
  apiVersion?: Maybe<Scalars['Int']>;
  /** The name of the category the Block belongs to */
  blockEditorCategoryName?: Maybe<Scalars['String']>;
  /** The id of the Block */
  clientId?: Maybe<Scalars['String']>;
  /** CSS Classnames to apply to the block */
  cssClassNames?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** The inner blocks of the Block */
  innerBlocks?: Maybe<Array<Maybe<EditorBlock>>>;
  /** Whether the block is Dynamic (server rendered) */
  isDynamic: Scalars['Boolean'];
  /** The name of the Block */
  name?: Maybe<Scalars['String']>;
  /** The parent id of the Block */
  parentClientId?: Maybe<Scalars['String']>;
  /** The rendered HTML for the block */
  renderedHtml?: Maybe<Scalars['String']>;
};

export type FaustReferenceEditorBlock = {
  /** The API version of the Gutenberg Block */
  apiVersion?: Maybe<Scalars['Int']>;
  /** The name of the category the Block belongs to */
  blockEditorCategoryName?: Maybe<Scalars['String']>;
  /** The id of the Block */
  clientId?: Maybe<Scalars['String']>;
  /** CSS Classnames to apply to the block */
  cssClassNames?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** The inner blocks of the Block */
  innerBlocks?: Maybe<Array<Maybe<EditorBlock>>>;
  /** Whether the block is Dynamic (server rendered) */
  isDynamic: Scalars['Boolean'];
  /** The name of the Block */
  name?: Maybe<Scalars['String']>;
  /** The parent id of the Block */
  parentClientId?: Maybe<Scalars['String']>;
  /** The rendered HTML for the block */
  renderedHtml?: Maybe<Scalars['String']>;
};

export type FaustTutorialEditorBlock = {
  /** The API version of the Gutenberg Block */
  apiVersion?: Maybe<Scalars['Int']>;
  /** The name of the category the Block belongs to */
  blockEditorCategoryName?: Maybe<Scalars['String']>;
  /** The id of the Block */
  clientId?: Maybe<Scalars['String']>;
  /** CSS Classnames to apply to the block */
  cssClassNames?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** The inner blocks of the Block */
  innerBlocks?: Maybe<Array<Maybe<EditorBlock>>>;
  /** Whether the block is Dynamic (server rendered) */
  isDynamic: Scalars['Boolean'];
  /** The name of the Block */
  name?: Maybe<Scalars['String']>;
  /** The parent id of the Block */
  parentClientId?: Maybe<Scalars['String']>;
  /** The rendered HTML for the block */
  renderedHtml?: Maybe<Scalars['String']>;
};

/** The general setting type */
export type GeneralSettings = {
  __typename?: 'GeneralSettings';
  /** A date format for all date strings. */
  dateFormat?: Maybe<Scalars['String']>;
  /** Site tagline. */
  description?: Maybe<Scalars['String']>;
  /** WordPress locale code. */
  language?: Maybe<Scalars['String']>;
  /** A day number of the week that the week should start on. */
  startOfWeek?: Maybe<Scalars['Int']>;
  /** A time format for all time strings. */
  timeFormat?: Maybe<Scalars['String']>;
  /** A city in the same timezone as you. */
  timezone?: Maybe<Scalars['String']>;
  /** Site title. */
  title?: Maybe<Scalars['String']>;
  /** Site URL. */
  url?: Maybe<Scalars['String']>;
};

/** Input for the generateAuthorizationCode mutation. */
export type GenerateAuthorizationCodeInput = {
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** Email for WordPress user */
  email?: InputMaybe<Scalars['String']>;
  /** Password for WordPress user */
  password?: InputMaybe<Scalars['String']>;
  /** Username for WordPress user */
  username?: InputMaybe<Scalars['String']>;
};

/** The payload for the generateAuthorizationCode mutation. */
export type GenerateAuthorizationCodePayload = {
  __typename?: 'GenerateAuthorizationCodePayload';
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Authorization code used for requesting refresh/access tokens */
  code?: Maybe<Scalars['String']>;
  /** Error encountered during user authentication, if any */
  error?: Maybe<Scalars['String']>;
};

/** Types of styles to load */
export enum GlobalStylesheetTypesEnum {
  BaseLayoutStyles = 'BASE_LAYOUT_STYLES',
  Presets = 'PRESETS',
  Styles = 'STYLES',
  Variables = 'VARIABLES'
}

/** Content node with hierarchical (parent/child) relationships */
export type HierarchicalContentNode = {
  /** Returns ancestors of the node. Default ordered as lowest (closest to the child) to highest (closest to the root). */
  ancestors?: Maybe<HierarchicalContentNodeToContentNodeAncestorsConnection>;
  /** Connection between the HierarchicalContentNode type and the ContentNode type */
  children?: Maybe<HierarchicalContentNodeToContentNodeChildrenConnection>;
  /** @deprecated Deprecated in favor of using Next.js pages */
  conditionalTags?: Maybe<ConditionalTags>;
  /** Connection between the ContentNode type and the ContentType type */
  contentType?: Maybe<ContentNodeToContentTypeConnectionEdge>;
  /** The name of the Content Type the node belongs to */
  contentTypeName: Scalars['String'];
  /** The unique identifier stored in the database */
  databaseId: Scalars['Int'];
  /** Post publishing date. */
  date?: Maybe<Scalars['String']>;
  /** The publishing date set in GMT. */
  dateGmt?: Maybe<Scalars['String']>;
  /** The desired slug of the post */
  desiredSlug?: Maybe<Scalars['String']>;
  /** If a user has edited the node within the past 15 seconds, this will return the user that last edited. Null if the edit lock doesn&#039;t exist or is greater than 15 seconds */
  editingLockedBy?: Maybe<ContentNodeToEditLockConnectionEdge>;
  /** The RSS enclosure for the object */
  enclosure?: Maybe<Scalars['String']>;
  /** Connection between the ContentNode type and the EnqueuedScript type */
  enqueuedScripts?: Maybe<ContentNodeToEnqueuedScriptConnection>;
  /** Connection between the ContentNode type and the EnqueuedStylesheet type */
  enqueuedStylesheets?: Maybe<ContentNodeToEnqueuedStylesheetConnection>;
  /** The global unique identifier for this post. This currently matches the value stored in WP_Post-&gt;guid and the guid column in the &quot;post_objects&quot; database table. */
  guid?: Maybe<Scalars['String']>;
  /** The globally unique ID for the object */
  id: Scalars['ID'];
  /** Whether the node is a Content Node */
  isContentNode: Scalars['Boolean'];
  /** Whether the object is a node in the preview state */
  isPreview?: Maybe<Scalars['Boolean']>;
  /** Whether the object is restricted from the current viewer */
  isRestricted?: Maybe<Scalars['Boolean']>;
  /** Whether the node is a Term */
  isTermNode: Scalars['Boolean'];
  /** The user that most recently edited the node */
  lastEditedBy?: Maybe<ContentNodeToEditLastConnectionEdge>;
  /** The permalink of the post */
  link?: Maybe<Scalars['String']>;
  /** The local modified time for a post. If a post was recently updated the modified field will change to match the corresponding time. */
  modified?: Maybe<Scalars['String']>;
  /** The GMT modified time for a post. If a post was recently updated the modified field will change to match the corresponding time in GMT. */
  modifiedGmt?: Maybe<Scalars['String']>;
  /** The parent of the node. The parent object can be of various types */
  parent?: Maybe<HierarchicalContentNodeToParentContentNodeConnectionEdge>;
  /** Database id of the parent node */
  parentDatabaseId?: Maybe<Scalars['Int']>;
  /** The globally unique identifier of the parent node. */
  parentId?: Maybe<Scalars['ID']>;
  /** The database id of the preview node */
  previewRevisionDatabaseId?: Maybe<Scalars['Int']>;
  /** Whether the object is a node in the preview state */
  previewRevisionId?: Maybe<Scalars['ID']>;
  /** The uri slug for the post. This is equivalent to the WP_Post-&gt;post_name field and the post_name column in the database for the &quot;post_objects&quot; table. */
  slug?: Maybe<Scalars['String']>;
  /** The current status of the object */
  status?: Maybe<Scalars['String']>;
  /** The template assigned to a node of content */
  template?: Maybe<ContentTemplate>;
  templates?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** The unique resource identifier path */
  uri?: Maybe<Scalars['String']>;
};


/** Content node with hierarchical (parent/child) relationships */
export type HierarchicalContentNodeAncestorsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<HierarchicalContentNodeToContentNodeAncestorsConnectionWhereArgs>;
};


/** Content node with hierarchical (parent/child) relationships */
export type HierarchicalContentNodeChildrenArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<HierarchicalContentNodeToContentNodeChildrenConnectionWhereArgs>;
};


/** Content node with hierarchical (parent/child) relationships */
export type HierarchicalContentNodeEnqueuedScriptsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


/** Content node with hierarchical (parent/child) relationships */
export type HierarchicalContentNodeEnqueuedStylesheetsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};

/** Connection between the HierarchicalContentNode type and the ContentNode type */
export type HierarchicalContentNodeToContentNodeAncestorsConnection = Connection & ContentNodeConnection & {
  __typename?: 'HierarchicalContentNodeToContentNodeAncestorsConnection';
  /** Edges for the HierarchicalContentNodeToContentNodeAncestorsConnection connection */
  edges: Array<HierarchicalContentNodeToContentNodeAncestorsConnectionEdge>;
  /** The nodes of the connection, without the edges */
  nodes: Array<ContentNode>;
  /** Information about pagination in a connection. */
  pageInfo: HierarchicalContentNodeToContentNodeAncestorsConnectionPageInfo;
};

/** An edge in a connection */
export type HierarchicalContentNodeToContentNodeAncestorsConnectionEdge = ContentNodeConnectionEdge & Edge & {
  __typename?: 'HierarchicalContentNodeToContentNodeAncestorsConnectionEdge';
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node: ContentNode;
};

/** Page Info on the &quot;HierarchicalContentNodeToContentNodeAncestorsConnection&quot; */
export type HierarchicalContentNodeToContentNodeAncestorsConnectionPageInfo = ContentNodeConnectionPageInfo & PageInfo & WpPageInfo & {
  __typename?: 'HierarchicalContentNodeToContentNodeAncestorsConnectionPageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
};

/** Arguments for filtering the HierarchicalContentNodeToContentNodeAncestorsConnection connection */
export type HierarchicalContentNodeToContentNodeAncestorsConnectionWhereArgs = {
  /** The Types of content to filter */
  contentTypes?: InputMaybe<Array<InputMaybe<ContentTypeEnum>>>;
  /** Filter the connection based on dates */
  dateQuery?: InputMaybe<DateQueryInput>;
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword?: InputMaybe<Scalars['Boolean']>;
  /** Specific database ID of the object */
  id?: InputMaybe<Scalars['Int']>;
  /** Array of IDs for the objects to retrieve */
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Get objects with a specific mimeType property */
  mimeType?: InputMaybe<MimeTypeEnum>;
  /** Slug / post_name of the object */
  name?: InputMaybe<Scalars['String']>;
  /** Specify objects to retrieve. Use slugs */
  nameIn?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** What paramater to use to order the objects by. */
  orderby?: InputMaybe<Array<InputMaybe<PostObjectsConnectionOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: InputMaybe<Scalars['ID']>;
  /** Specify objects whose parent is in an array */
  parentIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Specify posts whose parent is not in an array */
  parentNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Show posts with a specific password. */
  password?: InputMaybe<Scalars['String']>;
  /** Show Posts based on a keyword search */
  search?: InputMaybe<Scalars['String']>;
  /** Retrieve posts where post status is in an array. */
  stati?: InputMaybe<Array<InputMaybe<PostStatusEnum>>>;
  /** Show posts with a specific status. */
  status?: InputMaybe<PostStatusEnum>;
  /** Title of the object */
  title?: InputMaybe<Scalars['String']>;
};

/** Connection between the HierarchicalContentNode type and the ContentNode type */
export type HierarchicalContentNodeToContentNodeChildrenConnection = Connection & ContentNodeConnection & {
  __typename?: 'HierarchicalContentNodeToContentNodeChildrenConnection';
  /** Edges for the HierarchicalContentNodeToContentNodeChildrenConnection connection */
  edges: Array<HierarchicalContentNodeToContentNodeChildrenConnectionEdge>;
  /** The nodes of the connection, without the edges */
  nodes: Array<ContentNode>;
  /** Information about pagination in a connection. */
  pageInfo: HierarchicalContentNodeToContentNodeChildrenConnectionPageInfo;
};

/** An edge in a connection */
export type HierarchicalContentNodeToContentNodeChildrenConnectionEdge = ContentNodeConnectionEdge & Edge & {
  __typename?: 'HierarchicalContentNodeToContentNodeChildrenConnectionEdge';
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node: ContentNode;
};

/** Page Info on the &quot;HierarchicalContentNodeToContentNodeChildrenConnection&quot; */
export type HierarchicalContentNodeToContentNodeChildrenConnectionPageInfo = ContentNodeConnectionPageInfo & PageInfo & WpPageInfo & {
  __typename?: 'HierarchicalContentNodeToContentNodeChildrenConnectionPageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
};

/** Arguments for filtering the HierarchicalContentNodeToContentNodeChildrenConnection connection */
export type HierarchicalContentNodeToContentNodeChildrenConnectionWhereArgs = {
  /** The Types of content to filter */
  contentTypes?: InputMaybe<Array<InputMaybe<ContentTypeEnum>>>;
  /** Filter the connection based on dates */
  dateQuery?: InputMaybe<DateQueryInput>;
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword?: InputMaybe<Scalars['Boolean']>;
  /** Specific database ID of the object */
  id?: InputMaybe<Scalars['Int']>;
  /** Array of IDs for the objects to retrieve */
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Get objects with a specific mimeType property */
  mimeType?: InputMaybe<MimeTypeEnum>;
  /** Slug / post_name of the object */
  name?: InputMaybe<Scalars['String']>;
  /** Specify objects to retrieve. Use slugs */
  nameIn?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** What paramater to use to order the objects by. */
  orderby?: InputMaybe<Array<InputMaybe<PostObjectsConnectionOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: InputMaybe<Scalars['ID']>;
  /** Specify objects whose parent is in an array */
  parentIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Specify posts whose parent is not in an array */
  parentNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Show posts with a specific password. */
  password?: InputMaybe<Scalars['String']>;
  /** Show Posts based on a keyword search */
  search?: InputMaybe<Scalars['String']>;
  /** Retrieve posts where post status is in an array. */
  stati?: InputMaybe<Array<InputMaybe<PostStatusEnum>>>;
  /** Show posts with a specific status. */
  status?: InputMaybe<PostStatusEnum>;
  /** Title of the object */
  title?: InputMaybe<Scalars['String']>;
};

/** Connection between the HierarchicalContentNode type and the ContentNode type */
export type HierarchicalContentNodeToParentContentNodeConnectionEdge = ContentNodeConnectionEdge & Edge & OneToOneConnection & {
  __typename?: 'HierarchicalContentNodeToParentContentNodeConnectionEdge';
  /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
  cursor?: Maybe<Scalars['String']>;
  /** The node of the connection, without the edges */
  node: ContentNode;
};

/** Node with hierarchical (parent/child) relationships */
export type HierarchicalNode = {
  /** The unique identifier stored in the database */
  databaseId: Scalars['Int'];
  /** The globally unique ID for the object */
  id: Scalars['ID'];
  /** Database id of the parent node */
  parentDatabaseId?: Maybe<Scalars['Int']>;
  /** The globally unique identifier of the parent node. */
  parentId?: Maybe<Scalars['ID']>;
};

/** Term node with hierarchical (parent/child) relationships */
export type HierarchicalTermNode = {
  /** @deprecated Deprecated in favor of using Next.js pages */
  conditionalTags?: Maybe<ConditionalTags>;
  /** The number of objects connected to the object */
  count?: Maybe<Scalars['Int']>;
  /** The unique identifier stored in the database */
  databaseId: Scalars['Int'];
  /** The description of the object */
  description?: Maybe<Scalars['String']>;
  /** Connection between the TermNode type and the EnqueuedScript type */
  enqueuedScripts?: Maybe<TermNodeToEnqueuedScriptConnection>;
  /** Connection between the TermNode type and the EnqueuedStylesheet type */
  enqueuedStylesheets?: Maybe<TermNodeToEnqueuedStylesheetConnection>;
  /** The globally unique ID for the object */
  id: Scalars['ID'];
  /** Whether the node is a Content Node */
  isContentNode: Scalars['Boolean'];
  /** Whether the object is restricted from the current viewer */
  isRestricted?: Maybe<Scalars['Boolean']>;
  /** Whether the node is a Term */
  isTermNode: Scalars['Boolean'];
  /** The link to the term */
  link?: Maybe<Scalars['String']>;
  /** The human friendly name of the object. */
  name?: Maybe<Scalars['String']>;
  /** Database id of the parent node */
  parentDatabaseId?: Maybe<Scalars['Int']>;
  /** The globally unique identifier of the parent node. */
  parentId?: Maybe<Scalars['ID']>;
  /** An alphanumeric identifier for the object unique to its type. */
  slug?: Maybe<Scalars['String']>;
  /** The name of the taxonomy that the object is associated with */
  taxonomyName?: Maybe<Scalars['String']>;
  templates?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** The ID of the term group that this term object belongs to */
  termGroupId?: Maybe<Scalars['Int']>;
  /** The taxonomy ID that the object is associated with */
  termTaxonomyId?: Maybe<Scalars['Int']>;
  /** The unique resource identifier path */
  uri?: Maybe<Scalars['String']>;
};


/** Term node with hierarchical (parent/child) relationships */
export type HierarchicalTermNodeEnqueuedScriptsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


/** Term node with hierarchical (parent/child) relationships */
export type HierarchicalTermNodeEnqueuedStylesheetsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};

/** The howToGuide type */
export type HowToGuide = ContentNode & DatabaseIdentifier & MenuItemLinkable & Node & NodeWithContentEditor & NodeWithEditorBlocks & NodeWithFeaturedImage & NodeWithTemplate & NodeWithTitle & Previewable & UniformResourceIdentifiable & {
  __typename?: 'HowToGuide';
  /** @deprecated Deprecated in favor of using Next.js pages */
  conditionalTags?: Maybe<ConditionalTags>;
  /** The content of the post. */
  content?: Maybe<Scalars['String']>;
  /** Connection between the ContentNode type and the ContentType type */
  contentType?: Maybe<ContentNodeToContentTypeConnectionEdge>;
  /** The name of the Content Type the node belongs to */
  contentTypeName: Scalars['String'];
  /** The unique identifier stored in the database */
  databaseId: Scalars['Int'];
  /** Post publishing date. */
  date?: Maybe<Scalars['String']>;
  /** The publishing date set in GMT. */
  dateGmt?: Maybe<Scalars['String']>;
  /** The desired slug of the post */
  desiredSlug?: Maybe<Scalars['String']>;
  /** If a user has edited the node within the past 15 seconds, this will return the user that last edited. Null if the edit lock doesn&#039;t exist or is greater than 15 seconds */
  editingLockedBy?: Maybe<ContentNodeToEditLockConnectionEdge>;
  /** List of editor blocks */
  editorBlocks?: Maybe<Array<Maybe<EditorBlock>>>;
  /** The RSS enclosure for the object */
  enclosure?: Maybe<Scalars['String']>;
  /** Connection between the ContentNode type and the EnqueuedScript type */
  enqueuedScripts?: Maybe<ContentNodeToEnqueuedScriptConnection>;
  /** Connection between the ContentNode type and the EnqueuedStylesheet type */
  enqueuedStylesheets?: Maybe<ContentNodeToEnqueuedStylesheetConnection>;
  /** Connection between the NodeWithFeaturedImage type and the MediaItem type */
  featuredImage?: Maybe<NodeWithFeaturedImageToMediaItemConnectionEdge>;
  /** The database identifier for the featured image node assigned to the content node */
  featuredImageDatabaseId?: Maybe<Scalars['Int']>;
  /** Globally unique ID of the featured image assigned to the node */
  featuredImageId?: Maybe<Scalars['ID']>;
  /** The global unique identifier for this post. This currently matches the value stored in WP_Post-&gt;guid and the guid column in the &quot;post_objects&quot; database table. */
  guid?: Maybe<Scalars['String']>;
  /**
   * The id field matches the WP_Post-&gt;ID field.
   * @deprecated Deprecated in favor of the databaseId field
   */
  howToGuideId: Scalars['Int'];
  /** The globally unique identifier of the faust_how_to_guide object. */
  id: Scalars['ID'];
  /** Whether the node is a Content Node */
  isContentNode: Scalars['Boolean'];
  /** Whether the object is a node in the preview state */
  isPreview?: Maybe<Scalars['Boolean']>;
  /** Whether the object is restricted from the current viewer */
  isRestricted?: Maybe<Scalars['Boolean']>;
  /** Whether the node is a Term */
  isTermNode: Scalars['Boolean'];
  /** The user that most recently edited the node */
  lastEditedBy?: Maybe<ContentNodeToEditLastConnectionEdge>;
  /** The permalink of the post */
  link?: Maybe<Scalars['String']>;
  /** The local modified time for a post. If a post was recently updated the modified field will change to match the corresponding time. */
  modified?: Maybe<Scalars['String']>;
  /** The GMT modified time for a post. If a post was recently updated the modified field will change to match the corresponding time in GMT. */
  modifiedGmt?: Maybe<Scalars['String']>;
  /** Connection between the HowToGuide type and the howToGuide type */
  preview?: Maybe<HowToGuideToPreviewConnectionEdge>;
  /** The database id of the preview node */
  previewRevisionDatabaseId?: Maybe<Scalars['Int']>;
  /** Whether the object is a node in the preview state */
  previewRevisionId?: Maybe<Scalars['ID']>;
  /** The uri slug for the post. This is equivalent to the WP_Post-&gt;post_name field and the post_name column in the database for the &quot;post_objects&quot; table. */
  slug?: Maybe<Scalars['String']>;
  /** The current status of the object */
  status?: Maybe<Scalars['String']>;
  /** The template assigned to the node */
  template?: Maybe<ContentTemplate>;
  templates?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** The title of the post. This is currently just the raw title. An amendment to support rendered title needs to be made. */
  title?: Maybe<Scalars['String']>;
  /** The unique resource identifier path */
  uri?: Maybe<Scalars['String']>;
};


/** The howToGuide type */
export type HowToGuideContentArgs = {
  format?: InputMaybe<PostObjectFieldFormatEnum>;
};


/** The howToGuide type */
export type HowToGuideEditorBlocksArgs = {
  flat?: InputMaybe<Scalars['Boolean']>;
};


/** The howToGuide type */
export type HowToGuideEnqueuedScriptsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


/** The howToGuide type */
export type HowToGuideEnqueuedStylesheetsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


/** The howToGuide type */
export type HowToGuideTitleArgs = {
  format?: InputMaybe<PostObjectFieldFormatEnum>;
};

/** Connection to howToGuide Nodes */
export type HowToGuideConnection = {
  /** A list of edges (relational context) between RootQuery and connected howToGuide Nodes */
  edges: Array<HowToGuideConnectionEdge>;
  /** A list of connected howToGuide Nodes */
  nodes: Array<HowToGuide>;
  /** Information about pagination in a connection. */
  pageInfo: HowToGuideConnectionPageInfo;
};

/** Edge between a Node and a connected howToGuide */
export type HowToGuideConnectionEdge = {
  /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
  cursor?: Maybe<Scalars['String']>;
  /** The connected howToGuide Node */
  node: HowToGuide;
};

/** Page Info on the connected HowToGuideConnectionEdge */
export type HowToGuideConnectionPageInfo = {
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
};

/** The Type of Identifier used to fetch a single resource. Default is ID. */
export enum HowToGuideIdType {
  /** Identify a resource by the Database ID. */
  DatabaseId = 'DATABASE_ID',
  /** Identify a resource by the (hashed) Global ID. */
  Id = 'ID',
  /** Identify a resource by the slug. Available to non-hierarchcial Types where the slug is a unique identifier. */
  Slug = 'SLUG',
  /** Identify a resource by the URI. */
  Uri = 'URI'
}

/** Connection between the HowToGuide type and the howToGuide type */
export type HowToGuideToPreviewConnectionEdge = Edge & HowToGuideConnectionEdge & OneToOneConnection & {
  __typename?: 'HowToGuideToPreviewConnectionEdge';
  /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
  cursor?: Maybe<Scalars['String']>;
  /** The node of the connection, without the edges */
  node: HowToGuide;
};

/** File details for a Media Item */
export type MediaDetails = {
  __typename?: 'MediaDetails';
  /** The filename of the mediaItem */
  file?: Maybe<Scalars['String']>;
  /** The height of the mediaItem */
  height?: Maybe<Scalars['Int']>;
  /** Meta information associated with the mediaItem */
  meta?: Maybe<MediaItemMeta>;
  /** The available sizes of the mediaItem */
  sizes?: Maybe<Array<Maybe<MediaSize>>>;
  /** The width of the mediaItem */
  width?: Maybe<Scalars['Int']>;
};


/** File details for a Media Item */
export type MediaDetailsSizesArgs = {
  exclude?: InputMaybe<Array<InputMaybe<MediaItemSizeEnum>>>;
  include?: InputMaybe<Array<InputMaybe<MediaItemSizeEnum>>>;
};

/** The mediaItem type */
export type MediaItem = ContentNode & DatabaseIdentifier & HierarchicalContentNode & HierarchicalNode & Node & NodeWithAuthor & NodeWithTemplate & NodeWithTitle & UniformResourceIdentifiable & {
  __typename?: 'MediaItem';
  /** Alternative text to display when resource is not displayed */
  altText?: Maybe<Scalars['String']>;
  /** Returns ancestors of the node. Default ordered as lowest (closest to the child) to highest (closest to the root). */
  ancestors?: Maybe<HierarchicalContentNodeToContentNodeAncestorsConnection>;
  /** Connection between the NodeWithAuthor type and the User type */
  author?: Maybe<NodeWithAuthorToUserConnectionEdge>;
  /** The database identifier of the author of the node */
  authorDatabaseId?: Maybe<Scalars['Int']>;
  /** The globally unique identifier of the author of the node */
  authorId?: Maybe<Scalars['ID']>;
  /** The caption for the resource */
  caption?: Maybe<Scalars['String']>;
  /** Connection between the HierarchicalContentNode type and the ContentNode type */
  children?: Maybe<HierarchicalContentNodeToContentNodeChildrenConnection>;
  /** @deprecated Deprecated in favor of using Next.js pages */
  conditionalTags?: Maybe<ConditionalTags>;
  /** Connection between the ContentNode type and the ContentType type */
  contentType?: Maybe<ContentNodeToContentTypeConnectionEdge>;
  /** The name of the Content Type the node belongs to */
  contentTypeName: Scalars['String'];
  /** The unique identifier stored in the database */
  databaseId: Scalars['Int'];
  /** Post publishing date. */
  date?: Maybe<Scalars['String']>;
  /** The publishing date set in GMT. */
  dateGmt?: Maybe<Scalars['String']>;
  /** Description of the image (stored as post_content) */
  description?: Maybe<Scalars['String']>;
  /** The desired slug of the post */
  desiredSlug?: Maybe<Scalars['String']>;
  /** If a user has edited the node within the past 15 seconds, this will return the user that last edited. Null if the edit lock doesn&#039;t exist or is greater than 15 seconds */
  editingLockedBy?: Maybe<ContentNodeToEditLockConnectionEdge>;
  /** The RSS enclosure for the object */
  enclosure?: Maybe<Scalars['String']>;
  /** Connection between the ContentNode type and the EnqueuedScript type */
  enqueuedScripts?: Maybe<ContentNodeToEnqueuedScriptConnection>;
  /** Connection between the ContentNode type and the EnqueuedStylesheet type */
  enqueuedStylesheets?: Maybe<ContentNodeToEnqueuedStylesheetConnection>;
  /** The filesize in bytes of the resource */
  fileSize?: Maybe<Scalars['Int']>;
  /** The global unique identifier for this post. This currently matches the value stored in WP_Post-&gt;guid and the guid column in the &quot;post_objects&quot; database table. */
  guid?: Maybe<Scalars['String']>;
  /** The globally unique identifier of the attachment object. */
  id: Scalars['ID'];
  /** Whether the node is a Content Node */
  isContentNode: Scalars['Boolean'];
  /** Whether the object is a node in the preview state */
  isPreview?: Maybe<Scalars['Boolean']>;
  /** Whether the object is restricted from the current viewer */
  isRestricted?: Maybe<Scalars['Boolean']>;
  /** Whether the node is a Term */
  isTermNode: Scalars['Boolean'];
  /** The user that most recently edited the node */
  lastEditedBy?: Maybe<ContentNodeToEditLastConnectionEdge>;
  /** The permalink of the post */
  link?: Maybe<Scalars['String']>;
  /** Details about the mediaItem */
  mediaDetails?: Maybe<MediaDetails>;
  /**
   * The id field matches the WP_Post-&gt;ID field.
   * @deprecated Deprecated in favor of the databaseId field
   */
  mediaItemId: Scalars['Int'];
  /** Url of the mediaItem */
  mediaItemUrl?: Maybe<Scalars['String']>;
  /** Type of resource */
  mediaType?: Maybe<Scalars['String']>;
  /** The mime type of the mediaItem */
  mimeType?: Maybe<Scalars['String']>;
  /** The local modified time for a post. If a post was recently updated the modified field will change to match the corresponding time. */
  modified?: Maybe<Scalars['String']>;
  /** The GMT modified time for a post. If a post was recently updated the modified field will change to match the corresponding time in GMT. */
  modifiedGmt?: Maybe<Scalars['String']>;
  /** The parent of the node. The parent object can be of various types */
  parent?: Maybe<HierarchicalContentNodeToParentContentNodeConnectionEdge>;
  /** Database id of the parent node */
  parentDatabaseId?: Maybe<Scalars['Int']>;
  /** The globally unique identifier of the parent node. */
  parentId?: Maybe<Scalars['ID']>;
  /** The database id of the preview node */
  previewRevisionDatabaseId?: Maybe<Scalars['Int']>;
  /** Whether the object is a node in the preview state */
  previewRevisionId?: Maybe<Scalars['ID']>;
  /** The sizes attribute value for an image. */
  sizes?: Maybe<Scalars['String']>;
  /** The uri slug for the post. This is equivalent to the WP_Post-&gt;post_name field and the post_name column in the database for the &quot;post_objects&quot; table. */
  slug?: Maybe<Scalars['String']>;
  /** Url of the mediaItem */
  sourceUrl?: Maybe<Scalars['String']>;
  /** The srcset attribute specifies the URL of the image to use in different situations. It is a comma separated string of urls and their widths. */
  srcSet?: Maybe<Scalars['String']>;
  /** The current status of the object */
  status?: Maybe<Scalars['String']>;
  /** The template assigned to a node of content */
  template?: Maybe<ContentTemplate>;
  templates?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** The title of the post. This is currently just the raw title. An amendment to support rendered title needs to be made. */
  title?: Maybe<Scalars['String']>;
  /** The unique resource identifier path */
  uri?: Maybe<Scalars['String']>;
};


/** The mediaItem type */
export type MediaItemAncestorsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<HierarchicalContentNodeToContentNodeAncestorsConnectionWhereArgs>;
};


/** The mediaItem type */
export type MediaItemCaptionArgs = {
  format?: InputMaybe<PostObjectFieldFormatEnum>;
};


/** The mediaItem type */
export type MediaItemChildrenArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<HierarchicalContentNodeToContentNodeChildrenConnectionWhereArgs>;
};


/** The mediaItem type */
export type MediaItemDescriptionArgs = {
  format?: InputMaybe<PostObjectFieldFormatEnum>;
};


/** The mediaItem type */
export type MediaItemEnqueuedScriptsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


/** The mediaItem type */
export type MediaItemEnqueuedStylesheetsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


/** The mediaItem type */
export type MediaItemFileSizeArgs = {
  size?: InputMaybe<MediaItemSizeEnum>;
};


/** The mediaItem type */
export type MediaItemSizesArgs = {
  size?: InputMaybe<MediaItemSizeEnum>;
};


/** The mediaItem type */
export type MediaItemSourceUrlArgs = {
  size?: InputMaybe<MediaItemSizeEnum>;
};


/** The mediaItem type */
export type MediaItemSrcSetArgs = {
  size?: InputMaybe<MediaItemSizeEnum>;
};


/** The mediaItem type */
export type MediaItemTitleArgs = {
  format?: InputMaybe<PostObjectFieldFormatEnum>;
};

/** Connection to mediaItem Nodes */
export type MediaItemConnection = {
  /** A list of edges (relational context) between RootQuery and connected mediaItem Nodes */
  edges: Array<MediaItemConnectionEdge>;
  /** A list of connected mediaItem Nodes */
  nodes: Array<MediaItem>;
  /** Information about pagination in a connection. */
  pageInfo: MediaItemConnectionPageInfo;
};

/** Edge between a Node and a connected mediaItem */
export type MediaItemConnectionEdge = {
  /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
  cursor?: Maybe<Scalars['String']>;
  /** The connected mediaItem Node */
  node: MediaItem;
};

/** Page Info on the connected MediaItemConnectionEdge */
export type MediaItemConnectionPageInfo = {
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
};

/** The Type of Identifier used to fetch a single resource. Default is ID. */
export enum MediaItemIdType {
  /** Identify a resource by the Database ID. */
  DatabaseId = 'DATABASE_ID',
  /** Identify a resource by the (hashed) Global ID. */
  Id = 'ID',
  /** Identify a resource by the slug. Available to non-hierarchcial Types where the slug is a unique identifier. */
  Slug = 'SLUG',
  /** Identify a media item by its source url */
  SourceUrl = 'SOURCE_URL',
  /** Identify a resource by the URI. */
  Uri = 'URI'
}

/** Meta connected to a MediaItem */
export type MediaItemMeta = {
  __typename?: 'MediaItemMeta';
  /** Aperture measurement of the media item. */
  aperture?: Maybe<Scalars['Float']>;
  /** Information about the camera used to create the media item. */
  camera?: Maybe<Scalars['String']>;
  /** The text string description associated with the media item. */
  caption?: Maybe<Scalars['String']>;
  /** Copyright information associated with the media item. */
  copyright?: Maybe<Scalars['String']>;
  /** The date/time when the media was created. */
  createdTimestamp?: Maybe<Scalars['Int']>;
  /** The original creator of the media item. */
  credit?: Maybe<Scalars['String']>;
  /** The focal length value of the media item. */
  focalLength?: Maybe<Scalars['Float']>;
  /** The ISO (International Organization for Standardization) value of the media item. */
  iso?: Maybe<Scalars['Int']>;
  /** List of keywords used to describe or identfy the media item. */
  keywords?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** The vertical or horizontal aspect of the media item. */
  orientation?: Maybe<Scalars['String']>;
  /** The shutter speed information of the media item. */
  shutterSpeed?: Maybe<Scalars['Float']>;
  /** A useful title for the media item. */
  title?: Maybe<Scalars['String']>;
};

/** The size of the media item object. */
export enum MediaItemSizeEnum {
  /** MediaItem with the large size */
  Large = 'LARGE',
  /** MediaItem with the medium size */
  Medium = 'MEDIUM',
  /** MediaItem with the medium_large size */
  MediumLarge = 'MEDIUM_LARGE',
  /** MediaItem with the thumbnail size */
  Thumbnail = 'THUMBNAIL',
  /** MediaItem with the 1536x1536 size */
  '1536X1536' = '_1536X1536',
  /** MediaItem with the 2048x2048 size */
  '2048X2048' = '_2048X2048'
}

/** The status of the media item object. */
export enum MediaItemStatusEnum {
  /** Objects with the auto-draft status */
  AutoDraft = 'AUTO_DRAFT',
  /** Objects with the inherit status */
  Inherit = 'INHERIT',
  /** Objects with the private status */
  Private = 'PRIVATE',
  /** Objects with the trash status */
  Trash = 'TRASH'
}

/** Details of an available size for a media item */
export type MediaSize = {
  __typename?: 'MediaSize';
  /** The filename of the referenced size */
  file?: Maybe<Scalars['String']>;
  /** The filesize of the resource */
  fileSize?: Maybe<Scalars['Int']>;
  /** The height of the referenced size */
  height?: Maybe<Scalars['String']>;
  /** The mime type of the referenced size */
  mimeType?: Maybe<Scalars['String']>;
  /** The referenced size name */
  name?: Maybe<Scalars['String']>;
  /** The url of the referenced size */
  sourceUrl?: Maybe<Scalars['String']>;
  /** The width of the referenced size */
  width?: Maybe<Scalars['String']>;
};

/** Menus are the containers for navigation items. Menus can be assigned to menu locations, which are typically registered by the active theme. */
export type Menu = DatabaseIdentifier & Node & {
  __typename?: 'Menu';
  /** The number of items in the menu */
  count?: Maybe<Scalars['Int']>;
  /** The unique identifier stored in the database */
  databaseId: Scalars['Int'];
  /** The globally unique identifier of the nav menu object. */
  id: Scalars['ID'];
  /** Whether the object is restricted from the current viewer */
  isRestricted?: Maybe<Scalars['Boolean']>;
  /** The locations a menu is assigned to */
  locations?: Maybe<Array<Maybe<MenuLocationEnum>>>;
  /**
   * WP ID of the nav menu.
   * @deprecated Deprecated in favor of the databaseId field
   */
  menuId?: Maybe<Scalars['Int']>;
  /** Connection between the Menu type and the MenuItem type */
  menuItems?: Maybe<MenuToMenuItemConnection>;
  /** Display name of the menu. Equivalent to WP_Term-&gt;name. */
  name?: Maybe<Scalars['String']>;
  /** The url friendly name of the menu. Equivalent to WP_Term-&gt;slug */
  slug?: Maybe<Scalars['String']>;
};


/** Menus are the containers for navigation items. Menus can be assigned to menu locations, which are typically registered by the active theme. */
export type MenuMenuItemsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<MenuToMenuItemConnectionWhereArgs>;
};

/** Connection to Menu Nodes */
export type MenuConnection = {
  /** A list of edges (relational context) between RootQuery and connected Menu Nodes */
  edges: Array<MenuConnectionEdge>;
  /** A list of connected Menu Nodes */
  nodes: Array<Menu>;
  /** Information about pagination in a connection. */
  pageInfo: MenuConnectionPageInfo;
};

/** Edge between a Node and a connected Menu */
export type MenuConnectionEdge = {
  /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
  cursor?: Maybe<Scalars['String']>;
  /** The connected Menu Node */
  node: Menu;
};

/** Page Info on the connected MenuConnectionEdge */
export type MenuConnectionPageInfo = {
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
};

/** Navigation menu items are the individual items assigned to a menu. These are rendered as the links in a navigation menu. */
export type MenuItem = DatabaseIdentifier & Node & {
  __typename?: 'MenuItem';
  /** Connection between the MenuItem type and the MenuItem type */
  childItems?: Maybe<MenuItemToMenuItemConnection>;
  /** Connection from MenuItem to it&#039;s connected node */
  connectedNode?: Maybe<MenuItemToMenuItemLinkableConnectionEdge>;
  /**
   * The object connected to this menu item.
   * @deprecated Deprecated in favor of the connectedNode field
   */
  connectedObject?: Maybe<MenuItemObjectUnion>;
  /** Class attribute for the menu item link */
  cssClasses?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** The unique identifier stored in the database */
  databaseId: Scalars['Int'];
  /** Description of the menu item. */
  description?: Maybe<Scalars['String']>;
  /** The globally unique identifier of the nav menu item object. */
  id: Scalars['ID'];
  /** Whether the object is restricted from the current viewer */
  isRestricted?: Maybe<Scalars['Boolean']>;
  /** Label or title of the menu item. */
  label?: Maybe<Scalars['String']>;
  /** Link relationship (XFN) of the menu item. */
  linkRelationship?: Maybe<Scalars['String']>;
  /** The locations the menu item&#039;s Menu is assigned to */
  locations?: Maybe<Array<Maybe<MenuLocationEnum>>>;
  /** The Menu a MenuItem is part of */
  menu?: Maybe<MenuItemToMenuConnectionEdge>;
  /**
   * WP ID of the menu item.
   * @deprecated Deprecated in favor of the databaseId field
   */
  menuItemId?: Maybe<Scalars['Int']>;
  /** Menu item order */
  order?: Maybe<Scalars['Int']>;
  /** The database id of the parent menu item or null if it is the root */
  parentDatabaseId?: Maybe<Scalars['Int']>;
  /** The globally unique identifier of the parent nav menu item object. */
  parentId?: Maybe<Scalars['ID']>;
  /** Path for the resource. Relative path for internal resources. Absolute path for external resources. */
  path?: Maybe<Scalars['String']>;
  /** Target attribute for the menu item link. */
  target?: Maybe<Scalars['String']>;
  /** Title attribute for the menu item link */
  title?: Maybe<Scalars['String']>;
  /** The uri of the resource the menu item links to */
  uri?: Maybe<Scalars['String']>;
  /** URL or destination of the menu item. */
  url?: Maybe<Scalars['String']>;
};


/** Navigation menu items are the individual items assigned to a menu. These are rendered as the links in a navigation menu. */
export type MenuItemChildItemsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<MenuItemToMenuItemConnectionWhereArgs>;
};

/** Connection to MenuItem Nodes */
export type MenuItemConnection = {
  /** A list of edges (relational context) between RootQuery and connected MenuItem Nodes */
  edges: Array<MenuItemConnectionEdge>;
  /** A list of connected MenuItem Nodes */
  nodes: Array<MenuItem>;
  /** Information about pagination in a connection. */
  pageInfo: MenuItemConnectionPageInfo;
};

/** Edge between a Node and a connected MenuItem */
export type MenuItemConnectionEdge = {
  /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
  cursor?: Maybe<Scalars['String']>;
  /** The connected MenuItem Node */
  node: MenuItem;
};

/** Page Info on the connected MenuItemConnectionEdge */
export type MenuItemConnectionPageInfo = {
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
};

/** Nodes that can be linked to as Menu Items */
export type MenuItemLinkable = {
  /** @deprecated Deprecated in favor of using Next.js pages */
  conditionalTags?: Maybe<ConditionalTags>;
  /** The unique identifier stored in the database */
  databaseId: Scalars['Int'];
  /** The unique resource identifier path */
  id: Scalars['ID'];
  /** Whether the node is a Content Node */
  isContentNode: Scalars['Boolean'];
  /** Whether the node is a Term */
  isTermNode: Scalars['Boolean'];
  templates?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** The unique resource identifier path */
  uri?: Maybe<Scalars['String']>;
};

/** Edge between a Node and a connected MenuItemLinkable */
export type MenuItemLinkableConnectionEdge = {
  /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
  cursor?: Maybe<Scalars['String']>;
  /** The connected MenuItemLinkable Node */
  node: MenuItemLinkable;
};

/** The Type of Identifier used to fetch a single node. Default is "ID". To be used along with the "id" field. */
export enum MenuItemNodeIdTypeEnum {
  /** Identify a resource by the Database ID. */
  DatabaseId = 'DATABASE_ID',
  /** Identify a resource by the (hashed) Global ID. */
  Id = 'ID'
}

/** Deprecated in favor of MenuItemLinkeable Interface */
export type MenuItemObjectUnion = Category | Explanation | HowToGuide | Page | Post | Reference | Tag | Tutorial;

/** Connection between the MenuItem type and the Menu type */
export type MenuItemToMenuConnectionEdge = Edge & MenuConnectionEdge & OneToOneConnection & {
  __typename?: 'MenuItemToMenuConnectionEdge';
  /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
  cursor?: Maybe<Scalars['String']>;
  /** The node of the connection, without the edges */
  node: Menu;
};

/** Connection between the MenuItem type and the MenuItem type */
export type MenuItemToMenuItemConnection = Connection & MenuItemConnection & {
  __typename?: 'MenuItemToMenuItemConnection';
  /** Edges for the MenuItemToMenuItemConnection connection */
  edges: Array<MenuItemToMenuItemConnectionEdge>;
  /** The nodes of the connection, without the edges */
  nodes: Array<MenuItem>;
  /** Information about pagination in a connection. */
  pageInfo: MenuItemToMenuItemConnectionPageInfo;
};

/** An edge in a connection */
export type MenuItemToMenuItemConnectionEdge = Edge & MenuItemConnectionEdge & {
  __typename?: 'MenuItemToMenuItemConnectionEdge';
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node: MenuItem;
};

/** Page Info on the &quot;MenuItemToMenuItemConnection&quot; */
export type MenuItemToMenuItemConnectionPageInfo = MenuItemConnectionPageInfo & PageInfo & WpPageInfo & {
  __typename?: 'MenuItemToMenuItemConnectionPageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
};

/** Arguments for filtering the MenuItemToMenuItemConnection connection */
export type MenuItemToMenuItemConnectionWhereArgs = {
  /** The database ID of the object */
  id?: InputMaybe<Scalars['Int']>;
  /** The menu location for the menu being queried */
  location?: InputMaybe<MenuLocationEnum>;
  /** The database ID of the parent menu object */
  parentDatabaseId?: InputMaybe<Scalars['Int']>;
  /** The ID of the parent menu object */
  parentId?: InputMaybe<Scalars['ID']>;
};

/** Connection between the MenuItem type and the MenuItemLinkable type */
export type MenuItemToMenuItemLinkableConnectionEdge = Edge & MenuItemLinkableConnectionEdge & OneToOneConnection & {
  __typename?: 'MenuItemToMenuItemLinkableConnectionEdge';
  /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
  cursor?: Maybe<Scalars['String']>;
  /** The node of the connection, without the edges */
  node: MenuItemLinkable;
};

/** Registered menu locations */
export enum MenuLocationEnum {
  /** Put the menu in the docs-sidebar location */
  DocsSidebar = 'DOCS_SIDEBAR',
  /** Put the menu in the footer location */
  Footer = 'FOOTER',
  /** Put the menu in the primary location */
  Primary = 'PRIMARY',
  /** Put the menu in the secondary location */
  Secondary = 'SECONDARY'
}

/** The Type of Identifier used to fetch a single node. Default is "ID". To be used along with the "id" field. */
export enum MenuNodeIdTypeEnum {
  /** Identify a menu node by the Database ID. */
  DatabaseId = 'DATABASE_ID',
  /** Identify a menu node by the (hashed) Global ID. */
  Id = 'ID',
  /** Identify a menu node by the slug of menu location to which it is assigned */
  Location = 'LOCATION',
  /** Identify a menu node by its name */
  Name = 'NAME',
  /** Identify a menu node by its slug */
  Slug = 'SLUG'
}

/** Connection between the Menu type and the MenuItem type */
export type MenuToMenuItemConnection = Connection & MenuItemConnection & {
  __typename?: 'MenuToMenuItemConnection';
  /** Edges for the MenuToMenuItemConnection connection */
  edges: Array<MenuToMenuItemConnectionEdge>;
  /** The nodes of the connection, without the edges */
  nodes: Array<MenuItem>;
  /** Information about pagination in a connection. */
  pageInfo: MenuToMenuItemConnectionPageInfo;
};

/** An edge in a connection */
export type MenuToMenuItemConnectionEdge = Edge & MenuItemConnectionEdge & {
  __typename?: 'MenuToMenuItemConnectionEdge';
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node: MenuItem;
};

/** Page Info on the &quot;MenuToMenuItemConnection&quot; */
export type MenuToMenuItemConnectionPageInfo = MenuItemConnectionPageInfo & PageInfo & WpPageInfo & {
  __typename?: 'MenuToMenuItemConnectionPageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
};

/** Arguments for filtering the MenuToMenuItemConnection connection */
export type MenuToMenuItemConnectionWhereArgs = {
  /** The database ID of the object */
  id?: InputMaybe<Scalars['Int']>;
  /** The menu location for the menu being queried */
  location?: InputMaybe<MenuLocationEnum>;
  /** The database ID of the parent menu object */
  parentDatabaseId?: InputMaybe<Scalars['Int']>;
  /** The ID of the parent menu object */
  parentId?: InputMaybe<Scalars['ID']>;
};

/** The MimeType of the object */
export enum MimeTypeEnum {
  /** MimeType application/msword */
  ApplicationMsword = 'APPLICATION_MSWORD',
  /** MimeType application/pdf */
  ApplicationPdf = 'APPLICATION_PDF',
  /** MimeType application/vnd.apple.keynote */
  ApplicationVndAppleKeynote = 'APPLICATION_VND_APPLE_KEYNOTE',
  /** MimeType application/vnd.ms-excel */
  ApplicationVndMsExcel = 'APPLICATION_VND_MS_EXCEL',
  /** MimeType application/vnd.ms-excel.sheet.binary.macroEnabled.12 */
  ApplicationVndMsExcelSheetBinaryMacroenabled_12 = 'APPLICATION_VND_MS_EXCEL_SHEET_BINARY_MACROENABLED_12',
  /** MimeType application/vnd.ms-excel.sheet.macroEnabled.12 */
  ApplicationVndMsExcelSheetMacroenabled_12 = 'APPLICATION_VND_MS_EXCEL_SHEET_MACROENABLED_12',
  /** MimeType application/vnd.ms-powerpoint */
  ApplicationVndMsPowerpoint = 'APPLICATION_VND_MS_POWERPOINT',
  /** MimeType application/vnd.ms-powerpoint.presentation.macroEnabled.12 */
  ApplicationVndMsPowerpointPresentationMacroenabled_12 = 'APPLICATION_VND_MS_POWERPOINT_PRESENTATION_MACROENABLED_12',
  /** MimeType application/vnd.ms-powerpoint.slideshow.macroEnabled.12 */
  ApplicationVndMsPowerpointSlideshowMacroenabled_12 = 'APPLICATION_VND_MS_POWERPOINT_SLIDESHOW_MACROENABLED_12',
  /** MimeType application/vnd.ms-word.document.macroEnabled.12 */
  ApplicationVndMsWordDocumentMacroenabled_12 = 'APPLICATION_VND_MS_WORD_DOCUMENT_MACROENABLED_12',
  /** MimeType application/vnd.oasis.opendocument.text */
  ApplicationVndOasisOpendocumentText = 'APPLICATION_VND_OASIS_OPENDOCUMENT_TEXT',
  /** MimeType application/vnd.openxmlformats-officedocument.presentationml.presentation */
  ApplicationVndOpenxmlformatsOfficedocumentPresentationmlPresentation = 'APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_PRESENTATIONML_PRESENTATION',
  /** MimeType application/vnd.openxmlformats-officedocument.presentationml.slideshow */
  ApplicationVndOpenxmlformatsOfficedocumentPresentationmlSlideshow = 'APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_PRESENTATIONML_SLIDESHOW',
  /** MimeType application/vnd.openxmlformats-officedocument.spreadsheetml.sheet */
  ApplicationVndOpenxmlformatsOfficedocumentSpreadsheetmlSheet = 'APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_SPREADSHEETML_SHEET',
  /** MimeType application/vnd.openxmlformats-officedocument.wordprocessingml.document */
  ApplicationVndOpenxmlformatsOfficedocumentWordprocessingmlDocument = 'APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_WORDPROCESSINGML_DOCUMENT',
  /** MimeType audio/midi */
  AudioMidi = 'AUDIO_MIDI',
  /** MimeType audio/mpeg */
  AudioMpeg = 'AUDIO_MPEG',
  /** MimeType audio/ogg */
  AudioOgg = 'AUDIO_OGG',
  /** MimeType audio/wav */
  AudioWav = 'AUDIO_WAV',
  /** MimeType audio/x-ms-wma */
  AudioXMsWma = 'AUDIO_X_MS_WMA',
  /** MimeType image/gif */
  ImageGif = 'IMAGE_GIF',
  /** MimeType image/jpeg */
  ImageJpeg = 'IMAGE_JPEG',
  /** MimeType image/png */
  ImagePng = 'IMAGE_PNG',
  /** MimeType video/3gpp */
  Video_3Gpp = 'VIDEO_3GPP',
  /** MimeType video/3gpp2 */
  Video_3Gpp2 = 'VIDEO_3GPP2',
  /** MimeType video/avi */
  VideoAvi = 'VIDEO_AVI',
  /** MimeType video/mp4 */
  VideoMp4 = 'VIDEO_MP4',
  /** MimeType video/mpeg */
  VideoMpeg = 'VIDEO_MPEG',
  /** MimeType video/ogg */
  VideoOgg = 'VIDEO_OGG',
  /** MimeType video/quicktime */
  VideoQuicktime = 'VIDEO_QUICKTIME',
  /** MimeType video/webm */
  VideoWebm = 'VIDEO_WEBM',
  /** MimeType video/x-flv */
  VideoXFlv = 'VIDEO_X_FLV',
  /** MimeType video/x-ms-wmv */
  VideoXMsWmv = 'VIDEO_X_MS_WMV'
}

/** An object with an ID */
export type Node = {
  /** The globally unique ID for the object */
  id: Scalars['ID'];
};

/** A node that can have an author assigned to it */
export type NodeWithAuthor = {
  /** Connection between the NodeWithAuthor type and the User type */
  author?: Maybe<NodeWithAuthorToUserConnectionEdge>;
  /** The database identifier of the author of the node */
  authorDatabaseId?: Maybe<Scalars['Int']>;
  /** The globally unique identifier of the author of the node */
  authorId?: Maybe<Scalars['ID']>;
  /** The globally unique ID for the object */
  id: Scalars['ID'];
};

/** Connection between the NodeWithAuthor type and the User type */
export type NodeWithAuthorToUserConnectionEdge = Edge & OneToOneConnection & UserConnectionEdge & {
  __typename?: 'NodeWithAuthorToUserConnectionEdge';
  /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
  cursor?: Maybe<Scalars['String']>;
  /** The node of the connection, without the edges */
  node: User;
};

/** A node that supports the content editor */
export type NodeWithContentEditor = {
  /** The content of the post. */
  content?: Maybe<Scalars['String']>;
  /** The globally unique ID for the object */
  id: Scalars['ID'];
};


/** A node that supports the content editor */
export type NodeWithContentEditorContentArgs = {
  format?: InputMaybe<PostObjectFieldFormatEnum>;
};

/** Node that has content blocks associated with it */
export type NodeWithEditorBlocks = {
  /** List of editor blocks */
  editorBlocks?: Maybe<Array<Maybe<EditorBlock>>>;
};


/** Node that has content blocks associated with it */
export type NodeWithEditorBlocksEditorBlocksArgs = {
  flat?: InputMaybe<Scalars['Boolean']>;
};

/** A node that can have an excerpt */
export type NodeWithExcerpt = {
  /** The excerpt of the post. */
  excerpt?: Maybe<Scalars['String']>;
  /** The globally unique ID for the object */
  id: Scalars['ID'];
};


/** A node that can have an excerpt */
export type NodeWithExcerptExcerptArgs = {
  format?: InputMaybe<PostObjectFieldFormatEnum>;
};

/** Node that has FaustExplanation content blocks associated with it */
export type NodeWithFaustExplanationEditorBlocks = {
  /** List of FaustExplanation editor blocks */
  editorBlocks?: Maybe<Array<Maybe<FaustExplanationEditorBlock>>>;
};


/** Node that has FaustExplanation content blocks associated with it */
export type NodeWithFaustExplanationEditorBlocksEditorBlocksArgs = {
  flat?: InputMaybe<Scalars['Boolean']>;
};

/** Node that has FaustHowToGuide content blocks associated with it */
export type NodeWithFaustHowToGuideEditorBlocks = {
  /** List of FaustHowToGuide editor blocks */
  editorBlocks?: Maybe<Array<Maybe<FaustHowToGuideEditorBlock>>>;
};


/** Node that has FaustHowToGuide content blocks associated with it */
export type NodeWithFaustHowToGuideEditorBlocksEditorBlocksArgs = {
  flat?: InputMaybe<Scalars['Boolean']>;
};

/** Node that has FaustReference content blocks associated with it */
export type NodeWithFaustReferenceEditorBlocks = {
  /** List of FaustReference editor blocks */
  editorBlocks?: Maybe<Array<Maybe<FaustReferenceEditorBlock>>>;
};


/** Node that has FaustReference content blocks associated with it */
export type NodeWithFaustReferenceEditorBlocksEditorBlocksArgs = {
  flat?: InputMaybe<Scalars['Boolean']>;
};

/** Node that has FaustTutorial content blocks associated with it */
export type NodeWithFaustTutorialEditorBlocks = {
  /** List of FaustTutorial editor blocks */
  editorBlocks?: Maybe<Array<Maybe<FaustTutorialEditorBlock>>>;
};


/** Node that has FaustTutorial content blocks associated with it */
export type NodeWithFaustTutorialEditorBlocksEditorBlocksArgs = {
  flat?: InputMaybe<Scalars['Boolean']>;
};

/** A node that can have a featured image set */
export type NodeWithFeaturedImage = {
  /** Connection between the NodeWithFeaturedImage type and the MediaItem type */
  featuredImage?: Maybe<NodeWithFeaturedImageToMediaItemConnectionEdge>;
  /** The database identifier for the featured image node assigned to the content node */
  featuredImageDatabaseId?: Maybe<Scalars['Int']>;
  /** Globally unique ID of the featured image assigned to the node */
  featuredImageId?: Maybe<Scalars['ID']>;
  /** The globally unique ID for the object */
  id: Scalars['ID'];
};

/** Connection between the NodeWithFeaturedImage type and the MediaItem type */
export type NodeWithFeaturedImageToMediaItemConnectionEdge = Edge & MediaItemConnectionEdge & OneToOneConnection & {
  __typename?: 'NodeWithFeaturedImageToMediaItemConnectionEdge';
  /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
  cursor?: Maybe<Scalars['String']>;
  /** The node of the connection, without the edges */
  node: MediaItem;
};

/** A node that can have page attributes */
export type NodeWithPageAttributes = {
  /** The globally unique ID for the object */
  id: Scalars['ID'];
  /** A field used for ordering posts. This is typically used with nav menu items or for special ordering of hierarchical content types. */
  menuOrder?: Maybe<Scalars['Int']>;
};

/** Node that has Page content blocks associated with it */
export type NodeWithPageEditorBlocks = {
  /** List of Page editor blocks */
  editorBlocks?: Maybe<Array<Maybe<PageEditorBlock>>>;
};


/** Node that has Page content blocks associated with it */
export type NodeWithPageEditorBlocksEditorBlocksArgs = {
  flat?: InputMaybe<Scalars['Boolean']>;
};

/** Node that has Post content blocks associated with it */
export type NodeWithPostEditorBlocks = {
  /** List of Post editor blocks */
  editorBlocks?: Maybe<Array<Maybe<PostEditorBlock>>>;
};


/** Node that has Post content blocks associated with it */
export type NodeWithPostEditorBlocksEditorBlocksArgs = {
  flat?: InputMaybe<Scalars['Boolean']>;
};

/** A node that can have revisions */
export type NodeWithRevisions = {
  /** The globally unique ID for the object */
  id: Scalars['ID'];
  /** True if the node is a revision of another node */
  isRevision?: Maybe<Scalars['Boolean']>;
  /** If the current node is a revision, this field exposes the node this is a revision of. Returns null if the node is not a revision of another node. */
  revisionOf?: Maybe<NodeWithRevisionsToContentNodeConnectionEdge>;
};

/** Connection between the NodeWithRevisions type and the ContentNode type */
export type NodeWithRevisionsToContentNodeConnectionEdge = ContentNodeConnectionEdge & Edge & OneToOneConnection & {
  __typename?: 'NodeWithRevisionsToContentNodeConnectionEdge';
  /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
  cursor?: Maybe<Scalars['String']>;
  /** The node of the connection, without the edges */
  node: ContentNode;
};

/** A node that can have a template associated with it */
export type NodeWithTemplate = {
  /** The globally unique ID for the object */
  id: Scalars['ID'];
  /** The template assigned to the node */
  template?: Maybe<ContentTemplate>;
};

/** A node that NodeWith a title */
export type NodeWithTitle = {
  /** The globally unique ID for the object */
  id: Scalars['ID'];
  /** The title of the post. This is currently just the raw title. An amendment to support rendered title needs to be made. */
  title?: Maybe<Scalars['String']>;
};


/** A node that NodeWith a title */
export type NodeWithTitleTitleArgs = {
  format?: InputMaybe<PostObjectFieldFormatEnum>;
};

/** A singular connection from one Node to another, with support for relational data on the &quot;edge&quot; of the connection. */
export type OneToOneConnection = {
  /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
  cursor?: Maybe<Scalars['String']>;
  /** The connected node */
  node: Node;
};

/** The cardinality of the connection order */
export enum OrderEnum {
  /** Sort the query result set in an ascending order */
  Asc = 'ASC',
  /** Sort the query result set in a descending order */
  Desc = 'DESC'
}

/** The page type */
export type Page = ContentNode & DatabaseIdentifier & HierarchicalContentNode & HierarchicalNode & MenuItemLinkable & Node & NodeWithAuthor & NodeWithContentEditor & NodeWithEditorBlocks & NodeWithFeaturedImage & NodeWithPageAttributes & NodeWithPageEditorBlocks & NodeWithRevisions & NodeWithTemplate & NodeWithTitle & Previewable & UniformResourceIdentifiable & {
  __typename?: 'Page';
  /** Returns ancestors of the node. Default ordered as lowest (closest to the child) to highest (closest to the root). */
  ancestors?: Maybe<HierarchicalContentNodeToContentNodeAncestorsConnection>;
  /** Connection between the NodeWithAuthor type and the User type */
  author?: Maybe<NodeWithAuthorToUserConnectionEdge>;
  /** The database identifier of the author of the node */
  authorDatabaseId?: Maybe<Scalars['Int']>;
  /** The globally unique identifier of the author of the node */
  authorId?: Maybe<Scalars['ID']>;
  /** Connection between the HierarchicalContentNode type and the ContentNode type */
  children?: Maybe<HierarchicalContentNodeToContentNodeChildrenConnection>;
  /** @deprecated Deprecated in favor of using Next.js pages */
  conditionalTags?: Maybe<ConditionalTags>;
  /** The content of the post. */
  content?: Maybe<Scalars['String']>;
  /** Connection between the ContentNode type and the ContentType type */
  contentType?: Maybe<ContentNodeToContentTypeConnectionEdge>;
  /** The name of the Content Type the node belongs to */
  contentTypeName: Scalars['String'];
  /** The unique identifier stored in the database */
  databaseId: Scalars['Int'];
  /** Post publishing date. */
  date?: Maybe<Scalars['String']>;
  /** The publishing date set in GMT. */
  dateGmt?: Maybe<Scalars['String']>;
  /** The desired slug of the post */
  desiredSlug?: Maybe<Scalars['String']>;
  /** If a user has edited the node within the past 15 seconds, this will return the user that last edited. Null if the edit lock doesn&#039;t exist or is greater than 15 seconds */
  editingLockedBy?: Maybe<ContentNodeToEditLockConnectionEdge>;
  /** List of Page editor blocks */
  editorBlocks?: Maybe<Array<Maybe<PageEditorBlock>>>;
  /** The RSS enclosure for the object */
  enclosure?: Maybe<Scalars['String']>;
  /** Connection between the ContentNode type and the EnqueuedScript type */
  enqueuedScripts?: Maybe<ContentNodeToEnqueuedScriptConnection>;
  /** Connection between the ContentNode type and the EnqueuedStylesheet type */
  enqueuedStylesheets?: Maybe<ContentNodeToEnqueuedStylesheetConnection>;
  /** Connection between the NodeWithFeaturedImage type and the MediaItem type */
  featuredImage?: Maybe<NodeWithFeaturedImageToMediaItemConnectionEdge>;
  /** The database identifier for the featured image node assigned to the content node */
  featuredImageDatabaseId?: Maybe<Scalars['Int']>;
  /** Globally unique ID of the featured image assigned to the node */
  featuredImageId?: Maybe<Scalars['ID']>;
  /** The global unique identifier for this post. This currently matches the value stored in WP_Post-&gt;guid and the guid column in the &quot;post_objects&quot; database table. */
  guid?: Maybe<Scalars['String']>;
  /** The globally unique identifier of the page object. */
  id: Scalars['ID'];
  /** Whether the node is a Content Node */
  isContentNode: Scalars['Boolean'];
  /** Whether this page is set to the static front page. */
  isFrontPage: Scalars['Boolean'];
  /** Whether this page is set to the blog posts page. */
  isPostsPage: Scalars['Boolean'];
  /** Whether the object is a node in the preview state */
  isPreview?: Maybe<Scalars['Boolean']>;
  /** Whether this page is set to the privacy page. */
  isPrivacyPage: Scalars['Boolean'];
  /** Whether the object is restricted from the current viewer */
  isRestricted?: Maybe<Scalars['Boolean']>;
  /** True if the node is a revision of another node */
  isRevision?: Maybe<Scalars['Boolean']>;
  /** Whether the node is a Term */
  isTermNode: Scalars['Boolean'];
  /** The user that most recently edited the node */
  lastEditedBy?: Maybe<ContentNodeToEditLastConnectionEdge>;
  /** The permalink of the post */
  link?: Maybe<Scalars['String']>;
  /** A field used for ordering posts. This is typically used with nav menu items or for special ordering of hierarchical content types. */
  menuOrder?: Maybe<Scalars['Int']>;
  /** The local modified time for a post. If a post was recently updated the modified field will change to match the corresponding time. */
  modified?: Maybe<Scalars['String']>;
  /** The GMT modified time for a post. If a post was recently updated the modified field will change to match the corresponding time in GMT. */
  modifiedGmt?: Maybe<Scalars['String']>;
  /**
   * The id field matches the WP_Post-&gt;ID field.
   * @deprecated Deprecated in favor of the databaseId field
   */
  pageId: Scalars['Int'];
  /** The parent of the node. The parent object can be of various types */
  parent?: Maybe<HierarchicalContentNodeToParentContentNodeConnectionEdge>;
  /** Database id of the parent node */
  parentDatabaseId?: Maybe<Scalars['Int']>;
  /** The globally unique identifier of the parent node. */
  parentId?: Maybe<Scalars['ID']>;
  /** Connection between the Page type and the page type */
  preview?: Maybe<PageToPreviewConnectionEdge>;
  /** The database id of the preview node */
  previewRevisionDatabaseId?: Maybe<Scalars['Int']>;
  /** Whether the object is a node in the preview state */
  previewRevisionId?: Maybe<Scalars['ID']>;
  /** If the current node is a revision, this field exposes the node this is a revision of. Returns null if the node is not a revision of another node. */
  revisionOf?: Maybe<NodeWithRevisionsToContentNodeConnectionEdge>;
  /** Connection between the Page type and the page type */
  revisions?: Maybe<PageToRevisionConnection>;
  /** The uri slug for the post. This is equivalent to the WP_Post-&gt;post_name field and the post_name column in the database for the &quot;post_objects&quot; table. */
  slug?: Maybe<Scalars['String']>;
  /** The current status of the object */
  status?: Maybe<Scalars['String']>;
  /** The template assigned to a node of content */
  template?: Maybe<ContentTemplate>;
  templates?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** The title of the post. This is currently just the raw title. An amendment to support rendered title needs to be made. */
  title?: Maybe<Scalars['String']>;
  /** The unique resource identifier path */
  uri?: Maybe<Scalars['String']>;
};


/** The page type */
export type PageAncestorsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<HierarchicalContentNodeToContentNodeAncestorsConnectionWhereArgs>;
};


/** The page type */
export type PageChildrenArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<HierarchicalContentNodeToContentNodeChildrenConnectionWhereArgs>;
};


/** The page type */
export type PageContentArgs = {
  format?: InputMaybe<PostObjectFieldFormatEnum>;
};


/** The page type */
export type PageEditorBlocksArgs = {
  flat?: InputMaybe<Scalars['Boolean']>;
};


/** The page type */
export type PageEnqueuedScriptsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


/** The page type */
export type PageEnqueuedStylesheetsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


/** The page type */
export type PageRevisionsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PageToRevisionConnectionWhereArgs>;
};


/** The page type */
export type PageTitleArgs = {
  format?: InputMaybe<PostObjectFieldFormatEnum>;
};

/** Connection to page Nodes */
export type PageConnection = {
  /** A list of edges (relational context) between RootQuery and connected page Nodes */
  edges: Array<PageConnectionEdge>;
  /** A list of connected page Nodes */
  nodes: Array<Page>;
  /** Information about pagination in a connection. */
  pageInfo: PageConnectionPageInfo;
};

/** Edge between a Node and a connected page */
export type PageConnectionEdge = {
  /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
  cursor?: Maybe<Scalars['String']>;
  /** The connected page Node */
  node: Page;
};

/** Page Info on the connected PageConnectionEdge */
export type PageConnectionPageInfo = {
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
};

export type PageEditorBlock = {
  /** The API version of the Gutenberg Block */
  apiVersion?: Maybe<Scalars['Int']>;
  /** The name of the category the Block belongs to */
  blockEditorCategoryName?: Maybe<Scalars['String']>;
  /** The id of the Block */
  clientId?: Maybe<Scalars['String']>;
  /** CSS Classnames to apply to the block */
  cssClassNames?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** The inner blocks of the Block */
  innerBlocks?: Maybe<Array<Maybe<EditorBlock>>>;
  /** Whether the block is Dynamic (server rendered) */
  isDynamic: Scalars['Boolean'];
  /** The name of the Block */
  name?: Maybe<Scalars['String']>;
  /** The parent id of the Block */
  parentClientId?: Maybe<Scalars['String']>;
  /** The rendered HTML for the block */
  renderedHtml?: Maybe<Scalars['String']>;
};

/** The Type of Identifier used to fetch a single resource. Default is ID. */
export enum PageIdType {
  /** Identify a resource by the Database ID. */
  DatabaseId = 'DATABASE_ID',
  /** Identify a resource by the (hashed) Global ID. */
  Id = 'ID',
  /** Identify a resource by the URI. */
  Uri = 'URI'
}

/** Information about pagination in a connection. */
export type PageInfo = {
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
};

/** Connection between the Page type and the page type */
export type PageToPreviewConnectionEdge = Edge & OneToOneConnection & PageConnectionEdge & {
  __typename?: 'PageToPreviewConnectionEdge';
  /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
  cursor?: Maybe<Scalars['String']>;
  /** The node of the connection, without the edges */
  node: Page;
};

/** Connection between the Page type and the page type */
export type PageToRevisionConnection = Connection & PageConnection & {
  __typename?: 'PageToRevisionConnection';
  /** Edges for the PageToRevisionConnection connection */
  edges: Array<PageToRevisionConnectionEdge>;
  /** The nodes of the connection, without the edges */
  nodes: Array<Page>;
  /** Information about pagination in a connection. */
  pageInfo: PageToRevisionConnectionPageInfo;
};

/** An edge in a connection */
export type PageToRevisionConnectionEdge = Edge & PageConnectionEdge & {
  __typename?: 'PageToRevisionConnectionEdge';
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node: Page;
};

/** Page Info on the &quot;PageToRevisionConnection&quot; */
export type PageToRevisionConnectionPageInfo = PageConnectionPageInfo & PageInfo & WpPageInfo & {
  __typename?: 'PageToRevisionConnectionPageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
};

/** Arguments for filtering the PageToRevisionConnection connection */
export type PageToRevisionConnectionWhereArgs = {
  /** The user that's connected as the author of the object. Use the userId for the author object. */
  author?: InputMaybe<Scalars['Int']>;
  /** Find objects connected to author(s) in the array of author's userIds */
  authorIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Find objects connected to the author by the author's nicename */
  authorName?: InputMaybe<Scalars['String']>;
  /** Find objects NOT connected to author(s) in the array of author's userIds */
  authorNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Filter the connection based on dates */
  dateQuery?: InputMaybe<DateQueryInput>;
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword?: InputMaybe<Scalars['Boolean']>;
  /** Specific database ID of the object */
  id?: InputMaybe<Scalars['Int']>;
  /** Array of IDs for the objects to retrieve */
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Get objects with a specific mimeType property */
  mimeType?: InputMaybe<MimeTypeEnum>;
  /** Slug / post_name of the object */
  name?: InputMaybe<Scalars['String']>;
  /** Specify objects to retrieve. Use slugs */
  nameIn?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** What paramater to use to order the objects by. */
  orderby?: InputMaybe<Array<InputMaybe<PostObjectsConnectionOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: InputMaybe<Scalars['ID']>;
  /** Specify objects whose parent is in an array */
  parentIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Specify posts whose parent is not in an array */
  parentNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Show posts with a specific password. */
  password?: InputMaybe<Scalars['String']>;
  /** Show Posts based on a keyword search */
  search?: InputMaybe<Scalars['String']>;
  /** Retrieve posts where post status is in an array. */
  stati?: InputMaybe<Array<InputMaybe<PostStatusEnum>>>;
  /** Show posts with a specific status. */
  status?: InputMaybe<PostStatusEnum>;
  /** Title of the object */
  title?: InputMaybe<Scalars['String']>;
};

/** An plugin object */
export type Plugin = Node & {
  __typename?: 'Plugin';
  /** Name of the plugin author(s), may also be a company name. */
  author?: Maybe<Scalars['String']>;
  /** URI for the related author(s)/company website. */
  authorUri?: Maybe<Scalars['String']>;
  /** Description of the plugin. */
  description?: Maybe<Scalars['String']>;
  /** The globally unique identifier of the plugin object. */
  id: Scalars['ID'];
  /** Whether the object is restricted from the current viewer */
  isRestricted?: Maybe<Scalars['Boolean']>;
  /** Display name of the plugin. */
  name?: Maybe<Scalars['String']>;
  /** Plugin path. */
  path?: Maybe<Scalars['String']>;
  /** URI for the plugin website. This is useful for directing users for support requests etc. */
  pluginUri?: Maybe<Scalars['String']>;
  /** Current version of the plugin. */
  version?: Maybe<Scalars['String']>;
};

/** Connection to Plugin Nodes */
export type PluginConnection = {
  /** A list of edges (relational context) between RootQuery and connected Plugin Nodes */
  edges: Array<PluginConnectionEdge>;
  /** A list of connected Plugin Nodes */
  nodes: Array<Plugin>;
  /** Information about pagination in a connection. */
  pageInfo: PluginConnectionPageInfo;
};

/** Edge between a Node and a connected Plugin */
export type PluginConnectionEdge = {
  /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
  cursor?: Maybe<Scalars['String']>;
  /** The connected Plugin Node */
  node: Plugin;
};

/** Page Info on the connected PluginConnectionEdge */
export type PluginConnectionPageInfo = {
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
};

/** The status of the WordPress plugin. */
export enum PluginStatusEnum {
  /** The plugin is currently active. */
  Active = 'ACTIVE',
  /** The plugin is a drop-in plugin. */
  DropIn = 'DROP_IN',
  /** The plugin is currently inactive. */
  Inactive = 'INACTIVE',
  /** The plugin is a must-use plugin. */
  MustUse = 'MUST_USE',
  /** The plugin is activated on the multisite network. */
  NetworkActivated = 'NETWORK_ACTIVATED',
  /** The plugin is installed on the multisite network, but is currently inactive. */
  NetworkInactive = 'NETWORK_INACTIVE',
  /** The plugin is technically active but was paused while loading. */
  Paused = 'PAUSED',
  /** The plugin was active recently. */
  RecentlyActive = 'RECENTLY_ACTIVE',
  /** The plugin has an upgrade available. */
  Upgrade = 'UPGRADE'
}

/** The post type */
export type Post = ContentNode & DatabaseIdentifier & MenuItemLinkable & Node & NodeWithAuthor & NodeWithContentEditor & NodeWithEditorBlocks & NodeWithExcerpt & NodeWithFeaturedImage & NodeWithPostEditorBlocks & NodeWithRevisions & NodeWithTemplate & NodeWithTitle & Previewable & UniformResourceIdentifiable & {
  __typename?: 'Post';
  /** Connection between the NodeWithAuthor type and the User type */
  author?: Maybe<NodeWithAuthorToUserConnectionEdge>;
  /** The database identifier of the author of the node */
  authorDatabaseId?: Maybe<Scalars['Int']>;
  /** The globally unique identifier of the author of the node */
  authorId?: Maybe<Scalars['ID']>;
  /** Connection between the Post type and the category type */
  categories?: Maybe<PostToCategoryConnection>;
  /** @deprecated Deprecated in favor of using Next.js pages */
  conditionalTags?: Maybe<ConditionalTags>;
  /** The content of the post. */
  content?: Maybe<Scalars['String']>;
  /** Connection between the ContentNode type and the ContentType type */
  contentType?: Maybe<ContentNodeToContentTypeConnectionEdge>;
  /** The name of the Content Type the node belongs to */
  contentTypeName: Scalars['String'];
  /** The unique identifier stored in the database */
  databaseId: Scalars['Int'];
  /** Post publishing date. */
  date?: Maybe<Scalars['String']>;
  /** The publishing date set in GMT. */
  dateGmt?: Maybe<Scalars['String']>;
  /** The desired slug of the post */
  desiredSlug?: Maybe<Scalars['String']>;
  /** If a user has edited the node within the past 15 seconds, this will return the user that last edited. Null if the edit lock doesn&#039;t exist or is greater than 15 seconds */
  editingLockedBy?: Maybe<ContentNodeToEditLockConnectionEdge>;
  /** List of Post editor blocks */
  editorBlocks?: Maybe<Array<Maybe<PostEditorBlock>>>;
  /** The RSS enclosure for the object */
  enclosure?: Maybe<Scalars['String']>;
  /** Connection between the ContentNode type and the EnqueuedScript type */
  enqueuedScripts?: Maybe<ContentNodeToEnqueuedScriptConnection>;
  /** Connection between the ContentNode type and the EnqueuedStylesheet type */
  enqueuedStylesheets?: Maybe<ContentNodeToEnqueuedStylesheetConnection>;
  /** The excerpt of the post. */
  excerpt?: Maybe<Scalars['String']>;
  /** Connection between the NodeWithFeaturedImage type and the MediaItem type */
  featuredImage?: Maybe<NodeWithFeaturedImageToMediaItemConnectionEdge>;
  /** The database identifier for the featured image node assigned to the content node */
  featuredImageDatabaseId?: Maybe<Scalars['Int']>;
  /** Globally unique ID of the featured image assigned to the node */
  featuredImageId?: Maybe<Scalars['ID']>;
  /** The global unique identifier for this post. This currently matches the value stored in WP_Post-&gt;guid and the guid column in the &quot;post_objects&quot; database table. */
  guid?: Maybe<Scalars['String']>;
  /** The globally unique identifier of the post object. */
  id: Scalars['ID'];
  /** Whether the node is a Content Node */
  isContentNode: Scalars['Boolean'];
  /** Whether the object is a node in the preview state */
  isPreview?: Maybe<Scalars['Boolean']>;
  /** Whether the object is restricted from the current viewer */
  isRestricted?: Maybe<Scalars['Boolean']>;
  /** True if the node is a revision of another node */
  isRevision?: Maybe<Scalars['Boolean']>;
  /** Whether this page is sticky */
  isSticky: Scalars['Boolean'];
  /** Whether the node is a Term */
  isTermNode: Scalars['Boolean'];
  /** The user that most recently edited the node */
  lastEditedBy?: Maybe<ContentNodeToEditLastConnectionEdge>;
  /** The permalink of the post */
  link?: Maybe<Scalars['String']>;
  /** The local modified time for a post. If a post was recently updated the modified field will change to match the corresponding time. */
  modified?: Maybe<Scalars['String']>;
  /** The GMT modified time for a post. If a post was recently updated the modified field will change to match the corresponding time in GMT. */
  modifiedGmt?: Maybe<Scalars['String']>;
  /** Connection between the Post type and the postFormat type */
  postFormats?: Maybe<PostToPostFormatConnection>;
  /**
   * The id field matches the WP_Post-&gt;ID field.
   * @deprecated Deprecated in favor of the databaseId field
   */
  postId: Scalars['Int'];
  /** Connection between the Post type and the post type */
  preview?: Maybe<PostToPreviewConnectionEdge>;
  /** The database id of the preview node */
  previewRevisionDatabaseId?: Maybe<Scalars['Int']>;
  /** Whether the object is a node in the preview state */
  previewRevisionId?: Maybe<Scalars['ID']>;
  /** If the current node is a revision, this field exposes the node this is a revision of. Returns null if the node is not a revision of another node. */
  revisionOf?: Maybe<NodeWithRevisionsToContentNodeConnectionEdge>;
  /** Connection between the Post type and the post type */
  revisions?: Maybe<PostToRevisionConnection>;
  /** The uri slug for the post. This is equivalent to the WP_Post-&gt;post_name field and the post_name column in the database for the &quot;post_objects&quot; table. */
  slug?: Maybe<Scalars['String']>;
  /** The current status of the object */
  status?: Maybe<Scalars['String']>;
  /** Connection between the Post type and the tag type */
  tags?: Maybe<PostToTagConnection>;
  /** The template assigned to the node */
  template?: Maybe<ContentTemplate>;
  templates?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Connection between the Post type and the TermNode type */
  terms?: Maybe<PostToTermNodeConnection>;
  /** The title of the post. This is currently just the raw title. An amendment to support rendered title needs to be made. */
  title?: Maybe<Scalars['String']>;
  /** The unique resource identifier path */
  uri?: Maybe<Scalars['String']>;
};


/** The post type */
export type PostCategoriesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PostToCategoryConnectionWhereArgs>;
};


/** The post type */
export type PostContentArgs = {
  format?: InputMaybe<PostObjectFieldFormatEnum>;
};


/** The post type */
export type PostEditorBlocksArgs = {
  flat?: InputMaybe<Scalars['Boolean']>;
};


/** The post type */
export type PostEnqueuedScriptsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


/** The post type */
export type PostEnqueuedStylesheetsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


/** The post type */
export type PostExcerptArgs = {
  format?: InputMaybe<PostObjectFieldFormatEnum>;
};


/** The post type */
export type PostPostFormatsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PostToPostFormatConnectionWhereArgs>;
};


/** The post type */
export type PostRevisionsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PostToRevisionConnectionWhereArgs>;
};


/** The post type */
export type PostTagsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PostToTagConnectionWhereArgs>;
};


/** The post type */
export type PostTermsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PostToTermNodeConnectionWhereArgs>;
};


/** The post type */
export type PostTitleArgs = {
  format?: InputMaybe<PostObjectFieldFormatEnum>;
};

/** Set relationships between the post to categories */
export type PostCategoriesInput = {
  /** If true, this will append the category to existing related categories. If false, this will replace existing relationships. Default true. */
  append?: InputMaybe<Scalars['Boolean']>;
  /** The input list of items to set. */
  nodes?: InputMaybe<Array<InputMaybe<PostCategoriesNodeInput>>>;
};

/** List of categories to connect the post to. If an ID is set, it will be used to create the connection. If not, it will look for a slug. If neither are valid existing terms, and the site is configured to allow terms to be created during post mutations, a term will be created using the Name if it exists in the input, then fallback to the slug if it exists. */
export type PostCategoriesNodeInput = {
  /** The description of the category. This field is used to set a description of the category if a new one is created during the mutation. */
  description?: InputMaybe<Scalars['String']>;
  /** The ID of the category. If present, this will be used to connect to the post. If no existing category exists with this ID, no connection will be made. */
  id?: InputMaybe<Scalars['ID']>;
  /** The name of the category. This field is used to create a new term, if term creation is enabled in nested mutations, and if one does not already exist with the provided slug or ID or if a slug or ID is not provided. If no name is included and a term is created, the creation will fallback to the slug field. */
  name?: InputMaybe<Scalars['String']>;
  /** The slug of the category. If no ID is present, this field will be used to make a connection. If no existing term exists with this slug, this field will be used as a fallback to the Name field when creating a new term to connect to, if term creation is enabled as a nested mutation. */
  slug?: InputMaybe<Scalars['String']>;
};

/** Connection to post Nodes */
export type PostConnection = {
  /** A list of edges (relational context) between RootQuery and connected post Nodes */
  edges: Array<PostConnectionEdge>;
  /** A list of connected post Nodes */
  nodes: Array<Post>;
  /** Information about pagination in a connection. */
  pageInfo: PostConnectionPageInfo;
};

/** Edge between a Node and a connected post */
export type PostConnectionEdge = {
  /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
  cursor?: Maybe<Scalars['String']>;
  /** The connected post Node */
  node: Post;
};

/** Page Info on the connected PostConnectionEdge */
export type PostConnectionPageInfo = {
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
};

export type PostEditorBlock = {
  /** The API version of the Gutenberg Block */
  apiVersion?: Maybe<Scalars['Int']>;
  /** The name of the category the Block belongs to */
  blockEditorCategoryName?: Maybe<Scalars['String']>;
  /** The id of the Block */
  clientId?: Maybe<Scalars['String']>;
  /** CSS Classnames to apply to the block */
  cssClassNames?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** The inner blocks of the Block */
  innerBlocks?: Maybe<Array<Maybe<EditorBlock>>>;
  /** Whether the block is Dynamic (server rendered) */
  isDynamic: Scalars['Boolean'];
  /** The name of the Block */
  name?: Maybe<Scalars['String']>;
  /** The parent id of the Block */
  parentClientId?: Maybe<Scalars['String']>;
  /** The rendered HTML for the block */
  renderedHtml?: Maybe<Scalars['String']>;
};

/** The postFormat type */
export type PostFormat = DatabaseIdentifier & Node & TermNode & UniformResourceIdentifiable & {
  __typename?: 'PostFormat';
  /** @deprecated Deprecated in favor of using Next.js pages */
  conditionalTags?: Maybe<ConditionalTags>;
  /** Connection between the PostFormat type and the ContentNode type */
  contentNodes?: Maybe<PostFormatToContentNodeConnection>;
  /** The number of objects connected to the object */
  count?: Maybe<Scalars['Int']>;
  /** The unique identifier stored in the database */
  databaseId: Scalars['Int'];
  /** The description of the object */
  description?: Maybe<Scalars['String']>;
  /** Connection between the TermNode type and the EnqueuedScript type */
  enqueuedScripts?: Maybe<TermNodeToEnqueuedScriptConnection>;
  /** Connection between the TermNode type and the EnqueuedStylesheet type */
  enqueuedStylesheets?: Maybe<TermNodeToEnqueuedStylesheetConnection>;
  /** The unique resource identifier path */
  id: Scalars['ID'];
  /** Whether the node is a Content Node */
  isContentNode: Scalars['Boolean'];
  /** Whether the object is restricted from the current viewer */
  isRestricted?: Maybe<Scalars['Boolean']>;
  /** Whether the node is a Term */
  isTermNode: Scalars['Boolean'];
  /** The link to the term */
  link?: Maybe<Scalars['String']>;
  /** The human friendly name of the object. */
  name?: Maybe<Scalars['String']>;
  /**
   * The id field matches the WP_Post-&gt;ID field.
   * @deprecated Deprecated in favor of databaseId
   */
  postFormatId?: Maybe<Scalars['Int']>;
  /** Connection between the PostFormat type and the post type */
  posts?: Maybe<PostFormatToPostConnection>;
  /** An alphanumeric identifier for the object unique to its type. */
  slug?: Maybe<Scalars['String']>;
  /** Connection between the PostFormat type and the Taxonomy type */
  taxonomy?: Maybe<PostFormatToTaxonomyConnectionEdge>;
  /** The name of the taxonomy that the object is associated with */
  taxonomyName?: Maybe<Scalars['String']>;
  templates?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** The ID of the term group that this term object belongs to */
  termGroupId?: Maybe<Scalars['Int']>;
  /** The taxonomy ID that the object is associated with */
  termTaxonomyId?: Maybe<Scalars['Int']>;
  /** The unique resource identifier path */
  uri?: Maybe<Scalars['String']>;
};


/** The postFormat type */
export type PostFormatContentNodesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PostFormatToContentNodeConnectionWhereArgs>;
};


/** The postFormat type */
export type PostFormatEnqueuedScriptsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


/** The postFormat type */
export type PostFormatEnqueuedStylesheetsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


/** The postFormat type */
export type PostFormatPostsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PostFormatToPostConnectionWhereArgs>;
};

/** Connection to postFormat Nodes */
export type PostFormatConnection = {
  /** A list of edges (relational context) between RootQuery and connected postFormat Nodes */
  edges: Array<PostFormatConnectionEdge>;
  /** A list of connected postFormat Nodes */
  nodes: Array<PostFormat>;
  /** Information about pagination in a connection. */
  pageInfo: PostFormatConnectionPageInfo;
};

/** Edge between a Node and a connected postFormat */
export type PostFormatConnectionEdge = {
  /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
  cursor?: Maybe<Scalars['String']>;
  /** The connected postFormat Node */
  node: PostFormat;
};

/** Page Info on the connected PostFormatConnectionEdge */
export type PostFormatConnectionPageInfo = {
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
};

/** The Type of Identifier used to fetch a single resource. Default is ID. */
export enum PostFormatIdType {
  /** The Database ID for the node */
  DatabaseId = 'DATABASE_ID',
  /** The hashed Global ID */
  Id = 'ID',
  /** The name of the node */
  Name = 'NAME',
  /** Url friendly name of the node */
  Slug = 'SLUG',
  /** The URI for the node */
  Uri = 'URI'
}

/** Connection between the PostFormat type and the ContentNode type */
export type PostFormatToContentNodeConnection = Connection & ContentNodeConnection & {
  __typename?: 'PostFormatToContentNodeConnection';
  /** Edges for the PostFormatToContentNodeConnection connection */
  edges: Array<PostFormatToContentNodeConnectionEdge>;
  /** The nodes of the connection, without the edges */
  nodes: Array<ContentNode>;
  /** Information about pagination in a connection. */
  pageInfo: PostFormatToContentNodeConnectionPageInfo;
};

/** An edge in a connection */
export type PostFormatToContentNodeConnectionEdge = ContentNodeConnectionEdge & Edge & {
  __typename?: 'PostFormatToContentNodeConnectionEdge';
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node: ContentNode;
};

/** Page Info on the &quot;PostFormatToContentNodeConnection&quot; */
export type PostFormatToContentNodeConnectionPageInfo = ContentNodeConnectionPageInfo & PageInfo & WpPageInfo & {
  __typename?: 'PostFormatToContentNodeConnectionPageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
};

/** Arguments for filtering the PostFormatToContentNodeConnection connection */
export type PostFormatToContentNodeConnectionWhereArgs = {
  /** The Types of content to filter */
  contentTypes?: InputMaybe<Array<InputMaybe<ContentTypesOfPostFormatEnum>>>;
  /** Filter the connection based on dates */
  dateQuery?: InputMaybe<DateQueryInput>;
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword?: InputMaybe<Scalars['Boolean']>;
  /** Specific database ID of the object */
  id?: InputMaybe<Scalars['Int']>;
  /** Array of IDs for the objects to retrieve */
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Get objects with a specific mimeType property */
  mimeType?: InputMaybe<MimeTypeEnum>;
  /** Slug / post_name of the object */
  name?: InputMaybe<Scalars['String']>;
  /** Specify objects to retrieve. Use slugs */
  nameIn?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** What paramater to use to order the objects by. */
  orderby?: InputMaybe<Array<InputMaybe<PostObjectsConnectionOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: InputMaybe<Scalars['ID']>;
  /** Specify objects whose parent is in an array */
  parentIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Specify posts whose parent is not in an array */
  parentNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Show posts with a specific password. */
  password?: InputMaybe<Scalars['String']>;
  /** Show Posts based on a keyword search */
  search?: InputMaybe<Scalars['String']>;
  /** Retrieve posts where post status is in an array. */
  stati?: InputMaybe<Array<InputMaybe<PostStatusEnum>>>;
  /** Show posts with a specific status. */
  status?: InputMaybe<PostStatusEnum>;
  /** Title of the object */
  title?: InputMaybe<Scalars['String']>;
};

/** Connection between the PostFormat type and the post type */
export type PostFormatToPostConnection = Connection & PostConnection & {
  __typename?: 'PostFormatToPostConnection';
  /** Edges for the PostFormatToPostConnection connection */
  edges: Array<PostFormatToPostConnectionEdge>;
  /** The nodes of the connection, without the edges */
  nodes: Array<Post>;
  /** Information about pagination in a connection. */
  pageInfo: PostFormatToPostConnectionPageInfo;
};

/** An edge in a connection */
export type PostFormatToPostConnectionEdge = Edge & PostConnectionEdge & {
  __typename?: 'PostFormatToPostConnectionEdge';
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node: Post;
};

/** Page Info on the &quot;PostFormatToPostConnection&quot; */
export type PostFormatToPostConnectionPageInfo = PageInfo & PostConnectionPageInfo & WpPageInfo & {
  __typename?: 'PostFormatToPostConnectionPageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
};

/** Arguments for filtering the PostFormatToPostConnection connection */
export type PostFormatToPostConnectionWhereArgs = {
  /** The user that's connected as the author of the object. Use the userId for the author object. */
  author?: InputMaybe<Scalars['Int']>;
  /** Find objects connected to author(s) in the array of author's userIds */
  authorIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Find objects connected to the author by the author's nicename */
  authorName?: InputMaybe<Scalars['String']>;
  /** Find objects NOT connected to author(s) in the array of author's userIds */
  authorNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Category ID */
  categoryId?: InputMaybe<Scalars['Int']>;
  /** Array of category IDs, used to display objects from one category OR another */
  categoryIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Use Category Slug */
  categoryName?: InputMaybe<Scalars['String']>;
  /** Array of category IDs, used to display objects from one category OR another */
  categoryNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Filter the connection based on dates */
  dateQuery?: InputMaybe<DateQueryInput>;
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword?: InputMaybe<Scalars['Boolean']>;
  /** Specific database ID of the object */
  id?: InputMaybe<Scalars['Int']>;
  /** Array of IDs for the objects to retrieve */
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Get objects with a specific mimeType property */
  mimeType?: InputMaybe<MimeTypeEnum>;
  /** Slug / post_name of the object */
  name?: InputMaybe<Scalars['String']>;
  /** Specify objects to retrieve. Use slugs */
  nameIn?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** What paramater to use to order the objects by. */
  orderby?: InputMaybe<Array<InputMaybe<PostObjectsConnectionOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: InputMaybe<Scalars['ID']>;
  /** Specify objects whose parent is in an array */
  parentIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Specify posts whose parent is not in an array */
  parentNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Show posts with a specific password. */
  password?: InputMaybe<Scalars['String']>;
  /** Show Posts based on a keyword search */
  search?: InputMaybe<Scalars['String']>;
  /** Retrieve posts where post status is in an array. */
  stati?: InputMaybe<Array<InputMaybe<PostStatusEnum>>>;
  /** Show posts with a specific status. */
  status?: InputMaybe<PostStatusEnum>;
  /** Tag Slug */
  tag?: InputMaybe<Scalars['String']>;
  /** Use Tag ID */
  tagId?: InputMaybe<Scalars['String']>;
  /** Array of tag IDs, used to display objects from one tag OR another */
  tagIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Array of tag IDs, used to display objects from one tag OR another */
  tagNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Array of tag slugs, used to display objects from one tag AND another */
  tagSlugAnd?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Array of tag slugs, used to include objects in ANY specified tags */
  tagSlugIn?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Title of the object */
  title?: InputMaybe<Scalars['String']>;
};

/** Connection between the PostFormat type and the Taxonomy type */
export type PostFormatToTaxonomyConnectionEdge = Edge & OneToOneConnection & TaxonomyConnectionEdge & {
  __typename?: 'PostFormatToTaxonomyConnectionEdge';
  /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
  cursor?: Maybe<Scalars['String']>;
  /** The node of the connection, without the edges */
  node: Taxonomy;
};

/** The Type of Identifier used to fetch a single resource. Default is ID. */
export enum PostIdType {
  /** Identify a resource by the Database ID. */
  DatabaseId = 'DATABASE_ID',
  /** Identify a resource by the (hashed) Global ID. */
  Id = 'ID',
  /** Identify a resource by the slug. Available to non-hierarchcial Types where the slug is a unique identifier. */
  Slug = 'SLUG',
  /** Identify a resource by the URI. */
  Uri = 'URI'
}

/** The format of post field data. */
export enum PostObjectFieldFormatEnum {
  /** Provide the field value directly from database. Null on unauthenticated requests. */
  Raw = 'RAW',
  /** Provide the field value as rendered by WordPress. Default. */
  Rendered = 'RENDERED'
}

/** The column to use when filtering by date */
export enum PostObjectsConnectionDateColumnEnum {
  /** The date the comment was created in local time. */
  Date = 'DATE',
  /** The most recent modification date of the comment. */
  Modified = 'MODIFIED'
}

/** Field to order the connection by */
export enum PostObjectsConnectionOrderbyEnum {
  /** Order by author */
  Author = 'AUTHOR',
  /** Order by the number of comments it has acquired */
  CommentCount = 'COMMENT_COUNT',
  /** Order by publish date */
  Date = 'DATE',
  /** Preserve the ID order given in the IN array */
  In = 'IN',
  /** Order by the menu order value */
  MenuOrder = 'MENU_ORDER',
  /** Order by last modified date */
  Modified = 'MODIFIED',
  /** Preserve slug order given in the NAME_IN array */
  NameIn = 'NAME_IN',
  /** Order by parent ID */
  Parent = 'PARENT',
  /** Order by slug */
  Slug = 'SLUG',
  /** Order by title */
  Title = 'TITLE'
}

/** Options for ordering the connection */
export type PostObjectsConnectionOrderbyInput = {
  /** The field to order the connection by */
  field: PostObjectsConnectionOrderbyEnum;
  /** Possible directions in which to order a list of items */
  order: OrderEnum;
};

/** Set relationships between the post to postFormats */
export type PostPostFormatsInput = {
  /** If true, this will append the postFormat to existing related postFormats. If false, this will replace existing relationships. Default true. */
  append?: InputMaybe<Scalars['Boolean']>;
  /** The input list of items to set. */
  nodes?: InputMaybe<Array<InputMaybe<PostPostFormatsNodeInput>>>;
};

/** List of postFormats to connect the post to. If an ID is set, it will be used to create the connection. If not, it will look for a slug. If neither are valid existing terms, and the site is configured to allow terms to be created during post mutations, a term will be created using the Name if it exists in the input, then fallback to the slug if it exists. */
export type PostPostFormatsNodeInput = {
  /** The description of the postFormat. This field is used to set a description of the postFormat if a new one is created during the mutation. */
  description?: InputMaybe<Scalars['String']>;
  /** The ID of the postFormat. If present, this will be used to connect to the post. If no existing postFormat exists with this ID, no connection will be made. */
  id?: InputMaybe<Scalars['ID']>;
  /** The name of the postFormat. This field is used to create a new term, if term creation is enabled in nested mutations, and if one does not already exist with the provided slug or ID or if a slug or ID is not provided. If no name is included and a term is created, the creation will fallback to the slug field. */
  name?: InputMaybe<Scalars['String']>;
  /** The slug of the postFormat. If no ID is present, this field will be used to make a connection. If no existing term exists with this slug, this field will be used as a fallback to the Name field when creating a new term to connect to, if term creation is enabled as a nested mutation. */
  slug?: InputMaybe<Scalars['String']>;
};

/** The status of the object. */
export enum PostStatusEnum {
  /** Objects with the acf-disabled status */
  AcfDisabled = 'ACF_DISABLED',
  /** Objects with the assigned status */
  Assigned = 'ASSIGNED',
  /** Objects with the auto-draft status */
  AutoDraft = 'AUTO_DRAFT',
  /** Objects with the dp-rewrite-republish status */
  DpRewriteRepublish = 'DP_REWRITE_REPUBLISH',
  /** Objects with the draft status */
  Draft = 'DRAFT',
  /** Objects with the future status */
  Future = 'FUTURE',
  /** Objects with the inherit status */
  Inherit = 'INHERIT',
  /** Objects with the in-progress status */
  InProgress = 'IN_PROGRESS',
  /** Objects with the pending status */
  Pending = 'PENDING',
  /** Objects with the pitch status */
  Pitch = 'PITCH',
  /** Objects with the private status */
  Private = 'PRIVATE',
  /** Objects with the publish status */
  Publish = 'PUBLISH',
  /** Objects with the request-completed status */
  RequestCompleted = 'REQUEST_COMPLETED',
  /** Objects with the request-confirmed status */
  RequestConfirmed = 'REQUEST_CONFIRMED',
  /** Objects with the request-failed status */
  RequestFailed = 'REQUEST_FAILED',
  /** Objects with the request-pending status */
  RequestPending = 'REQUEST_PENDING',
  /** Objects with the trash status */
  Trash = 'TRASH',
  /** Objects with the wp_stream_disabled status */
  WpStreamDisabled = 'WP_STREAM_DISABLED',
  /** Objects with the wp_stream_enabled status */
  WpStreamEnabled = 'WP_STREAM_ENABLED'
}

/** Set relationships between the post to tags */
export type PostTagsInput = {
  /** If true, this will append the tag to existing related tags. If false, this will replace existing relationships. Default true. */
  append?: InputMaybe<Scalars['Boolean']>;
  /** The input list of items to set. */
  nodes?: InputMaybe<Array<InputMaybe<PostTagsNodeInput>>>;
};

/** List of tags to connect the post to. If an ID is set, it will be used to create the connection. If not, it will look for a slug. If neither are valid existing terms, and the site is configured to allow terms to be created during post mutations, a term will be created using the Name if it exists in the input, then fallback to the slug if it exists. */
export type PostTagsNodeInput = {
  /** The description of the tag. This field is used to set a description of the tag if a new one is created during the mutation. */
  description?: InputMaybe<Scalars['String']>;
  /** The ID of the tag. If present, this will be used to connect to the post. If no existing tag exists with this ID, no connection will be made. */
  id?: InputMaybe<Scalars['ID']>;
  /** The name of the tag. This field is used to create a new term, if term creation is enabled in nested mutations, and if one does not already exist with the provided slug or ID or if a slug or ID is not provided. If no name is included and a term is created, the creation will fallback to the slug field. */
  name?: InputMaybe<Scalars['String']>;
  /** The slug of the tag. If no ID is present, this field will be used to make a connection. If no existing term exists with this slug, this field will be used as a fallback to the Name field when creating a new term to connect to, if term creation is enabled as a nested mutation. */
  slug?: InputMaybe<Scalars['String']>;
};

/** Connection between the Post type and the category type */
export type PostToCategoryConnection = CategoryConnection & Connection & {
  __typename?: 'PostToCategoryConnection';
  /** Edges for the PostToCategoryConnection connection */
  edges: Array<PostToCategoryConnectionEdge>;
  /** The nodes of the connection, without the edges */
  nodes: Array<Category>;
  /** Information about pagination in a connection. */
  pageInfo: PostToCategoryConnectionPageInfo;
};

/** An edge in a connection */
export type PostToCategoryConnectionEdge = CategoryConnectionEdge & Edge & {
  __typename?: 'PostToCategoryConnectionEdge';
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node: Category;
};

/** Page Info on the &quot;PostToCategoryConnection&quot; */
export type PostToCategoryConnectionPageInfo = CategoryConnectionPageInfo & PageInfo & WpPageInfo & {
  __typename?: 'PostToCategoryConnectionPageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
};

/** Arguments for filtering the PostToCategoryConnection connection */
export type PostToCategoryConnectionWhereArgs = {
  /** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
  cacheDomain?: InputMaybe<Scalars['String']>;
  /** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
  childOf?: InputMaybe<Scalars['Int']>;
  /** True to limit results to terms that have no children. This parameter has no effect on non-hierarchical taxonomies. Default false. */
  childless?: InputMaybe<Scalars['Boolean']>;
  /** Retrieve terms where the description is LIKE the input value. Default empty. */
  descriptionLike?: InputMaybe<Scalars['String']>;
  /** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
  exclude?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Array of term ids to exclude along with all of their descendant terms. If $include is non-empty, $exclude_tree is ignored. Default empty array. */
  excludeTree?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Whether to hide terms not assigned to any posts. Accepts true or false. Default false */
  hideEmpty?: InputMaybe<Scalars['Boolean']>;
  /** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
  hierarchical?: InputMaybe<Scalars['Boolean']>;
  /** Array of term ids to include. Default empty array. */
  include?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Array of names to return term(s) for. Default empty. */
  name?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Retrieve terms where the name is LIKE the input value. Default empty. */
  nameLike?: InputMaybe<Scalars['String']>;
  /** Array of object IDs. Results will be limited to terms associated with these objects. */
  objectIds?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Direction the connection should be ordered in */
  order?: InputMaybe<OrderEnum>;
  /** Field(s) to order terms by. Defaults to 'name'. */
  orderby?: InputMaybe<TermObjectsConnectionOrderbyEnum>;
  /** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
  padCounts?: InputMaybe<Scalars['Boolean']>;
  /** Parent term ID to retrieve direct-child terms of. Default empty. */
  parent?: InputMaybe<Scalars['Int']>;
  /** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
  search?: InputMaybe<Scalars['String']>;
  /** Array of slugs to return term(s) for. Default empty. */
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomId?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomyId?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Whether to prime meta caches for matched terms. Default true. */
  updateTermMetaCache?: InputMaybe<Scalars['Boolean']>;
};

/** Connection between the Post type and the postFormat type */
export type PostToPostFormatConnection = Connection & PostFormatConnection & {
  __typename?: 'PostToPostFormatConnection';
  /** Edges for the PostToPostFormatConnection connection */
  edges: Array<PostToPostFormatConnectionEdge>;
  /** The nodes of the connection, without the edges */
  nodes: Array<PostFormat>;
  /** Information about pagination in a connection. */
  pageInfo: PostToPostFormatConnectionPageInfo;
};

/** An edge in a connection */
export type PostToPostFormatConnectionEdge = Edge & PostFormatConnectionEdge & {
  __typename?: 'PostToPostFormatConnectionEdge';
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node: PostFormat;
};

/** Page Info on the &quot;PostToPostFormatConnection&quot; */
export type PostToPostFormatConnectionPageInfo = PageInfo & PostFormatConnectionPageInfo & WpPageInfo & {
  __typename?: 'PostToPostFormatConnectionPageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
};

/** Arguments for filtering the PostToPostFormatConnection connection */
export type PostToPostFormatConnectionWhereArgs = {
  /** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
  cacheDomain?: InputMaybe<Scalars['String']>;
  /** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
  childOf?: InputMaybe<Scalars['Int']>;
  /** True to limit results to terms that have no children. This parameter has no effect on non-hierarchical taxonomies. Default false. */
  childless?: InputMaybe<Scalars['Boolean']>;
  /** Retrieve terms where the description is LIKE the input value. Default empty. */
  descriptionLike?: InputMaybe<Scalars['String']>;
  /** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
  exclude?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Array of term ids to exclude along with all of their descendant terms. If $include is non-empty, $exclude_tree is ignored. Default empty array. */
  excludeTree?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Whether to hide terms not assigned to any posts. Accepts true or false. Default false */
  hideEmpty?: InputMaybe<Scalars['Boolean']>;
  /** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
  hierarchical?: InputMaybe<Scalars['Boolean']>;
  /** Array of term ids to include. Default empty array. */
  include?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Array of names to return term(s) for. Default empty. */
  name?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Retrieve terms where the name is LIKE the input value. Default empty. */
  nameLike?: InputMaybe<Scalars['String']>;
  /** Array of object IDs. Results will be limited to terms associated with these objects. */
  objectIds?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Direction the connection should be ordered in */
  order?: InputMaybe<OrderEnum>;
  /** Field(s) to order terms by. Defaults to 'name'. */
  orderby?: InputMaybe<TermObjectsConnectionOrderbyEnum>;
  /** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
  padCounts?: InputMaybe<Scalars['Boolean']>;
  /** Parent term ID to retrieve direct-child terms of. Default empty. */
  parent?: InputMaybe<Scalars['Int']>;
  /** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
  search?: InputMaybe<Scalars['String']>;
  /** Array of slugs to return term(s) for. Default empty. */
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomId?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomyId?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Whether to prime meta caches for matched terms. Default true. */
  updateTermMetaCache?: InputMaybe<Scalars['Boolean']>;
};

/** Connection between the Post type and the post type */
export type PostToPreviewConnectionEdge = Edge & OneToOneConnection & PostConnectionEdge & {
  __typename?: 'PostToPreviewConnectionEdge';
  /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
  cursor?: Maybe<Scalars['String']>;
  /** The node of the connection, without the edges */
  node: Post;
};

/** Connection between the Post type and the post type */
export type PostToRevisionConnection = Connection & PostConnection & {
  __typename?: 'PostToRevisionConnection';
  /** Edges for the PostToRevisionConnection connection */
  edges: Array<PostToRevisionConnectionEdge>;
  /** The nodes of the connection, without the edges */
  nodes: Array<Post>;
  /** Information about pagination in a connection. */
  pageInfo: PostToRevisionConnectionPageInfo;
};

/** An edge in a connection */
export type PostToRevisionConnectionEdge = Edge & PostConnectionEdge & {
  __typename?: 'PostToRevisionConnectionEdge';
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node: Post;
};

/** Page Info on the &quot;PostToRevisionConnection&quot; */
export type PostToRevisionConnectionPageInfo = PageInfo & PostConnectionPageInfo & WpPageInfo & {
  __typename?: 'PostToRevisionConnectionPageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
};

/** Arguments for filtering the PostToRevisionConnection connection */
export type PostToRevisionConnectionWhereArgs = {
  /** The user that's connected as the author of the object. Use the userId for the author object. */
  author?: InputMaybe<Scalars['Int']>;
  /** Find objects connected to author(s) in the array of author's userIds */
  authorIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Find objects connected to the author by the author's nicename */
  authorName?: InputMaybe<Scalars['String']>;
  /** Find objects NOT connected to author(s) in the array of author's userIds */
  authorNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Category ID */
  categoryId?: InputMaybe<Scalars['Int']>;
  /** Array of category IDs, used to display objects from one category OR another */
  categoryIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Use Category Slug */
  categoryName?: InputMaybe<Scalars['String']>;
  /** Array of category IDs, used to display objects from one category OR another */
  categoryNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Filter the connection based on dates */
  dateQuery?: InputMaybe<DateQueryInput>;
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword?: InputMaybe<Scalars['Boolean']>;
  /** Specific database ID of the object */
  id?: InputMaybe<Scalars['Int']>;
  /** Array of IDs for the objects to retrieve */
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Get objects with a specific mimeType property */
  mimeType?: InputMaybe<MimeTypeEnum>;
  /** Slug / post_name of the object */
  name?: InputMaybe<Scalars['String']>;
  /** Specify objects to retrieve. Use slugs */
  nameIn?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** What paramater to use to order the objects by. */
  orderby?: InputMaybe<Array<InputMaybe<PostObjectsConnectionOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: InputMaybe<Scalars['ID']>;
  /** Specify objects whose parent is in an array */
  parentIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Specify posts whose parent is not in an array */
  parentNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Show posts with a specific password. */
  password?: InputMaybe<Scalars['String']>;
  /** Show Posts based on a keyword search */
  search?: InputMaybe<Scalars['String']>;
  /** Retrieve posts where post status is in an array. */
  stati?: InputMaybe<Array<InputMaybe<PostStatusEnum>>>;
  /** Show posts with a specific status. */
  status?: InputMaybe<PostStatusEnum>;
  /** Tag Slug */
  tag?: InputMaybe<Scalars['String']>;
  /** Use Tag ID */
  tagId?: InputMaybe<Scalars['String']>;
  /** Array of tag IDs, used to display objects from one tag OR another */
  tagIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Array of tag IDs, used to display objects from one tag OR another */
  tagNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Array of tag slugs, used to display objects from one tag AND another */
  tagSlugAnd?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Array of tag slugs, used to include objects in ANY specified tags */
  tagSlugIn?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Title of the object */
  title?: InputMaybe<Scalars['String']>;
};

/** Connection between the Post type and the tag type */
export type PostToTagConnection = Connection & TagConnection & {
  __typename?: 'PostToTagConnection';
  /** Edges for the PostToTagConnection connection */
  edges: Array<PostToTagConnectionEdge>;
  /** The nodes of the connection, without the edges */
  nodes: Array<Tag>;
  /** Information about pagination in a connection. */
  pageInfo: PostToTagConnectionPageInfo;
};

/** An edge in a connection */
export type PostToTagConnectionEdge = Edge & TagConnectionEdge & {
  __typename?: 'PostToTagConnectionEdge';
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node: Tag;
};

/** Page Info on the &quot;PostToTagConnection&quot; */
export type PostToTagConnectionPageInfo = PageInfo & TagConnectionPageInfo & WpPageInfo & {
  __typename?: 'PostToTagConnectionPageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
};

/** Arguments for filtering the PostToTagConnection connection */
export type PostToTagConnectionWhereArgs = {
  /** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
  cacheDomain?: InputMaybe<Scalars['String']>;
  /** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
  childOf?: InputMaybe<Scalars['Int']>;
  /** True to limit results to terms that have no children. This parameter has no effect on non-hierarchical taxonomies. Default false. */
  childless?: InputMaybe<Scalars['Boolean']>;
  /** Retrieve terms where the description is LIKE the input value. Default empty. */
  descriptionLike?: InputMaybe<Scalars['String']>;
  /** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
  exclude?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Array of term ids to exclude along with all of their descendant terms. If $include is non-empty, $exclude_tree is ignored. Default empty array. */
  excludeTree?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Whether to hide terms not assigned to any posts. Accepts true or false. Default false */
  hideEmpty?: InputMaybe<Scalars['Boolean']>;
  /** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
  hierarchical?: InputMaybe<Scalars['Boolean']>;
  /** Array of term ids to include. Default empty array. */
  include?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Array of names to return term(s) for. Default empty. */
  name?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Retrieve terms where the name is LIKE the input value. Default empty. */
  nameLike?: InputMaybe<Scalars['String']>;
  /** Array of object IDs. Results will be limited to terms associated with these objects. */
  objectIds?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Direction the connection should be ordered in */
  order?: InputMaybe<OrderEnum>;
  /** Field(s) to order terms by. Defaults to 'name'. */
  orderby?: InputMaybe<TermObjectsConnectionOrderbyEnum>;
  /** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
  padCounts?: InputMaybe<Scalars['Boolean']>;
  /** Parent term ID to retrieve direct-child terms of. Default empty. */
  parent?: InputMaybe<Scalars['Int']>;
  /** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
  search?: InputMaybe<Scalars['String']>;
  /** Array of slugs to return term(s) for. Default empty. */
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomId?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomyId?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Whether to prime meta caches for matched terms. Default true. */
  updateTermMetaCache?: InputMaybe<Scalars['Boolean']>;
};

/** Connection between the Post type and the TermNode type */
export type PostToTermNodeConnection = Connection & TermNodeConnection & {
  __typename?: 'PostToTermNodeConnection';
  /** Edges for the PostToTermNodeConnection connection */
  edges: Array<PostToTermNodeConnectionEdge>;
  /** The nodes of the connection, without the edges */
  nodes: Array<TermNode>;
  /** Information about pagination in a connection. */
  pageInfo: PostToTermNodeConnectionPageInfo;
};

/** An edge in a connection */
export type PostToTermNodeConnectionEdge = Edge & TermNodeConnectionEdge & {
  __typename?: 'PostToTermNodeConnectionEdge';
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node: TermNode;
};

/** Page Info on the &quot;PostToTermNodeConnection&quot; */
export type PostToTermNodeConnectionPageInfo = PageInfo & TermNodeConnectionPageInfo & WpPageInfo & {
  __typename?: 'PostToTermNodeConnectionPageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
};

/** Arguments for filtering the PostToTermNodeConnection connection */
export type PostToTermNodeConnectionWhereArgs = {
  /** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
  cacheDomain?: InputMaybe<Scalars['String']>;
  /** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
  childOf?: InputMaybe<Scalars['Int']>;
  /** True to limit results to terms that have no children. This parameter has no effect on non-hierarchical taxonomies. Default false. */
  childless?: InputMaybe<Scalars['Boolean']>;
  /** Retrieve terms where the description is LIKE the input value. Default empty. */
  descriptionLike?: InputMaybe<Scalars['String']>;
  /** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
  exclude?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Array of term ids to exclude along with all of their descendant terms. If $include is non-empty, $exclude_tree is ignored. Default empty array. */
  excludeTree?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Whether to hide terms not assigned to any posts. Accepts true or false. Default false */
  hideEmpty?: InputMaybe<Scalars['Boolean']>;
  /** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
  hierarchical?: InputMaybe<Scalars['Boolean']>;
  /** Array of term ids to include. Default empty array. */
  include?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Array of names to return term(s) for. Default empty. */
  name?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Retrieve terms where the name is LIKE the input value. Default empty. */
  nameLike?: InputMaybe<Scalars['String']>;
  /** Array of object IDs. Results will be limited to terms associated with these objects. */
  objectIds?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Direction the connection should be ordered in */
  order?: InputMaybe<OrderEnum>;
  /** Field(s) to order terms by. Defaults to 'name'. */
  orderby?: InputMaybe<TermObjectsConnectionOrderbyEnum>;
  /** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
  padCounts?: InputMaybe<Scalars['Boolean']>;
  /** Parent term ID to retrieve direct-child terms of. Default empty. */
  parent?: InputMaybe<Scalars['Int']>;
  /** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
  search?: InputMaybe<Scalars['String']>;
  /** Array of slugs to return term(s) for. Default empty. */
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** The Taxonomy to filter terms by */
  taxonomies?: InputMaybe<Array<InputMaybe<TaxonomyEnum>>>;
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomId?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomyId?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Whether to prime meta caches for matched terms. Default true. */
  updateTermMetaCache?: InputMaybe<Scalars['Boolean']>;
};

/** Details for labels of the PostType */
export type PostTypeLabelDetails = {
  __typename?: 'PostTypeLabelDetails';
  /** Default is ‘Add New’ for both hierarchical and non-hierarchical types. */
  addNew?: Maybe<Scalars['String']>;
  /** Label for adding a new singular item. */
  addNewItem?: Maybe<Scalars['String']>;
  /** Label to signify all items in a submenu link. */
  allItems?: Maybe<Scalars['String']>;
  /** Label for archives in nav menus */
  archives?: Maybe<Scalars['String']>;
  /** Label for the attributes meta box. */
  attributes?: Maybe<Scalars['String']>;
  /** Label for editing a singular item. */
  editItem?: Maybe<Scalars['String']>;
  /** Label for the Featured Image meta box title. */
  featuredImage?: Maybe<Scalars['String']>;
  /** Label for the table views hidden heading. */
  filterItemsList?: Maybe<Scalars['String']>;
  /** Label for the media frame button. */
  insertIntoItem?: Maybe<Scalars['String']>;
  /** Label for the table hidden heading. */
  itemsList?: Maybe<Scalars['String']>;
  /** Label for the table pagination hidden heading. */
  itemsListNavigation?: Maybe<Scalars['String']>;
  /** Label for the menu name. */
  menuName?: Maybe<Scalars['String']>;
  /** General name for the post type, usually plural. */
  name?: Maybe<Scalars['String']>;
  /** Label for the new item page title. */
  newItem?: Maybe<Scalars['String']>;
  /** Label used when no items are found. */
  notFound?: Maybe<Scalars['String']>;
  /** Label used when no items are in the trash. */
  notFoundInTrash?: Maybe<Scalars['String']>;
  /** Label used to prefix parents of hierarchical items. */
  parentItemColon?: Maybe<Scalars['String']>;
  /** Label for removing the featured image. */
  removeFeaturedImage?: Maybe<Scalars['String']>;
  /** Label for searching plural items. */
  searchItems?: Maybe<Scalars['String']>;
  /** Label for setting the featured image. */
  setFeaturedImage?: Maybe<Scalars['String']>;
  /** Name for one object of this post type. */
  singularName?: Maybe<Scalars['String']>;
  /** Label for the media frame filter. */
  uploadedToThisItem?: Maybe<Scalars['String']>;
  /** Label in the media frame for using a featured image. */
  useFeaturedImage?: Maybe<Scalars['String']>;
  /** Label for viewing a singular item. */
  viewItem?: Maybe<Scalars['String']>;
  /** Label for viewing post type archives. */
  viewItems?: Maybe<Scalars['String']>;
};

/** Nodes that can be seen in a preview (unpublished) state. */
export type Previewable = {
  /** Whether the object is a node in the preview state */
  isPreview?: Maybe<Scalars['Boolean']>;
  /** The database id of the preview node */
  previewRevisionDatabaseId?: Maybe<Scalars['Int']>;
  /** Whether the object is a node in the preview state */
  previewRevisionId?: Maybe<Scalars['ID']>;
};

/** The reading setting type */
export type ReadingSettings = {
  __typename?: 'ReadingSettings';
  /** The ID of the page that should display the latest posts */
  pageForPosts?: Maybe<Scalars['Int']>;
  /** The ID of the page that should be displayed on the front page */
  pageOnFront?: Maybe<Scalars['Int']>;
  /** Blog pages show at most. */
  postsPerPage?: Maybe<Scalars['Int']>;
  /** What to show on the front page */
  showOnFront?: Maybe<Scalars['String']>;
};

/** The reference type */
export type Reference = ContentNode & DatabaseIdentifier & MenuItemLinkable & Node & NodeWithContentEditor & NodeWithEditorBlocks & NodeWithFeaturedImage & NodeWithTemplate & NodeWithTitle & Previewable & UniformResourceIdentifiable & {
  __typename?: 'Reference';
  /** @deprecated Deprecated in favor of using Next.js pages */
  conditionalTags?: Maybe<ConditionalTags>;
  /** The content of the post. */
  content?: Maybe<Scalars['String']>;
  /** Connection between the ContentNode type and the ContentType type */
  contentType?: Maybe<ContentNodeToContentTypeConnectionEdge>;
  /** The name of the Content Type the node belongs to */
  contentTypeName: Scalars['String'];
  /** The unique identifier stored in the database */
  databaseId: Scalars['Int'];
  /** Post publishing date. */
  date?: Maybe<Scalars['String']>;
  /** The publishing date set in GMT. */
  dateGmt?: Maybe<Scalars['String']>;
  /** The desired slug of the post */
  desiredSlug?: Maybe<Scalars['String']>;
  /** If a user has edited the node within the past 15 seconds, this will return the user that last edited. Null if the edit lock doesn&#039;t exist or is greater than 15 seconds */
  editingLockedBy?: Maybe<ContentNodeToEditLockConnectionEdge>;
  /** List of editor blocks */
  editorBlocks?: Maybe<Array<Maybe<EditorBlock>>>;
  /** The RSS enclosure for the object */
  enclosure?: Maybe<Scalars['String']>;
  /** Connection between the ContentNode type and the EnqueuedScript type */
  enqueuedScripts?: Maybe<ContentNodeToEnqueuedScriptConnection>;
  /** Connection between the ContentNode type and the EnqueuedStylesheet type */
  enqueuedStylesheets?: Maybe<ContentNodeToEnqueuedStylesheetConnection>;
  /** Connection between the NodeWithFeaturedImage type and the MediaItem type */
  featuredImage?: Maybe<NodeWithFeaturedImageToMediaItemConnectionEdge>;
  /** The database identifier for the featured image node assigned to the content node */
  featuredImageDatabaseId?: Maybe<Scalars['Int']>;
  /** Globally unique ID of the featured image assigned to the node */
  featuredImageId?: Maybe<Scalars['ID']>;
  /** The global unique identifier for this post. This currently matches the value stored in WP_Post-&gt;guid and the guid column in the &quot;post_objects&quot; database table. */
  guid?: Maybe<Scalars['String']>;
  /** The globally unique identifier of the faust_reference object. */
  id: Scalars['ID'];
  /** Whether the node is a Content Node */
  isContentNode: Scalars['Boolean'];
  /** Whether the object is a node in the preview state */
  isPreview?: Maybe<Scalars['Boolean']>;
  /** Whether the object is restricted from the current viewer */
  isRestricted?: Maybe<Scalars['Boolean']>;
  /** Whether the node is a Term */
  isTermNode: Scalars['Boolean'];
  /** The user that most recently edited the node */
  lastEditedBy?: Maybe<ContentNodeToEditLastConnectionEdge>;
  /** The permalink of the post */
  link?: Maybe<Scalars['String']>;
  /** The local modified time for a post. If a post was recently updated the modified field will change to match the corresponding time. */
  modified?: Maybe<Scalars['String']>;
  /** The GMT modified time for a post. If a post was recently updated the modified field will change to match the corresponding time in GMT. */
  modifiedGmt?: Maybe<Scalars['String']>;
  /** Connection between the Reference type and the reference type */
  preview?: Maybe<ReferenceToPreviewConnectionEdge>;
  /** The database id of the preview node */
  previewRevisionDatabaseId?: Maybe<Scalars['Int']>;
  /** Whether the object is a node in the preview state */
  previewRevisionId?: Maybe<Scalars['ID']>;
  /**
   * The id field matches the WP_Post-&gt;ID field.
   * @deprecated Deprecated in favor of the databaseId field
   */
  referenceId: Scalars['Int'];
  /** The uri slug for the post. This is equivalent to the WP_Post-&gt;post_name field and the post_name column in the database for the &quot;post_objects&quot; table. */
  slug?: Maybe<Scalars['String']>;
  /** The current status of the object */
  status?: Maybe<Scalars['String']>;
  /** The template assigned to the node */
  template?: Maybe<ContentTemplate>;
  templates?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** The title of the post. This is currently just the raw title. An amendment to support rendered title needs to be made. */
  title?: Maybe<Scalars['String']>;
  /** The unique resource identifier path */
  uri?: Maybe<Scalars['String']>;
};


/** The reference type */
export type ReferenceContentArgs = {
  format?: InputMaybe<PostObjectFieldFormatEnum>;
};


/** The reference type */
export type ReferenceEditorBlocksArgs = {
  flat?: InputMaybe<Scalars['Boolean']>;
};


/** The reference type */
export type ReferenceEnqueuedScriptsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


/** The reference type */
export type ReferenceEnqueuedStylesheetsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


/** The reference type */
export type ReferenceTitleArgs = {
  format?: InputMaybe<PostObjectFieldFormatEnum>;
};

/** Connection to reference Nodes */
export type ReferenceConnection = {
  /** A list of edges (relational context) between RootQuery and connected reference Nodes */
  edges: Array<ReferenceConnectionEdge>;
  /** A list of connected reference Nodes */
  nodes: Array<Reference>;
  /** Information about pagination in a connection. */
  pageInfo: ReferenceConnectionPageInfo;
};

/** Edge between a Node and a connected reference */
export type ReferenceConnectionEdge = {
  /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
  cursor?: Maybe<Scalars['String']>;
  /** The connected reference Node */
  node: Reference;
};

/** Page Info on the connected ReferenceConnectionEdge */
export type ReferenceConnectionPageInfo = {
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
};

/** The Type of Identifier used to fetch a single resource. Default is ID. */
export enum ReferenceIdType {
  /** Identify a resource by the Database ID. */
  DatabaseId = 'DATABASE_ID',
  /** Identify a resource by the (hashed) Global ID. */
  Id = 'ID',
  /** Identify a resource by the slug. Available to non-hierarchcial Types where the slug is a unique identifier. */
  Slug = 'SLUG',
  /** Identify a resource by the URI. */
  Uri = 'URI'
}

/** Connection between the Reference type and the reference type */
export type ReferenceToPreviewConnectionEdge = Edge & OneToOneConnection & ReferenceConnectionEdge & {
  __typename?: 'ReferenceToPreviewConnectionEdge';
  /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
  cursor?: Maybe<Scalars['String']>;
  /** The node of the connection, without the edges */
  node: Reference;
};

/** Input for the registerUser mutation. */
export type RegisterUserInput = {
  /** User's AOL IM account. */
  aim?: InputMaybe<Scalars['String']>;
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** A string containing content about the user. */
  description?: InputMaybe<Scalars['String']>;
  /** A string that will be shown on the site. Defaults to user's username. It is likely that you will want to change this, for both appearance and security through obscurity (that is if you dont use and delete the default admin user). */
  displayName?: InputMaybe<Scalars['String']>;
  /** A string containing the user's email address. */
  email?: InputMaybe<Scalars['String']>;
  /** 	The user's first name. */
  firstName?: InputMaybe<Scalars['String']>;
  /** User's Jabber account. */
  jabber?: InputMaybe<Scalars['String']>;
  /** The user's last name. */
  lastName?: InputMaybe<Scalars['String']>;
  /** User's locale. */
  locale?: InputMaybe<Scalars['String']>;
  /** A string that contains a URL-friendly name for the user. The default is the user's username. */
  nicename?: InputMaybe<Scalars['String']>;
  /** The user's nickname, defaults to the user's username. */
  nickname?: InputMaybe<Scalars['String']>;
  /** A string that contains the plain text password for the user. */
  password?: InputMaybe<Scalars['String']>;
  /** The date the user registered. Format is Y-m-d H:i:s. */
  registered?: InputMaybe<Scalars['String']>;
  /** A string for whether to enable the rich editor or not. False if not empty. */
  richEditing?: InputMaybe<Scalars['String']>;
  /** A string that contains the user's username. */
  username: Scalars['String'];
  /** A string containing the user's URL for the user's web site. */
  websiteUrl?: InputMaybe<Scalars['String']>;
  /** User's Yahoo IM account. */
  yim?: InputMaybe<Scalars['String']>;
};

/** The payload for the registerUser mutation. */
export type RegisterUserPayload = {
  __typename?: 'RegisterUserPayload';
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The User object mutation type. */
  user?: Maybe<User>;
};

/** The logical relation between each item in the array when there are more than one. */
export enum RelationEnum {
  /** The logical AND condition returns true if both operands are true, otherwise, it returns false. */
  And = 'AND',
  /** The logical OR condition returns false if both operands are false, otherwise, it returns true. */
  Or = 'OR'
}

/** Input for the resetUserPassword mutation. */
export type ResetUserPasswordInput = {
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** Password reset key */
  key?: InputMaybe<Scalars['String']>;
  /** The user's login (username). */
  login?: InputMaybe<Scalars['String']>;
  /** The new password. */
  password?: InputMaybe<Scalars['String']>;
};

/** The payload for the resetUserPassword mutation. */
export type ResetUserPasswordPayload = {
  __typename?: 'ResetUserPasswordPayload';
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The User object mutation type. */
  user?: Maybe<User>;
};

/** Input for the restoreComment mutation. */
export type RestoreCommentInput = {
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The ID of the comment to be restored */
  id: Scalars['ID'];
};

/** The payload for the restoreComment mutation. */
export type RestoreCommentPayload = {
  __typename?: 'RestoreCommentPayload';
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The restored comment object */
  comment?: Maybe<Comment>;
  /** The ID of the restored comment */
  restoredId?: Maybe<Scalars['ID']>;
};

/** The root mutation */
export type RootMutation = {
  __typename?: 'RootMutation';
  /** The createCategory mutation */
  createCategory?: Maybe<CreateCategoryPayload>;
  /** The createComment mutation */
  createComment?: Maybe<CreateCommentPayload>;
  /** The createExplanation mutation */
  createExplanation?: Maybe<CreateExplanationPayload>;
  /** The createHowToGuide mutation */
  createHowToGuide?: Maybe<CreateHowToGuidePayload>;
  /** The createMediaItem mutation */
  createMediaItem?: Maybe<CreateMediaItemPayload>;
  /** The createPage mutation */
  createPage?: Maybe<CreatePagePayload>;
  /** The createPost mutation */
  createPost?: Maybe<CreatePostPayload>;
  /** The createPostFormat mutation */
  createPostFormat?: Maybe<CreatePostFormatPayload>;
  /** The createReference mutation */
  createReference?: Maybe<CreateReferencePayload>;
  /** The createTag mutation */
  createTag?: Maybe<CreateTagPayload>;
  /** The createTutorial mutation */
  createTutorial?: Maybe<CreateTutorialPayload>;
  /** The createUser mutation */
  createUser?: Maybe<CreateUserPayload>;
  /** The deleteCategory mutation */
  deleteCategory?: Maybe<DeleteCategoryPayload>;
  /** The deleteComment mutation */
  deleteComment?: Maybe<DeleteCommentPayload>;
  /** The deleteExplanation mutation */
  deleteExplanation?: Maybe<DeleteExplanationPayload>;
  /** The deleteHowToGuide mutation */
  deleteHowToGuide?: Maybe<DeleteHowToGuidePayload>;
  /** The deleteMediaItem mutation */
  deleteMediaItem?: Maybe<DeleteMediaItemPayload>;
  /** The deletePage mutation */
  deletePage?: Maybe<DeletePagePayload>;
  /** The deletePost mutation */
  deletePost?: Maybe<DeletePostPayload>;
  /** The deletePostFormat mutation */
  deletePostFormat?: Maybe<DeletePostFormatPayload>;
  /** The deleteReference mutation */
  deleteReference?: Maybe<DeleteReferencePayload>;
  /** The deleteTag mutation */
  deleteTag?: Maybe<DeleteTagPayload>;
  /** The deleteTutorial mutation */
  deleteTutorial?: Maybe<DeleteTutorialPayload>;
  /** The deleteUser mutation */
  deleteUser?: Maybe<DeleteUserPayload>;
  /** The generateAuthorizationCode mutation */
  generateAuthorizationCode?: Maybe<GenerateAuthorizationCodePayload>;
  /** Increase the count. */
  increaseCount?: Maybe<Scalars['Int']>;
  /** The registerUser mutation */
  registerUser?: Maybe<RegisterUserPayload>;
  /** The resetUserPassword mutation */
  resetUserPassword?: Maybe<ResetUserPasswordPayload>;
  /** The restoreComment mutation */
  restoreComment?: Maybe<RestoreCommentPayload>;
  /** Send password reset email to user */
  sendPasswordResetEmail?: Maybe<SendPasswordResetEmailPayload>;
  /** The updateCategory mutation */
  updateCategory?: Maybe<UpdateCategoryPayload>;
  /** The updateComment mutation */
  updateComment?: Maybe<UpdateCommentPayload>;
  /** The updateExplanation mutation */
  updateExplanation?: Maybe<UpdateExplanationPayload>;
  /** The updateHowToGuide mutation */
  updateHowToGuide?: Maybe<UpdateHowToGuidePayload>;
  /** The updateMediaItem mutation */
  updateMediaItem?: Maybe<UpdateMediaItemPayload>;
  /** The updatePage mutation */
  updatePage?: Maybe<UpdatePagePayload>;
  /** The updatePost mutation */
  updatePost?: Maybe<UpdatePostPayload>;
  /** The updatePostFormat mutation */
  updatePostFormat?: Maybe<UpdatePostFormatPayload>;
  /** The updateReference mutation */
  updateReference?: Maybe<UpdateReferencePayload>;
  /** The updateSettings mutation */
  updateSettings?: Maybe<UpdateSettingsPayload>;
  /** The updateTag mutation */
  updateTag?: Maybe<UpdateTagPayload>;
  /** The updateTutorial mutation */
  updateTutorial?: Maybe<UpdateTutorialPayload>;
  /** The updateUser mutation */
  updateUser?: Maybe<UpdateUserPayload>;
};


/** The root mutation */
export type RootMutationCreateCategoryArgs = {
  input: CreateCategoryInput;
};


/** The root mutation */
export type RootMutationCreateCommentArgs = {
  input: CreateCommentInput;
};


/** The root mutation */
export type RootMutationCreateExplanationArgs = {
  input: CreateExplanationInput;
};


/** The root mutation */
export type RootMutationCreateHowToGuideArgs = {
  input: CreateHowToGuideInput;
};


/** The root mutation */
export type RootMutationCreateMediaItemArgs = {
  input: CreateMediaItemInput;
};


/** The root mutation */
export type RootMutationCreatePageArgs = {
  input: CreatePageInput;
};


/** The root mutation */
export type RootMutationCreatePostArgs = {
  input: CreatePostInput;
};


/** The root mutation */
export type RootMutationCreatePostFormatArgs = {
  input: CreatePostFormatInput;
};


/** The root mutation */
export type RootMutationCreateReferenceArgs = {
  input: CreateReferenceInput;
};


/** The root mutation */
export type RootMutationCreateTagArgs = {
  input: CreateTagInput;
};


/** The root mutation */
export type RootMutationCreateTutorialArgs = {
  input: CreateTutorialInput;
};


/** The root mutation */
export type RootMutationCreateUserArgs = {
  input: CreateUserInput;
};


/** The root mutation */
export type RootMutationDeleteCategoryArgs = {
  input: DeleteCategoryInput;
};


/** The root mutation */
export type RootMutationDeleteCommentArgs = {
  input: DeleteCommentInput;
};


/** The root mutation */
export type RootMutationDeleteExplanationArgs = {
  input: DeleteExplanationInput;
};


/** The root mutation */
export type RootMutationDeleteHowToGuideArgs = {
  input: DeleteHowToGuideInput;
};


/** The root mutation */
export type RootMutationDeleteMediaItemArgs = {
  input: DeleteMediaItemInput;
};


/** The root mutation */
export type RootMutationDeletePageArgs = {
  input: DeletePageInput;
};


/** The root mutation */
export type RootMutationDeletePostArgs = {
  input: DeletePostInput;
};


/** The root mutation */
export type RootMutationDeletePostFormatArgs = {
  input: DeletePostFormatInput;
};


/** The root mutation */
export type RootMutationDeleteReferenceArgs = {
  input: DeleteReferenceInput;
};


/** The root mutation */
export type RootMutationDeleteTagArgs = {
  input: DeleteTagInput;
};


/** The root mutation */
export type RootMutationDeleteTutorialArgs = {
  input: DeleteTutorialInput;
};


/** The root mutation */
export type RootMutationDeleteUserArgs = {
  input: DeleteUserInput;
};


/** The root mutation */
export type RootMutationGenerateAuthorizationCodeArgs = {
  input: GenerateAuthorizationCodeInput;
};


/** The root mutation */
export type RootMutationIncreaseCountArgs = {
  count?: InputMaybe<Scalars['Int']>;
};


/** The root mutation */
export type RootMutationRegisterUserArgs = {
  input: RegisterUserInput;
};


/** The root mutation */
export type RootMutationResetUserPasswordArgs = {
  input: ResetUserPasswordInput;
};


/** The root mutation */
export type RootMutationRestoreCommentArgs = {
  input: RestoreCommentInput;
};


/** The root mutation */
export type RootMutationSendPasswordResetEmailArgs = {
  input: SendPasswordResetEmailInput;
};


/** The root mutation */
export type RootMutationUpdateCategoryArgs = {
  input: UpdateCategoryInput;
};


/** The root mutation */
export type RootMutationUpdateCommentArgs = {
  input: UpdateCommentInput;
};


/** The root mutation */
export type RootMutationUpdateExplanationArgs = {
  input: UpdateExplanationInput;
};


/** The root mutation */
export type RootMutationUpdateHowToGuideArgs = {
  input: UpdateHowToGuideInput;
};


/** The root mutation */
export type RootMutationUpdateMediaItemArgs = {
  input: UpdateMediaItemInput;
};


/** The root mutation */
export type RootMutationUpdatePageArgs = {
  input: UpdatePageInput;
};


/** The root mutation */
export type RootMutationUpdatePostArgs = {
  input: UpdatePostInput;
};


/** The root mutation */
export type RootMutationUpdatePostFormatArgs = {
  input: UpdatePostFormatInput;
};


/** The root mutation */
export type RootMutationUpdateReferenceArgs = {
  input: UpdateReferenceInput;
};


/** The root mutation */
export type RootMutationUpdateSettingsArgs = {
  input: UpdateSettingsInput;
};


/** The root mutation */
export type RootMutationUpdateTagArgs = {
  input: UpdateTagInput;
};


/** The root mutation */
export type RootMutationUpdateTutorialArgs = {
  input: UpdateTutorialInput;
};


/** The root mutation */
export type RootMutationUpdateUserArgs = {
  input: UpdateUserInput;
};

/** The root entry point into the Graph */
export type RootQuery = {
  __typename?: 'RootQuery';
  /** Entry point to get all settings for the site */
  allSettings?: Maybe<Settings>;
  /** Connection between the RootQuery type and the category type */
  categories?: Maybe<RootQueryToCategoryConnection>;
  /** A 0bject */
  category?: Maybe<Category>;
  /** Returns a Comment */
  comment?: Maybe<Comment>;
  /** Connection between the RootQuery type and the Comment type */
  comments?: Maybe<RootQueryToCommentConnection>;
  /** A node used to manage content */
  contentNode?: Maybe<ContentNode>;
  /** Connection between the RootQuery type and the ContentNode type */
  contentNodes?: Maybe<RootQueryToContentNodeConnection>;
  /** Fetch a Content Type node by unique Identifier */
  contentType?: Maybe<ContentType>;
  /** Connection between the RootQuery type and the ContentType type */
  contentTypes?: Maybe<RootQueryToContentTypeConnection>;
  /** Fields of the &#039;DiscussionSettings&#039; settings group */
  discussionSettings?: Maybe<DiscussionSettings>;
  /** An object of the explanation Type.  */
  explanation?: Maybe<Explanation>;
  /**
   * A explanation object
   * @deprecated Deprecated in favor of using the single entry point for this type with ID and IDType fields. For example, instead of postBy( id: &quot;&quot; ), use post(id: &quot;&quot; idType: &quot;&quot;)
   */
  explanationBy?: Maybe<Explanation>;
  /** Connection between the RootQuery type and the explanation type */
  explanations?: Maybe<RootQueryToExplanationConnection>;
  /** Fields of the &#039;GeneralSettings&#039; settings group */
  generalSettings?: Maybe<GeneralSettings>;
  /** Returns the stylesheet resulting of merging core, theme, and user data. */
  globalStylesheet?: Maybe<Scalars['String']>;
  /** An object of the howToGuide Type.  */
  howToGuide?: Maybe<HowToGuide>;
  /**
   * A howToGuide object
   * @deprecated Deprecated in favor of using the single entry point for this type with ID and IDType fields. For example, instead of postBy( id: &quot;&quot; ), use post(id: &quot;&quot; idType: &quot;&quot;)
   */
  howToGuideBy?: Maybe<HowToGuide>;
  /** Connection between the RootQuery type and the howToGuide type */
  howToGuides?: Maybe<RootQueryToHowToGuideConnection>;
  /** An object of the mediaItem Type.  */
  mediaItem?: Maybe<MediaItem>;
  /**
   * A mediaItem object
   * @deprecated Deprecated in favor of using the single entry point for this type with ID and IDType fields. For example, instead of postBy( id: &quot;&quot; ), use post(id: &quot;&quot; idType: &quot;&quot;)
   */
  mediaItemBy?: Maybe<MediaItem>;
  /** Connection between the RootQuery type and the mediaItem type */
  mediaItems?: Maybe<RootQueryToMediaItemConnection>;
  /** A WordPress navigation menu */
  menu?: Maybe<Menu>;
  /** A WordPress navigation menu item */
  menuItem?: Maybe<MenuItem>;
  /** Connection between the RootQuery type and the MenuItem type */
  menuItems?: Maybe<RootQueryToMenuItemConnection>;
  /** Connection between the RootQuery type and the Menu type */
  menus?: Maybe<RootQueryToMenuConnection>;
  /** Fetches an object given its ID */
  node?: Maybe<Node>;
  /** Fetches an object given its Unique Resource Identifier */
  nodeByUri?: Maybe<UniformResourceIdentifiable>;
  /** An object of the page Type.  */
  page?: Maybe<Page>;
  /**
   * A page object
   * @deprecated Deprecated in favor of using the single entry point for this type with ID and IDType fields. For example, instead of postBy( id: &quot;&quot; ), use post(id: &quot;&quot; idType: &quot;&quot;)
   */
  pageBy?: Maybe<Page>;
  /** Connection between the RootQuery type and the page type */
  pages?: Maybe<RootQueryToPageConnection>;
  /** A WordPress plugin */
  plugin?: Maybe<Plugin>;
  /** Connection between the RootQuery type and the Plugin type */
  plugins?: Maybe<RootQueryToPluginConnection>;
  /** An object of the post Type.  */
  post?: Maybe<Post>;
  /**
   * A post object
   * @deprecated Deprecated in favor of using the single entry point for this type with ID and IDType fields. For example, instead of postBy( id: &quot;&quot; ), use post(id: &quot;&quot; idType: &quot;&quot;)
   */
  postBy?: Maybe<Post>;
  /** A 0bject */
  postFormat?: Maybe<PostFormat>;
  /** Connection between the RootQuery type and the postFormat type */
  postFormats?: Maybe<RootQueryToPostFormatConnection>;
  /** Connection between the RootQuery type and the post type */
  posts?: Maybe<RootQueryToPostConnection>;
  /** Fields of the &#039;ReadingSettings&#039; settings group */
  readingSettings?: Maybe<ReadingSettings>;
  /** An object of the reference Type.  */
  reference?: Maybe<Reference>;
  /**
   * A reference object
   * @deprecated Deprecated in favor of using the single entry point for this type with ID and IDType fields. For example, instead of postBy( id: &quot;&quot; ), use post(id: &quot;&quot; idType: &quot;&quot;)
   */
  referenceBy?: Maybe<Reference>;
  /** Connection between the RootQuery type and the reference type */
  references?: Maybe<RootQueryToReferenceConnection>;
  /** Connection between the RootQuery type and the EnqueuedScript type */
  registeredScripts?: Maybe<RootQueryToEnqueuedScriptConnection>;
  /** Connection between the RootQuery type and the EnqueuedStylesheet type */
  registeredStylesheets?: Maybe<RootQueryToEnqueuedStylesheetConnection>;
  /** Connection between the RootQuery type and the ContentNode type */
  revisions?: Maybe<RootQueryToRevisionsConnection>;
  /** A 0bject */
  tag?: Maybe<Tag>;
  /** Connection between the RootQuery type and the tag type */
  tags?: Maybe<RootQueryToTagConnection>;
  /** Connection between the RootQuery type and the Taxonomy type */
  taxonomies?: Maybe<RootQueryToTaxonomyConnection>;
  /** Fetch a Taxonomy node by unique Identifier */
  taxonomy?: Maybe<Taxonomy>;
  /** A node in a taxonomy used to group and relate content nodes */
  termNode?: Maybe<TermNode>;
  /** Connection between the RootQuery type and the TermNode type */
  terms?: Maybe<RootQueryToTermNodeConnection>;
  /** A Theme object */
  theme?: Maybe<Theme>;
  /** Connection between the RootQuery type and the Theme type */
  themes?: Maybe<RootQueryToThemeConnection>;
  /** An object of the tutorial Type.  */
  tutorial?: Maybe<Tutorial>;
  /**
   * A tutorial object
   * @deprecated Deprecated in favor of using the single entry point for this type with ID and IDType fields. For example, instead of postBy( id: &quot;&quot; ), use post(id: &quot;&quot; idType: &quot;&quot;)
   */
  tutorialBy?: Maybe<Tutorial>;
  /** Connection between the RootQuery type and the tutorial type */
  tutorials?: Maybe<RootQueryToTutorialConnection>;
  /** Returns a user */
  user?: Maybe<User>;
  /** Returns a user role */
  userRole?: Maybe<UserRole>;
  /** Connection between the RootQuery type and the UserRole type */
  userRoles?: Maybe<RootQueryToUserRoleConnection>;
  /** Connection between the RootQuery type and the User type */
  users?: Maybe<RootQueryToUserConnection>;
  /** Returns the current user */
  viewer?: Maybe<User>;
  /** Fields of the &#039;WritingSettings&#039; settings group */
  writingSettings?: Maybe<WritingSettings>;
};


/** The root entry point into the Graph */
export type RootQueryCategoriesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<RootQueryToCategoryConnectionWhereArgs>;
};


/** The root entry point into the Graph */
export type RootQueryCategoryArgs = {
  id: Scalars['ID'];
  idType?: InputMaybe<CategoryIdType>;
};


/** The root entry point into the Graph */
export type RootQueryCommentArgs = {
  id: Scalars['ID'];
  idType?: InputMaybe<CommentNodeIdTypeEnum>;
};


/** The root entry point into the Graph */
export type RootQueryCommentsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<RootQueryToCommentConnectionWhereArgs>;
};


/** The root entry point into the Graph */
export type RootQueryContentNodeArgs = {
  asPreview?: InputMaybe<Scalars['Boolean']>;
  contentType?: InputMaybe<ContentTypeEnum>;
  id: Scalars['ID'];
  idType?: InputMaybe<ContentNodeIdTypeEnum>;
};


/** The root entry point into the Graph */
export type RootQueryContentNodesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<RootQueryToContentNodeConnectionWhereArgs>;
};


/** The root entry point into the Graph */
export type RootQueryContentTypeArgs = {
  id: Scalars['ID'];
  idType?: InputMaybe<ContentTypeIdTypeEnum>;
};


/** The root entry point into the Graph */
export type RootQueryContentTypesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


/** The root entry point into the Graph */
export type RootQueryExplanationArgs = {
  asPreview?: InputMaybe<Scalars['Boolean']>;
  id: Scalars['ID'];
  idType?: InputMaybe<ExplanationIdType>;
};


/** The root entry point into the Graph */
export type RootQueryExplanationByArgs = {
  explanationId?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['ID']>;
  slug?: InputMaybe<Scalars['String']>;
  uri?: InputMaybe<Scalars['String']>;
};


/** The root entry point into the Graph */
export type RootQueryExplanationsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<RootQueryToExplanationConnectionWhereArgs>;
};


/** The root entry point into the Graph */
export type RootQueryGlobalStylesheetArgs = {
  types?: InputMaybe<Array<InputMaybe<GlobalStylesheetTypesEnum>>>;
};


/** The root entry point into the Graph */
export type RootQueryHowToGuideArgs = {
  asPreview?: InputMaybe<Scalars['Boolean']>;
  id: Scalars['ID'];
  idType?: InputMaybe<HowToGuideIdType>;
};


/** The root entry point into the Graph */
export type RootQueryHowToGuideByArgs = {
  howToGuideId?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['ID']>;
  slug?: InputMaybe<Scalars['String']>;
  uri?: InputMaybe<Scalars['String']>;
};


/** The root entry point into the Graph */
export type RootQueryHowToGuidesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<RootQueryToHowToGuideConnectionWhereArgs>;
};


/** The root entry point into the Graph */
export type RootQueryMediaItemArgs = {
  asPreview?: InputMaybe<Scalars['Boolean']>;
  id: Scalars['ID'];
  idType?: InputMaybe<MediaItemIdType>;
};


/** The root entry point into the Graph */
export type RootQueryMediaItemByArgs = {
  id?: InputMaybe<Scalars['ID']>;
  mediaItemId?: InputMaybe<Scalars['Int']>;
  slug?: InputMaybe<Scalars['String']>;
  uri?: InputMaybe<Scalars['String']>;
};


/** The root entry point into the Graph */
export type RootQueryMediaItemsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<RootQueryToMediaItemConnectionWhereArgs>;
};


/** The root entry point into the Graph */
export type RootQueryMenuArgs = {
  id: Scalars['ID'];
  idType?: InputMaybe<MenuNodeIdTypeEnum>;
};


/** The root entry point into the Graph */
export type RootQueryMenuItemArgs = {
  id: Scalars['ID'];
  idType?: InputMaybe<MenuItemNodeIdTypeEnum>;
};


/** The root entry point into the Graph */
export type RootQueryMenuItemsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<RootQueryToMenuItemConnectionWhereArgs>;
};


/** The root entry point into the Graph */
export type RootQueryMenusArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<RootQueryToMenuConnectionWhereArgs>;
};


/** The root entry point into the Graph */
export type RootQueryNodeArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


/** The root entry point into the Graph */
export type RootQueryNodeByUriArgs = {
  uri: Scalars['String'];
};


/** The root entry point into the Graph */
export type RootQueryPageArgs = {
  asPreview?: InputMaybe<Scalars['Boolean']>;
  id: Scalars['ID'];
  idType?: InputMaybe<PageIdType>;
};


/** The root entry point into the Graph */
export type RootQueryPageByArgs = {
  id?: InputMaybe<Scalars['ID']>;
  pageId?: InputMaybe<Scalars['Int']>;
  uri?: InputMaybe<Scalars['String']>;
};


/** The root entry point into the Graph */
export type RootQueryPagesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<RootQueryToPageConnectionWhereArgs>;
};


/** The root entry point into the Graph */
export type RootQueryPluginArgs = {
  id: Scalars['ID'];
};


/** The root entry point into the Graph */
export type RootQueryPluginsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<RootQueryToPluginConnectionWhereArgs>;
};


/** The root entry point into the Graph */
export type RootQueryPostArgs = {
  asPreview?: InputMaybe<Scalars['Boolean']>;
  id: Scalars['ID'];
  idType?: InputMaybe<PostIdType>;
};


/** The root entry point into the Graph */
export type RootQueryPostByArgs = {
  id?: InputMaybe<Scalars['ID']>;
  postId?: InputMaybe<Scalars['Int']>;
  slug?: InputMaybe<Scalars['String']>;
  uri?: InputMaybe<Scalars['String']>;
};


/** The root entry point into the Graph */
export type RootQueryPostFormatArgs = {
  id: Scalars['ID'];
  idType?: InputMaybe<PostFormatIdType>;
};


/** The root entry point into the Graph */
export type RootQueryPostFormatsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<RootQueryToPostFormatConnectionWhereArgs>;
};


/** The root entry point into the Graph */
export type RootQueryPostsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<RootQueryToPostConnectionWhereArgs>;
};


/** The root entry point into the Graph */
export type RootQueryReferenceArgs = {
  asPreview?: InputMaybe<Scalars['Boolean']>;
  id: Scalars['ID'];
  idType?: InputMaybe<ReferenceIdType>;
};


/** The root entry point into the Graph */
export type RootQueryReferenceByArgs = {
  id?: InputMaybe<Scalars['ID']>;
  referenceId?: InputMaybe<Scalars['Int']>;
  slug?: InputMaybe<Scalars['String']>;
  uri?: InputMaybe<Scalars['String']>;
};


/** The root entry point into the Graph */
export type RootQueryReferencesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<RootQueryToReferenceConnectionWhereArgs>;
};


/** The root entry point into the Graph */
export type RootQueryRegisteredScriptsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


/** The root entry point into the Graph */
export type RootQueryRegisteredStylesheetsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


/** The root entry point into the Graph */
export type RootQueryRevisionsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<RootQueryToRevisionsConnectionWhereArgs>;
};


/** The root entry point into the Graph */
export type RootQueryTagArgs = {
  id: Scalars['ID'];
  idType?: InputMaybe<TagIdType>;
};


/** The root entry point into the Graph */
export type RootQueryTagsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<RootQueryToTagConnectionWhereArgs>;
};


/** The root entry point into the Graph */
export type RootQueryTaxonomiesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


/** The root entry point into the Graph */
export type RootQueryTaxonomyArgs = {
  id: Scalars['ID'];
  idType?: InputMaybe<TaxonomyIdTypeEnum>;
};


/** The root entry point into the Graph */
export type RootQueryTermNodeArgs = {
  id: Scalars['ID'];
  idType?: InputMaybe<TermNodeIdTypeEnum>;
  taxonomy?: InputMaybe<TaxonomyEnum>;
};


/** The root entry point into the Graph */
export type RootQueryTermsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<RootQueryToTermNodeConnectionWhereArgs>;
};


/** The root entry point into the Graph */
export type RootQueryThemeArgs = {
  id: Scalars['ID'];
};


/** The root entry point into the Graph */
export type RootQueryThemesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


/** The root entry point into the Graph */
export type RootQueryTutorialArgs = {
  asPreview?: InputMaybe<Scalars['Boolean']>;
  id: Scalars['ID'];
  idType?: InputMaybe<TutorialIdType>;
};


/** The root entry point into the Graph */
export type RootQueryTutorialByArgs = {
  id?: InputMaybe<Scalars['ID']>;
  slug?: InputMaybe<Scalars['String']>;
  tutorialId?: InputMaybe<Scalars['Int']>;
  uri?: InputMaybe<Scalars['String']>;
};


/** The root entry point into the Graph */
export type RootQueryTutorialsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<RootQueryToTutorialConnectionWhereArgs>;
};


/** The root entry point into the Graph */
export type RootQueryUserArgs = {
  id: Scalars['ID'];
  idType?: InputMaybe<UserNodeIdTypeEnum>;
};


/** The root entry point into the Graph */
export type RootQueryUserRoleArgs = {
  id: Scalars['ID'];
};


/** The root entry point into the Graph */
export type RootQueryUserRolesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


/** The root entry point into the Graph */
export type RootQueryUsersArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<RootQueryToUserConnectionWhereArgs>;
};

/** Connection between the RootQuery type and the category type */
export type RootQueryToCategoryConnection = CategoryConnection & Connection & {
  __typename?: 'RootQueryToCategoryConnection';
  /** Edges for the RootQueryToCategoryConnection connection */
  edges: Array<RootQueryToCategoryConnectionEdge>;
  /** The nodes of the connection, without the edges */
  nodes: Array<Category>;
  /** Information about pagination in a connection. */
  pageInfo: RootQueryToCategoryConnectionPageInfo;
};

/** An edge in a connection */
export type RootQueryToCategoryConnectionEdge = CategoryConnectionEdge & Edge & {
  __typename?: 'RootQueryToCategoryConnectionEdge';
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node: Category;
};

/** Page Info on the &quot;RootQueryToCategoryConnection&quot; */
export type RootQueryToCategoryConnectionPageInfo = CategoryConnectionPageInfo & PageInfo & WpPageInfo & {
  __typename?: 'RootQueryToCategoryConnectionPageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
};

/** Arguments for filtering the RootQueryToCategoryConnection connection */
export type RootQueryToCategoryConnectionWhereArgs = {
  /** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
  cacheDomain?: InputMaybe<Scalars['String']>;
  /** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
  childOf?: InputMaybe<Scalars['Int']>;
  /** True to limit results to terms that have no children. This parameter has no effect on non-hierarchical taxonomies. Default false. */
  childless?: InputMaybe<Scalars['Boolean']>;
  /** Retrieve terms where the description is LIKE the input value. Default empty. */
  descriptionLike?: InputMaybe<Scalars['String']>;
  /** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
  exclude?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Array of term ids to exclude along with all of their descendant terms. If $include is non-empty, $exclude_tree is ignored. Default empty array. */
  excludeTree?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Whether to hide terms not assigned to any posts. Accepts true or false. Default false */
  hideEmpty?: InputMaybe<Scalars['Boolean']>;
  /** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
  hierarchical?: InputMaybe<Scalars['Boolean']>;
  /** Array of term ids to include. Default empty array. */
  include?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Array of names to return term(s) for. Default empty. */
  name?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Retrieve terms where the name is LIKE the input value. Default empty. */
  nameLike?: InputMaybe<Scalars['String']>;
  /** Array of object IDs. Results will be limited to terms associated with these objects. */
  objectIds?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Direction the connection should be ordered in */
  order?: InputMaybe<OrderEnum>;
  /** Field(s) to order terms by. Defaults to 'name'. */
  orderby?: InputMaybe<TermObjectsConnectionOrderbyEnum>;
  /** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
  padCounts?: InputMaybe<Scalars['Boolean']>;
  /** Parent term ID to retrieve direct-child terms of. Default empty. */
  parent?: InputMaybe<Scalars['Int']>;
  /** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
  search?: InputMaybe<Scalars['String']>;
  /** Array of slugs to return term(s) for. Default empty. */
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomId?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomyId?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Whether to prime meta caches for matched terms. Default true. */
  updateTermMetaCache?: InputMaybe<Scalars['Boolean']>;
};

/** Connection between the RootQuery type and the Comment type */
export type RootQueryToCommentConnection = CommentConnection & Connection & {
  __typename?: 'RootQueryToCommentConnection';
  /** Edges for the RootQueryToCommentConnection connection */
  edges: Array<RootQueryToCommentConnectionEdge>;
  /** The nodes of the connection, without the edges */
  nodes: Array<Comment>;
  /** Information about pagination in a connection. */
  pageInfo: RootQueryToCommentConnectionPageInfo;
};

/** An edge in a connection */
export type RootQueryToCommentConnectionEdge = CommentConnectionEdge & Edge & {
  __typename?: 'RootQueryToCommentConnectionEdge';
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node: Comment;
};

/** Page Info on the &quot;RootQueryToCommentConnection&quot; */
export type RootQueryToCommentConnectionPageInfo = CommentConnectionPageInfo & PageInfo & WpPageInfo & {
  __typename?: 'RootQueryToCommentConnectionPageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
};

/** Arguments for filtering the RootQueryToCommentConnection connection */
export type RootQueryToCommentConnectionWhereArgs = {
  /** Comment author email address. */
  authorEmail?: InputMaybe<Scalars['String']>;
  /** Array of author IDs to include comments for. */
  authorIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Array of author IDs to exclude comments for. */
  authorNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Comment author URL. */
  authorUrl?: InputMaybe<Scalars['String']>;
  /** Array of comment IDs to include. */
  commentIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Array of IDs of users whose unapproved comments will be returned by the query regardless of status. */
  commentNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Include comments of a given type. */
  commentType?: InputMaybe<Scalars['String']>;
  /** Include comments from a given array of comment types. */
  commentTypeIn?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Exclude comments from a given array of comment types. */
  commentTypeNotIn?: InputMaybe<Scalars['String']>;
  /** Content object author ID to limit results by. */
  contentAuthor?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Array of author IDs to retrieve comments for. */
  contentAuthorIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Array of author IDs *not* to retrieve comments for. */
  contentAuthorNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Limit results to those affiliated with a given content object ID. */
  contentId?: InputMaybe<Scalars['ID']>;
  /** Array of content object IDs to include affiliated comments for. */
  contentIdIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Array of content object IDs to exclude affiliated comments for. */
  contentIdNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Content object name (i.e. slug ) to retrieve affiliated comments for. */
  contentName?: InputMaybe<Scalars['String']>;
  /** Content Object parent ID to retrieve affiliated comments for. */
  contentParent?: InputMaybe<Scalars['Int']>;
  /** Array of content object statuses to retrieve affiliated comments for. Pass 'any' to match any value. */
  contentStatus?: InputMaybe<Array<InputMaybe<PostStatusEnum>>>;
  /** Content object type or array of types to retrieve affiliated comments for. Pass 'any' to match any value. */
  contentType?: InputMaybe<Array<InputMaybe<ContentTypeEnum>>>;
  /** Array of IDs or email addresses of users whose unapproved comments will be returned by the query regardless of $status. Default empty */
  includeUnapproved?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Karma score to retrieve matching comments for. */
  karma?: InputMaybe<Scalars['Int']>;
  /** The cardinality of the order of the connection */
  order?: InputMaybe<OrderEnum>;
  /** Field to order the comments by. */
  orderby?: InputMaybe<CommentsConnectionOrderbyEnum>;
  /** Parent ID of comment to retrieve children of. */
  parent?: InputMaybe<Scalars['Int']>;
  /** Array of parent IDs of comments to retrieve children for. */
  parentIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Array of parent IDs of comments *not* to retrieve children for. */
  parentNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Search term(s) to retrieve matching comments for. */
  search?: InputMaybe<Scalars['String']>;
  /** Comment status to limit results by. */
  status?: InputMaybe<Scalars['String']>;
  /** Include comments for a specific user ID. */
  userId?: InputMaybe<Scalars['ID']>;
};

/** Connection between the RootQuery type and the ContentNode type */
export type RootQueryToContentNodeConnection = Connection & ContentNodeConnection & {
  __typename?: 'RootQueryToContentNodeConnection';
  /** Edges for the RootQueryToContentNodeConnection connection */
  edges: Array<RootQueryToContentNodeConnectionEdge>;
  /** The nodes of the connection, without the edges */
  nodes: Array<ContentNode>;
  /** Information about pagination in a connection. */
  pageInfo: RootQueryToContentNodeConnectionPageInfo;
};

/** An edge in a connection */
export type RootQueryToContentNodeConnectionEdge = ContentNodeConnectionEdge & Edge & {
  __typename?: 'RootQueryToContentNodeConnectionEdge';
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node: ContentNode;
};

/** Page Info on the &quot;RootQueryToContentNodeConnection&quot; */
export type RootQueryToContentNodeConnectionPageInfo = ContentNodeConnectionPageInfo & PageInfo & WpPageInfo & {
  __typename?: 'RootQueryToContentNodeConnectionPageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
};

/** Arguments for filtering the RootQueryToContentNodeConnection connection */
export type RootQueryToContentNodeConnectionWhereArgs = {
  /** The Types of content to filter */
  contentTypes?: InputMaybe<Array<InputMaybe<ContentTypeEnum>>>;
  /** Filter the connection based on dates */
  dateQuery?: InputMaybe<DateQueryInput>;
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword?: InputMaybe<Scalars['Boolean']>;
  /** Specific database ID of the object */
  id?: InputMaybe<Scalars['Int']>;
  /** Array of IDs for the objects to retrieve */
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Get objects with a specific mimeType property */
  mimeType?: InputMaybe<MimeTypeEnum>;
  /** Slug / post_name of the object */
  name?: InputMaybe<Scalars['String']>;
  /** Specify objects to retrieve. Use slugs */
  nameIn?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** What paramater to use to order the objects by. */
  orderby?: InputMaybe<Array<InputMaybe<PostObjectsConnectionOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: InputMaybe<Scalars['ID']>;
  /** Specify objects whose parent is in an array */
  parentIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Specify posts whose parent is not in an array */
  parentNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Show posts with a specific password. */
  password?: InputMaybe<Scalars['String']>;
  /** Show Posts based on a keyword search */
  search?: InputMaybe<Scalars['String']>;
  /** Retrieve posts where post status is in an array. */
  stati?: InputMaybe<Array<InputMaybe<PostStatusEnum>>>;
  /** Show posts with a specific status. */
  status?: InputMaybe<PostStatusEnum>;
  /** Title of the object */
  title?: InputMaybe<Scalars['String']>;
};

/** Connection between the RootQuery type and the ContentType type */
export type RootQueryToContentTypeConnection = Connection & ContentTypeConnection & {
  __typename?: 'RootQueryToContentTypeConnection';
  /** Edges for the RootQueryToContentTypeConnection connection */
  edges: Array<RootQueryToContentTypeConnectionEdge>;
  /** The nodes of the connection, without the edges */
  nodes: Array<ContentType>;
  /** Information about pagination in a connection. */
  pageInfo: RootQueryToContentTypeConnectionPageInfo;
};

/** An edge in a connection */
export type RootQueryToContentTypeConnectionEdge = ContentTypeConnectionEdge & Edge & {
  __typename?: 'RootQueryToContentTypeConnectionEdge';
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node: ContentType;
};

/** Page Info on the &quot;RootQueryToContentTypeConnection&quot; */
export type RootQueryToContentTypeConnectionPageInfo = ContentTypeConnectionPageInfo & PageInfo & WpPageInfo & {
  __typename?: 'RootQueryToContentTypeConnectionPageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
};

/** Connection between the RootQuery type and the EnqueuedScript type */
export type RootQueryToEnqueuedScriptConnection = Connection & EnqueuedScriptConnection & {
  __typename?: 'RootQueryToEnqueuedScriptConnection';
  /** Edges for the RootQueryToEnqueuedScriptConnection connection */
  edges: Array<RootQueryToEnqueuedScriptConnectionEdge>;
  /** The nodes of the connection, without the edges */
  nodes: Array<EnqueuedScript>;
  /** Information about pagination in a connection. */
  pageInfo: RootQueryToEnqueuedScriptConnectionPageInfo;
};

/** An edge in a connection */
export type RootQueryToEnqueuedScriptConnectionEdge = Edge & EnqueuedScriptConnectionEdge & {
  __typename?: 'RootQueryToEnqueuedScriptConnectionEdge';
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node: EnqueuedScript;
};

/** Page Info on the &quot;RootQueryToEnqueuedScriptConnection&quot; */
export type RootQueryToEnqueuedScriptConnectionPageInfo = EnqueuedScriptConnectionPageInfo & PageInfo & WpPageInfo & {
  __typename?: 'RootQueryToEnqueuedScriptConnectionPageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
};

/** Connection between the RootQuery type and the EnqueuedStylesheet type */
export type RootQueryToEnqueuedStylesheetConnection = Connection & EnqueuedStylesheetConnection & {
  __typename?: 'RootQueryToEnqueuedStylesheetConnection';
  /** Edges for the RootQueryToEnqueuedStylesheetConnection connection */
  edges: Array<RootQueryToEnqueuedStylesheetConnectionEdge>;
  /** The nodes of the connection, without the edges */
  nodes: Array<EnqueuedStylesheet>;
  /** Information about pagination in a connection. */
  pageInfo: RootQueryToEnqueuedStylesheetConnectionPageInfo;
};

/** An edge in a connection */
export type RootQueryToEnqueuedStylesheetConnectionEdge = Edge & EnqueuedStylesheetConnectionEdge & {
  __typename?: 'RootQueryToEnqueuedStylesheetConnectionEdge';
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node: EnqueuedStylesheet;
};

/** Page Info on the &quot;RootQueryToEnqueuedStylesheetConnection&quot; */
export type RootQueryToEnqueuedStylesheetConnectionPageInfo = EnqueuedStylesheetConnectionPageInfo & PageInfo & WpPageInfo & {
  __typename?: 'RootQueryToEnqueuedStylesheetConnectionPageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
};

/** Connection between the RootQuery type and the explanation type */
export type RootQueryToExplanationConnection = Connection & ExplanationConnection & {
  __typename?: 'RootQueryToExplanationConnection';
  /** Edges for the RootQueryToExplanationConnection connection */
  edges: Array<RootQueryToExplanationConnectionEdge>;
  /** The nodes of the connection, without the edges */
  nodes: Array<Explanation>;
  /** Information about pagination in a connection. */
  pageInfo: RootQueryToExplanationConnectionPageInfo;
};

/** An edge in a connection */
export type RootQueryToExplanationConnectionEdge = Edge & ExplanationConnectionEdge & {
  __typename?: 'RootQueryToExplanationConnectionEdge';
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node: Explanation;
};

/** Page Info on the &quot;RootQueryToExplanationConnection&quot; */
export type RootQueryToExplanationConnectionPageInfo = ExplanationConnectionPageInfo & PageInfo & WpPageInfo & {
  __typename?: 'RootQueryToExplanationConnectionPageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
};

/** Arguments for filtering the RootQueryToExplanationConnection connection */
export type RootQueryToExplanationConnectionWhereArgs = {
  /** Filter the connection based on dates */
  dateQuery?: InputMaybe<DateQueryInput>;
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword?: InputMaybe<Scalars['Boolean']>;
  /** Specific database ID of the object */
  id?: InputMaybe<Scalars['Int']>;
  /** Array of IDs for the objects to retrieve */
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Get objects with a specific mimeType property */
  mimeType?: InputMaybe<MimeTypeEnum>;
  /** Slug / post_name of the object */
  name?: InputMaybe<Scalars['String']>;
  /** Specify objects to retrieve. Use slugs */
  nameIn?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** What paramater to use to order the objects by. */
  orderby?: InputMaybe<Array<InputMaybe<PostObjectsConnectionOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: InputMaybe<Scalars['ID']>;
  /** Specify objects whose parent is in an array */
  parentIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Specify posts whose parent is not in an array */
  parentNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Show posts with a specific password. */
  password?: InputMaybe<Scalars['String']>;
  /** Show Posts based on a keyword search */
  search?: InputMaybe<Scalars['String']>;
  /** Retrieve posts where post status is in an array. */
  stati?: InputMaybe<Array<InputMaybe<PostStatusEnum>>>;
  /** Show posts with a specific status. */
  status?: InputMaybe<PostStatusEnum>;
  /** Title of the object */
  title?: InputMaybe<Scalars['String']>;
};

/** Connection between the RootQuery type and the howToGuide type */
export type RootQueryToHowToGuideConnection = Connection & HowToGuideConnection & {
  __typename?: 'RootQueryToHowToGuideConnection';
  /** Edges for the RootQueryToHowToGuideConnection connection */
  edges: Array<RootQueryToHowToGuideConnectionEdge>;
  /** The nodes of the connection, without the edges */
  nodes: Array<HowToGuide>;
  /** Information about pagination in a connection. */
  pageInfo: RootQueryToHowToGuideConnectionPageInfo;
};

/** An edge in a connection */
export type RootQueryToHowToGuideConnectionEdge = Edge & HowToGuideConnectionEdge & {
  __typename?: 'RootQueryToHowToGuideConnectionEdge';
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node: HowToGuide;
};

/** Page Info on the &quot;RootQueryToHowToGuideConnection&quot; */
export type RootQueryToHowToGuideConnectionPageInfo = HowToGuideConnectionPageInfo & PageInfo & WpPageInfo & {
  __typename?: 'RootQueryToHowToGuideConnectionPageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
};

/** Arguments for filtering the RootQueryToHowToGuideConnection connection */
export type RootQueryToHowToGuideConnectionWhereArgs = {
  /** Filter the connection based on dates */
  dateQuery?: InputMaybe<DateQueryInput>;
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword?: InputMaybe<Scalars['Boolean']>;
  /** Specific database ID of the object */
  id?: InputMaybe<Scalars['Int']>;
  /** Array of IDs for the objects to retrieve */
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Get objects with a specific mimeType property */
  mimeType?: InputMaybe<MimeTypeEnum>;
  /** Slug / post_name of the object */
  name?: InputMaybe<Scalars['String']>;
  /** Specify objects to retrieve. Use slugs */
  nameIn?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** What paramater to use to order the objects by. */
  orderby?: InputMaybe<Array<InputMaybe<PostObjectsConnectionOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: InputMaybe<Scalars['ID']>;
  /** Specify objects whose parent is in an array */
  parentIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Specify posts whose parent is not in an array */
  parentNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Show posts with a specific password. */
  password?: InputMaybe<Scalars['String']>;
  /** Show Posts based on a keyword search */
  search?: InputMaybe<Scalars['String']>;
  /** Retrieve posts where post status is in an array. */
  stati?: InputMaybe<Array<InputMaybe<PostStatusEnum>>>;
  /** Show posts with a specific status. */
  status?: InputMaybe<PostStatusEnum>;
  /** Title of the object */
  title?: InputMaybe<Scalars['String']>;
};

/** Connection between the RootQuery type and the mediaItem type */
export type RootQueryToMediaItemConnection = Connection & MediaItemConnection & {
  __typename?: 'RootQueryToMediaItemConnection';
  /** Edges for the RootQueryToMediaItemConnection connection */
  edges: Array<RootQueryToMediaItemConnectionEdge>;
  /** The nodes of the connection, without the edges */
  nodes: Array<MediaItem>;
  /** Information about pagination in a connection. */
  pageInfo: RootQueryToMediaItemConnectionPageInfo;
};

/** An edge in a connection */
export type RootQueryToMediaItemConnectionEdge = Edge & MediaItemConnectionEdge & {
  __typename?: 'RootQueryToMediaItemConnectionEdge';
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node: MediaItem;
};

/** Page Info on the &quot;RootQueryToMediaItemConnection&quot; */
export type RootQueryToMediaItemConnectionPageInfo = MediaItemConnectionPageInfo & PageInfo & WpPageInfo & {
  __typename?: 'RootQueryToMediaItemConnectionPageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
};

/** Arguments for filtering the RootQueryToMediaItemConnection connection */
export type RootQueryToMediaItemConnectionWhereArgs = {
  /** The user that's connected as the author of the object. Use the userId for the author object. */
  author?: InputMaybe<Scalars['Int']>;
  /** Find objects connected to author(s) in the array of author's userIds */
  authorIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Find objects connected to the author by the author's nicename */
  authorName?: InputMaybe<Scalars['String']>;
  /** Find objects NOT connected to author(s) in the array of author's userIds */
  authorNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Filter the connection based on dates */
  dateQuery?: InputMaybe<DateQueryInput>;
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword?: InputMaybe<Scalars['Boolean']>;
  /** Specific database ID of the object */
  id?: InputMaybe<Scalars['Int']>;
  /** Array of IDs for the objects to retrieve */
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Get objects with a specific mimeType property */
  mimeType?: InputMaybe<MimeTypeEnum>;
  /** Slug / post_name of the object */
  name?: InputMaybe<Scalars['String']>;
  /** Specify objects to retrieve. Use slugs */
  nameIn?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** What paramater to use to order the objects by. */
  orderby?: InputMaybe<Array<InputMaybe<PostObjectsConnectionOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: InputMaybe<Scalars['ID']>;
  /** Specify objects whose parent is in an array */
  parentIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Specify posts whose parent is not in an array */
  parentNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Show posts with a specific password. */
  password?: InputMaybe<Scalars['String']>;
  /** Show Posts based on a keyword search */
  search?: InputMaybe<Scalars['String']>;
  /** Retrieve posts where post status is in an array. */
  stati?: InputMaybe<Array<InputMaybe<PostStatusEnum>>>;
  /** Show posts with a specific status. */
  status?: InputMaybe<PostStatusEnum>;
  /** Title of the object */
  title?: InputMaybe<Scalars['String']>;
};

/** Connection between the RootQuery type and the Menu type */
export type RootQueryToMenuConnection = Connection & MenuConnection & {
  __typename?: 'RootQueryToMenuConnection';
  /** Edges for the RootQueryToMenuConnection connection */
  edges: Array<RootQueryToMenuConnectionEdge>;
  /** The nodes of the connection, without the edges */
  nodes: Array<Menu>;
  /** Information about pagination in a connection. */
  pageInfo: RootQueryToMenuConnectionPageInfo;
};

/** An edge in a connection */
export type RootQueryToMenuConnectionEdge = Edge & MenuConnectionEdge & {
  __typename?: 'RootQueryToMenuConnectionEdge';
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node: Menu;
};

/** Page Info on the &quot;RootQueryToMenuConnection&quot; */
export type RootQueryToMenuConnectionPageInfo = MenuConnectionPageInfo & PageInfo & WpPageInfo & {
  __typename?: 'RootQueryToMenuConnectionPageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
};

/** Arguments for filtering the RootQueryToMenuConnection connection */
export type RootQueryToMenuConnectionWhereArgs = {
  /** The database ID of the object */
  id?: InputMaybe<Scalars['Int']>;
  /** The menu location for the menu being queried */
  location?: InputMaybe<MenuLocationEnum>;
  /** The slug of the menu to query items for */
  slug?: InputMaybe<Scalars['String']>;
};

/** Connection between the RootQuery type and the MenuItem type */
export type RootQueryToMenuItemConnection = Connection & MenuItemConnection & {
  __typename?: 'RootQueryToMenuItemConnection';
  /** Edges for the RootQueryToMenuItemConnection connection */
  edges: Array<RootQueryToMenuItemConnectionEdge>;
  /** The nodes of the connection, without the edges */
  nodes: Array<MenuItem>;
  /** Information about pagination in a connection. */
  pageInfo: RootQueryToMenuItemConnectionPageInfo;
};

/** An edge in a connection */
export type RootQueryToMenuItemConnectionEdge = Edge & MenuItemConnectionEdge & {
  __typename?: 'RootQueryToMenuItemConnectionEdge';
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node: MenuItem;
};

/** Page Info on the &quot;RootQueryToMenuItemConnection&quot; */
export type RootQueryToMenuItemConnectionPageInfo = MenuItemConnectionPageInfo & PageInfo & WpPageInfo & {
  __typename?: 'RootQueryToMenuItemConnectionPageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
};

/** Arguments for filtering the RootQueryToMenuItemConnection connection */
export type RootQueryToMenuItemConnectionWhereArgs = {
  /** The database ID of the object */
  id?: InputMaybe<Scalars['Int']>;
  /** The menu location for the menu being queried */
  location?: InputMaybe<MenuLocationEnum>;
  /** The database ID of the parent menu object */
  parentDatabaseId?: InputMaybe<Scalars['Int']>;
  /** The ID of the parent menu object */
  parentId?: InputMaybe<Scalars['ID']>;
};

/** Connection between the RootQuery type and the page type */
export type RootQueryToPageConnection = Connection & PageConnection & {
  __typename?: 'RootQueryToPageConnection';
  /** Edges for the RootQueryToPageConnection connection */
  edges: Array<RootQueryToPageConnectionEdge>;
  /** The nodes of the connection, without the edges */
  nodes: Array<Page>;
  /** Information about pagination in a connection. */
  pageInfo: RootQueryToPageConnectionPageInfo;
};

/** An edge in a connection */
export type RootQueryToPageConnectionEdge = Edge & PageConnectionEdge & {
  __typename?: 'RootQueryToPageConnectionEdge';
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node: Page;
};

/** Page Info on the &quot;RootQueryToPageConnection&quot; */
export type RootQueryToPageConnectionPageInfo = PageConnectionPageInfo & PageInfo & WpPageInfo & {
  __typename?: 'RootQueryToPageConnectionPageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
};

/** Arguments for filtering the RootQueryToPageConnection connection */
export type RootQueryToPageConnectionWhereArgs = {
  /** The user that's connected as the author of the object. Use the userId for the author object. */
  author?: InputMaybe<Scalars['Int']>;
  /** Find objects connected to author(s) in the array of author's userIds */
  authorIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Find objects connected to the author by the author's nicename */
  authorName?: InputMaybe<Scalars['String']>;
  /** Find objects NOT connected to author(s) in the array of author's userIds */
  authorNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Filter the connection based on dates */
  dateQuery?: InputMaybe<DateQueryInput>;
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword?: InputMaybe<Scalars['Boolean']>;
  /** Specific database ID of the object */
  id?: InputMaybe<Scalars['Int']>;
  /** Array of IDs for the objects to retrieve */
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Get objects with a specific mimeType property */
  mimeType?: InputMaybe<MimeTypeEnum>;
  /** Slug / post_name of the object */
  name?: InputMaybe<Scalars['String']>;
  /** Specify objects to retrieve. Use slugs */
  nameIn?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** What paramater to use to order the objects by. */
  orderby?: InputMaybe<Array<InputMaybe<PostObjectsConnectionOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: InputMaybe<Scalars['ID']>;
  /** Specify objects whose parent is in an array */
  parentIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Specify posts whose parent is not in an array */
  parentNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Show posts with a specific password. */
  password?: InputMaybe<Scalars['String']>;
  /** Show Posts based on a keyword search */
  search?: InputMaybe<Scalars['String']>;
  /** Retrieve posts where post status is in an array. */
  stati?: InputMaybe<Array<InputMaybe<PostStatusEnum>>>;
  /** Show posts with a specific status. */
  status?: InputMaybe<PostStatusEnum>;
  /** Title of the object */
  title?: InputMaybe<Scalars['String']>;
};

/** Connection between the RootQuery type and the Plugin type */
export type RootQueryToPluginConnection = Connection & PluginConnection & {
  __typename?: 'RootQueryToPluginConnection';
  /** Edges for the RootQueryToPluginConnection connection */
  edges: Array<RootQueryToPluginConnectionEdge>;
  /** The nodes of the connection, without the edges */
  nodes: Array<Plugin>;
  /** Information about pagination in a connection. */
  pageInfo: RootQueryToPluginConnectionPageInfo;
};

/** An edge in a connection */
export type RootQueryToPluginConnectionEdge = Edge & PluginConnectionEdge & {
  __typename?: 'RootQueryToPluginConnectionEdge';
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node: Plugin;
};

/** Page Info on the &quot;RootQueryToPluginConnection&quot; */
export type RootQueryToPluginConnectionPageInfo = PageInfo & PluginConnectionPageInfo & WpPageInfo & {
  __typename?: 'RootQueryToPluginConnectionPageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
};

/** Arguments for filtering the RootQueryToPluginConnection connection */
export type RootQueryToPluginConnectionWhereArgs = {
  /** Show plugin based on a keyword search. */
  search?: InputMaybe<Scalars['String']>;
  /** Retrieve plugins where plugin status is in an array. */
  stati?: InputMaybe<Array<InputMaybe<PluginStatusEnum>>>;
  /** Show plugins with a specific status. */
  status?: InputMaybe<PluginStatusEnum>;
};

/** Connection between the RootQuery type and the post type */
export type RootQueryToPostConnection = Connection & PostConnection & {
  __typename?: 'RootQueryToPostConnection';
  /** Edges for the RootQueryToPostConnection connection */
  edges: Array<RootQueryToPostConnectionEdge>;
  /** The nodes of the connection, without the edges */
  nodes: Array<Post>;
  /** Information about pagination in a connection. */
  pageInfo: RootQueryToPostConnectionPageInfo;
};

/** An edge in a connection */
export type RootQueryToPostConnectionEdge = Edge & PostConnectionEdge & {
  __typename?: 'RootQueryToPostConnectionEdge';
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node: Post;
};

/** Page Info on the &quot;RootQueryToPostConnection&quot; */
export type RootQueryToPostConnectionPageInfo = PageInfo & PostConnectionPageInfo & WpPageInfo & {
  __typename?: 'RootQueryToPostConnectionPageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
};

/** Arguments for filtering the RootQueryToPostConnection connection */
export type RootQueryToPostConnectionWhereArgs = {
  /** The user that's connected as the author of the object. Use the userId for the author object. */
  author?: InputMaybe<Scalars['Int']>;
  /** Find objects connected to author(s) in the array of author's userIds */
  authorIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Find objects connected to the author by the author's nicename */
  authorName?: InputMaybe<Scalars['String']>;
  /** Find objects NOT connected to author(s) in the array of author's userIds */
  authorNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Category ID */
  categoryId?: InputMaybe<Scalars['Int']>;
  /** Array of category IDs, used to display objects from one category OR another */
  categoryIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Use Category Slug */
  categoryName?: InputMaybe<Scalars['String']>;
  /** Array of category IDs, used to display objects from one category OR another */
  categoryNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Filter the connection based on dates */
  dateQuery?: InputMaybe<DateQueryInput>;
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword?: InputMaybe<Scalars['Boolean']>;
  /** Specific database ID of the object */
  id?: InputMaybe<Scalars['Int']>;
  /** Array of IDs for the objects to retrieve */
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Get objects with a specific mimeType property */
  mimeType?: InputMaybe<MimeTypeEnum>;
  /** Slug / post_name of the object */
  name?: InputMaybe<Scalars['String']>;
  /** Specify objects to retrieve. Use slugs */
  nameIn?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** What paramater to use to order the objects by. */
  orderby?: InputMaybe<Array<InputMaybe<PostObjectsConnectionOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: InputMaybe<Scalars['ID']>;
  /** Specify objects whose parent is in an array */
  parentIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Specify posts whose parent is not in an array */
  parentNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Show posts with a specific password. */
  password?: InputMaybe<Scalars['String']>;
  /** Show Posts based on a keyword search */
  search?: InputMaybe<Scalars['String']>;
  /** Retrieve posts where post status is in an array. */
  stati?: InputMaybe<Array<InputMaybe<PostStatusEnum>>>;
  /** Show posts with a specific status. */
  status?: InputMaybe<PostStatusEnum>;
  /** Tag Slug */
  tag?: InputMaybe<Scalars['String']>;
  /** Use Tag ID */
  tagId?: InputMaybe<Scalars['String']>;
  /** Array of tag IDs, used to display objects from one tag OR another */
  tagIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Array of tag IDs, used to display objects from one tag OR another */
  tagNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Array of tag slugs, used to display objects from one tag AND another */
  tagSlugAnd?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Array of tag slugs, used to include objects in ANY specified tags */
  tagSlugIn?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Title of the object */
  title?: InputMaybe<Scalars['String']>;
};

/** Connection between the RootQuery type and the postFormat type */
export type RootQueryToPostFormatConnection = Connection & PostFormatConnection & {
  __typename?: 'RootQueryToPostFormatConnection';
  /** Edges for the RootQueryToPostFormatConnection connection */
  edges: Array<RootQueryToPostFormatConnectionEdge>;
  /** The nodes of the connection, without the edges */
  nodes: Array<PostFormat>;
  /** Information about pagination in a connection. */
  pageInfo: RootQueryToPostFormatConnectionPageInfo;
};

/** An edge in a connection */
export type RootQueryToPostFormatConnectionEdge = Edge & PostFormatConnectionEdge & {
  __typename?: 'RootQueryToPostFormatConnectionEdge';
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node: PostFormat;
};

/** Page Info on the &quot;RootQueryToPostFormatConnection&quot; */
export type RootQueryToPostFormatConnectionPageInfo = PageInfo & PostFormatConnectionPageInfo & WpPageInfo & {
  __typename?: 'RootQueryToPostFormatConnectionPageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
};

/** Arguments for filtering the RootQueryToPostFormatConnection connection */
export type RootQueryToPostFormatConnectionWhereArgs = {
  /** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
  cacheDomain?: InputMaybe<Scalars['String']>;
  /** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
  childOf?: InputMaybe<Scalars['Int']>;
  /** True to limit results to terms that have no children. This parameter has no effect on non-hierarchical taxonomies. Default false. */
  childless?: InputMaybe<Scalars['Boolean']>;
  /** Retrieve terms where the description is LIKE the input value. Default empty. */
  descriptionLike?: InputMaybe<Scalars['String']>;
  /** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
  exclude?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Array of term ids to exclude along with all of their descendant terms. If $include is non-empty, $exclude_tree is ignored. Default empty array. */
  excludeTree?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Whether to hide terms not assigned to any posts. Accepts true or false. Default false */
  hideEmpty?: InputMaybe<Scalars['Boolean']>;
  /** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
  hierarchical?: InputMaybe<Scalars['Boolean']>;
  /** Array of term ids to include. Default empty array. */
  include?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Array of names to return term(s) for. Default empty. */
  name?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Retrieve terms where the name is LIKE the input value. Default empty. */
  nameLike?: InputMaybe<Scalars['String']>;
  /** Array of object IDs. Results will be limited to terms associated with these objects. */
  objectIds?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Direction the connection should be ordered in */
  order?: InputMaybe<OrderEnum>;
  /** Field(s) to order terms by. Defaults to 'name'. */
  orderby?: InputMaybe<TermObjectsConnectionOrderbyEnum>;
  /** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
  padCounts?: InputMaybe<Scalars['Boolean']>;
  /** Parent term ID to retrieve direct-child terms of. Default empty. */
  parent?: InputMaybe<Scalars['Int']>;
  /** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
  search?: InputMaybe<Scalars['String']>;
  /** Array of slugs to return term(s) for. Default empty. */
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomId?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomyId?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Whether to prime meta caches for matched terms. Default true. */
  updateTermMetaCache?: InputMaybe<Scalars['Boolean']>;
};

/** Connection between the RootQuery type and the reference type */
export type RootQueryToReferenceConnection = Connection & ReferenceConnection & {
  __typename?: 'RootQueryToReferenceConnection';
  /** Edges for the RootQueryToReferenceConnection connection */
  edges: Array<RootQueryToReferenceConnectionEdge>;
  /** The nodes of the connection, without the edges */
  nodes: Array<Reference>;
  /** Information about pagination in a connection. */
  pageInfo: RootQueryToReferenceConnectionPageInfo;
};

/** An edge in a connection */
export type RootQueryToReferenceConnectionEdge = Edge & ReferenceConnectionEdge & {
  __typename?: 'RootQueryToReferenceConnectionEdge';
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node: Reference;
};

/** Page Info on the &quot;RootQueryToReferenceConnection&quot; */
export type RootQueryToReferenceConnectionPageInfo = PageInfo & ReferenceConnectionPageInfo & WpPageInfo & {
  __typename?: 'RootQueryToReferenceConnectionPageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
};

/** Arguments for filtering the RootQueryToReferenceConnection connection */
export type RootQueryToReferenceConnectionWhereArgs = {
  /** Filter the connection based on dates */
  dateQuery?: InputMaybe<DateQueryInput>;
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword?: InputMaybe<Scalars['Boolean']>;
  /** Specific database ID of the object */
  id?: InputMaybe<Scalars['Int']>;
  /** Array of IDs for the objects to retrieve */
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Get objects with a specific mimeType property */
  mimeType?: InputMaybe<MimeTypeEnum>;
  /** Slug / post_name of the object */
  name?: InputMaybe<Scalars['String']>;
  /** Specify objects to retrieve. Use slugs */
  nameIn?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** What paramater to use to order the objects by. */
  orderby?: InputMaybe<Array<InputMaybe<PostObjectsConnectionOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: InputMaybe<Scalars['ID']>;
  /** Specify objects whose parent is in an array */
  parentIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Specify posts whose parent is not in an array */
  parentNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Show posts with a specific password. */
  password?: InputMaybe<Scalars['String']>;
  /** Show Posts based on a keyword search */
  search?: InputMaybe<Scalars['String']>;
  /** Retrieve posts where post status is in an array. */
  stati?: InputMaybe<Array<InputMaybe<PostStatusEnum>>>;
  /** Show posts with a specific status. */
  status?: InputMaybe<PostStatusEnum>;
  /** Title of the object */
  title?: InputMaybe<Scalars['String']>;
};

/** Connection between the RootQuery type and the ContentNode type */
export type RootQueryToRevisionsConnection = Connection & ContentNodeConnection & {
  __typename?: 'RootQueryToRevisionsConnection';
  /** Edges for the RootQueryToRevisionsConnection connection */
  edges: Array<RootQueryToRevisionsConnectionEdge>;
  /** The nodes of the connection, without the edges */
  nodes: Array<ContentNode>;
  /** Information about pagination in a connection. */
  pageInfo: RootQueryToRevisionsConnectionPageInfo;
};

/** An edge in a connection */
export type RootQueryToRevisionsConnectionEdge = ContentNodeConnectionEdge & Edge & {
  __typename?: 'RootQueryToRevisionsConnectionEdge';
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node: ContentNode;
};

/** Page Info on the &quot;RootQueryToRevisionsConnection&quot; */
export type RootQueryToRevisionsConnectionPageInfo = ContentNodeConnectionPageInfo & PageInfo & WpPageInfo & {
  __typename?: 'RootQueryToRevisionsConnectionPageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
};

/** Arguments for filtering the RootQueryToRevisionsConnection connection */
export type RootQueryToRevisionsConnectionWhereArgs = {
  /** The Types of content to filter */
  contentTypes?: InputMaybe<Array<InputMaybe<ContentTypeEnum>>>;
  /** Filter the connection based on dates */
  dateQuery?: InputMaybe<DateQueryInput>;
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword?: InputMaybe<Scalars['Boolean']>;
  /** Specific database ID of the object */
  id?: InputMaybe<Scalars['Int']>;
  /** Array of IDs for the objects to retrieve */
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Get objects with a specific mimeType property */
  mimeType?: InputMaybe<MimeTypeEnum>;
  /** Slug / post_name of the object */
  name?: InputMaybe<Scalars['String']>;
  /** Specify objects to retrieve. Use slugs */
  nameIn?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** What paramater to use to order the objects by. */
  orderby?: InputMaybe<Array<InputMaybe<PostObjectsConnectionOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: InputMaybe<Scalars['ID']>;
  /** Specify objects whose parent is in an array */
  parentIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Specify posts whose parent is not in an array */
  parentNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Show posts with a specific password. */
  password?: InputMaybe<Scalars['String']>;
  /** Show Posts based on a keyword search */
  search?: InputMaybe<Scalars['String']>;
  /** Retrieve posts where post status is in an array. */
  stati?: InputMaybe<Array<InputMaybe<PostStatusEnum>>>;
  /** Show posts with a specific status. */
  status?: InputMaybe<PostStatusEnum>;
  /** Title of the object */
  title?: InputMaybe<Scalars['String']>;
};

/** Connection between the RootQuery type and the tag type */
export type RootQueryToTagConnection = Connection & TagConnection & {
  __typename?: 'RootQueryToTagConnection';
  /** Edges for the RootQueryToTagConnection connection */
  edges: Array<RootQueryToTagConnectionEdge>;
  /** The nodes of the connection, without the edges */
  nodes: Array<Tag>;
  /** Information about pagination in a connection. */
  pageInfo: RootQueryToTagConnectionPageInfo;
};

/** An edge in a connection */
export type RootQueryToTagConnectionEdge = Edge & TagConnectionEdge & {
  __typename?: 'RootQueryToTagConnectionEdge';
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node: Tag;
};

/** Page Info on the &quot;RootQueryToTagConnection&quot; */
export type RootQueryToTagConnectionPageInfo = PageInfo & TagConnectionPageInfo & WpPageInfo & {
  __typename?: 'RootQueryToTagConnectionPageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
};

/** Arguments for filtering the RootQueryToTagConnection connection */
export type RootQueryToTagConnectionWhereArgs = {
  /** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
  cacheDomain?: InputMaybe<Scalars['String']>;
  /** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
  childOf?: InputMaybe<Scalars['Int']>;
  /** True to limit results to terms that have no children. This parameter has no effect on non-hierarchical taxonomies. Default false. */
  childless?: InputMaybe<Scalars['Boolean']>;
  /** Retrieve terms where the description is LIKE the input value. Default empty. */
  descriptionLike?: InputMaybe<Scalars['String']>;
  /** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
  exclude?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Array of term ids to exclude along with all of their descendant terms. If $include is non-empty, $exclude_tree is ignored. Default empty array. */
  excludeTree?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Whether to hide terms not assigned to any posts. Accepts true or false. Default false */
  hideEmpty?: InputMaybe<Scalars['Boolean']>;
  /** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
  hierarchical?: InputMaybe<Scalars['Boolean']>;
  /** Array of term ids to include. Default empty array. */
  include?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Array of names to return term(s) for. Default empty. */
  name?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Retrieve terms where the name is LIKE the input value. Default empty. */
  nameLike?: InputMaybe<Scalars['String']>;
  /** Array of object IDs. Results will be limited to terms associated with these objects. */
  objectIds?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Direction the connection should be ordered in */
  order?: InputMaybe<OrderEnum>;
  /** Field(s) to order terms by. Defaults to 'name'. */
  orderby?: InputMaybe<TermObjectsConnectionOrderbyEnum>;
  /** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
  padCounts?: InputMaybe<Scalars['Boolean']>;
  /** Parent term ID to retrieve direct-child terms of. Default empty. */
  parent?: InputMaybe<Scalars['Int']>;
  /** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
  search?: InputMaybe<Scalars['String']>;
  /** Array of slugs to return term(s) for. Default empty. */
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomId?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomyId?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Whether to prime meta caches for matched terms. Default true. */
  updateTermMetaCache?: InputMaybe<Scalars['Boolean']>;
};

/** Connection between the RootQuery type and the Taxonomy type */
export type RootQueryToTaxonomyConnection = Connection & TaxonomyConnection & {
  __typename?: 'RootQueryToTaxonomyConnection';
  /** Edges for the RootQueryToTaxonomyConnection connection */
  edges: Array<RootQueryToTaxonomyConnectionEdge>;
  /** The nodes of the connection, without the edges */
  nodes: Array<Taxonomy>;
  /** Information about pagination in a connection. */
  pageInfo: RootQueryToTaxonomyConnectionPageInfo;
};

/** An edge in a connection */
export type RootQueryToTaxonomyConnectionEdge = Edge & TaxonomyConnectionEdge & {
  __typename?: 'RootQueryToTaxonomyConnectionEdge';
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node: Taxonomy;
};

/** Page Info on the &quot;RootQueryToTaxonomyConnection&quot; */
export type RootQueryToTaxonomyConnectionPageInfo = PageInfo & TaxonomyConnectionPageInfo & WpPageInfo & {
  __typename?: 'RootQueryToTaxonomyConnectionPageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
};

/** Connection between the RootQuery type and the TermNode type */
export type RootQueryToTermNodeConnection = Connection & TermNodeConnection & {
  __typename?: 'RootQueryToTermNodeConnection';
  /** Edges for the RootQueryToTermNodeConnection connection */
  edges: Array<RootQueryToTermNodeConnectionEdge>;
  /** The nodes of the connection, without the edges */
  nodes: Array<TermNode>;
  /** Information about pagination in a connection. */
  pageInfo: RootQueryToTermNodeConnectionPageInfo;
};

/** An edge in a connection */
export type RootQueryToTermNodeConnectionEdge = Edge & TermNodeConnectionEdge & {
  __typename?: 'RootQueryToTermNodeConnectionEdge';
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node: TermNode;
};

/** Page Info on the &quot;RootQueryToTermNodeConnection&quot; */
export type RootQueryToTermNodeConnectionPageInfo = PageInfo & TermNodeConnectionPageInfo & WpPageInfo & {
  __typename?: 'RootQueryToTermNodeConnectionPageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
};

/** Arguments for filtering the RootQueryToTermNodeConnection connection */
export type RootQueryToTermNodeConnectionWhereArgs = {
  /** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
  cacheDomain?: InputMaybe<Scalars['String']>;
  /** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
  childOf?: InputMaybe<Scalars['Int']>;
  /** True to limit results to terms that have no children. This parameter has no effect on non-hierarchical taxonomies. Default false. */
  childless?: InputMaybe<Scalars['Boolean']>;
  /** Retrieve terms where the description is LIKE the input value. Default empty. */
  descriptionLike?: InputMaybe<Scalars['String']>;
  /** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
  exclude?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Array of term ids to exclude along with all of their descendant terms. If $include is non-empty, $exclude_tree is ignored. Default empty array. */
  excludeTree?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Whether to hide terms not assigned to any posts. Accepts true or false. Default false */
  hideEmpty?: InputMaybe<Scalars['Boolean']>;
  /** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
  hierarchical?: InputMaybe<Scalars['Boolean']>;
  /** Array of term ids to include. Default empty array. */
  include?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Array of names to return term(s) for. Default empty. */
  name?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Retrieve terms where the name is LIKE the input value. Default empty. */
  nameLike?: InputMaybe<Scalars['String']>;
  /** Array of object IDs. Results will be limited to terms associated with these objects. */
  objectIds?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Direction the connection should be ordered in */
  order?: InputMaybe<OrderEnum>;
  /** Field(s) to order terms by. Defaults to 'name'. */
  orderby?: InputMaybe<TermObjectsConnectionOrderbyEnum>;
  /** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
  padCounts?: InputMaybe<Scalars['Boolean']>;
  /** Parent term ID to retrieve direct-child terms of. Default empty. */
  parent?: InputMaybe<Scalars['Int']>;
  /** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
  search?: InputMaybe<Scalars['String']>;
  /** Array of slugs to return term(s) for. Default empty. */
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** The Taxonomy to filter terms by */
  taxonomies?: InputMaybe<Array<InputMaybe<TaxonomyEnum>>>;
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomId?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomyId?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Whether to prime meta caches for matched terms. Default true. */
  updateTermMetaCache?: InputMaybe<Scalars['Boolean']>;
};

/** Connection between the RootQuery type and the Theme type */
export type RootQueryToThemeConnection = Connection & ThemeConnection & {
  __typename?: 'RootQueryToThemeConnection';
  /** Edges for the RootQueryToThemeConnection connection */
  edges: Array<RootQueryToThemeConnectionEdge>;
  /** The nodes of the connection, without the edges */
  nodes: Array<Theme>;
  /** Information about pagination in a connection. */
  pageInfo: RootQueryToThemeConnectionPageInfo;
};

/** An edge in a connection */
export type RootQueryToThemeConnectionEdge = Edge & ThemeConnectionEdge & {
  __typename?: 'RootQueryToThemeConnectionEdge';
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node: Theme;
};

/** Page Info on the &quot;RootQueryToThemeConnection&quot; */
export type RootQueryToThemeConnectionPageInfo = PageInfo & ThemeConnectionPageInfo & WpPageInfo & {
  __typename?: 'RootQueryToThemeConnectionPageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
};

/** Connection between the RootQuery type and the tutorial type */
export type RootQueryToTutorialConnection = Connection & TutorialConnection & {
  __typename?: 'RootQueryToTutorialConnection';
  /** Edges for the RootQueryToTutorialConnection connection */
  edges: Array<RootQueryToTutorialConnectionEdge>;
  /** The nodes of the connection, without the edges */
  nodes: Array<Tutorial>;
  /** Information about pagination in a connection. */
  pageInfo: RootQueryToTutorialConnectionPageInfo;
};

/** An edge in a connection */
export type RootQueryToTutorialConnectionEdge = Edge & TutorialConnectionEdge & {
  __typename?: 'RootQueryToTutorialConnectionEdge';
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node: Tutorial;
};

/** Page Info on the &quot;RootQueryToTutorialConnection&quot; */
export type RootQueryToTutorialConnectionPageInfo = PageInfo & TutorialConnectionPageInfo & WpPageInfo & {
  __typename?: 'RootQueryToTutorialConnectionPageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
};

/** Arguments for filtering the RootQueryToTutorialConnection connection */
export type RootQueryToTutorialConnectionWhereArgs = {
  /** Filter the connection based on dates */
  dateQuery?: InputMaybe<DateQueryInput>;
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword?: InputMaybe<Scalars['Boolean']>;
  /** Specific database ID of the object */
  id?: InputMaybe<Scalars['Int']>;
  /** Array of IDs for the objects to retrieve */
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Get objects with a specific mimeType property */
  mimeType?: InputMaybe<MimeTypeEnum>;
  /** Slug / post_name of the object */
  name?: InputMaybe<Scalars['String']>;
  /** Specify objects to retrieve. Use slugs */
  nameIn?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** What paramater to use to order the objects by. */
  orderby?: InputMaybe<Array<InputMaybe<PostObjectsConnectionOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: InputMaybe<Scalars['ID']>;
  /** Specify objects whose parent is in an array */
  parentIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Specify posts whose parent is not in an array */
  parentNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Show posts with a specific password. */
  password?: InputMaybe<Scalars['String']>;
  /** Show Posts based on a keyword search */
  search?: InputMaybe<Scalars['String']>;
  /** Retrieve posts where post status is in an array. */
  stati?: InputMaybe<Array<InputMaybe<PostStatusEnum>>>;
  /** Show posts with a specific status. */
  status?: InputMaybe<PostStatusEnum>;
  /** Title of the object */
  title?: InputMaybe<Scalars['String']>;
};

/** Connection between the RootQuery type and the User type */
export type RootQueryToUserConnection = Connection & UserConnection & {
  __typename?: 'RootQueryToUserConnection';
  /** Edges for the RootQueryToUserConnection connection */
  edges: Array<RootQueryToUserConnectionEdge>;
  /** The nodes of the connection, without the edges */
  nodes: Array<User>;
  /** Information about pagination in a connection. */
  pageInfo: RootQueryToUserConnectionPageInfo;
};

/** An edge in a connection */
export type RootQueryToUserConnectionEdge = Edge & UserConnectionEdge & {
  __typename?: 'RootQueryToUserConnectionEdge';
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node: User;
};

/** Page Info on the &quot;RootQueryToUserConnection&quot; */
export type RootQueryToUserConnectionPageInfo = PageInfo & UserConnectionPageInfo & WpPageInfo & {
  __typename?: 'RootQueryToUserConnectionPageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
};

/** Arguments for filtering the RootQueryToUserConnection connection */
export type RootQueryToUserConnectionWhereArgs = {
  /** Array of userIds to exclude. */
  exclude?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  /** Pass an array of post types to filter results to users who have published posts in those post types. */
  hasPublishedPosts?: InputMaybe<Array<InputMaybe<ContentTypeEnum>>>;
  /** Array of userIds to include. */
  include?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  /** The user login. */
  login?: InputMaybe<Scalars['String']>;
  /** An array of logins to include. Users matching one of these logins will be included in results. */
  loginIn?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** An array of logins to exclude. Users matching one of these logins will not be included in results. */
  loginNotIn?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** The user nicename. */
  nicename?: InputMaybe<Scalars['String']>;
  /** An array of nicenames to include. Users matching one of these nicenames will be included in results. */
  nicenameIn?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** An array of nicenames to exclude. Users matching one of these nicenames will not be included in results. */
  nicenameNotIn?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** What paramater to use to order the objects by. */
  orderby?: InputMaybe<Array<InputMaybe<UsersConnectionOrderbyInput>>>;
  /** An array of role names that users must match to be included in results. Note that this is an inclusive list: users must match *each* role. */
  role?: InputMaybe<UserRoleEnum>;
  /** An array of role names. Matched users must have at least one of these roles. */
  roleIn?: InputMaybe<Array<InputMaybe<UserRoleEnum>>>;
  /** An array of role names to exclude. Users matching one or more of these roles will not be included in results. */
  roleNotIn?: InputMaybe<Array<InputMaybe<UserRoleEnum>>>;
  /** Search keyword. Searches for possible string matches on columns. When "searchColumns" is left empty, it tries to determine which column to search in based on search string. */
  search?: InputMaybe<Scalars['String']>;
  /** Array of column names to be searched. Accepts 'ID', 'login', 'nicename', 'email', 'url'. */
  searchColumns?: InputMaybe<Array<InputMaybe<UsersConnectionSearchColumnEnum>>>;
};

/** Connection between the RootQuery type and the UserRole type */
export type RootQueryToUserRoleConnection = Connection & UserRoleConnection & {
  __typename?: 'RootQueryToUserRoleConnection';
  /** Edges for the RootQueryToUserRoleConnection connection */
  edges: Array<RootQueryToUserRoleConnectionEdge>;
  /** The nodes of the connection, without the edges */
  nodes: Array<UserRole>;
  /** Information about pagination in a connection. */
  pageInfo: RootQueryToUserRoleConnectionPageInfo;
};

/** An edge in a connection */
export type RootQueryToUserRoleConnectionEdge = Edge & UserRoleConnectionEdge & {
  __typename?: 'RootQueryToUserRoleConnectionEdge';
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node: UserRole;
};

/** Page Info on the &quot;RootQueryToUserRoleConnection&quot; */
export type RootQueryToUserRoleConnectionPageInfo = PageInfo & UserRoleConnectionPageInfo & WpPageInfo & {
  __typename?: 'RootQueryToUserRoleConnectionPageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
};

/** Input for the sendPasswordResetEmail mutation. */
export type SendPasswordResetEmailInput = {
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** A string that contains the user's username or email address. */
  username: Scalars['String'];
};

/** The payload for the sendPasswordResetEmail mutation. */
export type SendPasswordResetEmailPayload = {
  __typename?: 'SendPasswordResetEmailPayload';
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Whether the mutation completed successfully. This does NOT necessarily mean that an email was sent. */
  success?: Maybe<Scalars['Boolean']>;
  /**
   * The user that the password reset email was sent to
   * @deprecated This field will be removed in a future version of WPGraphQL
   */
  user?: Maybe<User>;
};

/** All of the registered settings */
export type Settings = {
  __typename?: 'Settings';
  /** Settings of the the string Settings Group */
  discussionSettingsDefaultCommentStatus?: Maybe<Scalars['String']>;
  /** Settings of the the string Settings Group */
  discussionSettingsDefaultPingStatus?: Maybe<Scalars['String']>;
  /** Settings of the the string Settings Group */
  generalSettingsDateFormat?: Maybe<Scalars['String']>;
  /** Settings of the the string Settings Group */
  generalSettingsDescription?: Maybe<Scalars['String']>;
  /** Settings of the the string Settings Group */
  generalSettingsLanguage?: Maybe<Scalars['String']>;
  /** Settings of the the integer Settings Group */
  generalSettingsStartOfWeek?: Maybe<Scalars['Int']>;
  /** Settings of the the string Settings Group */
  generalSettingsTimeFormat?: Maybe<Scalars['String']>;
  /** Settings of the the string Settings Group */
  generalSettingsTimezone?: Maybe<Scalars['String']>;
  /** Settings of the the string Settings Group */
  generalSettingsTitle?: Maybe<Scalars['String']>;
  /** Settings of the the integer Settings Group */
  readingSettingsPageForPosts?: Maybe<Scalars['Int']>;
  /** Settings of the the integer Settings Group */
  readingSettingsPageOnFront?: Maybe<Scalars['Int']>;
  /** Settings of the the integer Settings Group */
  readingSettingsPostsPerPage?: Maybe<Scalars['Int']>;
  /** Settings of the the string Settings Group */
  readingSettingsShowOnFront?: Maybe<Scalars['String']>;
  /** Settings of the the integer Settings Group */
  writingSettingsDefaultCategory?: Maybe<Scalars['Int']>;
  /** Settings of the the string Settings Group */
  writingSettingsDefaultPostFormat?: Maybe<Scalars['String']>;
  /** Settings of the the boolean Settings Group */
  writingSettingsUseSmilies?: Maybe<Scalars['Boolean']>;
};

/** The tag type */
export type Tag = DatabaseIdentifier & MenuItemLinkable & Node & TermNode & UniformResourceIdentifiable & {
  __typename?: 'Tag';
  /** @deprecated Deprecated in favor of using Next.js pages */
  conditionalTags?: Maybe<ConditionalTags>;
  /** Connection between the Tag type and the ContentNode type */
  contentNodes?: Maybe<TagToContentNodeConnection>;
  /** The number of objects connected to the object */
  count?: Maybe<Scalars['Int']>;
  /** The unique identifier stored in the database */
  databaseId: Scalars['Int'];
  /** The description of the object */
  description?: Maybe<Scalars['String']>;
  /** Connection between the TermNode type and the EnqueuedScript type */
  enqueuedScripts?: Maybe<TermNodeToEnqueuedScriptConnection>;
  /** Connection between the TermNode type and the EnqueuedStylesheet type */
  enqueuedStylesheets?: Maybe<TermNodeToEnqueuedStylesheetConnection>;
  /** The unique resource identifier path */
  id: Scalars['ID'];
  /** Whether the node is a Content Node */
  isContentNode: Scalars['Boolean'];
  /** Whether the object is restricted from the current viewer */
  isRestricted?: Maybe<Scalars['Boolean']>;
  /** Whether the node is a Term */
  isTermNode: Scalars['Boolean'];
  /** The link to the term */
  link?: Maybe<Scalars['String']>;
  /** The human friendly name of the object. */
  name?: Maybe<Scalars['String']>;
  /** Connection between the Tag type and the post type */
  posts?: Maybe<TagToPostConnection>;
  /** An alphanumeric identifier for the object unique to its type. */
  slug?: Maybe<Scalars['String']>;
  /**
   * The id field matches the WP_Post-&gt;ID field.
   * @deprecated Deprecated in favor of databaseId
   */
  tagId?: Maybe<Scalars['Int']>;
  /** Connection between the Tag type and the Taxonomy type */
  taxonomy?: Maybe<TagToTaxonomyConnectionEdge>;
  /** The name of the taxonomy that the object is associated with */
  taxonomyName?: Maybe<Scalars['String']>;
  templates?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** The ID of the term group that this term object belongs to */
  termGroupId?: Maybe<Scalars['Int']>;
  /** The taxonomy ID that the object is associated with */
  termTaxonomyId?: Maybe<Scalars['Int']>;
  /** The unique resource identifier path */
  uri?: Maybe<Scalars['String']>;
};


/** The tag type */
export type TagContentNodesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<TagToContentNodeConnectionWhereArgs>;
};


/** The tag type */
export type TagEnqueuedScriptsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


/** The tag type */
export type TagEnqueuedStylesheetsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


/** The tag type */
export type TagPostsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<TagToPostConnectionWhereArgs>;
};

/** Connection to tag Nodes */
export type TagConnection = {
  /** A list of edges (relational context) between RootQuery and connected tag Nodes */
  edges: Array<TagConnectionEdge>;
  /** A list of connected tag Nodes */
  nodes: Array<Tag>;
  /** Information about pagination in a connection. */
  pageInfo: TagConnectionPageInfo;
};

/** Edge between a Node and a connected tag */
export type TagConnectionEdge = {
  /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
  cursor?: Maybe<Scalars['String']>;
  /** The connected tag Node */
  node: Tag;
};

/** Page Info on the connected TagConnectionEdge */
export type TagConnectionPageInfo = {
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
};

/** The Type of Identifier used to fetch a single resource. Default is ID. */
export enum TagIdType {
  /** The Database ID for the node */
  DatabaseId = 'DATABASE_ID',
  /** The hashed Global ID */
  Id = 'ID',
  /** The name of the node */
  Name = 'NAME',
  /** Url friendly name of the node */
  Slug = 'SLUG',
  /** The URI for the node */
  Uri = 'URI'
}

/** Connection between the Tag type and the ContentNode type */
export type TagToContentNodeConnection = Connection & ContentNodeConnection & {
  __typename?: 'TagToContentNodeConnection';
  /** Edges for the TagToContentNodeConnection connection */
  edges: Array<TagToContentNodeConnectionEdge>;
  /** The nodes of the connection, without the edges */
  nodes: Array<ContentNode>;
  /** Information about pagination in a connection. */
  pageInfo: TagToContentNodeConnectionPageInfo;
};

/** An edge in a connection */
export type TagToContentNodeConnectionEdge = ContentNodeConnectionEdge & Edge & {
  __typename?: 'TagToContentNodeConnectionEdge';
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node: ContentNode;
};

/** Page Info on the &quot;TagToContentNodeConnection&quot; */
export type TagToContentNodeConnectionPageInfo = ContentNodeConnectionPageInfo & PageInfo & WpPageInfo & {
  __typename?: 'TagToContentNodeConnectionPageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
};

/** Arguments for filtering the TagToContentNodeConnection connection */
export type TagToContentNodeConnectionWhereArgs = {
  /** The Types of content to filter */
  contentTypes?: InputMaybe<Array<InputMaybe<ContentTypesOfTagEnum>>>;
  /** Filter the connection based on dates */
  dateQuery?: InputMaybe<DateQueryInput>;
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword?: InputMaybe<Scalars['Boolean']>;
  /** Specific database ID of the object */
  id?: InputMaybe<Scalars['Int']>;
  /** Array of IDs for the objects to retrieve */
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Get objects with a specific mimeType property */
  mimeType?: InputMaybe<MimeTypeEnum>;
  /** Slug / post_name of the object */
  name?: InputMaybe<Scalars['String']>;
  /** Specify objects to retrieve. Use slugs */
  nameIn?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** What paramater to use to order the objects by. */
  orderby?: InputMaybe<Array<InputMaybe<PostObjectsConnectionOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: InputMaybe<Scalars['ID']>;
  /** Specify objects whose parent is in an array */
  parentIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Specify posts whose parent is not in an array */
  parentNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Show posts with a specific password. */
  password?: InputMaybe<Scalars['String']>;
  /** Show Posts based on a keyword search */
  search?: InputMaybe<Scalars['String']>;
  /** Retrieve posts where post status is in an array. */
  stati?: InputMaybe<Array<InputMaybe<PostStatusEnum>>>;
  /** Show posts with a specific status. */
  status?: InputMaybe<PostStatusEnum>;
  /** Title of the object */
  title?: InputMaybe<Scalars['String']>;
};

/** Connection between the Tag type and the post type */
export type TagToPostConnection = Connection & PostConnection & {
  __typename?: 'TagToPostConnection';
  /** Edges for the TagToPostConnection connection */
  edges: Array<TagToPostConnectionEdge>;
  /** The nodes of the connection, without the edges */
  nodes: Array<Post>;
  /** Information about pagination in a connection. */
  pageInfo: TagToPostConnectionPageInfo;
};

/** An edge in a connection */
export type TagToPostConnectionEdge = Edge & PostConnectionEdge & {
  __typename?: 'TagToPostConnectionEdge';
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node: Post;
};

/** Page Info on the &quot;TagToPostConnection&quot; */
export type TagToPostConnectionPageInfo = PageInfo & PostConnectionPageInfo & WpPageInfo & {
  __typename?: 'TagToPostConnectionPageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
};

/** Arguments for filtering the TagToPostConnection connection */
export type TagToPostConnectionWhereArgs = {
  /** The user that's connected as the author of the object. Use the userId for the author object. */
  author?: InputMaybe<Scalars['Int']>;
  /** Find objects connected to author(s) in the array of author's userIds */
  authorIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Find objects connected to the author by the author's nicename */
  authorName?: InputMaybe<Scalars['String']>;
  /** Find objects NOT connected to author(s) in the array of author's userIds */
  authorNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Category ID */
  categoryId?: InputMaybe<Scalars['Int']>;
  /** Array of category IDs, used to display objects from one category OR another */
  categoryIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Use Category Slug */
  categoryName?: InputMaybe<Scalars['String']>;
  /** Array of category IDs, used to display objects from one category OR another */
  categoryNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Filter the connection based on dates */
  dateQuery?: InputMaybe<DateQueryInput>;
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword?: InputMaybe<Scalars['Boolean']>;
  /** Specific database ID of the object */
  id?: InputMaybe<Scalars['Int']>;
  /** Array of IDs for the objects to retrieve */
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Get objects with a specific mimeType property */
  mimeType?: InputMaybe<MimeTypeEnum>;
  /** Slug / post_name of the object */
  name?: InputMaybe<Scalars['String']>;
  /** Specify objects to retrieve. Use slugs */
  nameIn?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** What paramater to use to order the objects by. */
  orderby?: InputMaybe<Array<InputMaybe<PostObjectsConnectionOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: InputMaybe<Scalars['ID']>;
  /** Specify objects whose parent is in an array */
  parentIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Specify posts whose parent is not in an array */
  parentNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Show posts with a specific password. */
  password?: InputMaybe<Scalars['String']>;
  /** Show Posts based on a keyword search */
  search?: InputMaybe<Scalars['String']>;
  /** Retrieve posts where post status is in an array. */
  stati?: InputMaybe<Array<InputMaybe<PostStatusEnum>>>;
  /** Show posts with a specific status. */
  status?: InputMaybe<PostStatusEnum>;
  /** Tag Slug */
  tag?: InputMaybe<Scalars['String']>;
  /** Use Tag ID */
  tagId?: InputMaybe<Scalars['String']>;
  /** Array of tag IDs, used to display objects from one tag OR another */
  tagIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Array of tag IDs, used to display objects from one tag OR another */
  tagNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Array of tag slugs, used to display objects from one tag AND another */
  tagSlugAnd?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Array of tag slugs, used to include objects in ANY specified tags */
  tagSlugIn?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Title of the object */
  title?: InputMaybe<Scalars['String']>;
};

/** Connection between the Tag type and the Taxonomy type */
export type TagToTaxonomyConnectionEdge = Edge & OneToOneConnection & TaxonomyConnectionEdge & {
  __typename?: 'TagToTaxonomyConnectionEdge';
  /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
  cursor?: Maybe<Scalars['String']>;
  /** The node of the connection, without the edges */
  node: Taxonomy;
};

/** A taxonomy object */
export type Taxonomy = Node & {
  __typename?: 'Taxonomy';
  /** List of Content Types associated with the Taxonomy */
  connectedContentTypes?: Maybe<TaxonomyToContentTypeConnection>;
  /** Description of the taxonomy. This field is equivalent to WP_Taxonomy-&gt;description */
  description?: Maybe<Scalars['String']>;
  /** The plural name of the post type within the GraphQL Schema. */
  graphqlPluralName?: Maybe<Scalars['String']>;
  /** The singular name of the post type within the GraphQL Schema. */
  graphqlSingleName?: Maybe<Scalars['String']>;
  /** Whether the taxonomy is hierarchical */
  hierarchical?: Maybe<Scalars['Boolean']>;
  /** The globally unique identifier of the taxonomy object. */
  id: Scalars['ID'];
  /** Whether the object is restricted from the current viewer */
  isRestricted?: Maybe<Scalars['Boolean']>;
  /** Name of the taxonomy shown in the menu. Usually plural. */
  label?: Maybe<Scalars['String']>;
  /** The display name of the taxonomy. This field is equivalent to WP_Taxonomy-&gt;label */
  name?: Maybe<Scalars['String']>;
  /** Whether the taxonomy is publicly queryable */
  public?: Maybe<Scalars['Boolean']>;
  /** Name of content type to diplay in REST API &quot;wp/v2&quot; namespace. */
  restBase?: Maybe<Scalars['String']>;
  /** The REST Controller class assigned to handling this content type. */
  restControllerClass?: Maybe<Scalars['String']>;
  /** Whether to show the taxonomy as part of a tag cloud widget. This field is equivalent to WP_Taxonomy-&gt;show_tagcloud */
  showCloud?: Maybe<Scalars['Boolean']>;
  /** Whether to display a column for the taxonomy on its post type listing screens. */
  showInAdminColumn?: Maybe<Scalars['Boolean']>;
  /** Whether to add the post type to the GraphQL Schema. */
  showInGraphql?: Maybe<Scalars['Boolean']>;
  /** Whether to show the taxonomy in the admin menu */
  showInMenu?: Maybe<Scalars['Boolean']>;
  /** Whether the taxonomy is available for selection in navigation menus. */
  showInNavMenus?: Maybe<Scalars['Boolean']>;
  /** Whether to show the taxonomy in the quick/bulk edit panel. */
  showInQuickEdit?: Maybe<Scalars['Boolean']>;
  /** Whether to add the post type route in the REST API &quot;wp/v2&quot; namespace. */
  showInRest?: Maybe<Scalars['Boolean']>;
  /** Whether to generate and allow a UI for managing terms in this taxonomy in the admin */
  showUi?: Maybe<Scalars['Boolean']>;
};


/** A taxonomy object */
export type TaxonomyConnectedContentTypesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};

/** Connection to Taxonomy Nodes */
export type TaxonomyConnection = {
  /** A list of edges (relational context) between RootQuery and connected Taxonomy Nodes */
  edges: Array<TaxonomyConnectionEdge>;
  /** A list of connected Taxonomy Nodes */
  nodes: Array<Taxonomy>;
  /** Information about pagination in a connection. */
  pageInfo: TaxonomyConnectionPageInfo;
};

/** Edge between a Node and a connected Taxonomy */
export type TaxonomyConnectionEdge = {
  /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
  cursor?: Maybe<Scalars['String']>;
  /** The connected Taxonomy Node */
  node: Taxonomy;
};

/** Page Info on the connected TaxonomyConnectionEdge */
export type TaxonomyConnectionPageInfo = {
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
};

/** Allowed taxonomies */
export enum TaxonomyEnum {
  /** Taxonomy enum category */
  Category = 'CATEGORY',
  /** Taxonomy enum post_format */
  Postformat = 'POSTFORMAT',
  /** Taxonomy enum post_tag */
  Tag = 'TAG'
}

/** The Type of Identifier used to fetch a single Taxonomy node. To be used along with the "id" field. Default is "ID". */
export enum TaxonomyIdTypeEnum {
  /** The globally unique ID */
  Id = 'ID',
  /** The name of the taxonomy */
  Name = 'NAME'
}

/** Connection between the Taxonomy type and the ContentType type */
export type TaxonomyToContentTypeConnection = Connection & ContentTypeConnection & {
  __typename?: 'TaxonomyToContentTypeConnection';
  /** Edges for the TaxonomyToContentTypeConnection connection */
  edges: Array<TaxonomyToContentTypeConnectionEdge>;
  /** The nodes of the connection, without the edges */
  nodes: Array<ContentType>;
  /** Information about pagination in a connection. */
  pageInfo: TaxonomyToContentTypeConnectionPageInfo;
};

/** An edge in a connection */
export type TaxonomyToContentTypeConnectionEdge = ContentTypeConnectionEdge & Edge & {
  __typename?: 'TaxonomyToContentTypeConnectionEdge';
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node: ContentType;
};

/** Page Info on the &quot;TaxonomyToContentTypeConnection&quot; */
export type TaxonomyToContentTypeConnectionPageInfo = ContentTypeConnectionPageInfo & PageInfo & WpPageInfo & {
  __typename?: 'TaxonomyToContentTypeConnectionPageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
};

/** The template assigned to the node */
export type Template_Blank = ContentTemplate & {
  __typename?: 'Template_Blank';
  /** The name of the template */
  templateName?: Maybe<Scalars['String']>;
};

/** The template assigned to the node */
export type Template_BlogAlternative = ContentTemplate & {
  __typename?: 'Template_BlogAlternative';
  /** The name of the template */
  templateName?: Maybe<Scalars['String']>;
};

/** Terms are nodes within a Taxonomy, used to group and relate other nodes. */
export type TermNode = {
  /** @deprecated Deprecated in favor of using Next.js pages */
  conditionalTags?: Maybe<ConditionalTags>;
  /** The number of objects connected to the object */
  count?: Maybe<Scalars['Int']>;
  /** Identifies the primary key from the database. */
  databaseId: Scalars['Int'];
  /** The description of the object */
  description?: Maybe<Scalars['String']>;
  /** Connection between the TermNode type and the EnqueuedScript type */
  enqueuedScripts?: Maybe<TermNodeToEnqueuedScriptConnection>;
  /** Connection between the TermNode type and the EnqueuedStylesheet type */
  enqueuedStylesheets?: Maybe<TermNodeToEnqueuedStylesheetConnection>;
  /** The unique resource identifier path */
  id: Scalars['ID'];
  /** Whether the node is a Content Node */
  isContentNode: Scalars['Boolean'];
  /** Whether the object is restricted from the current viewer */
  isRestricted?: Maybe<Scalars['Boolean']>;
  /** Whether the node is a Term */
  isTermNode: Scalars['Boolean'];
  /** The link to the term */
  link?: Maybe<Scalars['String']>;
  /** The human friendly name of the object. */
  name?: Maybe<Scalars['String']>;
  /** An alphanumeric identifier for the object unique to its type. */
  slug?: Maybe<Scalars['String']>;
  /** The name of the taxonomy that the object is associated with */
  taxonomyName?: Maybe<Scalars['String']>;
  templates?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** The ID of the term group that this term object belongs to */
  termGroupId?: Maybe<Scalars['Int']>;
  /** The taxonomy ID that the object is associated with */
  termTaxonomyId?: Maybe<Scalars['Int']>;
  /** The unique resource identifier path */
  uri?: Maybe<Scalars['String']>;
};


/** Terms are nodes within a Taxonomy, used to group and relate other nodes. */
export type TermNodeEnqueuedScriptsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


/** Terms are nodes within a Taxonomy, used to group and relate other nodes. */
export type TermNodeEnqueuedStylesheetsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};

/** Connection to TermNode Nodes */
export type TermNodeConnection = {
  /** A list of edges (relational context) between RootQuery and connected TermNode Nodes */
  edges: Array<TermNodeConnectionEdge>;
  /** A list of connected TermNode Nodes */
  nodes: Array<TermNode>;
  /** Information about pagination in a connection. */
  pageInfo: TermNodeConnectionPageInfo;
};

/** Edge between a Node and a connected TermNode */
export type TermNodeConnectionEdge = {
  /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
  cursor?: Maybe<Scalars['String']>;
  /** The connected TermNode Node */
  node: TermNode;
};

/** Page Info on the connected TermNodeConnectionEdge */
export type TermNodeConnectionPageInfo = {
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
};

/** The Type of Identifier used to fetch a single resource. Default is "ID". To be used along with the "id" field. */
export enum TermNodeIdTypeEnum {
  /** The Database ID for the node */
  DatabaseId = 'DATABASE_ID',
  /** The hashed Global ID */
  Id = 'ID',
  /** The name of the node */
  Name = 'NAME',
  /** Url friendly name of the node */
  Slug = 'SLUG',
  /** The URI for the node */
  Uri = 'URI'
}

/** Connection between the TermNode type and the EnqueuedScript type */
export type TermNodeToEnqueuedScriptConnection = Connection & EnqueuedScriptConnection & {
  __typename?: 'TermNodeToEnqueuedScriptConnection';
  /** Edges for the TermNodeToEnqueuedScriptConnection connection */
  edges: Array<TermNodeToEnqueuedScriptConnectionEdge>;
  /** The nodes of the connection, without the edges */
  nodes: Array<EnqueuedScript>;
  /** Information about pagination in a connection. */
  pageInfo: TermNodeToEnqueuedScriptConnectionPageInfo;
};

/** An edge in a connection */
export type TermNodeToEnqueuedScriptConnectionEdge = Edge & EnqueuedScriptConnectionEdge & {
  __typename?: 'TermNodeToEnqueuedScriptConnectionEdge';
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node: EnqueuedScript;
};

/** Page Info on the &quot;TermNodeToEnqueuedScriptConnection&quot; */
export type TermNodeToEnqueuedScriptConnectionPageInfo = EnqueuedScriptConnectionPageInfo & PageInfo & WpPageInfo & {
  __typename?: 'TermNodeToEnqueuedScriptConnectionPageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
};

/** Connection between the TermNode type and the EnqueuedStylesheet type */
export type TermNodeToEnqueuedStylesheetConnection = Connection & EnqueuedStylesheetConnection & {
  __typename?: 'TermNodeToEnqueuedStylesheetConnection';
  /** Edges for the TermNodeToEnqueuedStylesheetConnection connection */
  edges: Array<TermNodeToEnqueuedStylesheetConnectionEdge>;
  /** The nodes of the connection, without the edges */
  nodes: Array<EnqueuedStylesheet>;
  /** Information about pagination in a connection. */
  pageInfo: TermNodeToEnqueuedStylesheetConnectionPageInfo;
};

/** An edge in a connection */
export type TermNodeToEnqueuedStylesheetConnectionEdge = Edge & EnqueuedStylesheetConnectionEdge & {
  __typename?: 'TermNodeToEnqueuedStylesheetConnectionEdge';
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node: EnqueuedStylesheet;
};

/** Page Info on the &quot;TermNodeToEnqueuedStylesheetConnection&quot; */
export type TermNodeToEnqueuedStylesheetConnectionPageInfo = EnqueuedStylesheetConnectionPageInfo & PageInfo & WpPageInfo & {
  __typename?: 'TermNodeToEnqueuedStylesheetConnectionPageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
};

/** Options for ordering the connection by */
export enum TermObjectsConnectionOrderbyEnum {
  /** Order the connection by item count. */
  Count = 'COUNT',
  /** Order the connection by description. */
  Description = 'DESCRIPTION',
  /** Order the connection by name. */
  Name = 'NAME',
  /** Order the connection by slug. */
  Slug = 'SLUG',
  /** Order the connection by term group. */
  TermGroup = 'TERM_GROUP',
  /** Order the connection by term id. */
  TermId = 'TERM_ID',
  /** Order the connection by term order. */
  TermOrder = 'TERM_ORDER'
}

/** A theme object */
export type Theme = Node & {
  __typename?: 'Theme';
  /** Name of the theme author(s), could also be a company name. This field is equivalent to WP_Theme-&gt;get( &quot;Author&quot; ). */
  author?: Maybe<Scalars['String']>;
  /** URI for the author/company website. This field is equivalent to WP_Theme-&gt;get( &quot;AuthorURI&quot; ). */
  authorUri?: Maybe<Scalars['String']>;
  /** The description of the theme. This field is equivalent to WP_Theme-&gt;get( &quot;Description&quot; ). */
  description?: Maybe<Scalars['String']>;
  /** The globally unique identifier of the theme object. */
  id: Scalars['ID'];
  /** Whether the object is restricted from the current viewer */
  isRestricted?: Maybe<Scalars['Boolean']>;
  /** Display name of the theme. This field is equivalent to WP_Theme-&gt;get( &quot;Name&quot; ). */
  name?: Maybe<Scalars['String']>;
  /** The URL of the screenshot for the theme. The screenshot is intended to give an overview of what the theme looks like. This field is equivalent to WP_Theme-&gt;get_screenshot(). */
  screenshot?: Maybe<Scalars['String']>;
  /** The theme slug is used to internally match themes. Theme slugs can have subdirectories like: my-theme/sub-theme. This field is equivalent to WP_Theme-&gt;get_stylesheet(). */
  slug?: Maybe<Scalars['String']>;
  /** URI for the author/company website. This field is equivalent to WP_Theme-&gt;get( &quot;Tags&quot; ). */
  tags?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** A URI if the theme has a website associated with it. The Theme URI is handy for directing users to a theme site for support etc. This field is equivalent to WP_Theme-&gt;get( &quot;ThemeURI&quot; ). */
  themeUri?: Maybe<Scalars['String']>;
  /** The current version of the theme. This field is equivalent to WP_Theme-&gt;get( &quot;Version&quot; ). */
  version?: Maybe<Scalars['String']>;
};

/** Connection to Theme Nodes */
export type ThemeConnection = {
  /** A list of edges (relational context) between RootQuery and connected Theme Nodes */
  edges: Array<ThemeConnectionEdge>;
  /** A list of connected Theme Nodes */
  nodes: Array<Theme>;
  /** Information about pagination in a connection. */
  pageInfo: ThemeConnectionPageInfo;
};

/** Edge between a Node and a connected Theme */
export type ThemeConnectionEdge = {
  /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
  cursor?: Maybe<Scalars['String']>;
  /** The connected Theme Node */
  node: Theme;
};

/** Page Info on the connected ThemeConnectionEdge */
export type ThemeConnectionPageInfo = {
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
};

/** The tutorial type */
export type Tutorial = ContentNode & DatabaseIdentifier & MenuItemLinkable & Node & NodeWithContentEditor & NodeWithEditorBlocks & NodeWithFeaturedImage & NodeWithTemplate & NodeWithTitle & Previewable & UniformResourceIdentifiable & {
  __typename?: 'Tutorial';
  /** @deprecated Deprecated in favor of using Next.js pages */
  conditionalTags?: Maybe<ConditionalTags>;
  /** The content of the post. */
  content?: Maybe<Scalars['String']>;
  /** Connection between the ContentNode type and the ContentType type */
  contentType?: Maybe<ContentNodeToContentTypeConnectionEdge>;
  /** The name of the Content Type the node belongs to */
  contentTypeName: Scalars['String'];
  /** The unique identifier stored in the database */
  databaseId: Scalars['Int'];
  /** Post publishing date. */
  date?: Maybe<Scalars['String']>;
  /** The publishing date set in GMT. */
  dateGmt?: Maybe<Scalars['String']>;
  /** The desired slug of the post */
  desiredSlug?: Maybe<Scalars['String']>;
  /** If a user has edited the node within the past 15 seconds, this will return the user that last edited. Null if the edit lock doesn&#039;t exist or is greater than 15 seconds */
  editingLockedBy?: Maybe<ContentNodeToEditLockConnectionEdge>;
  /** List of editor blocks */
  editorBlocks?: Maybe<Array<Maybe<EditorBlock>>>;
  /** The RSS enclosure for the object */
  enclosure?: Maybe<Scalars['String']>;
  /** Connection between the ContentNode type and the EnqueuedScript type */
  enqueuedScripts?: Maybe<ContentNodeToEnqueuedScriptConnection>;
  /** Connection between the ContentNode type and the EnqueuedStylesheet type */
  enqueuedStylesheets?: Maybe<ContentNodeToEnqueuedStylesheetConnection>;
  /** Connection between the NodeWithFeaturedImage type and the MediaItem type */
  featuredImage?: Maybe<NodeWithFeaturedImageToMediaItemConnectionEdge>;
  /** The database identifier for the featured image node assigned to the content node */
  featuredImageDatabaseId?: Maybe<Scalars['Int']>;
  /** Globally unique ID of the featured image assigned to the node */
  featuredImageId?: Maybe<Scalars['ID']>;
  /** The global unique identifier for this post. This currently matches the value stored in WP_Post-&gt;guid and the guid column in the &quot;post_objects&quot; database table. */
  guid?: Maybe<Scalars['String']>;
  /** The globally unique identifier of the faust_tutorial object. */
  id: Scalars['ID'];
  /** Whether the node is a Content Node */
  isContentNode: Scalars['Boolean'];
  /** Whether the object is a node in the preview state */
  isPreview?: Maybe<Scalars['Boolean']>;
  /** Whether the object is restricted from the current viewer */
  isRestricted?: Maybe<Scalars['Boolean']>;
  /** Whether the node is a Term */
  isTermNode: Scalars['Boolean'];
  /** The user that most recently edited the node */
  lastEditedBy?: Maybe<ContentNodeToEditLastConnectionEdge>;
  /** The permalink of the post */
  link?: Maybe<Scalars['String']>;
  /** The local modified time for a post. If a post was recently updated the modified field will change to match the corresponding time. */
  modified?: Maybe<Scalars['String']>;
  /** The GMT modified time for a post. If a post was recently updated the modified field will change to match the corresponding time in GMT. */
  modifiedGmt?: Maybe<Scalars['String']>;
  /** Connection between the Tutorial type and the tutorial type */
  preview?: Maybe<TutorialToPreviewConnectionEdge>;
  /** The database id of the preview node */
  previewRevisionDatabaseId?: Maybe<Scalars['Int']>;
  /** Whether the object is a node in the preview state */
  previewRevisionId?: Maybe<Scalars['ID']>;
  /** The uri slug for the post. This is equivalent to the WP_Post-&gt;post_name field and the post_name column in the database for the &quot;post_objects&quot; table. */
  slug?: Maybe<Scalars['String']>;
  /** The current status of the object */
  status?: Maybe<Scalars['String']>;
  /** The template assigned to the node */
  template?: Maybe<ContentTemplate>;
  templates?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** The title of the post. This is currently just the raw title. An amendment to support rendered title needs to be made. */
  title?: Maybe<Scalars['String']>;
  /**
   * The id field matches the WP_Post-&gt;ID field.
   * @deprecated Deprecated in favor of the databaseId field
   */
  tutorialId: Scalars['Int'];
  /** The unique resource identifier path */
  uri?: Maybe<Scalars['String']>;
};


/** The tutorial type */
export type TutorialContentArgs = {
  format?: InputMaybe<PostObjectFieldFormatEnum>;
};


/** The tutorial type */
export type TutorialEditorBlocksArgs = {
  flat?: InputMaybe<Scalars['Boolean']>;
};


/** The tutorial type */
export type TutorialEnqueuedScriptsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


/** The tutorial type */
export type TutorialEnqueuedStylesheetsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


/** The tutorial type */
export type TutorialTitleArgs = {
  format?: InputMaybe<PostObjectFieldFormatEnum>;
};

/** Connection to tutorial Nodes */
export type TutorialConnection = {
  /** A list of edges (relational context) between RootQuery and connected tutorial Nodes */
  edges: Array<TutorialConnectionEdge>;
  /** A list of connected tutorial Nodes */
  nodes: Array<Tutorial>;
  /** Information about pagination in a connection. */
  pageInfo: TutorialConnectionPageInfo;
};

/** Edge between a Node and a connected tutorial */
export type TutorialConnectionEdge = {
  /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
  cursor?: Maybe<Scalars['String']>;
  /** The connected tutorial Node */
  node: Tutorial;
};

/** Page Info on the connected TutorialConnectionEdge */
export type TutorialConnectionPageInfo = {
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
};

/** The Type of Identifier used to fetch a single resource. Default is ID. */
export enum TutorialIdType {
  /** Identify a resource by the Database ID. */
  DatabaseId = 'DATABASE_ID',
  /** Identify a resource by the (hashed) Global ID. */
  Id = 'ID',
  /** Identify a resource by the slug. Available to non-hierarchcial Types where the slug is a unique identifier. */
  Slug = 'SLUG',
  /** Identify a resource by the URI. */
  Uri = 'URI'
}

/** Connection between the Tutorial type and the tutorial type */
export type TutorialToPreviewConnectionEdge = Edge & OneToOneConnection & TutorialConnectionEdge & {
  __typename?: 'TutorialToPreviewConnectionEdge';
  /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
  cursor?: Maybe<Scalars['String']>;
  /** The node of the connection, without the edges */
  node: Tutorial;
};

/** Any node that has a URI */
export type UniformResourceIdentifiable = {
  /** @deprecated Deprecated in favor of using Next.js pages */
  conditionalTags?: Maybe<ConditionalTags>;
  /** The unique resource identifier path */
  id: Scalars['ID'];
  /** Whether the node is a Content Node */
  isContentNode: Scalars['Boolean'];
  /** Whether the node is a Term */
  isTermNode: Scalars['Boolean'];
  templates?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** The unique resource identifier path */
  uri?: Maybe<Scalars['String']>;
};

/** Input for the updateCategory mutation. */
export type UpdateCategoryInput = {
  /** The slug that the category will be an alias of */
  aliasOf?: InputMaybe<Scalars['String']>;
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The description of the category object */
  description?: InputMaybe<Scalars['String']>;
  /** The ID of the category object to update */
  id: Scalars['ID'];
  /** The name of the category object to mutate */
  name?: InputMaybe<Scalars['String']>;
  /** The ID of the category that should be set as the parent */
  parentId?: InputMaybe<Scalars['ID']>;
  /** If this argument exists then the slug will be checked to see if it is not an existing valid term. If that check succeeds (it is not a valid term), then it is added and the term id is given. If it fails, then a check is made to whether the taxonomy is hierarchical and the parent argument is not empty. If the second check succeeds, the term will be inserted and the term id will be given. If the slug argument is empty, then it will be calculated from the term name. */
  slug?: InputMaybe<Scalars['String']>;
};

/** The payload for the updateCategory mutation. */
export type UpdateCategoryPayload = {
  __typename?: 'UpdateCategoryPayload';
  /** The created category */
  category?: Maybe<Category>;
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: Maybe<Scalars['String']>;
};

/** Input for the updateComment mutation. */
export type UpdateCommentInput = {
  /** The approval status of the comment. */
  approved?: InputMaybe<Scalars['String']>;
  /** The name of the comment's author. */
  author?: InputMaybe<Scalars['String']>;
  /** The email of the comment's author. */
  authorEmail?: InputMaybe<Scalars['String']>;
  /** The url of the comment's author. */
  authorUrl?: InputMaybe<Scalars['String']>;
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The database ID of the post object the comment belongs to. */
  commentOn?: InputMaybe<Scalars['Int']>;
  /** Content of the comment. */
  content?: InputMaybe<Scalars['String']>;
  /** The date of the object. Preferable to enter as year/month/day ( e.g. 01/31/2017 ) as it will rearrange date as fit if it is not specified. Incomplete dates may have unintended results for example, "2017" as the input will use current date with timestamp 20:17  */
  date?: InputMaybe<Scalars['String']>;
  /** The ID of the comment being updated. */
  id: Scalars['ID'];
  /** Parent comment ID of current comment. */
  parent?: InputMaybe<Scalars['ID']>;
  /** The approval status of the comment */
  status?: InputMaybe<CommentStatusEnum>;
  /** Type of comment. */
  type?: InputMaybe<Scalars['String']>;
};

/** The payload for the updateComment mutation. */
export type UpdateCommentPayload = {
  __typename?: 'UpdateCommentPayload';
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The comment that was created */
  comment?: Maybe<Comment>;
  /** Whether the mutation succeeded. If the comment is not approved, the server will not return the comment to a non authenticated user, but a success message can be returned if the create succeeded, and the client can optimistically add the comment to the client cache */
  success?: Maybe<Scalars['Boolean']>;
};

/** Input for the updateExplanation mutation. */
export type UpdateExplanationInput = {
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The content of the object */
  content?: InputMaybe<Scalars['String']>;
  /** The date of the object. Preferable to enter as year/month/day (e.g. 01/31/2017) as it will rearrange date as fit if it is not specified. Incomplete dates may have unintended results for example, "2017" as the input will use current date with timestamp 20:17  */
  date?: InputMaybe<Scalars['String']>;
  /** The ID of the explanation object */
  id: Scalars['ID'];
  /** Override the edit lock when another user is editing the post */
  ignoreEditLock?: InputMaybe<Scalars['Boolean']>;
  /** A field used for ordering posts. This is typically used with nav menu items or for special ordering of hierarchical content types. */
  menuOrder?: InputMaybe<Scalars['Int']>;
  /** The password used to protect the content of the object */
  password?: InputMaybe<Scalars['String']>;
  /** The slug of the object */
  slug?: InputMaybe<Scalars['String']>;
  /** The status of the object */
  status?: InputMaybe<PostStatusEnum>;
  /** The title of the object */
  title?: InputMaybe<Scalars['String']>;
};

/** The payload for the updateExplanation mutation. */
export type UpdateExplanationPayload = {
  __typename?: 'UpdateExplanationPayload';
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The Post object mutation type. */
  explanation?: Maybe<Explanation>;
};

/** Input for the updateHowToGuide mutation. */
export type UpdateHowToGuideInput = {
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The content of the object */
  content?: InputMaybe<Scalars['String']>;
  /** The date of the object. Preferable to enter as year/month/day (e.g. 01/31/2017) as it will rearrange date as fit if it is not specified. Incomplete dates may have unintended results for example, "2017" as the input will use current date with timestamp 20:17  */
  date?: InputMaybe<Scalars['String']>;
  /** The ID of the howToGuide object */
  id: Scalars['ID'];
  /** Override the edit lock when another user is editing the post */
  ignoreEditLock?: InputMaybe<Scalars['Boolean']>;
  /** A field used for ordering posts. This is typically used with nav menu items or for special ordering of hierarchical content types. */
  menuOrder?: InputMaybe<Scalars['Int']>;
  /** The password used to protect the content of the object */
  password?: InputMaybe<Scalars['String']>;
  /** The slug of the object */
  slug?: InputMaybe<Scalars['String']>;
  /** The status of the object */
  status?: InputMaybe<PostStatusEnum>;
  /** The title of the object */
  title?: InputMaybe<Scalars['String']>;
};

/** The payload for the updateHowToGuide mutation. */
export type UpdateHowToGuidePayload = {
  __typename?: 'UpdateHowToGuidePayload';
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The Post object mutation type. */
  howToGuide?: Maybe<HowToGuide>;
};

/** Input for the updateMediaItem mutation. */
export type UpdateMediaItemInput = {
  /** Alternative text to display when mediaItem is not displayed */
  altText?: InputMaybe<Scalars['String']>;
  /** The userId to assign as the author of the mediaItem */
  authorId?: InputMaybe<Scalars['ID']>;
  /** The caption for the mediaItem */
  caption?: InputMaybe<Scalars['String']>;
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The comment status for the mediaItem */
  commentStatus?: InputMaybe<Scalars['String']>;
  /** The date of the mediaItem */
  date?: InputMaybe<Scalars['String']>;
  /** The date (in GMT zone) of the mediaItem */
  dateGmt?: InputMaybe<Scalars['String']>;
  /** Description of the mediaItem */
  description?: InputMaybe<Scalars['String']>;
  /** The file name of the mediaItem */
  filePath?: InputMaybe<Scalars['String']>;
  /** The file type of the mediaItem */
  fileType?: InputMaybe<MimeTypeEnum>;
  /** The ID of the mediaItem object */
  id: Scalars['ID'];
  /** The ID of the parent object */
  parentId?: InputMaybe<Scalars['ID']>;
  /** The ping status for the mediaItem */
  pingStatus?: InputMaybe<Scalars['String']>;
  /** The slug of the mediaItem */
  slug?: InputMaybe<Scalars['String']>;
  /** The status of the mediaItem */
  status?: InputMaybe<MediaItemStatusEnum>;
  /** The title of the mediaItem */
  title?: InputMaybe<Scalars['String']>;
};

/** The payload for the updateMediaItem mutation. */
export type UpdateMediaItemPayload = {
  __typename?: 'UpdateMediaItemPayload';
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The MediaItem object mutation type. */
  mediaItem?: Maybe<MediaItem>;
};

/** Input for the updatePage mutation. */
export type UpdatePageInput = {
  /** The userId to assign as the author of the object */
  authorId?: InputMaybe<Scalars['ID']>;
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The content of the object */
  content?: InputMaybe<Scalars['String']>;
  /** The date of the object. Preferable to enter as year/month/day (e.g. 01/31/2017) as it will rearrange date as fit if it is not specified. Incomplete dates may have unintended results for example, "2017" as the input will use current date with timestamp 20:17  */
  date?: InputMaybe<Scalars['String']>;
  /** The ID of the page object */
  id: Scalars['ID'];
  /** Override the edit lock when another user is editing the post */
  ignoreEditLock?: InputMaybe<Scalars['Boolean']>;
  /** A field used for ordering posts. This is typically used with nav menu items or for special ordering of hierarchical content types. */
  menuOrder?: InputMaybe<Scalars['Int']>;
  /** The ID of the parent object */
  parentId?: InputMaybe<Scalars['ID']>;
  /** The password used to protect the content of the object */
  password?: InputMaybe<Scalars['String']>;
  /** The slug of the object */
  slug?: InputMaybe<Scalars['String']>;
  /** The status of the object */
  status?: InputMaybe<PostStatusEnum>;
  /** The title of the object */
  title?: InputMaybe<Scalars['String']>;
};

/** The payload for the updatePage mutation. */
export type UpdatePagePayload = {
  __typename?: 'UpdatePagePayload';
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The Post object mutation type. */
  page?: Maybe<Page>;
};

/** Input for the updatePostFormat mutation. */
export type UpdatePostFormatInput = {
  /** The slug that the post_format will be an alias of */
  aliasOf?: InputMaybe<Scalars['String']>;
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The description of the post_format object */
  description?: InputMaybe<Scalars['String']>;
  /** The ID of the postFormat object to update */
  id: Scalars['ID'];
  /** The name of the post_format object to mutate */
  name?: InputMaybe<Scalars['String']>;
  /** If this argument exists then the slug will be checked to see if it is not an existing valid term. If that check succeeds (it is not a valid term), then it is added and the term id is given. If it fails, then a check is made to whether the taxonomy is hierarchical and the parent argument is not empty. If the second check succeeds, the term will be inserted and the term id will be given. If the slug argument is empty, then it will be calculated from the term name. */
  slug?: InputMaybe<Scalars['String']>;
};

/** The payload for the updatePostFormat mutation. */
export type UpdatePostFormatPayload = {
  __typename?: 'UpdatePostFormatPayload';
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The created post_format */
  postFormat?: Maybe<PostFormat>;
};

/** Input for the updatePost mutation. */
export type UpdatePostInput = {
  /** The userId to assign as the author of the object */
  authorId?: InputMaybe<Scalars['ID']>;
  /** Set connections between the post and categories */
  categories?: InputMaybe<PostCategoriesInput>;
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The content of the object */
  content?: InputMaybe<Scalars['String']>;
  /** The date of the object. Preferable to enter as year/month/day (e.g. 01/31/2017) as it will rearrange date as fit if it is not specified. Incomplete dates may have unintended results for example, "2017" as the input will use current date with timestamp 20:17  */
  date?: InputMaybe<Scalars['String']>;
  /** The excerpt of the object */
  excerpt?: InputMaybe<Scalars['String']>;
  /** The ID of the post object */
  id: Scalars['ID'];
  /** Override the edit lock when another user is editing the post */
  ignoreEditLock?: InputMaybe<Scalars['Boolean']>;
  /** A field used for ordering posts. This is typically used with nav menu items or for special ordering of hierarchical content types. */
  menuOrder?: InputMaybe<Scalars['Int']>;
  /** The password used to protect the content of the object */
  password?: InputMaybe<Scalars['String']>;
  /** Set connections between the post and postFormats */
  postFormats?: InputMaybe<PostPostFormatsInput>;
  /** The slug of the object */
  slug?: InputMaybe<Scalars['String']>;
  /** The status of the object */
  status?: InputMaybe<PostStatusEnum>;
  /** Set connections between the post and tags */
  tags?: InputMaybe<PostTagsInput>;
  /** The title of the object */
  title?: InputMaybe<Scalars['String']>;
};

/** The payload for the updatePost mutation. */
export type UpdatePostPayload = {
  __typename?: 'UpdatePostPayload';
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The Post object mutation type. */
  post?: Maybe<Post>;
};

/** Input for the updateReference mutation. */
export type UpdateReferenceInput = {
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The content of the object */
  content?: InputMaybe<Scalars['String']>;
  /** The date of the object. Preferable to enter as year/month/day (e.g. 01/31/2017) as it will rearrange date as fit if it is not specified. Incomplete dates may have unintended results for example, "2017" as the input will use current date with timestamp 20:17  */
  date?: InputMaybe<Scalars['String']>;
  /** The ID of the reference object */
  id: Scalars['ID'];
  /** Override the edit lock when another user is editing the post */
  ignoreEditLock?: InputMaybe<Scalars['Boolean']>;
  /** A field used for ordering posts. This is typically used with nav menu items or for special ordering of hierarchical content types. */
  menuOrder?: InputMaybe<Scalars['Int']>;
  /** The password used to protect the content of the object */
  password?: InputMaybe<Scalars['String']>;
  /** The slug of the object */
  slug?: InputMaybe<Scalars['String']>;
  /** The status of the object */
  status?: InputMaybe<PostStatusEnum>;
  /** The title of the object */
  title?: InputMaybe<Scalars['String']>;
};

/** The payload for the updateReference mutation. */
export type UpdateReferencePayload = {
  __typename?: 'UpdateReferencePayload';
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The Post object mutation type. */
  reference?: Maybe<Reference>;
};

/** Input for the updateSettings mutation. */
export type UpdateSettingsInput = {
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** Allow people to submit comments on new posts. */
  discussionSettingsDefaultCommentStatus?: InputMaybe<Scalars['String']>;
  /** Allow link notifications from other blogs (pingbacks and trackbacks) on new articles. */
  discussionSettingsDefaultPingStatus?: InputMaybe<Scalars['String']>;
  /** A date format for all date strings. */
  generalSettingsDateFormat?: InputMaybe<Scalars['String']>;
  /** Site tagline. */
  generalSettingsDescription?: InputMaybe<Scalars['String']>;
  /** WordPress locale code. */
  generalSettingsLanguage?: InputMaybe<Scalars['String']>;
  /** A day number of the week that the week should start on. */
  generalSettingsStartOfWeek?: InputMaybe<Scalars['Int']>;
  /** A time format for all time strings. */
  generalSettingsTimeFormat?: InputMaybe<Scalars['String']>;
  /** A city in the same timezone as you. */
  generalSettingsTimezone?: InputMaybe<Scalars['String']>;
  /** Site title. */
  generalSettingsTitle?: InputMaybe<Scalars['String']>;
  /** The ID of the page that should display the latest posts */
  readingSettingsPageForPosts?: InputMaybe<Scalars['Int']>;
  /** The ID of the page that should be displayed on the front page */
  readingSettingsPageOnFront?: InputMaybe<Scalars['Int']>;
  /** Blog pages show at most. */
  readingSettingsPostsPerPage?: InputMaybe<Scalars['Int']>;
  /** What to show on the front page */
  readingSettingsShowOnFront?: InputMaybe<Scalars['String']>;
  /** Default post category. */
  writingSettingsDefaultCategory?: InputMaybe<Scalars['Int']>;
  /** Default post format. */
  writingSettingsDefaultPostFormat?: InputMaybe<Scalars['String']>;
  /** Convert emoticons like :-) and :-P to graphics on display. */
  writingSettingsUseSmilies?: InputMaybe<Scalars['Boolean']>;
};

/** The payload for the updateSettings mutation. */
export type UpdateSettingsPayload = {
  __typename?: 'UpdateSettingsPayload';
  /** Update all settings. */
  allSettings?: Maybe<Settings>;
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Update the DiscussionSettings setting. */
  discussionSettings?: Maybe<DiscussionSettings>;
  /** Update the GeneralSettings setting. */
  generalSettings?: Maybe<GeneralSettings>;
  /** Update the ReadingSettings setting. */
  readingSettings?: Maybe<ReadingSettings>;
  /** Update the WritingSettings setting. */
  writingSettings?: Maybe<WritingSettings>;
};

/** Input for the updateTag mutation. */
export type UpdateTagInput = {
  /** The slug that the post_tag will be an alias of */
  aliasOf?: InputMaybe<Scalars['String']>;
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The description of the post_tag object */
  description?: InputMaybe<Scalars['String']>;
  /** The ID of the tag object to update */
  id: Scalars['ID'];
  /** The name of the post_tag object to mutate */
  name?: InputMaybe<Scalars['String']>;
  /** If this argument exists then the slug will be checked to see if it is not an existing valid term. If that check succeeds (it is not a valid term), then it is added and the term id is given. If it fails, then a check is made to whether the taxonomy is hierarchical and the parent argument is not empty. If the second check succeeds, the term will be inserted and the term id will be given. If the slug argument is empty, then it will be calculated from the term name. */
  slug?: InputMaybe<Scalars['String']>;
};

/** The payload for the updateTag mutation. */
export type UpdateTagPayload = {
  __typename?: 'UpdateTagPayload';
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The created post_tag */
  tag?: Maybe<Tag>;
};

/** Input for the updateTutorial mutation. */
export type UpdateTutorialInput = {
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The content of the object */
  content?: InputMaybe<Scalars['String']>;
  /** The date of the object. Preferable to enter as year/month/day (e.g. 01/31/2017) as it will rearrange date as fit if it is not specified. Incomplete dates may have unintended results for example, "2017" as the input will use current date with timestamp 20:17  */
  date?: InputMaybe<Scalars['String']>;
  /** The ID of the tutorial object */
  id: Scalars['ID'];
  /** Override the edit lock when another user is editing the post */
  ignoreEditLock?: InputMaybe<Scalars['Boolean']>;
  /** A field used for ordering posts. This is typically used with nav menu items or for special ordering of hierarchical content types. */
  menuOrder?: InputMaybe<Scalars['Int']>;
  /** The password used to protect the content of the object */
  password?: InputMaybe<Scalars['String']>;
  /** The slug of the object */
  slug?: InputMaybe<Scalars['String']>;
  /** The status of the object */
  status?: InputMaybe<PostStatusEnum>;
  /** The title of the object */
  title?: InputMaybe<Scalars['String']>;
};

/** The payload for the updateTutorial mutation. */
export type UpdateTutorialPayload = {
  __typename?: 'UpdateTutorialPayload';
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The Post object mutation type. */
  tutorial?: Maybe<Tutorial>;
};

/** Input for the updateUser mutation. */
export type UpdateUserInput = {
  /** User's AOL IM account. */
  aim?: InputMaybe<Scalars['String']>;
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** A string containing content about the user. */
  description?: InputMaybe<Scalars['String']>;
  /** A string that will be shown on the site. Defaults to user's username. It is likely that you will want to change this, for both appearance and security through obscurity (that is if you dont use and delete the default admin user). */
  displayName?: InputMaybe<Scalars['String']>;
  /** A string containing the user's email address. */
  email?: InputMaybe<Scalars['String']>;
  /** 	The user's first name. */
  firstName?: InputMaybe<Scalars['String']>;
  /** The ID of the user */
  id: Scalars['ID'];
  /** User's Jabber account. */
  jabber?: InputMaybe<Scalars['String']>;
  /** The user's last name. */
  lastName?: InputMaybe<Scalars['String']>;
  /** User's locale. */
  locale?: InputMaybe<Scalars['String']>;
  /** A string that contains a URL-friendly name for the user. The default is the user's username. */
  nicename?: InputMaybe<Scalars['String']>;
  /** The user's nickname, defaults to the user's username. */
  nickname?: InputMaybe<Scalars['String']>;
  /** A string that contains the plain text password for the user. */
  password?: InputMaybe<Scalars['String']>;
  /** The date the user registered. Format is Y-m-d H:i:s. */
  registered?: InputMaybe<Scalars['String']>;
  /** A string for whether to enable the rich editor or not. False if not empty. */
  richEditing?: InputMaybe<Scalars['String']>;
  /** An array of roles to be assigned to the user. */
  roles?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** A string containing the user's URL for the user's web site. */
  websiteUrl?: InputMaybe<Scalars['String']>;
  /** User's Yahoo IM account. */
  yim?: InputMaybe<Scalars['String']>;
};

/** The payload for the updateUser mutation. */
export type UpdateUserPayload = {
  __typename?: 'UpdateUserPayload';
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The User object mutation type. */
  user?: Maybe<User>;
};

/** A User object */
export type User = Commenter & DatabaseIdentifier & Node & UniformResourceIdentifiable & {
  __typename?: 'User';
  /** Avatar object for user. The avatar object can be retrieved in different sizes by specifying the size argument. */
  avatar?: Maybe<Avatar>;
  /** User metadata option name. Usually it will be &quot;wp_capabilities&quot;. */
  capKey?: Maybe<Scalars['String']>;
  /** A list of capabilities (permissions) granted to the user */
  capabilities?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Connection between the User type and the Comment type */
  comments?: Maybe<UserToCommentConnection>;
  /** @deprecated Deprecated in favor of using Next.js pages */
  conditionalTags?: Maybe<ConditionalTags>;
  /** Identifies the primary key from the database. */
  databaseId: Scalars['Int'];
  /** Description of the user. */
  description?: Maybe<Scalars['String']>;
  /** Email address of the user. This is equivalent to the WP_User-&gt;user_email property. */
  email?: Maybe<Scalars['String']>;
  /** Connection between the User type and the EnqueuedScript type */
  enqueuedScripts?: Maybe<UserToEnqueuedScriptConnection>;
  /** Connection between the User type and the EnqueuedStylesheet type */
  enqueuedStylesheets?: Maybe<UserToEnqueuedStylesheetConnection>;
  /** A complete list of capabilities including capabilities inherited from a role. This is equivalent to the array keys of WP_User-&gt;allcaps. */
  extraCapabilities?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** First name of the user. This is equivalent to the WP_User-&gt;user_first_name property. */
  firstName?: Maybe<Scalars['String']>;
  /** The globally unique identifier for the user object. */
  id: Scalars['ID'];
  /** Whether the node is a Content Node */
  isContentNode: Scalars['Boolean'];
  /** Whether the object is restricted from the current viewer */
  isRestricted?: Maybe<Scalars['Boolean']>;
  /** Whether the node is a Term */
  isTermNode: Scalars['Boolean'];
  /** Last name of the user. This is equivalent to the WP_User-&gt;user_last_name property. */
  lastName?: Maybe<Scalars['String']>;
  /** The preferred language locale set for the user. Value derived from get_user_locale(). */
  locale?: Maybe<Scalars['String']>;
  /** Connection between the User type and the mediaItem type */
  mediaItems?: Maybe<UserToMediaItemConnection>;
  /** Display name of the user. This is equivalent to the WP_User-&gt;dispaly_name property. */
  name?: Maybe<Scalars['String']>;
  /** The nicename for the user. This field is equivalent to WP_User-&gt;user_nicename */
  nicename?: Maybe<Scalars['String']>;
  /** Nickname of the user. */
  nickname?: Maybe<Scalars['String']>;
  /** Connection between the User type and the page type */
  pages?: Maybe<UserToPageConnection>;
  /** Connection between the User type and the post type */
  posts?: Maybe<UserToPostConnection>;
  /** The date the user registered or was created. The field follows a full ISO8601 date string format. */
  registeredDate?: Maybe<Scalars['String']>;
  /** Connection between the User and Revisions authored by the user */
  revisions?: Maybe<UserToRevisionsConnection>;
  /** Connection between the User type and the UserRole type */
  roles?: Maybe<UserToUserRoleConnection>;
  /** Whether the Toolbar should be displayed when the user is viewing the site. */
  shouldShowAdminToolbar?: Maybe<Scalars['Boolean']>;
  shouldShowFaustToolbar?: Maybe<Scalars['Boolean']>;
  /** The slug for the user. This field is equivalent to WP_User-&gt;user_nicename */
  slug?: Maybe<Scalars['String']>;
  templates?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** The unique resource identifier path */
  uri?: Maybe<Scalars['String']>;
  /** A website url that is associated with the user. */
  url?: Maybe<Scalars['String']>;
  /**
   * The Id of the user. Equivalent to WP_User-&gt;ID
   * @deprecated Deprecated in favor of the databaseId field
   */
  userId?: Maybe<Scalars['Int']>;
  /** Username for the user. This field is equivalent to WP_User-&gt;user_login. */
  username?: Maybe<Scalars['String']>;
};


/** A User object */
export type UserAvatarArgs = {
  forceDefault?: InputMaybe<Scalars['Boolean']>;
  rating?: InputMaybe<AvatarRatingEnum>;
  size?: InputMaybe<Scalars['Int']>;
};


/** A User object */
export type UserCommentsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<UserToCommentConnectionWhereArgs>;
};


/** A User object */
export type UserEnqueuedScriptsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


/** A User object */
export type UserEnqueuedStylesheetsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


/** A User object */
export type UserMediaItemsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<UserToMediaItemConnectionWhereArgs>;
};


/** A User object */
export type UserPagesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<UserToPageConnectionWhereArgs>;
};


/** A User object */
export type UserPostsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<UserToPostConnectionWhereArgs>;
};


/** A User object */
export type UserRevisionsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<UserToRevisionsConnectionWhereArgs>;
};


/** A User object */
export type UserRolesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};

/** Connection to User Nodes */
export type UserConnection = {
  /** A list of edges (relational context) between RootQuery and connected User Nodes */
  edges: Array<UserConnectionEdge>;
  /** A list of connected User Nodes */
  nodes: Array<User>;
  /** Information about pagination in a connection. */
  pageInfo: UserConnectionPageInfo;
};

/** Edge between a Node and a connected User */
export type UserConnectionEdge = {
  /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
  cursor?: Maybe<Scalars['String']>;
  /** The connected User Node */
  node: User;
};

/** Page Info on the connected UserConnectionEdge */
export type UserConnectionPageInfo = {
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
};

/** The Type of Identifier used to fetch a single User node. To be used along with the "id" field. Default is "ID". */
export enum UserNodeIdTypeEnum {
  /** The Database ID for the node */
  DatabaseId = 'DATABASE_ID',
  /** The Email of the User */
  Email = 'EMAIL',
  /** The hashed Global ID */
  Id = 'ID',
  /** The slug of the User */
  Slug = 'SLUG',
  /** The URI for the node */
  Uri = 'URI',
  /** The username the User uses to login with */
  Username = 'USERNAME'
}

/** A user role object */
export type UserRole = Node & {
  __typename?: 'UserRole';
  /** The capabilities that belong to this role */
  capabilities?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** The display name of the role */
  displayName?: Maybe<Scalars['String']>;
  /** The globally unique identifier for the user role object. */
  id: Scalars['ID'];
  /** Whether the object is restricted from the current viewer */
  isRestricted?: Maybe<Scalars['Boolean']>;
  /** The registered name of the role */
  name?: Maybe<Scalars['String']>;
};

/** Connection to UserRole Nodes */
export type UserRoleConnection = {
  /** A list of edges (relational context) between RootQuery and connected UserRole Nodes */
  edges: Array<UserRoleConnectionEdge>;
  /** A list of connected UserRole Nodes */
  nodes: Array<UserRole>;
  /** Information about pagination in a connection. */
  pageInfo: UserRoleConnectionPageInfo;
};

/** Edge between a Node and a connected UserRole */
export type UserRoleConnectionEdge = {
  /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
  cursor?: Maybe<Scalars['String']>;
  /** The connected UserRole Node */
  node: UserRole;
};

/** Page Info on the connected UserRoleConnectionEdge */
export type UserRoleConnectionPageInfo = {
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
};

/** Names of available user roles */
export enum UserRoleEnum {
  /** User role with specific capabilities */
  Administrator = 'ADMINISTRATOR',
  /** User role with specific capabilities */
  Author = 'AUTHOR',
  /** User role with specific capabilities */
  Contributor = 'CONTRIBUTOR',
  /** User role with specific capabilities */
  Editor = 'EDITOR',
  /** User role with specific capabilities */
  Subscriber = 'SUBSCRIBER'
}

/** Connection between the User type and the Comment type */
export type UserToCommentConnection = CommentConnection & Connection & {
  __typename?: 'UserToCommentConnection';
  /** Edges for the UserToCommentConnection connection */
  edges: Array<UserToCommentConnectionEdge>;
  /** The nodes of the connection, without the edges */
  nodes: Array<Comment>;
  /** Information about pagination in a connection. */
  pageInfo: UserToCommentConnectionPageInfo;
};

/** An edge in a connection */
export type UserToCommentConnectionEdge = CommentConnectionEdge & Edge & {
  __typename?: 'UserToCommentConnectionEdge';
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node: Comment;
};

/** Page Info on the &quot;UserToCommentConnection&quot; */
export type UserToCommentConnectionPageInfo = CommentConnectionPageInfo & PageInfo & WpPageInfo & {
  __typename?: 'UserToCommentConnectionPageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
};

/** Arguments for filtering the UserToCommentConnection connection */
export type UserToCommentConnectionWhereArgs = {
  /** Comment author email address. */
  authorEmail?: InputMaybe<Scalars['String']>;
  /** Array of author IDs to include comments for. */
  authorIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Array of author IDs to exclude comments for. */
  authorNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Comment author URL. */
  authorUrl?: InputMaybe<Scalars['String']>;
  /** Array of comment IDs to include. */
  commentIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Array of IDs of users whose unapproved comments will be returned by the query regardless of status. */
  commentNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Include comments of a given type. */
  commentType?: InputMaybe<Scalars['String']>;
  /** Include comments from a given array of comment types. */
  commentTypeIn?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Exclude comments from a given array of comment types. */
  commentTypeNotIn?: InputMaybe<Scalars['String']>;
  /** Content object author ID to limit results by. */
  contentAuthor?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Array of author IDs to retrieve comments for. */
  contentAuthorIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Array of author IDs *not* to retrieve comments for. */
  contentAuthorNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Limit results to those affiliated with a given content object ID. */
  contentId?: InputMaybe<Scalars['ID']>;
  /** Array of content object IDs to include affiliated comments for. */
  contentIdIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Array of content object IDs to exclude affiliated comments for. */
  contentIdNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Content object name (i.e. slug ) to retrieve affiliated comments for. */
  contentName?: InputMaybe<Scalars['String']>;
  /** Content Object parent ID to retrieve affiliated comments for. */
  contentParent?: InputMaybe<Scalars['Int']>;
  /** Array of content object statuses to retrieve affiliated comments for. Pass 'any' to match any value. */
  contentStatus?: InputMaybe<Array<InputMaybe<PostStatusEnum>>>;
  /** Content object type or array of types to retrieve affiliated comments for. Pass 'any' to match any value. */
  contentType?: InputMaybe<Array<InputMaybe<ContentTypeEnum>>>;
  /** Array of IDs or email addresses of users whose unapproved comments will be returned by the query regardless of $status. Default empty */
  includeUnapproved?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Karma score to retrieve matching comments for. */
  karma?: InputMaybe<Scalars['Int']>;
  /** The cardinality of the order of the connection */
  order?: InputMaybe<OrderEnum>;
  /** Field to order the comments by. */
  orderby?: InputMaybe<CommentsConnectionOrderbyEnum>;
  /** Parent ID of comment to retrieve children of. */
  parent?: InputMaybe<Scalars['Int']>;
  /** Array of parent IDs of comments to retrieve children for. */
  parentIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Array of parent IDs of comments *not* to retrieve children for. */
  parentNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Search term(s) to retrieve matching comments for. */
  search?: InputMaybe<Scalars['String']>;
  /** Comment status to limit results by. */
  status?: InputMaybe<Scalars['String']>;
  /** Include comments for a specific user ID. */
  userId?: InputMaybe<Scalars['ID']>;
};

/** Connection between the User type and the EnqueuedScript type */
export type UserToEnqueuedScriptConnection = Connection & EnqueuedScriptConnection & {
  __typename?: 'UserToEnqueuedScriptConnection';
  /** Edges for the UserToEnqueuedScriptConnection connection */
  edges: Array<UserToEnqueuedScriptConnectionEdge>;
  /** The nodes of the connection, without the edges */
  nodes: Array<EnqueuedScript>;
  /** Information about pagination in a connection. */
  pageInfo: UserToEnqueuedScriptConnectionPageInfo;
};

/** An edge in a connection */
export type UserToEnqueuedScriptConnectionEdge = Edge & EnqueuedScriptConnectionEdge & {
  __typename?: 'UserToEnqueuedScriptConnectionEdge';
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node: EnqueuedScript;
};

/** Page Info on the &quot;UserToEnqueuedScriptConnection&quot; */
export type UserToEnqueuedScriptConnectionPageInfo = EnqueuedScriptConnectionPageInfo & PageInfo & WpPageInfo & {
  __typename?: 'UserToEnqueuedScriptConnectionPageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
};

/** Connection between the User type and the EnqueuedStylesheet type */
export type UserToEnqueuedStylesheetConnection = Connection & EnqueuedStylesheetConnection & {
  __typename?: 'UserToEnqueuedStylesheetConnection';
  /** Edges for the UserToEnqueuedStylesheetConnection connection */
  edges: Array<UserToEnqueuedStylesheetConnectionEdge>;
  /** The nodes of the connection, without the edges */
  nodes: Array<EnqueuedStylesheet>;
  /** Information about pagination in a connection. */
  pageInfo: UserToEnqueuedStylesheetConnectionPageInfo;
};

/** An edge in a connection */
export type UserToEnqueuedStylesheetConnectionEdge = Edge & EnqueuedStylesheetConnectionEdge & {
  __typename?: 'UserToEnqueuedStylesheetConnectionEdge';
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node: EnqueuedStylesheet;
};

/** Page Info on the &quot;UserToEnqueuedStylesheetConnection&quot; */
export type UserToEnqueuedStylesheetConnectionPageInfo = EnqueuedStylesheetConnectionPageInfo & PageInfo & WpPageInfo & {
  __typename?: 'UserToEnqueuedStylesheetConnectionPageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
};

/** Connection between the User type and the mediaItem type */
export type UserToMediaItemConnection = Connection & MediaItemConnection & {
  __typename?: 'UserToMediaItemConnection';
  /** Edges for the UserToMediaItemConnection connection */
  edges: Array<UserToMediaItemConnectionEdge>;
  /** The nodes of the connection, without the edges */
  nodes: Array<MediaItem>;
  /** Information about pagination in a connection. */
  pageInfo: UserToMediaItemConnectionPageInfo;
};

/** An edge in a connection */
export type UserToMediaItemConnectionEdge = Edge & MediaItemConnectionEdge & {
  __typename?: 'UserToMediaItemConnectionEdge';
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node: MediaItem;
};

/** Page Info on the &quot;UserToMediaItemConnection&quot; */
export type UserToMediaItemConnectionPageInfo = MediaItemConnectionPageInfo & PageInfo & WpPageInfo & {
  __typename?: 'UserToMediaItemConnectionPageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
};

/** Arguments for filtering the UserToMediaItemConnection connection */
export type UserToMediaItemConnectionWhereArgs = {
  /** The user that's connected as the author of the object. Use the userId for the author object. */
  author?: InputMaybe<Scalars['Int']>;
  /** Find objects connected to author(s) in the array of author's userIds */
  authorIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Find objects connected to the author by the author's nicename */
  authorName?: InputMaybe<Scalars['String']>;
  /** Find objects NOT connected to author(s) in the array of author's userIds */
  authorNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Filter the connection based on dates */
  dateQuery?: InputMaybe<DateQueryInput>;
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword?: InputMaybe<Scalars['Boolean']>;
  /** Specific database ID of the object */
  id?: InputMaybe<Scalars['Int']>;
  /** Array of IDs for the objects to retrieve */
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Get objects with a specific mimeType property */
  mimeType?: InputMaybe<MimeTypeEnum>;
  /** Slug / post_name of the object */
  name?: InputMaybe<Scalars['String']>;
  /** Specify objects to retrieve. Use slugs */
  nameIn?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** What paramater to use to order the objects by. */
  orderby?: InputMaybe<Array<InputMaybe<PostObjectsConnectionOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: InputMaybe<Scalars['ID']>;
  /** Specify objects whose parent is in an array */
  parentIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Specify posts whose parent is not in an array */
  parentNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Show posts with a specific password. */
  password?: InputMaybe<Scalars['String']>;
  /** Show Posts based on a keyword search */
  search?: InputMaybe<Scalars['String']>;
  /** Retrieve posts where post status is in an array. */
  stati?: InputMaybe<Array<InputMaybe<PostStatusEnum>>>;
  /** Show posts with a specific status. */
  status?: InputMaybe<PostStatusEnum>;
  /** Title of the object */
  title?: InputMaybe<Scalars['String']>;
};

/** Connection between the User type and the page type */
export type UserToPageConnection = Connection & PageConnection & {
  __typename?: 'UserToPageConnection';
  /** Edges for the UserToPageConnection connection */
  edges: Array<UserToPageConnectionEdge>;
  /** The nodes of the connection, without the edges */
  nodes: Array<Page>;
  /** Information about pagination in a connection. */
  pageInfo: UserToPageConnectionPageInfo;
};

/** An edge in a connection */
export type UserToPageConnectionEdge = Edge & PageConnectionEdge & {
  __typename?: 'UserToPageConnectionEdge';
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node: Page;
};

/** Page Info on the &quot;UserToPageConnection&quot; */
export type UserToPageConnectionPageInfo = PageConnectionPageInfo & PageInfo & WpPageInfo & {
  __typename?: 'UserToPageConnectionPageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
};

/** Arguments for filtering the UserToPageConnection connection */
export type UserToPageConnectionWhereArgs = {
  /** The user that's connected as the author of the object. Use the userId for the author object. */
  author?: InputMaybe<Scalars['Int']>;
  /** Find objects connected to author(s) in the array of author's userIds */
  authorIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Find objects connected to the author by the author's nicename */
  authorName?: InputMaybe<Scalars['String']>;
  /** Find objects NOT connected to author(s) in the array of author's userIds */
  authorNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Filter the connection based on dates */
  dateQuery?: InputMaybe<DateQueryInput>;
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword?: InputMaybe<Scalars['Boolean']>;
  /** Specific database ID of the object */
  id?: InputMaybe<Scalars['Int']>;
  /** Array of IDs for the objects to retrieve */
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Get objects with a specific mimeType property */
  mimeType?: InputMaybe<MimeTypeEnum>;
  /** Slug / post_name of the object */
  name?: InputMaybe<Scalars['String']>;
  /** Specify objects to retrieve. Use slugs */
  nameIn?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** What paramater to use to order the objects by. */
  orderby?: InputMaybe<Array<InputMaybe<PostObjectsConnectionOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: InputMaybe<Scalars['ID']>;
  /** Specify objects whose parent is in an array */
  parentIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Specify posts whose parent is not in an array */
  parentNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Show posts with a specific password. */
  password?: InputMaybe<Scalars['String']>;
  /** Show Posts based on a keyword search */
  search?: InputMaybe<Scalars['String']>;
  /** Retrieve posts where post status is in an array. */
  stati?: InputMaybe<Array<InputMaybe<PostStatusEnum>>>;
  /** Show posts with a specific status. */
  status?: InputMaybe<PostStatusEnum>;
  /** Title of the object */
  title?: InputMaybe<Scalars['String']>;
};

/** Connection between the User type and the post type */
export type UserToPostConnection = Connection & PostConnection & {
  __typename?: 'UserToPostConnection';
  /** Edges for the UserToPostConnection connection */
  edges: Array<UserToPostConnectionEdge>;
  /** The nodes of the connection, without the edges */
  nodes: Array<Post>;
  /** Information about pagination in a connection. */
  pageInfo: UserToPostConnectionPageInfo;
};

/** An edge in a connection */
export type UserToPostConnectionEdge = Edge & PostConnectionEdge & {
  __typename?: 'UserToPostConnectionEdge';
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node: Post;
};

/** Page Info on the &quot;UserToPostConnection&quot; */
export type UserToPostConnectionPageInfo = PageInfo & PostConnectionPageInfo & WpPageInfo & {
  __typename?: 'UserToPostConnectionPageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
};

/** Arguments for filtering the UserToPostConnection connection */
export type UserToPostConnectionWhereArgs = {
  /** The user that's connected as the author of the object. Use the userId for the author object. */
  author?: InputMaybe<Scalars['Int']>;
  /** Find objects connected to author(s) in the array of author's userIds */
  authorIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Find objects connected to the author by the author's nicename */
  authorName?: InputMaybe<Scalars['String']>;
  /** Find objects NOT connected to author(s) in the array of author's userIds */
  authorNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Category ID */
  categoryId?: InputMaybe<Scalars['Int']>;
  /** Array of category IDs, used to display objects from one category OR another */
  categoryIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Use Category Slug */
  categoryName?: InputMaybe<Scalars['String']>;
  /** Array of category IDs, used to display objects from one category OR another */
  categoryNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Filter the connection based on dates */
  dateQuery?: InputMaybe<DateQueryInput>;
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword?: InputMaybe<Scalars['Boolean']>;
  /** Specific database ID of the object */
  id?: InputMaybe<Scalars['Int']>;
  /** Array of IDs for the objects to retrieve */
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Get objects with a specific mimeType property */
  mimeType?: InputMaybe<MimeTypeEnum>;
  /** Slug / post_name of the object */
  name?: InputMaybe<Scalars['String']>;
  /** Specify objects to retrieve. Use slugs */
  nameIn?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** What paramater to use to order the objects by. */
  orderby?: InputMaybe<Array<InputMaybe<PostObjectsConnectionOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: InputMaybe<Scalars['ID']>;
  /** Specify objects whose parent is in an array */
  parentIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Specify posts whose parent is not in an array */
  parentNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Show posts with a specific password. */
  password?: InputMaybe<Scalars['String']>;
  /** Show Posts based on a keyword search */
  search?: InputMaybe<Scalars['String']>;
  /** Retrieve posts where post status is in an array. */
  stati?: InputMaybe<Array<InputMaybe<PostStatusEnum>>>;
  /** Show posts with a specific status. */
  status?: InputMaybe<PostStatusEnum>;
  /** Tag Slug */
  tag?: InputMaybe<Scalars['String']>;
  /** Use Tag ID */
  tagId?: InputMaybe<Scalars['String']>;
  /** Array of tag IDs, used to display objects from one tag OR another */
  tagIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Array of tag IDs, used to display objects from one tag OR another */
  tagNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Array of tag slugs, used to display objects from one tag AND another */
  tagSlugAnd?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Array of tag slugs, used to include objects in ANY specified tags */
  tagSlugIn?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Title of the object */
  title?: InputMaybe<Scalars['String']>;
};

/** Connection between the User type and the ContentNode type */
export type UserToRevisionsConnection = Connection & ContentNodeConnection & {
  __typename?: 'UserToRevisionsConnection';
  /** Edges for the UserToRevisionsConnection connection */
  edges: Array<UserToRevisionsConnectionEdge>;
  /** The nodes of the connection, without the edges */
  nodes: Array<ContentNode>;
  /** Information about pagination in a connection. */
  pageInfo: UserToRevisionsConnectionPageInfo;
};

/** An edge in a connection */
export type UserToRevisionsConnectionEdge = ContentNodeConnectionEdge & Edge & {
  __typename?: 'UserToRevisionsConnectionEdge';
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node: ContentNode;
};

/** Page Info on the &quot;UserToRevisionsConnection&quot; */
export type UserToRevisionsConnectionPageInfo = ContentNodeConnectionPageInfo & PageInfo & WpPageInfo & {
  __typename?: 'UserToRevisionsConnectionPageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
};

/** Arguments for filtering the UserToRevisionsConnection connection */
export type UserToRevisionsConnectionWhereArgs = {
  /** The Types of content to filter */
  contentTypes?: InputMaybe<Array<InputMaybe<ContentTypeEnum>>>;
  /** Filter the connection based on dates */
  dateQuery?: InputMaybe<DateQueryInput>;
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword?: InputMaybe<Scalars['Boolean']>;
  /** Specific database ID of the object */
  id?: InputMaybe<Scalars['Int']>;
  /** Array of IDs for the objects to retrieve */
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Get objects with a specific mimeType property */
  mimeType?: InputMaybe<MimeTypeEnum>;
  /** Slug / post_name of the object */
  name?: InputMaybe<Scalars['String']>;
  /** Specify objects to retrieve. Use slugs */
  nameIn?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** What paramater to use to order the objects by. */
  orderby?: InputMaybe<Array<InputMaybe<PostObjectsConnectionOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: InputMaybe<Scalars['ID']>;
  /** Specify objects whose parent is in an array */
  parentIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Specify posts whose parent is not in an array */
  parentNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Show posts with a specific password. */
  password?: InputMaybe<Scalars['String']>;
  /** Show Posts based on a keyword search */
  search?: InputMaybe<Scalars['String']>;
  /** Retrieve posts where post status is in an array. */
  stati?: InputMaybe<Array<InputMaybe<PostStatusEnum>>>;
  /** Show posts with a specific status. */
  status?: InputMaybe<PostStatusEnum>;
  /** Title of the object */
  title?: InputMaybe<Scalars['String']>;
};

/** Connection between the User type and the UserRole type */
export type UserToUserRoleConnection = Connection & UserRoleConnection & {
  __typename?: 'UserToUserRoleConnection';
  /** Edges for the UserToUserRoleConnection connection */
  edges: Array<UserToUserRoleConnectionEdge>;
  /** The nodes of the connection, without the edges */
  nodes: Array<UserRole>;
  /** Information about pagination in a connection. */
  pageInfo: UserToUserRoleConnectionPageInfo;
};

/** An edge in a connection */
export type UserToUserRoleConnectionEdge = Edge & UserRoleConnectionEdge & {
  __typename?: 'UserToUserRoleConnectionEdge';
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node: UserRole;
};

/** Page Info on the &quot;UserToUserRoleConnection&quot; */
export type UserToUserRoleConnectionPageInfo = PageInfo & UserRoleConnectionPageInfo & WpPageInfo & {
  __typename?: 'UserToUserRoleConnectionPageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
};

/** Field to order the connection by */
export enum UsersConnectionOrderbyEnum {
  /** Order by display name */
  DisplayName = 'DISPLAY_NAME',
  /** Order by email address */
  Email = 'EMAIL',
  /** Order by login */
  Login = 'LOGIN',
  /** Preserve the login order given in the LOGIN_IN array */
  LoginIn = 'LOGIN_IN',
  /** Order by nice name */
  NiceName = 'NICE_NAME',
  /** Preserve the nice name order given in the NICE_NAME_IN array */
  NiceNameIn = 'NICE_NAME_IN',
  /** Order by registration date */
  Registered = 'REGISTERED',
  /** Order by URL */
  Url = 'URL'
}

/** Options for ordering the connection */
export type UsersConnectionOrderbyInput = {
  /** The field name used to sort the results. */
  field: UsersConnectionOrderbyEnum;
  /** The cardinality of the order of the connection */
  order?: InputMaybe<OrderEnum>;
};

/** Column used for searching for users. */
export enum UsersConnectionSearchColumnEnum {
  /** The user's email address. */
  Email = 'EMAIL',
  /** The globally unique ID. */
  Id = 'ID',
  /** The username the User uses to login with. */
  Login = 'LOGIN',
  /** A URL-friendly name for the user. The default is the user's username. */
  Nicename = 'NICENAME',
  /** The URL of the user's website. */
  Url = 'URL'
}

/** Information about pagination in a connection. */
export type WpPageInfo = {
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
};

/** The writing setting type */
export type WritingSettings = {
  __typename?: 'WritingSettings';
  /** Default post category. */
  defaultCategory?: Maybe<Scalars['Int']>;
  /** Default post format. */
  defaultPostFormat?: Maybe<Scalars['String']>;
  /** Convert emoticons like :-) and :-P to graphics on display. */
  useSmilies?: Maybe<Scalars['Boolean']>;
};

export type DocsSidebarMenuItemsFragmentFragment = { __typename?: 'MenuItem', id: string, uri?: string | null, path?: string | null, label?: string | null, parentId?: string | null, cssClasses?: Array<string | null> | null, menu?: { __typename?: 'MenuItemToMenuConnectionEdge', node: { __typename?: 'Menu', name?: string | null } } | null } & { ' $fragmentName'?: 'DocsSidebarMenuItemsFragmentFragment' };

export type HeaderGeneralSettingsFragmentFragment = { __typename?: 'GeneralSettings', title?: string | null, description?: string | null } & { ' $fragmentName'?: 'HeaderGeneralSettingsFragmentFragment' };

export type PrimaryMenuItemsFragmentFragment = { __typename?: 'MenuItem', id: string, uri?: string | null, path?: string | null, label?: string | null, parentId?: string | null, cssClasses?: Array<string | null> | null, target?: string | null, menu?: { __typename?: 'MenuItemToMenuConnectionEdge', node: { __typename?: 'Menu', name?: string | null } } | null } & { ' $fragmentName'?: 'PrimaryMenuItemsFragmentFragment' };

export type SecondaryMenuItemsFragmentFragment = { __typename?: 'MenuItem', id: string, uri?: string | null, label?: string | null, target?: string | null } & { ' $fragmentName'?: 'SecondaryMenuItemsFragmentFragment' };

export type Search_ResultsQueryVariables = Exact<{
  searchTerm: Scalars['String'];
}>;


export type Search_ResultsQuery = { __typename?: 'RootQuery', contentNodes?: { __typename?: 'RootQueryToContentNodeConnection', edges: Array<{ __typename?: 'RootQueryToContentNodeConnectionEdge', node: { __typename?: 'Explanation', title?: string | null, id: string, uri?: string | null } | { __typename?: 'HowToGuide', title?: string | null, id: string, uri?: string | null } | { __typename?: 'MediaItem', title?: string | null, id: string, uri?: string | null } | { __typename?: 'Page', title?: string | null, id: string, uri?: string | null } | { __typename?: 'Post', title?: string | null, id: string, uri?: string | null } | { __typename?: 'Reference', title?: string | null, id: string, uri?: string | null } | { __typename?: 'Tutorial', title?: string | null, id: string, uri?: string | null } }> } | null };

export type GetArchiveQueryVariables = Exact<{
  uri: Scalars['String'];
}>;


export type GetArchiveQuery = { __typename?: 'RootQuery', nodeByUri?: { __typename?: 'Category', name?: string | null, archiveType: 'Category', posts?: { __typename?: 'CategoryToPostConnection', nodes: Array<{ __typename?: 'Post', id: string, title?: string | null, uri?: string | null }> } | null } | { __typename?: 'ContentType', archiveType: 'ContentType' } | { __typename?: 'Explanation', archiveType: 'Explanation' } | { __typename?: 'HowToGuide', archiveType: 'HowToGuide' } | { __typename?: 'MediaItem', archiveType: 'MediaItem' } | { __typename?: 'Page', archiveType: 'Page' } | { __typename?: 'Post', archiveType: 'Post' } | { __typename?: 'PostFormat', archiveType: 'PostFormat' } | { __typename?: 'Reference', archiveType: 'Reference' } | { __typename?: 'Tag', name?: string | null, archiveType: 'Tag', posts?: { __typename?: 'TagToPostConnection', nodes: Array<{ __typename?: 'Post', id: string, title?: string | null, uri?: string | null }> } | null } | { __typename?: 'Tutorial', archiveType: 'Tutorial' } | { __typename?: 'User', archiveType: 'User' } | null, generalSettings?: { __typename?: 'GeneralSettings', title?: string | null, description?: string | null } | null, primaryMenuItems?: { __typename?: 'RootQueryToMenuItemConnection', nodes: Array<(
      { __typename?: 'MenuItem' }
      & { ' $fragmentRefs'?: { 'PrimaryMenuItemsFragmentFragment': PrimaryMenuItemsFragmentFragment } }
    )> } | null, secondaryMenuItems?: { __typename?: 'RootQueryToMenuItemConnection', nodes: Array<(
      { __typename?: 'MenuItem' }
      & { ' $fragmentRefs'?: { 'SecondaryMenuItemsFragmentFragment': SecondaryMenuItemsFragmentFragment } }
    )> } | null };

export type GetHomePageQueryVariables = Exact<{ [key: string]: never; }>;


export type GetHomePageQuery = { __typename?: 'RootQuery', generalSettings?: { __typename?: 'GeneralSettings', title?: string | null, description?: string | null } | null, primaryMenuItems?: { __typename?: 'RootQueryToMenuItemConnection', nodes: Array<(
      { __typename?: 'MenuItem' }
      & { ' $fragmentRefs'?: { 'PrimaryMenuItemsFragmentFragment': PrimaryMenuItemsFragmentFragment } }
    )> } | null, secondaryMenuItems?: { __typename?: 'RootQueryToMenuItemConnection', nodes: Array<(
      { __typename?: 'MenuItem' }
      & { ' $fragmentRefs'?: { 'SecondaryMenuItemsFragmentFragment': SecondaryMenuItemsFragmentFragment } }
    )> } | null };

export type GetPageQueryVariables = Exact<{
  databaseId: Scalars['ID'];
  asPreview?: InputMaybe<Scalars['Boolean']>;
}>;


export type GetPageQuery = { __typename?: 'RootQuery', page?: { __typename?: 'Page', title?: string | null, content?: string | null } | null, generalSettings?: { __typename?: 'GeneralSettings', title?: string | null, description?: string | null } | null, primaryMenuItems?: { __typename?: 'RootQueryToMenuItemConnection', nodes: Array<(
      { __typename?: 'MenuItem' }
      & { ' $fragmentRefs'?: { 'PrimaryMenuItemsFragmentFragment': PrimaryMenuItemsFragmentFragment } }
    )> } | null, secondaryMenuItems?: { __typename?: 'RootQueryToMenuItemConnection', nodes: Array<(
      { __typename?: 'MenuItem' }
      & { ' $fragmentRefs'?: { 'SecondaryMenuItemsFragmentFragment': SecondaryMenuItemsFragmentFragment } }
    )> } | null };

export type GetPostQueryVariables = Exact<{
  databaseId: Scalars['ID'];
  asPreview?: InputMaybe<Scalars['Boolean']>;
}>;


export type GetPostQuery = { __typename?: 'RootQuery', post?: { __typename?: 'Post', title?: string | null, content?: string | null, date?: string | null, author?: { __typename?: 'NodeWithAuthorToUserConnectionEdge', node: { __typename?: 'User', name?: string | null } } | null } | null, generalSettings?: { __typename?: 'GeneralSettings', title?: string | null, description?: string | null } | null, primaryMenuItems?: { __typename?: 'RootQueryToMenuItemConnection', nodes: Array<(
      { __typename?: 'MenuItem' }
      & { ' $fragmentRefs'?: { 'PrimaryMenuItemsFragmentFragment': PrimaryMenuItemsFragmentFragment } }
    )> } | null, secondaryMenuItems?: { __typename?: 'RootQueryToMenuItemConnection', nodes: Array<(
      { __typename?: 'MenuItem' }
      & { ' $fragmentRefs'?: { 'SecondaryMenuItemsFragmentFragment': SecondaryMenuItemsFragmentFragment } }
    )> } | null };

export type GetExplanationQueryVariables = Exact<{
  databaseId: Scalars['ID'];
  asPreview?: InputMaybe<Scalars['Boolean']>;
}>;


export type GetExplanationQuery = { __typename?: 'RootQuery', explanation?: { __typename?: 'Explanation', title?: string | null, content?: string | null, editorBlocks?: Array<{ __typename?: 'CoreArchives', renderedHtml?: string | null } | { __typename?: 'CoreAudio', renderedHtml?: string | null } | { __typename?: 'CoreAvatar', renderedHtml?: string | null } | { __typename?: 'CoreBlock', renderedHtml?: string | null } | { __typename?: 'CoreButton', renderedHtml?: string | null } | { __typename?: 'CoreButtons', renderedHtml?: string | null } | { __typename?: 'CoreCalendar', renderedHtml?: string | null } | { __typename?: 'CoreCategories', renderedHtml?: string | null } | { __typename?: 'CoreCode', name?: string | null, renderedHtml?: string | null, attributes?: { __typename?: 'CoreCodeAttributes', borderColor?: string | null, backgroundColor?: string | null, content?: string | null, style?: any | null, textColor?: string | null, fontSize?: string | null } | null } | { __typename?: 'CoreColumn', renderedHtml?: string | null } | { __typename?: 'CoreColumns', renderedHtml?: string | null } | { __typename?: 'CoreCommentAuthorName', renderedHtml?: string | null } | { __typename?: 'CoreCommentContent', renderedHtml?: string | null } | { __typename?: 'CoreCommentDate', renderedHtml?: string | null } | { __typename?: 'CoreCommentEditLink', renderedHtml?: string | null } | { __typename?: 'CoreCommentReplyLink', renderedHtml?: string | null } | { __typename?: 'CoreCommentTemplate', renderedHtml?: string | null } | { __typename?: 'CoreComments', renderedHtml?: string | null } | { __typename?: 'CoreCommentsPagination', renderedHtml?: string | null } | { __typename?: 'CoreCommentsPaginationNext', renderedHtml?: string | null } | { __typename?: 'CoreCommentsPaginationNumbers', renderedHtml?: string | null } | { __typename?: 'CoreCommentsPaginationPrevious', renderedHtml?: string | null } | { __typename?: 'CoreCommentsTitle', renderedHtml?: string | null } | { __typename?: 'CoreCover', renderedHtml?: string | null } | { __typename?: 'CoreEmbed', renderedHtml?: string | null } | { __typename?: 'CoreFile', renderedHtml?: string | null } | { __typename?: 'CoreFreeform', renderedHtml?: string | null } | { __typename?: 'CoreGallery', renderedHtml?: string | null } | { __typename?: 'CoreGroup', renderedHtml?: string | null } | { __typename?: 'CoreHeading', renderedHtml?: string | null } | { __typename?: 'CoreHomeLink', renderedHtml?: string | null } | { __typename?: 'CoreHtml', renderedHtml?: string | null } | { __typename?: 'CoreImage', renderedHtml?: string | null } | { __typename?: 'CoreLatestComments', renderedHtml?: string | null } | { __typename?: 'CoreLatestPosts', renderedHtml?: string | null } | { __typename?: 'CoreLegacyWidget', renderedHtml?: string | null } | { __typename?: 'CoreList', renderedHtml?: string | null } | { __typename?: 'CoreListItem', renderedHtml?: string | null } | { __typename?: 'CoreLoginout', renderedHtml?: string | null } | { __typename?: 'CoreMediaText', renderedHtml?: string | null } | { __typename?: 'CoreMissing', renderedHtml?: string | null } | { __typename?: 'CoreMore', renderedHtml?: string | null } | { __typename?: 'CoreNavigation', renderedHtml?: string | null } | { __typename?: 'CoreNavigationLink', renderedHtml?: string | null } | { __typename?: 'CoreNavigationSubmenu', renderedHtml?: string | null } | { __typename?: 'CoreNextpage', renderedHtml?: string | null } | { __typename?: 'CorePageList', renderedHtml?: string | null } | { __typename?: 'CorePageListItem', renderedHtml?: string | null } | { __typename?: 'CoreParagraph', renderedHtml?: string | null } | { __typename?: 'CorePattern', renderedHtml?: string | null } | { __typename?: 'CorePostAuthor', renderedHtml?: string | null } | { __typename?: 'CorePostAuthorBiography', renderedHtml?: string | null } | { __typename?: 'CorePostAuthorName', renderedHtml?: string | null } | { __typename?: 'CorePostComments', renderedHtml?: string | null } | { __typename?: 'CorePostCommentsForm', renderedHtml?: string | null } | { __typename?: 'CorePostContent', renderedHtml?: string | null } | { __typename?: 'CorePostDate', renderedHtml?: string | null } | { __typename?: 'CorePostExcerpt', renderedHtml?: string | null } | { __typename?: 'CorePostFeaturedImage', renderedHtml?: string | null } | { __typename?: 'CorePostNavigationLink', renderedHtml?: string | null } | { __typename?: 'CorePostTemplate', renderedHtml?: string | null } | { __typename?: 'CorePostTerms', renderedHtml?: string | null } | { __typename?: 'CorePostTitle', renderedHtml?: string | null } | { __typename?: 'CorePreformatted', renderedHtml?: string | null } | { __typename?: 'CorePullquote', renderedHtml?: string | null } | { __typename?: 'CoreQuery', renderedHtml?: string | null } | { __typename?: 'CoreQueryNoResults', renderedHtml?: string | null } | { __typename?: 'CoreQueryPagination', renderedHtml?: string | null } | { __typename?: 'CoreQueryPaginationNext', renderedHtml?: string | null } | { __typename?: 'CoreQueryPaginationNumbers', renderedHtml?: string | null } | { __typename?: 'CoreQueryPaginationPrevious', renderedHtml?: string | null } | { __typename?: 'CoreQueryTitle', renderedHtml?: string | null } | { __typename?: 'CoreQuote', renderedHtml?: string | null } | { __typename?: 'CoreReadMore', renderedHtml?: string | null } | { __typename?: 'CoreRss', renderedHtml?: string | null } | { __typename?: 'CoreSearch', renderedHtml?: string | null } | { __typename?: 'CoreSeparator', renderedHtml?: string | null } | { __typename?: 'CoreShortcode', renderedHtml?: string | null } | { __typename?: 'CoreSiteLogo', renderedHtml?: string | null } | { __typename?: 'CoreSiteTagline', renderedHtml?: string | null } | { __typename?: 'CoreSiteTitle', renderedHtml?: string | null } | { __typename?: 'CoreSocialLink', renderedHtml?: string | null } | { __typename?: 'CoreSocialLinks', renderedHtml?: string | null } | { __typename?: 'CoreSpacer', renderedHtml?: string | null } | { __typename?: 'CoreTable', renderedHtml?: string | null } | { __typename?: 'CoreTagCloud', renderedHtml?: string | null } | { __typename?: 'CoreTemplatePart', renderedHtml?: string | null } | { __typename?: 'CoreTermDescription', renderedHtml?: string | null } | { __typename?: 'CoreTextColumns', renderedHtml?: string | null } | { __typename?: 'CoreVerse', renderedHtml?: string | null } | { __typename?: 'CoreVideo', renderedHtml?: string | null } | { __typename?: 'CoreWidgetGroup', renderedHtml?: string | null } | null> | null } | null, generalSettings?: { __typename?: 'GeneralSettings', title?: string | null, description?: string | null } | null, primaryMenuItems?: { __typename?: 'RootQueryToMenuItemConnection', nodes: Array<(
      { __typename?: 'MenuItem' }
      & { ' $fragmentRefs'?: { 'PrimaryMenuItemsFragmentFragment': PrimaryMenuItemsFragmentFragment } }
    )> } | null, secondaryMenuItems?: { __typename?: 'RootQueryToMenuItemConnection', nodes: Array<(
      { __typename?: 'MenuItem' }
      & { ' $fragmentRefs'?: { 'SecondaryMenuItemsFragmentFragment': SecondaryMenuItemsFragmentFragment } }
    )> } | null, docsSidebarMenuItems?: { __typename?: 'RootQueryToMenuItemConnection', nodes: Array<(
      { __typename?: 'MenuItem' }
      & { ' $fragmentRefs'?: { 'DocsSidebarMenuItemsFragmentFragment': DocsSidebarMenuItemsFragmentFragment } }
    )> } | null };

export type GetHowToGuideQueryVariables = Exact<{
  databaseId: Scalars['ID'];
  asPreview?: InputMaybe<Scalars['Boolean']>;
}>;


export type GetHowToGuideQuery = { __typename?: 'RootQuery', howToGuide?: { __typename?: 'HowToGuide', title?: string | null, content?: string | null, editorBlocks?: Array<{ __typename?: 'CoreArchives', renderedHtml?: string | null } | { __typename?: 'CoreAudio', renderedHtml?: string | null } | { __typename?: 'CoreAvatar', renderedHtml?: string | null } | { __typename?: 'CoreBlock', renderedHtml?: string | null } | { __typename?: 'CoreButton', renderedHtml?: string | null } | { __typename?: 'CoreButtons', renderedHtml?: string | null } | { __typename?: 'CoreCalendar', renderedHtml?: string | null } | { __typename?: 'CoreCategories', renderedHtml?: string | null } | { __typename?: 'CoreCode', name?: string | null, renderedHtml?: string | null, attributes?: { __typename?: 'CoreCodeAttributes', borderColor?: string | null, backgroundColor?: string | null, content?: string | null, style?: any | null, textColor?: string | null, fontSize?: string | null } | null } | { __typename?: 'CoreColumn', renderedHtml?: string | null } | { __typename?: 'CoreColumns', renderedHtml?: string | null } | { __typename?: 'CoreCommentAuthorName', renderedHtml?: string | null } | { __typename?: 'CoreCommentContent', renderedHtml?: string | null } | { __typename?: 'CoreCommentDate', renderedHtml?: string | null } | { __typename?: 'CoreCommentEditLink', renderedHtml?: string | null } | { __typename?: 'CoreCommentReplyLink', renderedHtml?: string | null } | { __typename?: 'CoreCommentTemplate', renderedHtml?: string | null } | { __typename?: 'CoreComments', renderedHtml?: string | null } | { __typename?: 'CoreCommentsPagination', renderedHtml?: string | null } | { __typename?: 'CoreCommentsPaginationNext', renderedHtml?: string | null } | { __typename?: 'CoreCommentsPaginationNumbers', renderedHtml?: string | null } | { __typename?: 'CoreCommentsPaginationPrevious', renderedHtml?: string | null } | { __typename?: 'CoreCommentsTitle', renderedHtml?: string | null } | { __typename?: 'CoreCover', renderedHtml?: string | null } | { __typename?: 'CoreEmbed', renderedHtml?: string | null } | { __typename?: 'CoreFile', renderedHtml?: string | null } | { __typename?: 'CoreFreeform', renderedHtml?: string | null } | { __typename?: 'CoreGallery', renderedHtml?: string | null } | { __typename?: 'CoreGroup', renderedHtml?: string | null } | { __typename?: 'CoreHeading', renderedHtml?: string | null } | { __typename?: 'CoreHomeLink', renderedHtml?: string | null } | { __typename?: 'CoreHtml', renderedHtml?: string | null } | { __typename?: 'CoreImage', renderedHtml?: string | null } | { __typename?: 'CoreLatestComments', renderedHtml?: string | null } | { __typename?: 'CoreLatestPosts', renderedHtml?: string | null } | { __typename?: 'CoreLegacyWidget', renderedHtml?: string | null } | { __typename?: 'CoreList', renderedHtml?: string | null } | { __typename?: 'CoreListItem', renderedHtml?: string | null } | { __typename?: 'CoreLoginout', renderedHtml?: string | null } | { __typename?: 'CoreMediaText', renderedHtml?: string | null } | { __typename?: 'CoreMissing', renderedHtml?: string | null } | { __typename?: 'CoreMore', renderedHtml?: string | null } | { __typename?: 'CoreNavigation', renderedHtml?: string | null } | { __typename?: 'CoreNavigationLink', renderedHtml?: string | null } | { __typename?: 'CoreNavigationSubmenu', renderedHtml?: string | null } | { __typename?: 'CoreNextpage', renderedHtml?: string | null } | { __typename?: 'CorePageList', renderedHtml?: string | null } | { __typename?: 'CorePageListItem', renderedHtml?: string | null } | { __typename?: 'CoreParagraph', renderedHtml?: string | null } | { __typename?: 'CorePattern', renderedHtml?: string | null } | { __typename?: 'CorePostAuthor', renderedHtml?: string | null } | { __typename?: 'CorePostAuthorBiography', renderedHtml?: string | null } | { __typename?: 'CorePostAuthorName', renderedHtml?: string | null } | { __typename?: 'CorePostComments', renderedHtml?: string | null } | { __typename?: 'CorePostCommentsForm', renderedHtml?: string | null } | { __typename?: 'CorePostContent', renderedHtml?: string | null } | { __typename?: 'CorePostDate', renderedHtml?: string | null } | { __typename?: 'CorePostExcerpt', renderedHtml?: string | null } | { __typename?: 'CorePostFeaturedImage', renderedHtml?: string | null } | { __typename?: 'CorePostNavigationLink', renderedHtml?: string | null } | { __typename?: 'CorePostTemplate', renderedHtml?: string | null } | { __typename?: 'CorePostTerms', renderedHtml?: string | null } | { __typename?: 'CorePostTitle', renderedHtml?: string | null } | { __typename?: 'CorePreformatted', renderedHtml?: string | null } | { __typename?: 'CorePullquote', renderedHtml?: string | null } | { __typename?: 'CoreQuery', renderedHtml?: string | null } | { __typename?: 'CoreQueryNoResults', renderedHtml?: string | null } | { __typename?: 'CoreQueryPagination', renderedHtml?: string | null } | { __typename?: 'CoreQueryPaginationNext', renderedHtml?: string | null } | { __typename?: 'CoreQueryPaginationNumbers', renderedHtml?: string | null } | { __typename?: 'CoreQueryPaginationPrevious', renderedHtml?: string | null } | { __typename?: 'CoreQueryTitle', renderedHtml?: string | null } | { __typename?: 'CoreQuote', renderedHtml?: string | null } | { __typename?: 'CoreReadMore', renderedHtml?: string | null } | { __typename?: 'CoreRss', renderedHtml?: string | null } | { __typename?: 'CoreSearch', renderedHtml?: string | null } | { __typename?: 'CoreSeparator', renderedHtml?: string | null } | { __typename?: 'CoreShortcode', renderedHtml?: string | null } | { __typename?: 'CoreSiteLogo', renderedHtml?: string | null } | { __typename?: 'CoreSiteTagline', renderedHtml?: string | null } | { __typename?: 'CoreSiteTitle', renderedHtml?: string | null } | { __typename?: 'CoreSocialLink', renderedHtml?: string | null } | { __typename?: 'CoreSocialLinks', renderedHtml?: string | null } | { __typename?: 'CoreSpacer', renderedHtml?: string | null } | { __typename?: 'CoreTable', renderedHtml?: string | null } | { __typename?: 'CoreTagCloud', renderedHtml?: string | null } | { __typename?: 'CoreTemplatePart', renderedHtml?: string | null } | { __typename?: 'CoreTermDescription', renderedHtml?: string | null } | { __typename?: 'CoreTextColumns', renderedHtml?: string | null } | { __typename?: 'CoreVerse', renderedHtml?: string | null } | { __typename?: 'CoreVideo', renderedHtml?: string | null } | { __typename?: 'CoreWidgetGroup', renderedHtml?: string | null } | null> | null } | null, generalSettings?: { __typename?: 'GeneralSettings', title?: string | null, description?: string | null } | null, primaryMenuItems?: { __typename?: 'RootQueryToMenuItemConnection', nodes: Array<(
      { __typename?: 'MenuItem' }
      & { ' $fragmentRefs'?: { 'PrimaryMenuItemsFragmentFragment': PrimaryMenuItemsFragmentFragment } }
    )> } | null, secondaryMenuItems?: { __typename?: 'RootQueryToMenuItemConnection', nodes: Array<(
      { __typename?: 'MenuItem' }
      & { ' $fragmentRefs'?: { 'SecondaryMenuItemsFragmentFragment': SecondaryMenuItemsFragmentFragment } }
    )> } | null, docsSidebarMenuItems?: { __typename?: 'RootQueryToMenuItemConnection', nodes: Array<(
      { __typename?: 'MenuItem' }
      & { ' $fragmentRefs'?: { 'DocsSidebarMenuItemsFragmentFragment': DocsSidebarMenuItemsFragmentFragment } }
    )> } | null };

export type GetReferenceQueryVariables = Exact<{
  databaseId: Scalars['ID'];
  asPreview?: InputMaybe<Scalars['Boolean']>;
}>;


export type GetReferenceQuery = { __typename?: 'RootQuery', reference?: { __typename?: 'Reference', title?: string | null, content?: string | null, editorBlocks?: Array<{ __typename?: 'CoreArchives', renderedHtml?: string | null } | { __typename?: 'CoreAudio', renderedHtml?: string | null } | { __typename?: 'CoreAvatar', renderedHtml?: string | null } | { __typename?: 'CoreBlock', renderedHtml?: string | null } | { __typename?: 'CoreButton', renderedHtml?: string | null } | { __typename?: 'CoreButtons', renderedHtml?: string | null } | { __typename?: 'CoreCalendar', renderedHtml?: string | null } | { __typename?: 'CoreCategories', renderedHtml?: string | null } | { __typename?: 'CoreCode', name?: string | null, renderedHtml?: string | null, attributes?: { __typename?: 'CoreCodeAttributes', borderColor?: string | null, backgroundColor?: string | null, content?: string | null, style?: any | null, textColor?: string | null, fontSize?: string | null } | null } | { __typename?: 'CoreColumn', renderedHtml?: string | null } | { __typename?: 'CoreColumns', renderedHtml?: string | null } | { __typename?: 'CoreCommentAuthorName', renderedHtml?: string | null } | { __typename?: 'CoreCommentContent', renderedHtml?: string | null } | { __typename?: 'CoreCommentDate', renderedHtml?: string | null } | { __typename?: 'CoreCommentEditLink', renderedHtml?: string | null } | { __typename?: 'CoreCommentReplyLink', renderedHtml?: string | null } | { __typename?: 'CoreCommentTemplate', renderedHtml?: string | null } | { __typename?: 'CoreComments', renderedHtml?: string | null } | { __typename?: 'CoreCommentsPagination', renderedHtml?: string | null } | { __typename?: 'CoreCommentsPaginationNext', renderedHtml?: string | null } | { __typename?: 'CoreCommentsPaginationNumbers', renderedHtml?: string | null } | { __typename?: 'CoreCommentsPaginationPrevious', renderedHtml?: string | null } | { __typename?: 'CoreCommentsTitle', renderedHtml?: string | null } | { __typename?: 'CoreCover', renderedHtml?: string | null } | { __typename?: 'CoreEmbed', renderedHtml?: string | null } | { __typename?: 'CoreFile', renderedHtml?: string | null } | { __typename?: 'CoreFreeform', renderedHtml?: string | null } | { __typename?: 'CoreGallery', renderedHtml?: string | null } | { __typename?: 'CoreGroup', renderedHtml?: string | null } | { __typename?: 'CoreHeading', renderedHtml?: string | null } | { __typename?: 'CoreHomeLink', renderedHtml?: string | null } | { __typename?: 'CoreHtml', renderedHtml?: string | null } | { __typename?: 'CoreImage', renderedHtml?: string | null } | { __typename?: 'CoreLatestComments', renderedHtml?: string | null } | { __typename?: 'CoreLatestPosts', renderedHtml?: string | null } | { __typename?: 'CoreLegacyWidget', renderedHtml?: string | null } | { __typename?: 'CoreList', renderedHtml?: string | null } | { __typename?: 'CoreListItem', renderedHtml?: string | null } | { __typename?: 'CoreLoginout', renderedHtml?: string | null } | { __typename?: 'CoreMediaText', renderedHtml?: string | null } | { __typename?: 'CoreMissing', renderedHtml?: string | null } | { __typename?: 'CoreMore', renderedHtml?: string | null } | { __typename?: 'CoreNavigation', renderedHtml?: string | null } | { __typename?: 'CoreNavigationLink', renderedHtml?: string | null } | { __typename?: 'CoreNavigationSubmenu', renderedHtml?: string | null } | { __typename?: 'CoreNextpage', renderedHtml?: string | null } | { __typename?: 'CorePageList', renderedHtml?: string | null } | { __typename?: 'CorePageListItem', renderedHtml?: string | null } | { __typename?: 'CoreParagraph', renderedHtml?: string | null } | { __typename?: 'CorePattern', renderedHtml?: string | null } | { __typename?: 'CorePostAuthor', renderedHtml?: string | null } | { __typename?: 'CorePostAuthorBiography', renderedHtml?: string | null } | { __typename?: 'CorePostAuthorName', renderedHtml?: string | null } | { __typename?: 'CorePostComments', renderedHtml?: string | null } | { __typename?: 'CorePostCommentsForm', renderedHtml?: string | null } | { __typename?: 'CorePostContent', renderedHtml?: string | null } | { __typename?: 'CorePostDate', renderedHtml?: string | null } | { __typename?: 'CorePostExcerpt', renderedHtml?: string | null } | { __typename?: 'CorePostFeaturedImage', renderedHtml?: string | null } | { __typename?: 'CorePostNavigationLink', renderedHtml?: string | null } | { __typename?: 'CorePostTemplate', renderedHtml?: string | null } | { __typename?: 'CorePostTerms', renderedHtml?: string | null } | { __typename?: 'CorePostTitle', renderedHtml?: string | null } | { __typename?: 'CorePreformatted', renderedHtml?: string | null } | { __typename?: 'CorePullquote', renderedHtml?: string | null } | { __typename?: 'CoreQuery', renderedHtml?: string | null } | { __typename?: 'CoreQueryNoResults', renderedHtml?: string | null } | { __typename?: 'CoreQueryPagination', renderedHtml?: string | null } | { __typename?: 'CoreQueryPaginationNext', renderedHtml?: string | null } | { __typename?: 'CoreQueryPaginationNumbers', renderedHtml?: string | null } | { __typename?: 'CoreQueryPaginationPrevious', renderedHtml?: string | null } | { __typename?: 'CoreQueryTitle', renderedHtml?: string | null } | { __typename?: 'CoreQuote', renderedHtml?: string | null } | { __typename?: 'CoreReadMore', renderedHtml?: string | null } | { __typename?: 'CoreRss', renderedHtml?: string | null } | { __typename?: 'CoreSearch', renderedHtml?: string | null } | { __typename?: 'CoreSeparator', renderedHtml?: string | null } | { __typename?: 'CoreShortcode', renderedHtml?: string | null } | { __typename?: 'CoreSiteLogo', renderedHtml?: string | null } | { __typename?: 'CoreSiteTagline', renderedHtml?: string | null } | { __typename?: 'CoreSiteTitle', renderedHtml?: string | null } | { __typename?: 'CoreSocialLink', renderedHtml?: string | null } | { __typename?: 'CoreSocialLinks', renderedHtml?: string | null } | { __typename?: 'CoreSpacer', renderedHtml?: string | null } | { __typename?: 'CoreTable', renderedHtml?: string | null } | { __typename?: 'CoreTagCloud', renderedHtml?: string | null } | { __typename?: 'CoreTemplatePart', renderedHtml?: string | null } | { __typename?: 'CoreTermDescription', renderedHtml?: string | null } | { __typename?: 'CoreTextColumns', renderedHtml?: string | null } | { __typename?: 'CoreVerse', renderedHtml?: string | null } | { __typename?: 'CoreVideo', renderedHtml?: string | null } | { __typename?: 'CoreWidgetGroup', renderedHtml?: string | null } | null> | null } | null, generalSettings?: { __typename?: 'GeneralSettings', title?: string | null, description?: string | null } | null, primaryMenuItems?: { __typename?: 'RootQueryToMenuItemConnection', nodes: Array<(
      { __typename?: 'MenuItem' }
      & { ' $fragmentRefs'?: { 'PrimaryMenuItemsFragmentFragment': PrimaryMenuItemsFragmentFragment } }
    )> } | null, secondaryMenuItems?: { __typename?: 'RootQueryToMenuItemConnection', nodes: Array<(
      { __typename?: 'MenuItem' }
      & { ' $fragmentRefs'?: { 'SecondaryMenuItemsFragmentFragment': SecondaryMenuItemsFragmentFragment } }
    )> } | null, docsSidebarMenuItems?: { __typename?: 'RootQueryToMenuItemConnection', nodes: Array<(
      { __typename?: 'MenuItem' }
      & { ' $fragmentRefs'?: { 'DocsSidebarMenuItemsFragmentFragment': DocsSidebarMenuItemsFragmentFragment } }
    )> } | null };

export type GetTutorialQueryVariables = Exact<{
  databaseId: Scalars['ID'];
  asPreview?: InputMaybe<Scalars['Boolean']>;
}>;


export type GetTutorialQuery = { __typename?: 'RootQuery', tutorial?: { __typename?: 'Tutorial', title?: string | null, content?: string | null, editorBlocks?: Array<{ __typename?: 'CoreArchives', renderedHtml?: string | null } | { __typename?: 'CoreAudio', renderedHtml?: string | null } | { __typename?: 'CoreAvatar', renderedHtml?: string | null } | { __typename?: 'CoreBlock', renderedHtml?: string | null } | { __typename?: 'CoreButton', renderedHtml?: string | null } | { __typename?: 'CoreButtons', renderedHtml?: string | null } | { __typename?: 'CoreCalendar', renderedHtml?: string | null } | { __typename?: 'CoreCategories', renderedHtml?: string | null } | { __typename?: 'CoreCode', name?: string | null, renderedHtml?: string | null, attributes?: { __typename?: 'CoreCodeAttributes', borderColor?: string | null, backgroundColor?: string | null, content?: string | null, style?: any | null, textColor?: string | null, fontSize?: string | null } | null } | { __typename?: 'CoreColumn', renderedHtml?: string | null } | { __typename?: 'CoreColumns', renderedHtml?: string | null } | { __typename?: 'CoreCommentAuthorName', renderedHtml?: string | null } | { __typename?: 'CoreCommentContent', renderedHtml?: string | null } | { __typename?: 'CoreCommentDate', renderedHtml?: string | null } | { __typename?: 'CoreCommentEditLink', renderedHtml?: string | null } | { __typename?: 'CoreCommentReplyLink', renderedHtml?: string | null } | { __typename?: 'CoreCommentTemplate', renderedHtml?: string | null } | { __typename?: 'CoreComments', renderedHtml?: string | null } | { __typename?: 'CoreCommentsPagination', renderedHtml?: string | null } | { __typename?: 'CoreCommentsPaginationNext', renderedHtml?: string | null } | { __typename?: 'CoreCommentsPaginationNumbers', renderedHtml?: string | null } | { __typename?: 'CoreCommentsPaginationPrevious', renderedHtml?: string | null } | { __typename?: 'CoreCommentsTitle', renderedHtml?: string | null } | { __typename?: 'CoreCover', renderedHtml?: string | null } | { __typename?: 'CoreEmbed', renderedHtml?: string | null } | { __typename?: 'CoreFile', renderedHtml?: string | null } | { __typename?: 'CoreFreeform', renderedHtml?: string | null } | { __typename?: 'CoreGallery', renderedHtml?: string | null } | { __typename?: 'CoreGroup', renderedHtml?: string | null } | { __typename?: 'CoreHeading', renderedHtml?: string | null } | { __typename?: 'CoreHomeLink', renderedHtml?: string | null } | { __typename?: 'CoreHtml', renderedHtml?: string | null } | { __typename?: 'CoreImage', renderedHtml?: string | null } | { __typename?: 'CoreLatestComments', renderedHtml?: string | null } | { __typename?: 'CoreLatestPosts', renderedHtml?: string | null } | { __typename?: 'CoreLegacyWidget', renderedHtml?: string | null } | { __typename?: 'CoreList', renderedHtml?: string | null } | { __typename?: 'CoreListItem', renderedHtml?: string | null } | { __typename?: 'CoreLoginout', renderedHtml?: string | null } | { __typename?: 'CoreMediaText', renderedHtml?: string | null } | { __typename?: 'CoreMissing', renderedHtml?: string | null } | { __typename?: 'CoreMore', renderedHtml?: string | null } | { __typename?: 'CoreNavigation', renderedHtml?: string | null } | { __typename?: 'CoreNavigationLink', renderedHtml?: string | null } | { __typename?: 'CoreNavigationSubmenu', renderedHtml?: string | null } | { __typename?: 'CoreNextpage', renderedHtml?: string | null } | { __typename?: 'CorePageList', renderedHtml?: string | null } | { __typename?: 'CorePageListItem', renderedHtml?: string | null } | { __typename?: 'CoreParagraph', renderedHtml?: string | null } | { __typename?: 'CorePattern', renderedHtml?: string | null } | { __typename?: 'CorePostAuthor', renderedHtml?: string | null } | { __typename?: 'CorePostAuthorBiography', renderedHtml?: string | null } | { __typename?: 'CorePostAuthorName', renderedHtml?: string | null } | { __typename?: 'CorePostComments', renderedHtml?: string | null } | { __typename?: 'CorePostCommentsForm', renderedHtml?: string | null } | { __typename?: 'CorePostContent', renderedHtml?: string | null } | { __typename?: 'CorePostDate', renderedHtml?: string | null } | { __typename?: 'CorePostExcerpt', renderedHtml?: string | null } | { __typename?: 'CorePostFeaturedImage', renderedHtml?: string | null } | { __typename?: 'CorePostNavigationLink', renderedHtml?: string | null } | { __typename?: 'CorePostTemplate', renderedHtml?: string | null } | { __typename?: 'CorePostTerms', renderedHtml?: string | null } | { __typename?: 'CorePostTitle', renderedHtml?: string | null } | { __typename?: 'CorePreformatted', renderedHtml?: string | null } | { __typename?: 'CorePullquote', renderedHtml?: string | null } | { __typename?: 'CoreQuery', renderedHtml?: string | null } | { __typename?: 'CoreQueryNoResults', renderedHtml?: string | null } | { __typename?: 'CoreQueryPagination', renderedHtml?: string | null } | { __typename?: 'CoreQueryPaginationNext', renderedHtml?: string | null } | { __typename?: 'CoreQueryPaginationNumbers', renderedHtml?: string | null } | { __typename?: 'CoreQueryPaginationPrevious', renderedHtml?: string | null } | { __typename?: 'CoreQueryTitle', renderedHtml?: string | null } | { __typename?: 'CoreQuote', renderedHtml?: string | null } | { __typename?: 'CoreReadMore', renderedHtml?: string | null } | { __typename?: 'CoreRss', renderedHtml?: string | null } | { __typename?: 'CoreSearch', renderedHtml?: string | null } | { __typename?: 'CoreSeparator', renderedHtml?: string | null } | { __typename?: 'CoreShortcode', renderedHtml?: string | null } | { __typename?: 'CoreSiteLogo', renderedHtml?: string | null } | { __typename?: 'CoreSiteTagline', renderedHtml?: string | null } | { __typename?: 'CoreSiteTitle', renderedHtml?: string | null } | { __typename?: 'CoreSocialLink', renderedHtml?: string | null } | { __typename?: 'CoreSocialLinks', renderedHtml?: string | null } | { __typename?: 'CoreSpacer', renderedHtml?: string | null } | { __typename?: 'CoreTable', renderedHtml?: string | null } | { __typename?: 'CoreTagCloud', renderedHtml?: string | null } | { __typename?: 'CoreTemplatePart', renderedHtml?: string | null } | { __typename?: 'CoreTermDescription', renderedHtml?: string | null } | { __typename?: 'CoreTextColumns', renderedHtml?: string | null } | { __typename?: 'CoreVerse', renderedHtml?: string | null } | { __typename?: 'CoreVideo', renderedHtml?: string | null } | { __typename?: 'CoreWidgetGroup', renderedHtml?: string | null } | null> | null } | null, generalSettings?: { __typename?: 'GeneralSettings', title?: string | null, description?: string | null } | null, primaryMenuItems?: { __typename?: 'RootQueryToMenuItemConnection', nodes: Array<(
      { __typename?: 'MenuItem' }
      & { ' $fragmentRefs'?: { 'PrimaryMenuItemsFragmentFragment': PrimaryMenuItemsFragmentFragment } }
    )> } | null, secondaryMenuItems?: { __typename?: 'RootQueryToMenuItemConnection', nodes: Array<(
      { __typename?: 'MenuItem' }
      & { ' $fragmentRefs'?: { 'SecondaryMenuItemsFragmentFragment': SecondaryMenuItemsFragmentFragment } }
    )> } | null, docsSidebarMenuItems?: { __typename?: 'RootQueryToMenuItemConnection', nodes: Array<(
      { __typename?: 'MenuItem' }
      & { ' $fragmentRefs'?: { 'DocsSidebarMenuItemsFragmentFragment': DocsSidebarMenuItemsFragmentFragment } }
    )> } | null };

export const DocsSidebarMenuItemsFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DocsSidebarMenuItemsFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MenuItem"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"uri"}},{"kind":"Field","name":{"kind":"Name","value":"path"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"parentId"}},{"kind":"Field","name":{"kind":"Name","value":"cssClasses"}},{"kind":"Field","name":{"kind":"Name","value":"menu"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]} as unknown as DocumentNode<DocsSidebarMenuItemsFragmentFragment, unknown>;
export const HeaderGeneralSettingsFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"HeaderGeneralSettingsFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"GeneralSettings"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}}]} as unknown as DocumentNode<HeaderGeneralSettingsFragmentFragment, unknown>;
export const PrimaryMenuItemsFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PrimaryMenuItemsFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MenuItem"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"uri"}},{"kind":"Field","name":{"kind":"Name","value":"path"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"parentId"}},{"kind":"Field","name":{"kind":"Name","value":"cssClasses"}},{"kind":"Field","name":{"kind":"Name","value":"target"}},{"kind":"Field","name":{"kind":"Name","value":"menu"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]} as unknown as DocumentNode<PrimaryMenuItemsFragmentFragment, unknown>;
export const SecondaryMenuItemsFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SecondaryMenuItemsFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MenuItem"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"uri"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"target"}}]}}]} as unknown as DocumentNode<SecondaryMenuItemsFragmentFragment, unknown>;
export const Search_ResultsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"SEARCH_RESULTS"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"searchTerm"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"contentNodes"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"search"},"value":{"kind":"Variable","name":{"kind":"Name","value":"searchTerm"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"NodeWithTitle"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}}]}},{"kind":"Field","name":{"kind":"Name","value":"uri"}}]}}]}}]}}]}}]} as unknown as DocumentNode<Search_ResultsQuery, Search_ResultsQueryVariables>;
export const GetArchiveDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetArchive"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"uri"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodeByUri"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"uri"},"value":{"kind":"Variable","name":{"kind":"Name","value":"uri"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"archiveType"},"name":{"kind":"Name","value":"__typename"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Category"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"posts"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"uri"}}]}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Tag"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"posts"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"uri"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"generalSettings"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"primaryMenuItems"},"name":{"kind":"Name","value":"menuItems"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"location"},"value":{"kind":"EnumValue","value":"PRIMARY"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PrimaryMenuItemsFragment"}}]}}]}},{"kind":"Field","alias":{"kind":"Name","value":"secondaryMenuItems"},"name":{"kind":"Name","value":"menuItems"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"location"},"value":{"kind":"EnumValue","value":"SECONDARY"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"SecondaryMenuItemsFragment"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PrimaryMenuItemsFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MenuItem"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"uri"}},{"kind":"Field","name":{"kind":"Name","value":"path"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"parentId"}},{"kind":"Field","name":{"kind":"Name","value":"cssClasses"}},{"kind":"Field","name":{"kind":"Name","value":"target"}},{"kind":"Field","name":{"kind":"Name","value":"menu"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SecondaryMenuItemsFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MenuItem"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"uri"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"target"}}]}}]} as unknown as DocumentNode<GetArchiveQuery, GetArchiveQueryVariables>;
export const GetHomePageDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetHomePage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"generalSettings"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"primaryMenuItems"},"name":{"kind":"Name","value":"menuItems"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"location"},"value":{"kind":"EnumValue","value":"PRIMARY"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PrimaryMenuItemsFragment"}}]}}]}},{"kind":"Field","alias":{"kind":"Name","value":"secondaryMenuItems"},"name":{"kind":"Name","value":"menuItems"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"location"},"value":{"kind":"EnumValue","value":"SECONDARY"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"SecondaryMenuItemsFragment"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PrimaryMenuItemsFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MenuItem"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"uri"}},{"kind":"Field","name":{"kind":"Name","value":"path"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"parentId"}},{"kind":"Field","name":{"kind":"Name","value":"cssClasses"}},{"kind":"Field","name":{"kind":"Name","value":"target"}},{"kind":"Field","name":{"kind":"Name","value":"menu"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SecondaryMenuItemsFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MenuItem"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"uri"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"target"}}]}}]} as unknown as DocumentNode<GetHomePageQuery, GetHomePageQueryVariables>;
export const GetPageDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetPage"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"databaseId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"asPreview"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}},"defaultValue":{"kind":"BooleanValue","value":false}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"page"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"databaseId"}}},{"kind":"Argument","name":{"kind":"Name","value":"idType"},"value":{"kind":"EnumValue","value":"DATABASE_ID"}},{"kind":"Argument","name":{"kind":"Name","value":"asPreview"},"value":{"kind":"Variable","name":{"kind":"Name","value":"asPreview"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"content"}}]}},{"kind":"Field","name":{"kind":"Name","value":"generalSettings"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"primaryMenuItems"},"name":{"kind":"Name","value":"menuItems"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"location"},"value":{"kind":"EnumValue","value":"PRIMARY"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PrimaryMenuItemsFragment"}}]}}]}},{"kind":"Field","alias":{"kind":"Name","value":"secondaryMenuItems"},"name":{"kind":"Name","value":"menuItems"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"location"},"value":{"kind":"EnumValue","value":"SECONDARY"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"SecondaryMenuItemsFragment"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PrimaryMenuItemsFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MenuItem"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"uri"}},{"kind":"Field","name":{"kind":"Name","value":"path"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"parentId"}},{"kind":"Field","name":{"kind":"Name","value":"cssClasses"}},{"kind":"Field","name":{"kind":"Name","value":"target"}},{"kind":"Field","name":{"kind":"Name","value":"menu"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SecondaryMenuItemsFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MenuItem"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"uri"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"target"}}]}}]} as unknown as DocumentNode<GetPageQuery, GetPageQueryVariables>;
export const GetPostDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetPost"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"databaseId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"asPreview"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}},"defaultValue":{"kind":"BooleanValue","value":false}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"post"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"databaseId"}}},{"kind":"Argument","name":{"kind":"Name","value":"idType"},"value":{"kind":"EnumValue","value":"DATABASE_ID"}},{"kind":"Argument","name":{"kind":"Name","value":"asPreview"},"value":{"kind":"Variable","name":{"kind":"Name","value":"asPreview"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"date"}},{"kind":"Field","name":{"kind":"Name","value":"author"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"generalSettings"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"primaryMenuItems"},"name":{"kind":"Name","value":"menuItems"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"location"},"value":{"kind":"EnumValue","value":"PRIMARY"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PrimaryMenuItemsFragment"}}]}}]}},{"kind":"Field","alias":{"kind":"Name","value":"secondaryMenuItems"},"name":{"kind":"Name","value":"menuItems"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"location"},"value":{"kind":"EnumValue","value":"SECONDARY"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"SecondaryMenuItemsFragment"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PrimaryMenuItemsFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MenuItem"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"uri"}},{"kind":"Field","name":{"kind":"Name","value":"path"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"parentId"}},{"kind":"Field","name":{"kind":"Name","value":"cssClasses"}},{"kind":"Field","name":{"kind":"Name","value":"target"}},{"kind":"Field","name":{"kind":"Name","value":"menu"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SecondaryMenuItemsFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MenuItem"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"uri"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"target"}}]}}]} as unknown as DocumentNode<GetPostQuery, GetPostQueryVariables>;
export const GetExplanationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetExplanation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"databaseId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"asPreview"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}},"defaultValue":{"kind":"BooleanValue","value":false}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"explanation"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"databaseId"}}},{"kind":"Argument","name":{"kind":"Name","value":"idType"},"value":{"kind":"EnumValue","value":"DATABASE_ID"}},{"kind":"Argument","name":{"kind":"Name","value":"asPreview"},"value":{"kind":"Variable","name":{"kind":"Name","value":"asPreview"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"NodeWithEditorBlocks"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"editorBlocks"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"renderedHtml"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CoreCode"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"borderColor"}},{"kind":"Field","name":{"kind":"Name","value":"backgroundColor"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"style"}},{"kind":"Field","name":{"kind":"Name","value":"textColor"}},{"kind":"Field","name":{"kind":"Name","value":"fontSize"}}]}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"generalSettings"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"primaryMenuItems"},"name":{"kind":"Name","value":"menuItems"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"location"},"value":{"kind":"EnumValue","value":"PRIMARY"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PrimaryMenuItemsFragment"}}]}}]}},{"kind":"Field","alias":{"kind":"Name","value":"secondaryMenuItems"},"name":{"kind":"Name","value":"menuItems"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"location"},"value":{"kind":"EnumValue","value":"SECONDARY"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"SecondaryMenuItemsFragment"}}]}}]}},{"kind":"Field","alias":{"kind":"Name","value":"docsSidebarMenuItems"},"name":{"kind":"Name","value":"menuItems"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"location"},"value":{"kind":"EnumValue","value":"DOCS_SIDEBAR"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DocsSidebarMenuItemsFragment"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PrimaryMenuItemsFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MenuItem"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"uri"}},{"kind":"Field","name":{"kind":"Name","value":"path"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"parentId"}},{"kind":"Field","name":{"kind":"Name","value":"cssClasses"}},{"kind":"Field","name":{"kind":"Name","value":"target"}},{"kind":"Field","name":{"kind":"Name","value":"menu"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SecondaryMenuItemsFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MenuItem"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"uri"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"target"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DocsSidebarMenuItemsFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MenuItem"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"uri"}},{"kind":"Field","name":{"kind":"Name","value":"path"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"parentId"}},{"kind":"Field","name":{"kind":"Name","value":"cssClasses"}},{"kind":"Field","name":{"kind":"Name","value":"menu"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]} as unknown as DocumentNode<GetExplanationQuery, GetExplanationQueryVariables>;
export const GetHowToGuideDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetHowToGuide"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"databaseId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"asPreview"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}},"defaultValue":{"kind":"BooleanValue","value":false}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"howToGuide"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"databaseId"}}},{"kind":"Argument","name":{"kind":"Name","value":"idType"},"value":{"kind":"EnumValue","value":"DATABASE_ID"}},{"kind":"Argument","name":{"kind":"Name","value":"asPreview"},"value":{"kind":"Variable","name":{"kind":"Name","value":"asPreview"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"NodeWithEditorBlocks"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"editorBlocks"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"renderedHtml"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CoreCode"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"borderColor"}},{"kind":"Field","name":{"kind":"Name","value":"backgroundColor"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"style"}},{"kind":"Field","name":{"kind":"Name","value":"textColor"}},{"kind":"Field","name":{"kind":"Name","value":"fontSize"}}]}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"generalSettings"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"primaryMenuItems"},"name":{"kind":"Name","value":"menuItems"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"location"},"value":{"kind":"EnumValue","value":"PRIMARY"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PrimaryMenuItemsFragment"}}]}}]}},{"kind":"Field","alias":{"kind":"Name","value":"secondaryMenuItems"},"name":{"kind":"Name","value":"menuItems"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"location"},"value":{"kind":"EnumValue","value":"SECONDARY"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"SecondaryMenuItemsFragment"}}]}}]}},{"kind":"Field","alias":{"kind":"Name","value":"docsSidebarMenuItems"},"name":{"kind":"Name","value":"menuItems"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"location"},"value":{"kind":"EnumValue","value":"DOCS_SIDEBAR"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DocsSidebarMenuItemsFragment"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PrimaryMenuItemsFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MenuItem"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"uri"}},{"kind":"Field","name":{"kind":"Name","value":"path"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"parentId"}},{"kind":"Field","name":{"kind":"Name","value":"cssClasses"}},{"kind":"Field","name":{"kind":"Name","value":"target"}},{"kind":"Field","name":{"kind":"Name","value":"menu"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SecondaryMenuItemsFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MenuItem"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"uri"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"target"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DocsSidebarMenuItemsFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MenuItem"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"uri"}},{"kind":"Field","name":{"kind":"Name","value":"path"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"parentId"}},{"kind":"Field","name":{"kind":"Name","value":"cssClasses"}},{"kind":"Field","name":{"kind":"Name","value":"menu"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]} as unknown as DocumentNode<GetHowToGuideQuery, GetHowToGuideQueryVariables>;
export const GetReferenceDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetReference"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"databaseId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"asPreview"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}},"defaultValue":{"kind":"BooleanValue","value":false}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"reference"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"databaseId"}}},{"kind":"Argument","name":{"kind":"Name","value":"idType"},"value":{"kind":"EnumValue","value":"DATABASE_ID"}},{"kind":"Argument","name":{"kind":"Name","value":"asPreview"},"value":{"kind":"Variable","name":{"kind":"Name","value":"asPreview"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"NodeWithEditorBlocks"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"editorBlocks"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"renderedHtml"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CoreCode"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"borderColor"}},{"kind":"Field","name":{"kind":"Name","value":"backgroundColor"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"style"}},{"kind":"Field","name":{"kind":"Name","value":"textColor"}},{"kind":"Field","name":{"kind":"Name","value":"fontSize"}}]}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"generalSettings"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"primaryMenuItems"},"name":{"kind":"Name","value":"menuItems"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"location"},"value":{"kind":"EnumValue","value":"PRIMARY"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PrimaryMenuItemsFragment"}}]}}]}},{"kind":"Field","alias":{"kind":"Name","value":"secondaryMenuItems"},"name":{"kind":"Name","value":"menuItems"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"location"},"value":{"kind":"EnumValue","value":"SECONDARY"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"SecondaryMenuItemsFragment"}}]}}]}},{"kind":"Field","alias":{"kind":"Name","value":"docsSidebarMenuItems"},"name":{"kind":"Name","value":"menuItems"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"location"},"value":{"kind":"EnumValue","value":"DOCS_SIDEBAR"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DocsSidebarMenuItemsFragment"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PrimaryMenuItemsFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MenuItem"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"uri"}},{"kind":"Field","name":{"kind":"Name","value":"path"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"parentId"}},{"kind":"Field","name":{"kind":"Name","value":"cssClasses"}},{"kind":"Field","name":{"kind":"Name","value":"target"}},{"kind":"Field","name":{"kind":"Name","value":"menu"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SecondaryMenuItemsFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MenuItem"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"uri"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"target"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DocsSidebarMenuItemsFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MenuItem"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"uri"}},{"kind":"Field","name":{"kind":"Name","value":"path"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"parentId"}},{"kind":"Field","name":{"kind":"Name","value":"cssClasses"}},{"kind":"Field","name":{"kind":"Name","value":"menu"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]} as unknown as DocumentNode<GetReferenceQuery, GetReferenceQueryVariables>;
export const GetTutorialDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetTutorial"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"databaseId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"asPreview"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}},"defaultValue":{"kind":"BooleanValue","value":false}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"tutorial"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"databaseId"}}},{"kind":"Argument","name":{"kind":"Name","value":"idType"},"value":{"kind":"EnumValue","value":"DATABASE_ID"}},{"kind":"Argument","name":{"kind":"Name","value":"asPreview"},"value":{"kind":"Variable","name":{"kind":"Name","value":"asPreview"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"NodeWithEditorBlocks"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"editorBlocks"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"renderedHtml"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CoreCode"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"borderColor"}},{"kind":"Field","name":{"kind":"Name","value":"backgroundColor"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"style"}},{"kind":"Field","name":{"kind":"Name","value":"textColor"}},{"kind":"Field","name":{"kind":"Name","value":"fontSize"}}]}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"generalSettings"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"primaryMenuItems"},"name":{"kind":"Name","value":"menuItems"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"location"},"value":{"kind":"EnumValue","value":"PRIMARY"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PrimaryMenuItemsFragment"}}]}}]}},{"kind":"Field","alias":{"kind":"Name","value":"secondaryMenuItems"},"name":{"kind":"Name","value":"menuItems"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"location"},"value":{"kind":"EnumValue","value":"SECONDARY"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"SecondaryMenuItemsFragment"}}]}}]}},{"kind":"Field","alias":{"kind":"Name","value":"docsSidebarMenuItems"},"name":{"kind":"Name","value":"menuItems"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"location"},"value":{"kind":"EnumValue","value":"DOCS_SIDEBAR"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DocsSidebarMenuItemsFragment"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PrimaryMenuItemsFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MenuItem"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"uri"}},{"kind":"Field","name":{"kind":"Name","value":"path"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"parentId"}},{"kind":"Field","name":{"kind":"Name","value":"cssClasses"}},{"kind":"Field","name":{"kind":"Name","value":"target"}},{"kind":"Field","name":{"kind":"Name","value":"menu"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SecondaryMenuItemsFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MenuItem"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"uri"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"target"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DocsSidebarMenuItemsFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MenuItem"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"uri"}},{"kind":"Field","name":{"kind":"Name","value":"path"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"parentId"}},{"kind":"Field","name":{"kind":"Name","value":"cssClasses"}},{"kind":"Field","name":{"kind":"Name","value":"menu"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]} as unknown as DocumentNode<GetTutorialQuery, GetTutorialQueryVariables>;