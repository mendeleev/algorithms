(function() {
    var pagination = {
        active: 1,
        pages: 0,
        limit: 10,
        length: 7,
        results: 0,
        pagination: $('#pagination'),
        pagesContainer: $("#pagination ul"),
        templates: {
            pageWrapper: $('<li></li>'),
            page: $('<a href="javascript:void(0)" class="page"></a>'),
            active: $('<span class="active"></span>'),
            dots: $('<span>&#8230;</span>')
        },
        init: function(results, active){            
            this.pages = Math.ceil(results/this.limit) || 0;
            
            this.setActive(active);
            this.events();
        },
        setActive: function(active) {
            this.active = Number(active) || this.active;
            this.render();
        },
        prev: function() {
            if(this.active > 1) {
                this.active -= 1;
                this.render();
            }
        },
        next: function() {
            if(this.active < this.pages) {
                this.active += 1;
                this.render();
            }
        },
        addPage: function(page) {
            this.templates.page.text(page);
            this.templates.active.text(page);
            this.templates.pageWrapper.empty();
            this.templates.pageWrapper.append(
                this.active === page ? this.templates.active : this.templates.page
            );
            
            this.pagesContainer.append(this.templates.pageWrapper.clone());
        },
        addDots: function() {
            this.templates.pageWrapper.empty();
            this.templates.pageWrapper.append(this.templates.dots);
            this.pagesContainer.append(this.templates.pageWrapper.clone());
        },
        render: function() {
            this.pagesContainer.empty();
            var side = Math.floor(this.length/2),
                begin = this.active - side,
                end = this.active + side > this.pages ? this.pages - 1 : this.active + side,
                inner = end - begin + 1;
            
            if(begin < 2) {
                begin = 2;
                end = this.length;
            }
            
            if(this.pages - this.active < side) {
                begin = this.active - side - (side - (this.pages - this.active));
                if(begin < 2) begin = 2;
            }
            
            if(end >= this.pages) end = this.pages - 1;
            
            
            if(this.pages > 0) this.addPage(1);
            if(begin > 2) this.addDots();
            for(var i = begin; i <= end; i++) {
                this.addPage(i);
            }
            if(end < this.pages-1 && this.pages > this.length) this.addDots();
            if(this.pages > 1) this.addPage(this.pages);
        },
        events: function() {
            this.pagination.on('click', function(event) {
                if($(event.target).hasClass('page')) {
                    this.setActive($(event.target).text());
                } else if($(event.target).hasClass('prev')) {
                    this.prev();
                } else if($(event.target).hasClass('next')) {
                    this.next();
                }
            }.bind(this));
        }
    };
    
    pagination.init(135);
    
})();