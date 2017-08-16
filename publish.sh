git checkout gh-pages && \
    git rebase master && \
    npm run bundle && \
    git add . && \
    git commit -m 'update website' && \
    git push -f origin gh-pages

git checkout master
