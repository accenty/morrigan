<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'morrigan');

/** MySQL database username */
define('DB_USER', 'root');

/** MySQL database password */
define('DB_PASSWORD', '');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8mb4');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         ')Sp{&F=K#H4UobYD?xn%5m5O[7/eJQ+MO[Nht^JMK#|GoqB![sVxp^spRF&e6:c7');
define('SECURE_AUTH_KEY',  '1B<l|Bv&:BhFUE5A|eeJ3zY9/oED:#%q%#E_n;JdSM+*o,BJ*(5FzIgM{V_p;NR1');
define('LOGGED_IN_KEY',    'LlrJ?OZ.157A;[*V UZE7f)7-:4h~H5Wx805WypIj;$BBx9n9wO0,G`{9B=Uv$oi');
define('NONCE_KEY',        ']S717l4jI;(5U01AKNw8j7=rF(O%Uv[4%xe3FCh3s*Rp|SH5C73S8brk0fv lNo.');
define('AUTH_SALT',        '(I2~kwLK8?%d0id0:{wqXs]tBgz, $`wrzuy75/xNGjF*?Tq;gGf&i~&d)o* Q5/');
define('SECURE_AUTH_SALT', '1oYLXW.SCm {<;} ``Q*6at)mRn(dRmD{evDm,FXk_&9+f~+u:rz>up.:iUB.Ig>');
define('LOGGED_IN_SALT',   'My]t,i4+oKAmH~[>Yhng|W]N#<8}0Zs:BT_nd,,&/Ex&;FmIM#rCo0RBT{7o[[cH');
define('NONCE_SALT',       '0CF638$|Gw#dl+DAR;>649[<$(c}X!lZ;_WwntcRR9QYMAfYznt_/kTXpv4slj!p');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
