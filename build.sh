rm -rf public
rm -rf out
npx next build
npx next export
mv out public
cp static/* public
