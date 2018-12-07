const mongoose = require('mongoose')

const tagsSchema = mongoose.Schema({
  name: String
})
const NavTopSchema = mongoose.Schema({
  id: Number,
  name: String,
  link: String
})
const friendLinkSchema = mongoose.Schema({
  name: String,
  link: String
})
const contentSchema = mongoose.Schema({
  type: String,
  title: String,
  date: Number,
  tags: Array,
  browse: Number,
  markdown: String,
  html: String
})
