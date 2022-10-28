import { RouteObject } from "react-router-dom";
import Course from "../pages/Course";
import Courses from "../pages/Courses";
import CoursesIndex from "../pages/CoursesIndex";
import Home from "../pages/Home";
import Layout from '../pages/Layout'
import NoMatch from "../pages/NoMatch";

export enum pathLocations {
  layout = '/',
  courses = 'courses',
  courseId = ':id',
  NoMatch = '*',
  reactFundamentalsId = "react-fundamentals",
  advancedReactId = "advanced-react",
  reactRouter = "react-router"
}

export const routes: RouteObject[] = [
  {
    path: pathLocations.layout,
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      {
        path: pathLocations.courses,
        element: <Courses />,
        children: [
          { index: true, element: <CoursesIndex /> },
          { path: pathLocations.courseId, element: <Course /> },
        ],
      },
      { path: pathLocations.NoMatch, element: <NoMatch /> },
    ],
  },
];