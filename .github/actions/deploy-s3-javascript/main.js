const core = require('@actions/core');
const github = require('@actions/github');
const exec = require ('@actions/exec');

function message() {
  core.notice ("Hello from my custom javascript action!");
}

message ();
