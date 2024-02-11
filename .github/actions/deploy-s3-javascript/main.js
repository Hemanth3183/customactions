const core = require('@actions/core');
const github = require('@actions/github');
const exec = require ('@actions/exec');

function message() {
  const bucket = core.getInput('bucket', {required: true});
  const bucketRegion = core.getInput('bucket-region', {required: true});
  const distFolder = core.getInput('dist-folder', {required: true});
  // core.notice ("Hello from my custom javascript action!");

  const s3Uri = `s3://${bucket}`;
  core.exec(`aws s3 sync ${distFolder} ${s3Uri} --region ${bucketRegion}`);
}

message ();
