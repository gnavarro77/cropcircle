class AcklingDike extends AbstractCrop {
  constructor(svg) {
    super(svg);
  }

  draw = function() {
    var self = this;
    this.pinable = false;

    self.drawCircularDistribution(self.center, 230, 14, 360 / 28);
    self.drawCenteredCercles(self.center, [28, 35, 135, 142, 149, 156, 159, 166, 173, 175, 180, 225]);

    var pts = circularDistibution(175, self.center, 14, 360 / 28);
    for (var i = 1; i < pts.length; i += 2) {
      //self.pinPoint(pts[i]);
      self.drawCircle(pts[i], 28);
    }
    var d = getDistanceBetweenPoints(self.center, self.intersectionByIds(2, 27)[1]);
    pts = circularDistibution(d, self.center, 14, 360 / 28);
    for (var i = 1; i < pts.length; i += 2) {
      //self.pinPoint(pts[i]);
      self.drawCircle(pts[i], 22);
    }

    var refLine = self.drawLine(
      self.intersectionByIds(26, 4)[0],
      self.intersectionByIds(11, 26)[0]
    );

    function _rotate(l) {
      var ang = (360 / 14);
      for (var i = 1; i < 7; i++) {
        self.rotate(l, self.center, i * ang);
      }
    }
    // paralleles
    [-24, -21, -14, -7, 7, 14, 21, 24].forEach(function(offset) {
      _rotate(self.translateFromAToB(refLine,
        self.center, {
          x: self.center.x + offset,
          y: self.center.y
        }));
    });

    pts = circularDistibution(135, self.center, 14, 360 / 28);
    var pts2 = [];
    for (var i = 1; i < pts.length; i += 2) {
      pts2.push(pts[i]);
    }
    for (var i = 0; i < 7; i++) {
      var idx1 = i + 3 > 6 ? i - 4 : i + 3;
      self.drawLine(pts2[i], pts2[idx1], 'trace');
    }

    // ---
    var cercle = null;
    var group = self.svg.group();

    pts.length = 0;
    pts.push(self.intersectionByIds(76, 18)[0]);
    pts.push(self.intersectionByIds(76, 23)[0]);
    group.add(self.drawLine(pts[0], pts[1], 'trace'));
    pts.push(self.intersectionByIds(23, 70)[0]);
    cercle = self.fid(23);
    group.add(self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[2], pts[1]));
    pts.push(self.intersectionByIds(70, 18)[0]);
    group.add(self.drawLine(pts[3], pts[2], 'trace'));
    pts.push(self.intersectionByIds(90, 18)[0]);
    cercle = self.fid(18);
    group.add(self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[3], pts[4]));
    pts.push(self.intersectionByIds(90, 21)[0]);
    group.add(self.drawLine(pts[5], pts[4], 'trace'));
    pts.push(self.intersectionByIds(21, 84)[0]);
    cercle = self.fid(21);
    group.add(self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[6], pts[5]));
    pts.push(self.intersectionByIds(20, 84)[0]);
    group.add(self.drawLine(pts[6], pts[7], 'trace'));
    pts.push(self.intersectionByIds(20, 97)[0]);
    cercle = self.fid(20);
    group.add(self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[7], pts[8]));
    pts.push(self.intersectionByIds(19, 97)[0]);
    group.add(self.drawLine(pts[8], pts[9], 'trace'));
    pts.push(self.intersectionByIds(19, 77)[0]);
    cercle = self.fid(19);
    pts.push(self.intersectionByIds(22, 77)[0]);
    group.add(self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[10], pts[9]));
    pts.push(self.intersectionByIds(22, 83)[0]);
    group.add(self.drawLine(pts[10], pts[11], 'trace'));
    cercle = self.fid(22);
    group.add(self.drawArcCircle(this.getCenter(cercle), this.getRadius(cercle), pts[11], pts[12]));
    pts.push(self.intersectionByIds(18, 83)[0]);
    group.add(self.drawLine(pts[12], pts[13], 'trace'));
    group.add(self.drawLine(pts[0], pts[13], 'trace'));

    group.add(group.clone().transform('t -' + (group.getBBox().width + 14) + ', s-1 1'));

    self.mandalize(group, 7);

    [25, 17, 39, 40, 34, 35, 36, 37, 38].forEach(function(idx) {
      self.makeAsTrace(self.fid(idx));
    });


    document.

    self.pinPoints(pts);
  }
}