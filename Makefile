start: npm
	node node_modules/stylus/bin/stylus -w -c styles/styles.styl --out css

build: npm
	node node_modules/stylus/bin/stylus -c styles/styles.styl --out css

npm:
	npm install --quiet --production

permissions:
	sudo chmod -R 777 *