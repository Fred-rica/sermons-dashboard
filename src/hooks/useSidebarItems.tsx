import { sidebarItems } from "@/types/sidebarItems.types";
import { Icons } from "@/components/common/SvgIcons";


const useSidebarItems = (): sidebarItems[] => {
  return [
    {
      title: "Dashboard",
      alt: "Dashboard icon",
      link: "/dashboard",
      icon: <Icons.dashboardIcon />,
    },
    {
      title: "Sermons",
      alt: "Sermons icon",
      link: "/",
      icon: <Icons.sermonIcon />,
    },
    {
      title: "Series",
      alt: "Series icon",
      link: "/series",
      icon: <Icons.seriesIcon />,
    },
    {
      title: "Plans",
      alt: "Plans icon",
      link: "/plans",
      icon: <Icons.plansIcon />,
    },
    {
      title: "Preachers",
      alt: "Preachers icon",
      link: "/preachers",
      icon: <Icons.preacherIcon />,
    },
    {
      title: "Categories",
      alt: "Categories icon",
      link: "/categories",
      icon: <Icons.categoriesIcon />,
    },
    {
      title: "Topics",
      alt: "Topics icon",
      link: "/topics",
      icon: <Icons.topicsIcon />,
    },
  ];
};


export default useSidebarItems

