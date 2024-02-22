<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/documentation/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'atp_realestate' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', 'root' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         '4 Xg9&tGsbk$Gp7k[-*xo8?@%{RDs&_N/JAY>`i4-e:CFzuY<<5d?p!o74s5V;p$' );
define( 'SECURE_AUTH_KEY',  'KyiFRr>x/f=iM]SlnSXHKGC.r8=HjN]d>As+LCOcoim:,<c[*wEDnSsRyDsPIp3o' );
define( 'LOGGED_IN_KEY',    'ZD6!2U;?oaF=/MpS;ON$l|sjhV&U@xhk%%G-{Mvc;rn.!K+&!!|}[W(V7>Xwraxn' );
define( 'NONCE_KEY',        'ddLN$??9XtaWmnhiH^)z?w^ mr*V~F`~{6 m~c1ddTfSz8`9R]ZI|3rWl>m>!C0n' );
define( 'AUTH_SALT',        'TH*:R#`jT7G}YwJ:_OAo):PWHc6+?&WyWjQWHcaB<Rn)}cGE1,c8y#jK)K>L]Rc4' );
define( 'SECURE_AUTH_SALT', 'R4FX6y;Bbb??7JfqW9Og r87g~*N&N=IMX_N6^Ir{jI=%m{7Rg|l`SZQ[vg>7kcl' );
define( 'LOGGED_IN_SALT',   '3|IYd+LxEDctfqmX64]/Ey2(e:=k6FtIm!FPF/Io`vGvENX]P%;xc),{(%zMNvE{' );
define( 'NONCE_SALT',       'Ow%6Li]T;jJob|^}7`@BGd-sCXj|RG7G.kq;>lDU>^4bEno[eJ,R{Orf<3.{i=.g' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/documentation/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
