/**
 * Dependencies
 */

import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import menu from './menuReducer';
import pages from './pagesReducer';
import users from './usersReducer';
import posts from './postsReducer';
import courses from './coursesReducer';
import lessons from './lessonsReducer';
import settings from './settingsReducer';
import sections from './sectionsReducer';
import questions from './questionsReducer';
import organizations from './organizationsReducer';

/**
 * Expo
 */

export default combineReducers({
  menu,
  pages,
  users,
  posts,
  courses,
  lessons,
  sections,
  settings,
  questions,
  organizations,
  routing: routerReducer,
});
