var gulp = require('gulp'),
    sass = require('gulp-sass'),
    browserSync = require('browser-sync');
    smartgrid = require('smart-grid');

gulp.task('sass', function () {
    return gulp.src('app/scss//*.sass')
        .pipe(sass())
        .pipe(gulp.dest('app/css'))
        .pipe(browserSync.reload({stream: true}))
});

//gulp.task('smartgrid', )

gulp.task('browser-sync', function () {
    browserSync({
        server: {
            baseDir: 'app'
        },
        notify: false
    });
});

gulp.task('watch', ['browser-sync', 'sass'], function () {
    gulp.watch('app/scss//*.sass', ['sass']);
});

gulp.task('default',['watch']);





var smartgridSettings = {
outputStyle: 'sass',
columns: 12,
offset: "12px",
container: {
maxWidth: '1092px',
fields: '12px'
},
breakPoints: {
        lg: {
            width: '1100px', /* -> @media (max-width: 1100px) */
        },
        md: {
            width: '960px'
        },
        sm: {
            width: '780px',
            fields: '15px' /* set fields only if you want to change container.fields */
        },
        xs: {
            width: '560px'
        }
      }
};

gulp.task('smartgrid', function() {
smartgrid('app/scss/', smartgridSettings);
});
