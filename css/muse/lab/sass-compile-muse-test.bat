@echo off

E:
cd /projects/portal/docroot/dap/muse/lab
::sass --sourcemap=none -w library/_app-all.scss:metadata/staticresources/asiCoreStyles.resource --style compressed
sass --sourcemap=none -w muse-test.scss:muse-test.css
::sass --sourcemap=none -w library/_app-all.scss:library/app.css --style compressed
