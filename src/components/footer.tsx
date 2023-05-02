import {
  Box,
  Grid,
  Icon,
  List,
  Link,
  Container,
  Typography,
} from "@mui/material";
import LaunchIcon from "@mui/icons-material/Launch";

type LinkList = {
  title: string;
  links: LinkListItem[];
};

type LinkListItem = {
  text: string;
  url: string;
  icon: string;
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
          url: "#",
          icon: "",
        },
        {
          text: "@faustwp/cli",
          url: "#",
          icon: "",
        },
        {
          text: "FaustWP Plugin",
          url: "#",
          icon: "",
        },
      ],
    },
    {
      title: "WP Engine",
      links: [
        {
          text: "FaustWP Plugin",
          url: "#",
          icon: "",
        },
        {
          text: "FaustWP Plugin",
          url: "#",
          icon: "",
        },
        {
          text: "FaustWP Plugin",
          url: "#",
          icon: "",
        },
      ],
    },
    {
      title: "Community",
      links: [
        {
          text: "FaustWP Plugin",
          url: "#",
          icon: "",
        },
        {
          text: "FaustWP Plugin",
          url: "#",
          icon: "",
        },
        {
          text: "FaustWP Plugin",
          url: "#",
          icon: "",
        },
        {
          text: "FaustWP Plugin",
          url: "#",
          icon: "",
        },
      ],
    },
    {
      title: "Docs",
      links: [
        {
          text: "FaustWP Plugin",
          url: "#",
          icon: "",
        },
        {
          text: "FaustWP Plugin",
          url: "#",
          icon: "",
        },
        {
          text: "FaustWP Plugin",
          url: "#",
          icon: "",
        },
      ],
    },
  ];

  const generateLinkGroups = () => {
    return linkListGroup.map((group: LinkList) => (
      <Grid item xs={12} lg={3}>
        <Typography>{group.title}</Typography>
        {group.links.map((item: LinkListItem) => (
          <Link href={item.url}>{item.text}</Link>
        ))}
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
            <Typography color="textSecondary" variant="subtitle2">
              &copy; 2013-{new Date().getFullYear()} WPEngine, Inc. All rights
              reserved. Powered by Faust.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
