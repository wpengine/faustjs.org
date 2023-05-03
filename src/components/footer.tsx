import { Box, Grid, List, Link, Container, Typography } from "@mui/material";
import LaunchIcon from "@mui/icons-material/Launch";

type LinkList = {
  title: string;
  links: LinkListItem[];
};

type LinkListItem = {
  text: string;
  url: string;
  isExternalLink: boolean;
};

export default function Footer() {
  const getCurrentYear = () => {
    const d = new Date();
    return d.getFullYear();
  };

  const linkListGroup: LinkList[] = [
    {
      title: "Changelogs",
      links: [
        {
          text: "@faustwp/core",
          url: "https://faustjs.org/docs/changelog/faustwp-core",
          isExternalLink: false,
        },
        {
          text: "@faustwp/cli",
          url: "https://faustjs.org/docs/changelog/faustwp-cli",
          isExternalLink: false,
        },
        {
          text: "FaustWP Plugin",
          url: "https://faustjs.org/docs/changelog/faustwp",
          isExternalLink: false,
        },
      ],
    },
    {
      title: "Docs",
      links: [
        {
          text: "Getting Started",
          url: "https://faustjs.org/docs/getting-started",
          isExternalLink: false,
        },
        {
          text: "Example Project",
          url: "https://faustjs.org/docs/next/guides/project-walkthrough",
          isExternalLink: false,
        },
        {
          text: "Privacy Policy",
          url: "https://faustjs.org/docs/privacy-policy",
          isExternalLink: false,
        },
      ],
    },
    {
      title: "Community",
      links: [
        {
          text: "GitHub",
          url: "https://github.com/wpengine/faustjs?ref=faustjs",
          isExternalLink: true,
        },
        {
          text: "Twitter",
          url: "https://twitter.com/wpengine",
          isExternalLink: true,
        },
        {
          text: "YouTube",
          url: "https://www.youtube.com/channel/UCh1WuL54XFb9ZI6m6goFv1g?ref=faustjs",
          isExternalLink: true,
        },
        {
          text: "Headless WordPress Discord",
          url: "https://discord.gg/J2khkF9XYK",
          isExternalLink: true,
        },
      ],
    },
    {
      title: "WP Engine",
      links: [
        {
          text: "Developers",
          url: "https://developers.wpengine.com/?ref=faustjs",
          isExternalLink: false,
        },
        {
          text: "We're Hiring!",
          url: "https://wpengine.careers/?ref=faustjs",
          isExternalLink: false,
        },
        {
          text: "Headless WordPress Hosting",
          url: "https://wpengine.com/atlas?ref=faustjs",
          isExternalLink: true,
        },
      ],
    },
  ];

  const generateLinkGroups = () => {
    return linkListGroup.map((group: LinkList) => (
      <Grid item xs={12} lg={3} key={group.title}>
        <Typography variant="h6">{group.title}</Typography>
        <List sx={{ display: "flex", flexDirection: "column" }}>
          {group.links.map((item: LinkListItem) => (
            <Link key={item.text} href={item.url}>
              {item.text}
              {item.isExternalLink ? (
                <LaunchIcon sx={{ ml: 1 }} fontSize="small" />
              ) : null}
            </Link>
          ))}
        </List>
      </Grid>
    ));
  };

  return (
    <Box
      sx={{
        width: "100%",
        height: "auto",
        backgroundColor: "primary.main",
        paddingTop: "1rem",
        paddingBottom: "1rem",
      }}
    >
      <Container
        maxWidth="lg"
        sx={{ mt: 4, backgroundColor: "#002838", color: "white", py: 2, px: 2 }}
      >
        <Grid container direction="column" alignItems="center">
          <Grid
            container
            xs={12}
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            {generateLinkGroups()}
          </Grid>

          <Grid item xs={12} sx={{ mt: 4 }}>
            <Typography color="white" variant="subtitle1">
              &copy; 2013-{new Date().getFullYear()} WPEngine, Inc. All rights
              reserved. Powered by Faust.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
