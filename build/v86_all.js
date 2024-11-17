'use strict';
var t;

function aa(a, b, c) {
    this.h = a;
    this.s = c;
    this.u = [104, 111, 115, 116, 57, 112];
    this.G = this.u.length;
    this.D = "9P2000.L";
    this.j = this.o = 8192;
    this.i = new Uint8Array(2 * this.j);
    this.C = 0;
    this.g = [];
    this.ia = new ca(b, {
        name: "virtio-9p",
        Pa: 48,
        Le: 4169,
        Eg: 9,
        Je: {
            Sb: 43008,
            la: [{
                rb: 32,
                Ub: 0
            }],
            features: [0, 32, 29, 28],
            Mj: () => { }
        },
        notification: {
            Sb: 43264,
            hi: !1,
            oh: [d => {
                if (0 === d) {
                    for (; da(this.l);) d = ea(this.l), ka(this, d);
                    d = this.l;
                    const e = d.v.bb(d.g + 2) + 0 & 65535;
                    d.v.tf(d.h + 4 + 8 * d.size, e)
                }
            }]
        },
        lc: {
            Sb: 42752
        },
        fg: {
            Sb: 42496,
            yd: [{
                bytes: 2,
                name: "mount tag length",
                read: () => this.G,
                write: () => { }
            }].concat(Array.from(Array(254).keys()).map(d => ({
                bytes: 1,
                name: "mount tag name " + d,
                read: () => this.u[d] || 0,
                write: () => { }
            })))
        }
    });
    this.l = this.ia.la[0]
}
aa.prototype.ca = function () {
    var a = [];
    a[0] = this.u;
    a[1] = this.G;
    a[2] = this.ia;
    a[3] = this.D;
    a[4] = this.o;
    a[5] = this.j;
    a[6] = this.i;
    a[7] = this.C;
    a[8] = this.g.map(function (b) {
        return [b.ba, b.type, b.uid, b.Kc]
    });
    a[9] = this.h;
    return a
};
aa.prototype.H = function (a) {
    this.u = a[0];
    this.G = a[1];
    this.ia.H(a[2]);
    this.l = this.ia.la[0];
    this.D = a[3];
    this.o = a[4];
    this.j = a[5];
    this.i = a[6];
    this.C = a[7];
    this.g = a[8].map(function (b) {
        return {
            ba: b[0],
            type: b[1],
            uid: b[2],
            Kc: b[3]
        }
    });
    this.h.H(a[9])
};
aa.prototype.reset = function () {
    this.g = [];
    this.ia.reset()
};

function v(a, b, c, d) {
    w(["w", "b", "h"], [d + 7, b + 1, c], a.i, 0);
    a.C = d + 7
}

function la(a, b, c) {
    c = w(["w"], [c], a.i, 7);
    v(a, 6, b, c)
}

function D(a, b) {
    ma(b, a.i.subarray(0, a.C));
    na(a.l, b);
    oa(a.l)
}
async function ka(a, b) {
    var c = new Uint8Array(b.af);
    ra(b, c);
    var d = {
        offset: 0
    },
        e = E(["w", "b", "h"], c, d),
        h = e[0],
        f = e[1],
        g = e[2];
    switch (f) {
        case 8:
            h = sa(a.h);
            var k = wa(a.h);
            e = [16914839];
            e[1] = a.o;
            e[2] = Math.floor(k / e[1]);
            e[3] = e[2] - Math.floor(h / e[1]);
            e[4] = e[2] - Math.floor(h / e[1]);
            e[5] = xa(a.h);
            e[6] = ya(a.h);
            e[7] = 0;
            e[8] = 256;
            h = w("wwddddddw".split(""), e, a.i, 7);
            v(a, f, g, h);
            D(a, b);
            break;
        case 112:
        case 12:
            e = E(["w", "w"], c, d);
            h = e[0];
            d = e[1];
            c = a.g[h].ba;
            var l = J(a.h, c);
            k = za(a.h, c, d);
            Aa(a.h, a.g[h].ba, function () {
                var n = [];
                n[0] = l.La;
                n[1] = this.j - 24;
                w(["Q", "w"], n, this.i, 7);
                v(this, f, g, 17);
                D(this, b)
            }.bind(a));
            break;
        case 70:
            e = E(["w", "w", "s"], c, d);
            c = e[0];
            h = e[1];
            k = e[2];
            k = Ca(a.h, a.g[c].ba, a.g[h].ba, k);
            if (0 > k) {
                la(a, g, -k);
                D(a, b);
                break
            }
            v(a, f, g, 0);
            D(a, b);
            break;
        case 16:
            e = E(["w", "s", "s", "w"], c, d);
            h = e[0];
            k = e[1];
            var m = e[3];
            c = Ea(a.h, k, a.g[h].ba, e[2]);
            l = J(a.h, c);
            l.uid = a.g[h].uid;
            l.Xa = m;
            w(["Q"], [l.La], a.i, 7);
            v(a, f, g, 13);
            D(a, b);
            break;
        case 18:
            e = E("wswwww".split(""), c, d);
            h = e[0];
            k = e[1];
            d = e[2];
            c = e[3];
            var p = e[4];
            m = e[5];
            c = Fa(a.h, k, a.g[h].ba, c, p);
            l = J(a.h,
                c);
            l.mode = d;
            l.uid = a.g[h].uid;
            l.Xa = m;
            w(["Q"], [l.La], a.i, 7);
            v(a, f, g, 13);
            D(a, b);
            break;
        case 22:
            e = E(["w"], c, d);
            h = e[0];
            l = J(a.h, a.g[h].ba);
            h = w(["s"], [l.nf], a.i, 7);
            v(a, f, g, h);
            D(a, b);
            break;
        case 72:
            e = E(["w", "s", "w", "w"], c, d);
            h = e[0];
            k = e[1];
            d = e[2];
            m = e[3];
            c = Ga(a.h, k, a.g[h].ba);
            l = J(a.h, c);
            l.mode = d | Ha;
            l.uid = a.g[h].uid;
            l.Xa = m;
            w(["Q"], [l.La], a.i, 7);
            v(a, f, g, 13);
            D(a, b);
            break;
        case 14:
            e = E(["w", "s", "w", "w", "w"], c, d);
            h = e[0];
            k = e[1];
            c = e[2];
            d = e[3];
            m = e[4];
            a.s.send("9p-create", [k, a.g[h].ba]);
            c = Ia(a.h, k, a.g[h].ba);
            a.g[h].ba =
                c;
            a.g[h].type = 1;
            a.g[h].Kc = k;
            l = J(a.h, c);
            l.uid = a.g[h].uid;
            l.Xa = m;
            l.mode = d | Ja;
            w(["Q", "w"], [l.La, a.j - 24], a.i, 7);
            v(a, f, g, 17);
            D(a, b);
            break;
        case 52:
            e = E("wbwddws".split(""), c, d);
            h = e[0];
            c = e[2];
            k = 0 === e[4] ? Infinity : e[4];
            e = Ka(e[1], e[3], k, e[5], e[6]);
            k = La(a.h, a.g[h].ba, e, c);
            w(["b"], [k], a.i, 7);
            v(a, f, g, 1);
            D(a, b);
            break;
        case 54:
            e = E("wbddws".split(""), c, d);
            h = e[0];
            k = 0 === e[3] ? Infinity : e[3];
            e = Ka(e[1], e[2], k, e[4], e[5]);
            k = Ma(a.h, a.g[h].ba, e);
            k || (k = e, k.type = 2);
            h = w(["b", "d", "d", "w", "s"], [k.type, k.start, Infinity === k.length ?
                0 : k.length, k.h, k.g
            ], a.i, 7);
            v(a, f, g, h);
            D(a, b);
            break;
        case 24:
            e = E(["w", "d"], c, d);
            h = e[0];
            l = J(a.h, a.g[h].ba);
            if (!l || l.status === Na) {
                la(a, g, 2);
                D(a, b);
                break
            }
            e[0] = e[1];
            e[1] = l.La;
            e[2] = l.mode;
            e[3] = l.uid;
            e[4] = l.Xa;
            e[5] = l.pb;
            e[6] = l.Ef << 8 | l.Gf;
            e[7] = l.size;
            e[8] = a.o;
            e[9] = Math.floor(l.size / 512 + 1);
            e[10] = l.Dd;
            e[11] = 0;
            e[12] = l.Sc;
            e[13] = 0;
            e[14] = l.le;
            e[15] = 0;
            e[16] = 0;
            e[17] = 0;
            e[18] = 0;
            e[19] = 0;
            w("dQwwwddddddddddddddd".split(""), e, a.i, 7);
            v(a, f, g, 153);
            D(a, b);
            break;
        case 26:
            e = E("wwwwwddddd".split(""), c, d);
            h = e[0];
            l = J(a.h, a.g[h].ba);
            e[1] & 1 && (l.mode = e[2]);
            e[1] & 2 && (l.uid = e[3]);
            e[1] & 4 && (l.Xa = e[4]);
            e[1] & 16 && (l.Dd = Math.floor((new Date).getTime() / 1E3));
            e[1] & 32 && (l.Sc = Math.floor((new Date).getTime() / 1E3));
            e[1] & 64 && (l.le = Math.floor((new Date).getTime() / 1E3));
            e[1] & 128 && (l.Dd = e[6]);
            e[1] & 256 && (l.Sc = e[8]);
            e[1] & 8 && await Oa(a.h, a.g[h].ba, e[5]);
            v(a, f, g, 0);
            D(a, b);
            break;
        case 50:
            e = E(["w", "d"], c, d);
            h = e[0];
            v(a, f, g, 0);
            D(a, b);
            break;
        case 40:
        case 116:
            e = E(["w", "d", "w"], c, d);
            h = e[0];
            k = e[1];
            m = e[2];
            l = J(a.h, a.g[h].ba);
            if (!l || l.status === Na) {
                la(a, g, 2);
                D(a,
                    b);
                break
            }
            if (2 === a.g[h].type) {
                (void 0).length < k + m && (m = (void 0).length - k);
                for (e = 0; e < m; e++) a.i[11 + e] = (void 0)[k + e];
                w(["w"], [m], a.i, 7);
                v(a, f, g, 4 + m)
            } else za(a.h, a.g[h].ba, void 0), e = a.g[h].ba, m = Math.min(m, a.i.length - 11), l.size < k + m ? m = l.size - k : 40 === f && (m = Pa(a.h, e, k + m) - k), k > l.size && (m = 0), a.s.send("9p-read-start", [a.g[h].Kc]), e = await Qa(a.h, e, k, m), a.s.send("9p-read-end", [a.g[h].Kc, m]), e && a.i.set(e, 11), w(["w"], [m], a.i, 7), v(a, f, g, 4 + m);
            D(a, b);
            break;
        case 118:
            e = E(["w", "d", "w"], c, d);
            h = e[0];
            k = e[1];
            m = e[2];
            e = a.g[h].Kc;
            if (2 === a.g[h].type) {
                la(a, g, 95);
                D(a, b);
                break
            } else await Ra(a.h, a.g[h].ba, k, m, c.subarray(d.offset));
            a.s.send("9p-write-end", [e, m]);
            w(["w"], [m], a.i, 7);
            v(a, f, g, 4);
            D(a, b);
            break;
        case 74:
            e = E(["w", "s", "w", "s"], c, d);
            k = await Sa(a.h, a.g[e[0]].ba, e[1], a.g[e[2]].ba, e[3]);
            if (0 > k) {
                la(a, g, -k);
                D(a, b);
                break
            }
            v(a, f, g, 0);
            D(a, b);
            break;
        case 76:
            e = E(["w", "s", "w"], c, d);
            d = e[0];
            k = e[1];
            c = e[2];
            h = Ta(a.h, a.g[d].ba, k);
            if (-1 === h) {
                la(a, g, 2);
                D(a, b);
                break
            }
            k = Ua(a.h, a.g[d].ba, k);
            if (0 > k) {
                la(a, g, -k);
                D(a, b);
                break
            }
            v(a, f, g, 0);
            D(a, b);
            break;
        case 100:
            h = E(["w", "s"], c, d);
            a.j !== h[0] && (a.j = h[0], a.i = new Uint8Array(Math.min(16777216, 2 * a.j)));
            h = w(["w", "s"], [a.j, a.D], a.i, 7);
            v(a, f, g, h);
            D(a, b);
            break;
        case 104:
            e = E(["w", "w", "s", "s", "w"], c, d);
            h = e[0];
            a.g[h] = {
                ba: 0,
                type: 1,
                uid: e[4],
                Kc: ""
            };
            l = J(a.h, a.g[h].ba);
            w(["Q"], [l.La], a.i, 7);
            v(a, f, g, 13);
            D(a, b);
            a.s.send("9p-attach");
            break;
        case 108:
            e = E(["h"], c, d);
            v(a, f, g, 0);
            D(a, b);
            break;
        case 110:
            e = E(["w", "w", "h"], c, d);
            h = e[0];
            m = e[1];
            p = e[2];
            if (0 === p) {
                a.g[m] = {
                    ba: a.g[h].ba,
                    type: 1,
                    uid: a.g[h].uid,
                    Kc: a.g[h].Kc
                };
                w(["h"], [0],
                    a.i, 7);
                v(a, f, g, 2);
                D(a, b);
                break
            }
            k = [];
            for (e = 0; e < p; e++) k.push("s");
            d = E(k, c, d);
            c = a.g[h].ba;
            k = 9;
            var r = 0;
            for (e = 0; e < p; e++) {
                c = Ta(a.h, c, d[e]);
                if (-1 === c) break;
                k += w(["Q"], [J(a.h, c).La], a.i, k);
                r++;
                a.g[m] = {
                    ba: c,
                    type: 1,
                    uid: a.g[h].uid,
                    Kc: d[e]
                }
            }
            w(["h"], [r], a.i, 7);
            v(a, f, g, k - 7);
            D(a, b);
            break;
        case 120:
            e = E(["w"], c, d);
            a.g[e[0]] && 0 <= a.g[e[0]].ba && (await Va(a.h, a.g[e[0]].ba), a.g[e[0]].ba = -1, a.g[e[0]].type = -1);
            v(a, f, g, 0);
            D(a, b);
            break;
        case 32:
            e = E(["w", "s", "d", "w"], c, d);
            h = e[0];
            k = e[1];
            c = e[3];
            a.g[h].type = 2;
            v(a, f, g, 0);
            D(a, b);
            break;
        case 30:
            e = E(["w", "w", "s"], c, d), h = e[0], k = e[2], la(a, g, 95), D(a, b)
    }
};

function Wa(a, b) {
    function c(y) {
        y = y.toString(16);
        return "#" + "0".repeat(6 - y.length) + y
    }

    function d(y, A, U, Q) {
        y.style.width = "";
        y.style.height = "";
        Q && (y.style.transform = "");
        var Y = y.getBoundingClientRect();
        Q ? y.style.transform = (1 === A ? "" : " scaleX(" + A + ")") + (1 === U ? "" : " scaleY(" + U + ")") : (0 === A % 1 && 0 === U % 1 ? (e.style.imageRendering = "crisp-edges", e.style.imageRendering = "pixelated", e.style["-ms-interpolation-mode"] = "nearest-neighbor") : (e.style.imageRendering = "", e.style["-ms-interpolation-mode"] = ""), Q = window.devicePixelRatio ||
            1, 0 !== Q % 1 && (A /= Q, U /= Q));
        1 !== A && (y.style.width = Y.width * A + "px");
        1 !== U && (y.style.height = Y.height * U + "px")
    }
    console.assert(a, "1st argument must be a DOM container");
    var e = a.getElementsByTagName("canvas")[0],
        h = e.getContext("2d", {
            alpha: !1
        }),
        f = a.getElementsByTagName("div")[0],
        g = document.createElement("div"),
        k, l, m = 1,
        p = 1,
        r = 1,
        n, u = !1,
        x, q, C, G = !1,
        T = this;
    a = new Uint16Array([8962, 199, 252, 233, 226, 228, 224, 229, 231, 234, 235, 232, 239, 238, 236, 196, 197, 201, 230, 198, 244, 246, 242, 251, 249, 255, 214, 220, 162, 163, 165, 8359, 402, 225, 237,
        243, 250, 241, 209, 170, 186, 191, 8976, 172, 189, 188, 161, 171, 187, 9617, 9618, 9619, 9474, 9508, 9569, 9570, 9558, 9557, 9571, 9553, 9559, 9565, 9564, 9563, 9488, 9492, 9524, 9516, 9500, 9472, 9532, 9566, 9567, 9562, 9556, 9577, 9574, 9568, 9552, 9580, 9575, 9576, 9572, 9573, 9561, 9560, 9554, 9555, 9579, 9578, 9496, 9484, 9608, 9604, 9612, 9616, 9600, 945, 223, 915, 960, 931, 963, 181, 964, 934, 920, 937, 948, 8734, 966, 949, 8745, 8801, 177, 8805, 8804, 8992, 8993, 247, 8776, 176, 8729, 183, 8730, 8319, 178, 9632, 160
    ]);
    for (var ia = new Uint16Array([32, 9786, 9787, 9829, 9830, 9827, 9824, 8226,
        9688, 9675, 9689, 9794, 9792, 9834, 9835, 9788, 9658, 9668, 8597, 8252, 182, 167, 9644, 8616, 8593, 8595, 8594, 8592, 8735, 8596, 9650, 9660
    ]), B = [], F, H = 0; 256 > H; H++) F = 126 < H ? a[H - 127] : 32 > H ? ia[H] : H, B[H] = String.fromCharCode(F);
    h.imageSmoothingEnabled = !1;
    g.classList.add("cursor");
    g.style.position = "absolute";
    g.style.backgroundColor = "#ccc";
    g.style.width = "7px";
    g.style.display = "inline-block";
    f.style.display = "block";
    e.style.display = "none";
    this.s = b;
    b.register("screen-set-mode", function (y) {
        this.Bg(y)
    }, this);
    b.register("screen-fill-buffer-end",
        function (y) {
            this.Mg(y)
        }, this);
    b.register("screen-put-char", function (y) {
        this.tg(y[0], y[1], y[2], y[3], y[4], y[5])
    }, this);
    b.register("screen-update-cursor", function (y) {
        this.fe(y[0], y[1])
    }, this);
    b.register("screen-update-cursor-scanline", function (y) {
        this.Ad(y[0], y[1], y[2])
    }, this);
    b.register("screen-clear", function () {
        this.Yg()
    }, this);
    b.register("screen-set-size-text", function (y) {
        this.ce(y[0], y[1])
    }, this);
    b.register("screen-set-size-graphical", function (y) {
        this.be(y[0], y[1], y[2], y[3])
    }, this);
    this.Fb = function () {
        this.ce(122,
            33);
        this.Zb()
    };
    this.Hj = function () {
        const y = new Image;
        if (u) y.src = e.toDataURL("image/png");
        else {
            const A = [9, 16],
                U = document.createElement("canvas");
            U.width = q * A[0];
            U.height = C * A[1];
            const Q = U.getContext("2d");
            Q.imageSmoothingEnabled = !1;
            Q.font = window.getComputedStyle(f).font;
            Q.textBaseline = "top";
            for (let Y = 0; Y < q; Y++)
                for (let ba = 0; ba < C; ba++) {
                    const ja = 4 * (ba * q + Y),
                        ta = x[ja],
                        Ba = x[ja + 3];
                    Q.fillStyle = c(x[ja + 2]);
                    Q.fillRect(Y * A[0], ba * A[1], A[0], A[1]);
                    Q.fillStyle = c(Ba);
                    Q.fillText(B[ta], Y * A[0], ba * A[1])
                }
            "none" !== g.style.display &&
                k < C && l < q && (Q.fillStyle = g.style.backgroundColor, Q.fillRect(l * A[0], k * A[1] + parseInt(g.style.marginTop, 10), parseInt(g.style.width, 10), parseInt(g.style.height, 10)));
            y.src = U.toDataURL("image/png")
        }
        return y
    };
    this.tg = function (y, A, U, Q, Y, ba) {
        y < C && A < q && (A = 4 * (y * q + A), x[A] = U, x[A + 1] = Q, x[A + 2] = Y, x[A + 3] = ba, n[y] = 1)
    };
    this.Zb = function () {
        G || requestAnimationFrame(u ? fa : I)
    };
    var I = function () {
        for (var y = 0; y < C; y++) n[y] && (T.g(y), n[y] = 0);
        this.Zb()
    }.bind(this),
        fa = function () {
            this.s.send("screen-fill-buffer");
            this.Zb()
        }.bind(this);
    this.wa = function () {
        G = !0
    };
    this.Bg = function (y) {
        (u = y) ? (f.style.display = "none", e.style.display = "block") : (f.style.display = "block", e.style.display = "none")
    };
    this.Yg = function () {
        h.fillStyle = "#000";
        h.fillRect(0, 0, e.width, e.height)
    };
    this.ce = function (y, A) {
        if (y !== q || A !== C) {
            n = new Int8Array(A);
            x = new Int32Array(y * A * 4);
            q = y;
            for (C = A; f.childNodes.length > A;) f.removeChild(f.firstChild);
            for (; f.childNodes.length < A;) f.appendChild(document.createElement("div"));
            for (y = 0; y < A; y++) this.g(y);
            d(f, m, p, !0)
        }
    };
    this.be = function (y, A) {
        e.style.display =
            "block";
        e.width = y;
        e.height = A;
        r = 640 >= y && 2 * y < window.innerWidth * window.devicePixelRatio && 2 * A < window.innerHeight * window.devicePixelRatio ? 2 : 1;
        d(e, m * r, p * r, !1)
    };
    this.Cg = function (y, A) {
        m = y;
        p = A;
        d(f, m, p, !0);
        d(e, m * r, p * r, !1)
    };
    this.Cg(m, p);
    this.Ad = function (y, A, U) {
        U ? (g.style.display = "inline", g.style.height = A - y + "px", g.style.marginTop = y + "px") : g.style.display = "none"
    };
    this.fe = function (y, A) {
        if (y !== k || A !== l) y < C && (n[y] = 1), k < C && (n[k] = 1), k = y, l = A
    };
    this.g = function (y) {
        var A = 4 * y * q,
            U;
        var Q = f.childNodes[y];
        var Y = document.createElement("div");
        for (var ba = 0; ba < q;) {
            var ja = document.createElement("span");
            var ta = x[A + 1];
            var Ba = x[A + 2];
            var z = x[A + 3];
            ta && ja.classList.add("blink");
            ja.style.backgroundColor = c(Ba);
            ja.style.color = c(z);
            for (U = ""; ba < q && x[A + 1] === ta && x[A + 2] === Ba && x[A + 3] === z;)
                if (U += B[x[A]], ba++, A += 4, y === k)
                    if (ba === l) break;
                    else if (ba === l + 1) {
                        g.style.backgroundColor = ja.style.color;
                        Y.appendChild(g);
                        break
                    }
            ja.textContent = U;
            Y.appendChild(ja)
        }
        Q.parentNode.replaceChild(Y, Q)
    };
    this.Mg = function (y) {
        y.forEach(A => {
            h.putImageData(A.jc, A.zg - A.vf, A.Ag - A.wf, A.vf,
                A.wf, A.cg, A.bg)
        })
    };
    this.Fb()
};
(function () {
    function a() {
        for (var r = location.search.substr(1).split("&"), n = {}, u = 0; u < r.length; u++) {
            var x = r[u].split("=");
            n[x[0]] = decodeURIComponent(x.slice(1).join("="))
        }
        return n
    }

    function b(r) {
        document.title = r + " - Virtual x86";
        const n = document.querySelector("meta[name=description]");
        n && (n.content = "Running " + r)
    }

    function c(r) {
        return document.getElementById(r)
    }

    function d() {
        function r(B) {
            b(B.name);
            u.filesystem = B.filesystem;
            B.state && (
                u.kc = B.state);
            u.$ = B.$;
            u.S = B.S;
            u.I = B.I;
            u.Tb = B.Tb;
            u.tb = B.tb;
            u.Gb = B.Gb;
            u.Mb = B.Mb;
            u.Ie = B.Ie;
            u.Hb = B.Hb;
            u.Zc = B.Zc;
            u.za = B.state || void 0 === u.za ? B.za : u.za;
            u.F = !B.state && u.F ? u.F : B.F;
            u.da = !B.state && u.da ? u.da : B.da;
            u.gg = B.gg;
            u.id = B.id;
            void 0 !== B.Fc && (u.Fc = B.Fc);
            var F = parseInt(x.chunk_size, 10);
            0 <= F && (F ? (F = Math.min(4194304, Math.max(512, F)), F = 1 << Math.ceil(Math.log2(F))) : F = void 0, u.I && (u.I.J = F), u.S && (u.S.J = F));
            B.T && (F = document.createElement("a"), F.href = B.T, F.textContent = B.name,
                F.target = "_blank");
            e(u, n)
        }

        function n(B) {
            x.c && setTimeout(function () {
                Xa(B, x.c + "\n")
            }, 25)
        }
        if (window.WebAssembly) {

            var u = {};

            var x = a(),
                q = x.cdn || (l ? "images/" : "//i.copy.sh/");
            q = [{
                id: "archlinux",
                name: "Arch Linux",
                F: 536870912,
                da: 8388608,
                state: {
                    url: q + "arch_state.bin.zst"
                },
                filesystem: {
                    uf: q + "arch/"
                }
            }, {
                id: "archlinux-boot",
                name: "Arch Linux",
                F: 536870912,
                da: 8388608,
                filesystem: {
                    uf: q + "arch/",
                    Ui: {
                        url: q + "fs.json"
                    }
                },
                Mb: "rw apm=off vga=0x344 video=vesafb:ypan,vremap:8 root=host9p rootfstype=9p rootflags=trans=virtio,cache=loose mitigations=off audit=0 init_on_free=on tsc=reliable random.trust_cpu=on nowatchdog init=/usr/bin/init-openrc net.ifnames=0 biosdevname=0",
                Ie: !0
            }, {
                id: "copy/skiffos",
                name: "SkiffOS",
                S: {
                    url: q + "skiffos/.iso",
                    size: 124672E3,
                    async: !0,
                    J: 1048576,
                    ga: !0
                },
                F: 536870912
            }, {
                id: "serenity",
                name: "SerenityOS",
                I: {
                    url: q + "serenity-v3/.img.zst",
                    size: 734003200,
                    async: !0,
                    J: 1048576,
                    ga: !0
                },
                F: 536870912,
                state: {
                    url: q + "serenity_state-v4.bin.zst"
                },
                T: "https://serenityos.org/",
                Hb: !0
            }, {
                id: "serenity-boot",
                name: "SerenityOS",
                I: {
                    url: q + "serenity-v3/.img.zst",
                    size: 734003200,
                    async: !0,
                    J: 1048576,
                    ga: !0
                },
                F: 536870912,
                T: "https://serenityos.org/"
            }, {
                id: "redox",
                name: "Redox",
                I: {
                    url: q + "redox_demo_i686_2022-11-26_643_harddrive/.img",
                    size: 536870912,
                    async: !0,
                    J: 1048576,
                    ga: !0
                },
                F: 536870912,
                state: {
                    url: q + "redox_state.bin.zst"
                },
                T: "https://www.redox-os.org/",
                za: !0
            }, {
                id: "redox-boot",
                name: "Redox",
                I: {
                    url: q +
                        "redox_demo_i686_2022-11-26_643_harddrive/.img",
                    size: 536870912,
                    async: !0,
                    J: 1048576,
                    ga: !0
                },
                F: 536870912,
                T: "https://www.redox-os.org/",
                za: !0
            }, {
                id: "helenos",
                F: 268435456,
                S: {
                    url: q + "HelenOS-0.11.2-ia32.iso",
                    size: 25765888,
                    async: !1
                },
                name: "HelenOS",
                T: "http://www.helenos.org/"
            }, {
                id: "fiwix",
                F: 268435456,
                I: {
                    url: q + "FiwixOS-3.3-i386/.img",
                    size: 1073741824,
                    async: !0,
                    J: 1048576,
                    ga: !0
                },
                name: "FiwixOS",
                T: "https://www.fiwix.org/"
            }, {
                id: "haiku",
                F: 536870912,
                I: {
                    url: q + "haiku-v3/.img",
                    size: 1073741824,
                    async: !0,
                    J: 1048576,
                    ga: !0
                },
                state: {
                    url: q +
                        "haiku_state-v3.bin.zst"
                },
                name: "Haiku",
                T: "https://www.haiku-os.org/"
            }, {
                id: "haiku-boot",
                F: 536870912,
                I: {
                    url: q + "haiku-v3/.img",
                    size: 1073741824,
                    async: !0,
                    J: 1048576,
                    ga: !0
                },
                name: "Haiku",
                T: "https://www.haiku-os.org/"
            }, {
                id: "msdos",
                I: {
                    url: q + "msdos.img",
                    size: 8388608,
                    async: !1
                },
                name: "MS-DOS"
            }, {
                id: "freedos",
                $: {
                    url: q + "freedos722.img",
                    size: 737280,
                    async: !1
                },
                name: "FreeDOS"
            }, {
                id: "freegem",
                I: {
                    url: q + "freegem/.bin",
                    size: 209715200,
                    async: !0,
                    J: 262144,
                    ga: !0
                },
                name: "Freedos with FreeGEM"
            }, {
                id: "psychdos",
                I: {
                    url: q + "psychdos/.img",
                    size: 549453824,
                    async: !0,
                    J: 262144,
                    ga: !0
                },
                name: "PsychDOS",
                T: "https://psychoslinux.gitlab.io/DOS/INDEX.HTM"
            }, {
                id: "oberon",
                I: {
                    url: q + "oberon.img",
                    size: 25165824,
                    async: !1
                },
                name: "Oberon"
            }, {
                id: "windows1",
                $: {
                    url: q + "windows101.img",
                    size: 1474560,
                    async: !1
                },
                name: "Windows"
            }, {
                id: "linux26",
                S: {
                    url: q + "linux.iso",
                    size: 6547456,
                    async: !1
                },
                name: "Linux"
            }, {
                id: "linux3",
                S: {
                    url: q + "linux3.iso",
                    size: 8638464,
                    async: !1
                },
                name: "Linux"
            }, {
                id: "linux4",
                S: {
                    url: q + "linux4.iso",
                    size: 7731200,
                    async: !1
                },
                name: "Linux",
                filesystem: {}
            }, {
                id: "buildroot",
                tb: {
                    url: q + "buildroot-bzimage.bin",
                    size: 5166352,
                    async: !1
                },
                name: "Buildroot Linux",
                filesystem: {},
                Mb: "tsc=reliable mitigations=off random.trust_cpu=on"
            }, {
                id: "basiclinux",
                I: {
                    url: q + "bl3-5.img",
                    size: 104857600,
                    async: !1
                },
                name: "BasicLinux"
            }, {
                id: "xpud",
                S: {
                    url: q + "xpud-0.9.2.iso",
                    size: 67108864,
                    async: !1
                },
                name: "xPUD",
                F: 268435456
            }, {
                id: "elks",
                I: {
                    url: q + "elks-hd32-fat.img",
                    size: 32514048,
                    async: !1
                },
                name: "ELKS"
            }, {
                id: "nodeos",
                tb: {
                    url: q + "nodeos-kernel.bin",
                    size: 14452E3,
                    async: !1
                },
                name: "NodeOS",
                Mb: "tsc=reliable mitigations=off random.trust_cpu=on"
            },
            {
                id: "dsl",
                F: 268435456,
                S: {
                    url: q + "dsl-4.11.rc2.iso",
                    size: 52824064,
                    async: !1
                },
                name: "Damn Small Linux",
                T: "http://www.damnsmalllinux.org/"
            }, {
                id: "xwoaf",
                F: 268435456,
                S: {
                    url: q + "xwoaf_rebuild4.iso",
                    size: 2205696,
                    async: !1
                },
                name: "xwoaf",
                T: "https://pupngo.dk/xwinflpy/xwoaf_rebuild.html"
            }, {
                id: "minix",
                name: "Minix",
                F: 268435456,
                S: {
                    url: q + "minix-3.3.0/.iso",
                    size: 605581312,
                    async: !0,
                    J: 1048576,
                    ga: !0
                },
                T: "https://www.minix3.org/"
            }, {
                id: "kolibrios",
                $: {
                    url: l ? q + "kolibri.img" : "//builds.kolibrios.org/en_US/data/data/kolibri.img",
                    size: 1474560,
                    async: !1
                },
                name: "KolibriOS",
                T: "https://kolibrios.org/en/"
            }, {
                id: "kolibrios-fallback",
                $: {
                    url: q + "kolibri.img",
                    size: 1474560,
                    async: !1
                },
                name: "KolibriOS"
            }, {
                id: "mu",
                I: {
                    url: q + "mu-shell.img",
                    size: 10321920,
                    async: !1
                },
                F: 268435456,
                name: "Mu",
                T: "https://github.com/akkartik/mu"
            }, {
                id: "openbsd",
                I: {
                    url: q + "openbsd/.img",
                    size: 1073741824,
                    async: !0,
                    J: 1048576,
                    ga: !0
                },
                state: {
                    url: q + "openbsd_state.bin.zst"
                },
                F: 268435456,
                name: "OpenBSD"
            }, {
                id: "sortix",
                S: {
                    url: q + "sortix-1.0-i686.iso",
                    size: 71075840,
                    async: !1
                },
                F: 536870912,
                name: "Sortix"
            }, {
                id: "openbsd-boot",
                I: {
                    url: q + "openbsd/.img",
                    size: 1073741824,
                    async: !0,
                    J: 1048576,
                    ga: !0
                },
                F: 268435456,
                name: "OpenBSD"
            }, {
                id: "netbsd",
                I: {
                    url: q + "netbsd/.img",
                    size: 511000064,
                    async: !0,
                    J: 1048576,
                    ga: !0
                },
                F: 268435456,
                name: "NetBSD"
            }, {
                id: "crazierl",
                Tb: {
                    url: q + "crazierl-elf.img",
                    size: 896592,
                    async: !1
                },
                Gb: {
                    url: q + "crazierl-initrd.img",
                    size: 18448316,
                    async: !1
                },
                za: !0,
                Mb: "kernel /libexec/ld-elf32.so.1",
                F: 134217728,
                name: "Crazierl"
            }, {
                id: "solos",
                $: {
                    url: q + "os8.img",
                    async: !1,
                    size: 1474560
                },
                name: "Sol OS",
                T: "http://oby.ro/os/"
            },
            {
                id: "bootchess",
                $: {
                    url: q + "bootchess.img",
                    async: !1,
                    size: 1474560
                },
                name: "BootChess",
                T: "http://www.pouet.net/prod.php?which=64962"
            }, {
                id: "bootbasic",
                $: {
                    url: q + "bootbasic.img",
                    async: !1,
                    size: 1474560
                },
                name: "bootBASIC",
                T: "https://github.com/nanochess/bootBASIC"
            }, {
                id: "sectorlisp",
                $: {
                    url: q + "sectorlisp-friendly.bin",
                    async: !1,
                    size: 512
                },
                name: "SectorLISP",
                T: "https://justine.lol/sectorlisp2/"
            }, {
                id: "sectorforth",
                $: {
                    url: q + "sectorforth.img",
                    async: !1,
                    size: 512
                },
                name: "sectorforth",
                T: "https://github.com/cesarblum/sectorforth"
            },
            {
                id: "floppybird",
                $: {
                    url: q + "floppybird.img",
                    async: !1,
                    size: 1474560
                },
                name: "Floppy Bird",
                T: "http://mihail.co/floppybird"
            }, {
                id: "stillalive",
                $: {
                    url: q + "stillalive-os.img",
                    async: !1,
                    size: 368640
                },
                name: "Still Alive",
                T: "https://github.com/maniekx86/stillalive-os"
            }, {
                id: "hello-v86",
                $: {
                    url: q + "hello-v86.img",
                    async: !1,
                    size: 512
                },
                name: "Hello v86"
            }, {
                id: "duskos",
                I: {
                    url: q + "duskos.img",
                    async: !1,
                    size: 8388608
                },
                name: "Dusk OS",
                T: "http://duskos.org/"
            }, {
                id: "windows2000",
                F: 536870912,
                I: {
                    url: q + "windows2k/.img",
                    size: 2147483648,
                    async: !0,
                    J: 262144,
                    ga: !0
                },
                name: "Windows 2000",
                state: {
                    url: q + "windows2k_state-v2.bin.zst"
                },
                Hb: !0
            }, {
                id: "windows2000-boot",
                F: 536870912,
                I: {
                    url: q + "windows2k/.img",
                    size: 2147483648,
                    async: !0,
                    J: 262144,
                    ga: !0
                },
                name: "Windows 2000"
            }, {
                id: "windowsnt4",
                F: 536870912,
                I: {
                    url: q + "winnt4_noacpi/.img",
                    size: 523837440,
                    async: !0,
                    J: 262144,
                    ga: !0
                },
                name: "Windows NT 4.0",
                Zc: 2
            }, {
                id: "windowsnt3",
                F: 268435456,
                I: {
                    url: q + "winnt31/.img",
                    size: 91226112,
                    async: !0,
                    J: 262144,
                    ga: !0
                },
                name: "Windows NT 3.1"
            }, {
                id: "windows98",
                F: 134217728,
                I: {
                    url: q + "windows98/.img",
                    size: 314572800,
                    async: !0,
                    J: 262144,
                    ga: !0
                },
                name: "Windows 98",
                state: {
                    url: q + "windows98_state.bin.zst"
                },
                Hb: !0
            }, {
                id: "windows98-boot",
                F: 134217728,
                I: {
                    url: q + "windows98/.img",
                    size: 314572800,
                    async: !0,
                    J: 262144,
                    ga: !0
                },
                name: "Windows 98"
            }, {
                id: "windows95",
                F: 33554432,
                I: {
                    url: q + "w95/.img",
                    size: 242049024,
                    async: !0,
                    J: 262144,
                    ga: !0
                },
                name: "Windows 95",
                state: {
                    url: q + "windows95_state.bin.zst"
                }
            }, {
                id: "windows95-boot",
                F: 33554432,
                I: {
                    url: q + "w95/.img",
                    size: 242049024,
                    async: !0,
                    J: 262144,
                    ga: !0
                },
                name: "Windows 95"
            }, {
                id: "windows30",
                F: 67108864,
                S: {
                    url: q + "Win30.iso",
                    size: 7774208,
                    async: !1
                },
                name: "Windows 3.0"
            }, {
                id: "windows31",
                F: 67108864,
                I: {
                    url: q + "win31.img",
                    async: !1,
                    size: 34463744
                },
                name: "Windows 3.1"
            }, {
                id: "tilck",
                F: 134217728,
                I: {
                    url: q + "tilck.img",
                    async: !1,
                    size: 37748736
                },
                name: "Tilck",
                T: "https://github.com/vvaltchev/tilck"
            }, {
                id: "sanos",
                F: 134217728,
                I: {
                    url: q + "sanos-flp.img",
                    async: !1,
                    size: 1474560
                },
                name: "sanos",
                T: "http://www.jbox.dk/sanos/"
            }, {
                id: "freebsd",
                F: 268435456,
                I: {
                    url: q + "freebsd/.img",
                    size: 2147483648,
                    async: !0,
                    J: 1048576,
                    ga: !0
                },
                state: {
                    url: q + "freebsd_state.bin.zst"
                },
                name: "FreeBSD"
            }, {
                id: "freebsd-boot",
                F: 268435456,
                I: {
                    url: q + "freebsd/.img",
                    size: 2147483648,
                    async: !0,
                    J: 1048576,
                    ga: !0
                },
                name: "FreeBSD"
            }, {
                id: "reactos",
                F: 536870912,
                I: {
                    url: q + "reactos/.img",
                    size: 524288E3,
                    async: !0,
                    J: 1048576,
                    ga: !0
                },
                state: {
                    url: q + "reactos_state.bin.zst"
                },
                Hb: !0,
                name: "ReactOS",
                T: "https://reactos.org/"
            }, {
                id: "reactos-boot",
                F: 536870912,
                I: {
                    url: q + "reactos/.img",
                    size: 524288E3,
                    async: !0,
                    J: 1048576,
                    ga: !0
                },
                name: "ReactOS",
                T: "https://reactos.org/"
            }, {
                id: "skift",
                S: {
                    url: q + "skift-20200910.iso",
                    size: 64452608,
                    async: !1
                },
                name: "Skift",
                T: "https://skiftos.org/"
            }, {
                id: "snowdrop",
                $: {
                    url: q + "snowdrop.img",
                    size: 1474560,
                    async: !1
                },
                name: "Snowdrop",
                T: "http://www.sebastianmihai.com/snowdrop/"
            }, {
                id: "openwrt",
                I: {
                    url: q + "openwrt-18.06.1-x86-legacy-combined-squashfs.img",
                    size: 19846474,
                    async: !1
                },
                name: "OpenWrt"
            }, {
                id: "qnx",
                $: {
                    url: q + "qnx-demo-network-4.05.img",
                    size: 1474560,
                    async: !1
                },
                name: "QNX 4.05"
            }, {
                id: "9front",
                F: 134217728,
                I: {
                    url: q + "9front-8963.f84cf1e60427675514fb056cc1723e45da01e043.386/.iso",
                    size: 477452288,
                    async: !0,
                    J: 1048576,
                    ga: !0
                },
                state: {
                    url: q + "9front_state-v2.bin.zst"
                },
                za: !0,
                name: "9front",
                T: "https://9front.org/"
            }, {
                id: "9front-boot",
                F: 134217728,
                I: {
                    url: q + "9front-8963.f84cf1e60427675514fb056cc1723e45da01e043.386/.iso",
                    size: 477452288,
                    async: !0,
                    J: 1048576,
                    ga: !0
                },
                za: !0,
                name: "9front",
                T: "https://9front.org/"
            }, {
                id: "mobius",
                $: {
                    url: q + "mobius-fd-release5.img",
                    size: 1474560,
                    async: !1
                },
                name: "Mobius"
            }, {
                id: "android",
                F: 536870912,
                S: {
                    url: q + "android-x86-1.6-r2/.iso",
                    size: 54661120,
                    async: !0,
                    J: 1048576,
                    ga: !0
                },
                name: "Android"
            }, {
                id: "android4",
                F: 536870912,
                S: {
                    url: q + "android_x86_nonsse3_4.4r1_20140904/.iso",
                    size: 247463936,
                    async: !0,
                    J: 1048576,
                    ga: !0
                },
                name: "Android"
            }, {
                id: "tinycore",
                F: 268435456,
                I: {
                    url: q + "TinyCore-11.0.iso",
                    size: 19922944,
                    async: !1
                },
                name: "Tinycore",
                T: "http://www.tinycorelinux.net/"
            }, {
                id: "freenos",
                F: 268435456,
                S: {
                    url: q + "FreeNOS-1.0.3.iso",
                    async: !1,
                    size: 11014144
                },
                name: "FreeNOS",
                za: !0,
                T: "http://www.freenos.org/"
            }, {
                id: "syllable",
                F: 536870912,
                I: {
                    url: q + "syllable-destop-0.6.7/.img",
                    async: !0,
                    size: 524288E3,
                    J: 524288,
                    ga: !0
                },
                name: "Syllable",
                T: "http://syllable.metaproject.frl/"
            },
            {
                id: "toaruos",
                F: 536870912,
                S: {
                    url: q + "toaruos-1.6.1-core.iso",
                    size: 67567616,
                    async: !1
                },
                name: "ToaruOS",
                za: !0,
                T: "https://toaruos.org/"
            }, {
                id: "nopeos",
                S: {
                    url: q + "nopeos-0.1.iso",
                    size: 532480,
                    async: !1
                },
                name: "Nope OS",
                T: "https://github.com/d99kris/nopeos"
            }, {
                id: "soso",
                S: {
                    url: q + "soso.iso",
                    size: 22546432,
                    async: !1
                },
                name: "Soso",
                T: "https://github.com/ozkl/soso"
            }, {
                id: "pcmos",
                $: {
                    url: q + "PCMOS386-9-user-patched.img",
                    size: 1474560,
                    async: !1
                },
                name: "PC-MOS/386",
                T: "https://github.com/roelandjansen/pcmos386v501"
            }, {
                id: "jx",
                $: {
                    url: q +
                        "jx-demo.img",
                    size: 1474560,
                    async: !1
                },
                name: "JX",
                T: "https://www4.cs.fau.de/Projects/JX/index.html"
            }, {
                id: "house",
                $: {
                    url: q + "hOp-0.8.img",
                    size: 1474560,
                    async: !1
                },
                name: "House",
                T: "https://programatica.cs.pdx.edu/House/"
            }, {
                id: "bleskos",
                name: "BleskOS",
                S: {
                    url: q + "bleskos_2024u32.iso",
                    size: 1835008,
                    async: !1
                },
                T: "https://github.com/VendelinSlezak/BleskOS"
            }, {
                id: "boneos",
                name: "BoneOS",
                S: {
                    url: q + "BoneOS.iso",
                    size: 11429888,
                    async: !1
                },
                T: "https://amanuel.io/projects/BoneOS/"
            }
            ];
            var C = "archlinux";
            if (!C) {
                var G = document.createElement("link");
                G.rel = "prefetch";
                G.href = "build/v86.wasm";
                document.head.appendChild(G)
            }
            G = document.createElement("link");
            G.rel = "prefetch";
            G.href = "build/xterm.js";
            document.head.appendChild(G);
            x.disable_jit && (u.Qe = !0);
            x.use_bochs_bios && (u.Bl = !0);
            G = parseInt(x.m, 10);
            0 < G && (u.F = 1048576 * Math.max(16, G));
            G = parseInt(x.vram, 10);
            0 < G && (u.da = 1048576 * G);
            u.vh = x.networking_proxy;
            u.audio = "0" !== x.audio;
            u.za = x.acpi;
            for (G = 0; G < q.length; G++) {
                var T = q[G];
                if (C === T.id) {
                    r(T);
                    return
                }
                var ia = c("start_" + T.id);
                ia && (ia.onclick = function (B, F, H) {
                    H.preventDefault();
                    k(B.id);
                    F.blur();
                    r(B)
                }.bind(this, T, ia))
            }
            if ("custom" === C) {
                if (x["hda.url"] && (u.I = {
                    size: parseInt(x["hda.size"], 10) || void 0,
                    url: x["hda.url"],
                    async: !0
                }), x["cdrom.url"] && (u.S = {
                    size: parseInt(x["cdrom.size"], 10) || void 0,
                    url: x["cdrom.url"],
                    async: !0
                }), x["fda.url"] && (u.$ = {
                    size: parseInt(x["fda.size"], 10) || void 0,
                    url: x["fda.url"],
                    async: !1
                }), u.$ || u.S || u.I) {
                    e(u, n);
                    return
                }
            } else if (/^[a-zA-Z0-9\-_]+\/[a-zA-Z0-9\-_]+$/g.test(C)) {
                const B = "https://v86-user-images.b-cdn.net/" + C;
                fetch(B + "/profile.json").catch(() => alert("Profile not found: " + C)).then(F => F.json()).then(F => {
                    function H(I) {
                        return I && {
                            url: B + "/" + I.url,
                            async: I.async,
                            size: I.size
                        }
                    }
                    r({
                        id: F.id,
                        name: F.name,
                        F: F.memory_size,
                        da: F.vga_memory_size,
                        za: F.acpi,
                        Fc: F.boot_order,
                        I: H(F.hda),
                        S: H(F.cdrom),
                        $: H(F.fda),
                        Tb: H(F.multiboot),
                        tb: H(F.bzimage),
                        Gb: H(F.initrd)
                    })
                });
                return
            }
            for (const B of p)
                if (q = window.localStorage.getItem(B))
                    if (G = c(B)) "checkbox" === G.type ? G.checked = "true" === q ? !0 : !1 : G.value = q
        } else alert("Your browser is not supported because it doesn't support WebAssembly")
    }

    function e(r, n) {
        var u = r.F;
        u || (u = 1048576 * parseInt(c("memory_size").value, 10), u || (alert("Invalid memory size - reset to 128MB"), u = 134217728));
        var x = r.da;
        x || (x = 1048576 * parseInt(c("video_memory_size").value, 10), x || (alert("Invalid video memory size - reset to 8MB"), x = 8388608));

        if (r.Bl) var T = "bochs-bios.bin",
            ia = "bochs-vgabios.bin";
        else T = "seabios.bin", ia = "vgabios.bin";
        if (!r.kc) {
            var B = {
                url: "bios/" + T
            };
            var F = {
                url: "bios/" + ia
            }
        }
        var H = new Ya({
            F: u,
            da: x,
            yg: r.gg ? null : c("screen_container"),
            Fc: r.Fc || 0,
            mg: l ? "ws://localhost:8080/" : q,
            Ec: B,
            Og: F,
            $: r.$,
            I: r.I,
            Pc: r.Pc,
            S: r.S,
            Tb: r.Tb,
            tb: r.tb,
            Gb: r.Gb,
            Mb: r.Mb,
            Ie: r.Ie,
            za: null,
            Qe: r.Qe,
            kc: r.kc,
            filesystem: r.filesystem || {},
            ij: null,
            Hb: r.Hb,
            Zc: r.Zc,
            Ti: !0
        });
        K(H,
            "emulator-ready",
            function () {
                if (H.g.v.Ha.exports.profiler_is_enabled()) {
                    var I = document.createElement("pre");
                    document.body.appendChild(I);
                    setInterval(function () {
                        if (H.Nd()) {
                            var fa = Za.ul(H.g.v);
                            I.textContent = fa
                        }
                    }, 1E3)
                }
                "dsl" !== r.id && "helenos" !== r.id && "android" !== r.id && "android4" !== r.id || setTimeout(() => {
                    Xa(H, "\n")
                }, 3E3);
                h(r, H);
                n && n(H)
            });
        K(H, "download-progress", function (I) {
            var fa = c("loading");
            fa.style.display = "block";
            if (I.Xe.endsWith(".wasm")) {
                var y = I.Xe.split("/");
                fa.textContent = "Fetching " + y[y.length -
                    1] + " ..."
            } else if (I.We === I.Ve - 1 && I.loaded >= I.total - 2048) fa.textContent = "Done downloading. Starting now ...";
            else {
                y = "Downloading images ";
                "number" === typeof I.We && I.Ve && (y += "[" + (I.We + 1) + "/" + I.Ve + "] ");
                if (I.total && "number" === typeof I.loaded) {
                    I = Math.floor(I.loaded / I.total * 100);
                    I = Math.min(100, Math.max(0, I));
                    var A = Math.floor(I / 2);
                    y = y + (I + "% [") + "#".repeat(A);
                    y += " ".repeat(50 - A) + "]"
                } else y += ".".repeat(m++ % 50);
                fa.textContent = y
            }
        });
        K(H, "download-error", function (I) {
            var fa = c("loading");
            fa.style.display = "block";
            fa.textContent = "Loading " + I.Xe + " failed. Check your connection and reload the page to try again."
        })
    }

    function h(r, n) {
        function u() {
            var z = Date.now(),
                L = n.g ? n.g.v.Ej[0] >>> 0 : 0;
            L < ia && (ia -= 4294967296);
            var R = L - ia;
            ia = L;
            H += R;
        }


        function q(z) {
            z.ctrlKey ? window.onbeforeunload = function () {
                window.onbeforeunload = null;
                return "CTRL-W cannot be sent to the emulator."
            } : window.onbeforeunload = null
        }
        
        c("loading").style.display =
            "none";


        r.gg || (c("screen_container").style.display = "block");
        r.filesystem ? f(n) : K(n, "9p-attach", function () {
            f(n)
        });

        var C = !0;

        var G = 0,
            T = 0,
            ia = 0,
            B = null,
            F = !1,
            H = 0;
        K(n, "emulator-started", function () {
            G = Date.now();
            B = setInterval(u, 1E3)
        });
        K(n, "emulator-stopped", function () {
            u();
            null !== B && clearInterval(B)
        });
        var I = 0,
            fa = 0,
            y = [];
        K(n, "9p-read-start", function (z) {
            z = z[0];
            y.push(z);

        });
        K(n, "9p-read-end",
            function (z) {
                I += z[1];

                const L = z[0];
                y = y.filter(R => R !== L);
            });
        K(n, "9p-write-end", function (z) {
            fa += z[1];

            y[0]
        });
        var A = 0,
            U = 0,
            Q = 0,
            Y = 0;

        K(n, "ide-read-start", function () {

        });
        K(n, "ide-read-end", function (z) {
            A += z[1];
            U += z[2];

        });
        K(n, "ide-write-end", function (z) {
            Q += z[1];
            Y += z[2];

        });
        var ba = 0,
            ja = 0;
        K(n, "eth-receive-end", function (z) {
            ja += z[0];
        });
        K(n, "eth-transmit-end", function (z) {
            ba += z[0];
        });
        K(n, "mouse-enable", function (z) {
            F = z;
        });
        K(n, "screen-set-mode", function (z) {

        });
        K(n, "screen-set-size-graphical", function (z) {


        });

        c("scale").onchange = function () {
            var z = parseFloat(this.value);
            (z || 0 < z) && n.h && n.h.Cg(z, z);
        };


        window.addEventListener("keydown", q, !1);
        window.addEventListener("keyup", q, !1);
        window.addEventListener("blur", q, !1);
        const Ba = document.createElement("script");
        Ba.src = "build/xterm.js";
        Ba.async = !0;
        Ba.onload = function () {
            var z = c("terminal");
            n.Yb && n.Yb.wa && n.Yb.wa();
        };
        document.body.appendChild(Ba);
        
        setTimeout(() => startUp(), 2000);
    }


    function f(r) {

        c("filesystem_send_file").onchange = function () {
            Array.prototype.forEach.call(this.files, function (n) {
                var u = new fb(n);
                u.onload = function () {
                    u.Rb(async function (x) {
                        await r.bj("/" + n.name, new Uint8Array(x))
                    })
                };
                u.load()
            }, this);
            this.value = "";
            this.blur()
        };
        c("filesystem_get_file").onkeypress = async function(n) {
            if (13 === n.which) {
                this.disabled = !0;
                try {
                    var u = await r.kf(this.value)
                } catch (x) {
                    console.log(x)
                }
                this.disabled = !1;
                u ? (n = this.value.replace(/\/$/, "").split("/"), n = n[n.length - 1] || "root", bb(u, n), this.value = "") : alert("Can't read file")
            }
        }
    }

    function g() {
        location.reload()
    }

    function k(r) {
        window.history.pushState && window.history.pushState({
            profile: r
        }, "", "?profile=" + r)
    }
    var l = !location.hostname.endsWith("copy.sh"),
        m = 0;
    const p = "memory_size video_memory_size networking_proxy disable_audio enable_acpi boot_order".split(" ");
    window.addEventListener("load",
        d, !1);
    window.addEventListener("load", function () {
        setTimeout(function () {
            window.addEventListener("popstate", g)
        }, 0)
    });
    "complete" === document.readyState && d()
})();

function gb(a) {
    this.ports = [];
    this.v = a;
    for (var b = 0; 65536 > b; b++) this.ports[b] = hb(this);
    var c = a.F[0];
    for (b = 0; b << 17 < c; b++) a.g[b] = a.j[b] = void 0, a.aa[b] = a.i[b] = void 0;
    ib(this, c, 4294967296 - c, function () {
        return 255
    }, function () { }, function () {
        return -1
    }, function () { })
}

function hb(a) {
    return {
        $d: a.uj,
        bb: a.sj,
        jf: a.tj,
        $f: a.hg,
        tf: a.hg,
        ya: a.hg,
        xa: void 0
    }
}
t = gb.prototype;
t.uj = function () {
    return 255
};
t.sj = function () {
    return 65535
};
t.tj = function () {
    return -1
};
t.hg = function () { };

function M(a, b, c, d, e, h) {
    d && (a.ports[b].$d = d);
    e && (a.ports[b].bb = e);
    h && (a.ports[b].jf = h);
    a.ports[b].xa = c
}

function N(a, b, c, d, e, h) {
    d && (a.ports[b].$f = d);
    e && (a.ports[b].tf = e);
    h && (a.ports[b].ya = h);
    a.ports[b].xa = c
}
t.ae = function (a, b, c, d, e, h) {
    function f() {
        return c.call(this) | d.call(this) << 8
    }

    function g() {
        return e.call(this) | h.call(this) << 8
    }

    function k() {
        return c.call(this) | d.call(this) << 8 | e.call(this) << 16 | h.call(this) << 24
    }
    e && h ? (M(this, a, b, c, f, k), M(this, a + 1, b, d), M(this, a + 2, b, e, g), M(this, a + 3, b, h)) : (M(this, a, b, c, f), M(this, a + 1, b, d))
};
t.Uc = function (a, b, c, d, e, h) {
    function f(l) {
        c.call(this, l & 255);
        d.call(this, l >> 8 & 255)
    }

    function g(l) {
        e.call(this, l & 255);
        h.call(this, l >> 8 & 255)
    }

    function k(l) {
        c.call(this, l & 255);
        d.call(this, l >> 8 & 255);
        e.call(this, l >> 16 & 255);
        h.call(this, l >>> 24)
    }
    e && h ? (N(this, a, b, c, f, k), N(this, a + 1, b, d), N(this, a + 2, b, e, g), N(this, a + 3, b, h)) : (N(this, a, b, c, f), N(this, a + 1, b, d))
};
t.Ij = function (a) {
    var b = this.v.g[a >>> 17];
    return b(a) | b(a + 1) << 8 | b(a + 2) << 16 | b(a + 3) << 24
};
t.Jj = function (a, b) {
    var c = this.v.j[a >>> 17];
    c(a, b & 255);
    c(a + 1, b >> 8 & 255);
    c(a + 2, b >> 16 & 255);
    c(a + 3, b >>> 24)
};

function ib(a, b, c, d, e, h, f) {
    h || (h = a.Ij.bind(a));
    f || (f = a.Jj.bind(a));
    for (b >>>= 17; 0 < c; b++) a.v.g[b] = d, a.v.j[b] = e, a.v.aa[b] = h, a.v.i[b] = f, c -= 131072
}

function jb(a, b) {
    a = a.ports[b];
    return a.jf.call(a.xa)
};

function lb(a, b) {
    this.i = this.h = !1;
    this.l = !0;
    this.j = 0;
    this.g = null;
    this.v = new nb(a, b, () => {
        this.l && ob(this, 0)
    });
    this.s = a;
    a.register("cpu-init", this.Fb, this);
    a.register("cpu-run", this.Sf, this);
    a.register("cpu-stop", this.stop, this);
    a.register("cpu-restart", this.vg, this);
    this.o()
}
t = lb.prototype;
t.Sf = function () {
    this.i = !1;
    this.h || (this.h = !0, this.s.send("emulator-started"));
    ob(this, 0)
};

function pb(a) {
    if (a.i || !a.h) a.i = a.h = !1, a.s.send("emulator-stopped");
    else {
        a.l = !1;
        var b = a.v.ui();
        ob(a, b)
    }
}

function ob(a, b) {
    const c = ++a.j;
    a.l = !0;
    a.C(b, c)
}
t.stop = function () {
    this.h && (this.i = !0)
};
t.wa = function () {
    this.u()
};
t.vg = function () {
    this.v.ta();
    qb(this.v)
};
t.Fb = function (a) {
    this.v.Fb(a, this.s);
    this.s.send("emulator-ready")
};
if ("undefined" !== typeof process) lb.prototype.C = function (a, b) {
    1 > a ? global.setImmediate(c => {
        c === this.j && pb(this)
    }, b) : setTimeout(c => {
        c === this.j && pb(this)
    }, a, b)
}, lb.prototype.o = function () { }, lb.prototype.u = function () { };
else if ("undefined" !== typeof Worker) {
    function a() {
        let b;
        globalThis.onmessage = function (c) {
            const d = c.data.t;
            b = b && clearTimeout(b);
            1 > d ? postMessage(c.data.ki) : b = setTimeout(() => postMessage(c.data.ki), d)
        }
    }
    lb.prototype.o = function () {
        const b = URL.createObjectURL(new Blob(["(" + a.toString() + ")()"], {
            type: "text/javascript"
        }));
        this.g = new Worker(b);
        this.g.onmessage = c => {
            c.data === this.j && pb(this)
        };
        URL.revokeObjectURL(b)
    };
    lb.prototype.C = function (b, c) {
        this.g.postMessage({
            t: b,
            ki: c
        })
    };
    lb.prototype.u = function () {
        this.g && this.g.terminate();
        this.g = null
    }
} else lb.prototype.C = function (a) {
    setTimeout(() => {
        pb(this)
    }, a)
}, lb.prototype.o = function () { }, lb.prototype.u = function () { };
lb.prototype.lf = function () {
    return this.v.lf()
};
lb.prototype.xe = function (a) {
    return this.v.xe(a)
};
if ("object" === typeof performance && performance.now) var rb = performance.now.bind(performance);
else if ("function" === typeof require) {
    const {
        performance: a
    } = require("perf_hooks");
    rb = a.now.bind(a)
} else "object" === typeof process && process.hrtime ? rb = function () {
    var a = process.hrtime();
    return 1E3 * a[0] + a[1] / 1E6
} : rb = Date.now;
var fb, sb, tb, ub, vb, wb, xb;

function yb(a, b) {
    return (a || 0 === a ? a + "" : "").padEnd(b, " ")
}

function $a(a, b) {
    return (a || 0 === a ? a + "" : "").padStart(b, "0")
}

function O(a, b, c, d) {
    return new Proxy({}, {
        get: function (e, h) {
            e = new a(b.buffer, c, d);
            h = e[h];
            return "function" === typeof h ? h.bind(e) : h
        },
        set: function (e, h, f) {
            (new a(b.buffer, c, d))[h] = f;
            return !0
        }
    })
}

function zb(a, b) {
    return "0x" + $a((a ? a.toString(16) : "").toUpperCase(), b || 1)
}
if ("undefined" !== typeof crypto && crypto.getRandomValues) {
    const a = new Int32Array(1);
    var Ab = function () {
        crypto.getRandomValues(a);
        return a[0]
    }
} else if ("undefined" !== typeof require) {
    const a = require("crypto");
    Ab = function () {
        return a.pm(4).readInt32LE(0)
    }
}
(function () {
    if ("function" === typeof Math.clz32) sb = function (d) {
        return 31 - Math.clz32(d)
    };
    else {
        for (var a = new Int8Array(256), b = 0, c = -2; 256 > b; b++) b & b - 1 || c++, a[b] = c;
        sb = function (d) {
            d >>>= 0;
            var e = d >>> 16;
            if (e) {
                var h = e >>> 8;
                return h ? 24 + a[h] : 16 + a[e]
            }
            return (h = d >>> 8) ? 8 + a[h] : a[d]
        }
    }
})();

function Bb(a) {
    var b = new Uint8Array(a),
        c, d;
    this.length = 0;
    this.push = function (e) {
        this.length !== a && this.length++;
        b[d] = e;
        d = d + 1 & a - 1
    };
    this.shift = function () {
        if (this.length) {
            var e = b[c];
            c = c + 1 & a - 1;
            this.length--;
            return e
        }
        return -1
    };
    this.clear = function () {
        this.length = d = c = 0
    };
    this.clear()
}

function Cb() {
    this.size = 65536;
    this.data = new Float32Array(65536);
    this.length = this.end = this.start = 0
}
Cb.prototype.push = function (a) {
    this.length === this.size ? this.start = this.start + 1 & this.size - 1 : this.length++;
    this.data[this.end] = a;
    this.end = this.end + 1 & this.size - 1
};
Cb.prototype.shift = function () {
    if (this.length) {
        var a = this.data[this.start];
        this.start = this.start + 1 & this.size - 1;
        this.length--;
        return a
    }
};

function Db(a, b) {
    var c = new Float32Array(b);
    b > a.length && (b = a.length);
    var d = a.start + b,
        e = a.data.subarray(a.start, d);
    c.set(e);
    d >= a.size && (d -= a.size, c.set(a.data.subarray(0, d), e.length));
    a.start = d;
    a.length -= b;
    return c
}
Cb.prototype.clear = function () {
    this.length = this.end = this.start = 0
};

function bb(a, b) {
    a instanceof Array || (a = [a]);
    ab(new Blob(a), b)
}

function ab(a, b) {
    var c = document.createElement("a");
    c.download = b;
    c.href = window.URL.createObjectURL(a);
    c.dataset.downloadurl = ["application/octet-stream", c.download, c.href].join(":");
    document.createEvent ? (a = document.createEvent("MouseEvent"), a.initMouseEvent("click", !0, !0, window, 0, 0, 0, 0, 0, !1, !1, !1, !1, 0, null), c.dispatchEvent(a)) : c.click();
    window.URL.revokeObjectURL(c.href)
}

function Eb(a) {
    "number" === typeof a ? this.view = new Uint8Array(a + 7 >> 3) : a instanceof ArrayBuffer && (this.view = new Uint8Array(a))
}
Eb.prototype.set = function (a, b) {
    const c = a >> 3;
    a = 1 << (a & 7);
    this.view[c] = b ? this.view[c] | a : this.view[c] & ~a
};
Eb.prototype.get = function (a) {
    return this.view[a >> 3] >> (a & 7) & 1
};
Eb.prototype.Rb = function () {
    return this.view.buffer
};
var Hb = "undefined" === typeof XMLHttpRequest ? Fb : Gb;

function Gb(a, b, c) {
    function d() {
        const k = c || 0;
        setTimeout(() => {
            Gb(a, b, k + 1)
        }, 1E3 * ([1, 1, 2, 3, 5, 8, 13, 21][k] || 34))
    }
    var e = new XMLHttpRequest;
    e.open(b.method || "get", a, !0);
    e.responseType = b.ie ? "json" : "arraybuffer";
    if (b.headers)
        for (var h = Object.keys(b.headers), f = 0; f < h.length; f++) {
            var g = h[f];
            e.setRequestHeader(g, b.headers[g])
        }
    b.Zd && (h = b.Zd.start, e.setRequestHeader("Range", "bytes=" + h + "-" + (h + b.Zd.length - 1)), e.setRequestHeader("X-Accept-Encoding", "identity"), e.onreadystatechange = function () {
        200 === e.status && e.abort()
    });
    e.onload = function () {
        if (4 === e.readyState)
            var baseURL = "https://i.copy.sh/";
        var convertedURL = baseURL + a.replace(/^images\//, "");
       
        if (200 !== e.status && 206 !== e.status)  console.log(convertedURL), 500 <= e.status && 600 > e.status && d();
        else if (e.response) {
            if (b.Zd) {
                const k = e.getResponseHeader("Content-Encoding");
                k && "identity" !== k && console.error("Server sent Content-Encoding in response to ranged request", {
                    filename: a,
                    dm: k
                })
            }
            b.done && b.done(e.response, e)
        }
    };
    e.onerror = function (k) {
        console.error("Loading the image " + a + " failed", k);
        d()
    };
    b.progress && (e.onprogress = function (k) {
        b.progress(k)
    });
    e.send(null)
}

function Fb(a, b) {
    const c = require("fs");
    b.Zd ? c.open(a, "r", (d, e) => {
        if (d) throw d;
        d = b.Zd.length;
        var h = Buffer.allocUnsafe(d);
        c.read(e, h, 0, d, b.Zd.start, f => {
            if (f) throw f;
            b.done && b.done(new Uint8Array(h));
            c.close(e, g => {
                if (g) throw g;
            })
        })
    }) : c.readFile(a, {
        encoding: b.ie ? "utf-8" : null
    }, function (d, e) {
        d ? console.log("Could not read file:", a, d) : (d = e, b.ie ? d = JSON.parse(d) : d = (new Uint8Array(d)).buffer, b.done(d))
    })
};
(function () {
    function a(f) {
        this.buffer = f;
        this.byteLength = f.byteLength;
        this.onload = void 0
    }

    function b(f, g, k) {
        this.filename = f;
        this.byteLength = g;
        this.g = new Map;
        this.i = new Set;
        this.J = k;
        this.u = !!k;
        this.onload = void 0
    }

    function c(f, g, k, l, m) {
        const p = f.match(/\.[^\.]+(\.zst)?$/);
        this.j = p ? p[0] : "";
        this.h = f.substring(0, f.length - this.j.length);
        this.D = this.j.endsWith(".zst");
        this.h.endsWith("/") || (this.h += "-");
        this.g = new Map;
        this.i = new Set;
        this.byteLength = g;
        this.J = k;
        this.G = !!l;
        this.C = m;
        this.u = !!k;
        this.onload = void 0
    }

    function d(f) {
        this.file = f;
        this.byteLength = f.size;
        1073741824 < f.size && console.warn("SyncFileBuffer: Allocating buffer of " + (f.size >> 20) + " MB ...");
        this.buffer = new ArrayBuffer(f.size);
        this.onload = void 0
    }

    function e(f) {
        this.file = f;
        this.byteLength = f.size;
        this.g = new Map;
        this.i = new Set;
        this.onload = void 0
    }
    tb = a;
    wb = b;
    vb = c;
    ub = e;
    fb = d;
    xb = function (f, g) {
        if (f.buffer instanceof ArrayBuffer) return new tb(f.buffer);
        if ("undefined" !== typeof File && f.buffer instanceof File) return g = f.async, void 0 === g && (g = 268435456 <= f.buffer.size),
            g ? new ub(f.buffer) : new fb(f.buffer);
        if (f.url) return f.ga ? new vb(f.url, f.size, f.J, !1, g) : new wb(f.url, f.size, f.J)
    };
    a.prototype.load = function () {
        this.onload && this.onload({
            buffer: this.buffer
        })
    };
    a.prototype.get = function (f, g, k) {
        k(new Uint8Array(this.buffer, f, g))
    };
    a.prototype.set = function (f, g, k) {
        (new Uint8Array(this.buffer, f, g.byteLength)).set(g);
        k()
    };
    a.prototype.Rb = function (f) {
        f(this.buffer)
    };
    a.prototype.ca = function () {
        const f = [];
        f[0] = this.byteLength;
        f[1] = new Uint8Array(this.buffer);
        return f
    };
    a.prototype.H =
        function (f) {
            this.byteLength = f[0];
            this.buffer = f[1].slice().buffer
        };
    b.prototype.load = function () {
        void 0 !== this.byteLength ? this.onload && this.onload(Object.create(null)) : h(this.filename, (f, g) => {
            if (f) throw Error("Cannot use: " + this.filename + ". " + f);
            this.byteLength = g;
            this.onload && this.onload(Object.create(null))
        })
    };
    b.prototype.h = function (f, g) {
        var k = g / 256;
        f /= 256;
        for (var l = 0; l < k; l++)
            if (!this.g.get(f + l)) return;
        if (1 === k) return this.g.get(f);
        g = new Uint8Array(g);
        for (l = 0; l < k; l++) g.set(this.g.get(f + l), 256 * l);
        return g
    };
    b.prototype.get = function (f, g, k) {
        var l = this.h(f, g);
        if (l) k(l);
        else {
            var m = f,
                p = g;
            this.J && (m = f - f % this.J, p = Math.ceil((f - m + g) / this.J) * this.J);
            Hb(this.filename, {
                done: function (r) {
                    r = new Uint8Array(r);
                    this.j(m, p, r);
                    m === f && p === g ? k(r) : k(r.subarray(f - m, f - m + g))
                }.bind(this),
                Zd: {
                    start: m,
                    length: p
                }
            })
        }
    };
    b.prototype.set = function (f, g, k) {
        f /= 256;
        for (var l = g.length / 256, m = 0; m < l; m++) {
            var p = this.g.get(f + m);
            void 0 === p ? this.g.set(f + m, g.slice(256 * m, 256 * (m + 1))) : p.set(g.subarray(256 * m, 256 * (m + 1)));
            this.i.add(f + m)
        }
        k()
    };
    b.prototype.j =
        function (f, g, k) {
            f /= 256;
            g /= 256;
            for (var l = 0; l < g; l++) {
                const m = this.g.get(f + l);
                m ? k.set(m, 256 * l) : this.u && this.g.set(f + l, k.slice(256 * l, 256 * (l + 1)))
            }
        };
    b.prototype.Rb = function (f) {
        f()
    };
    b.prototype.ca = function () {
        const f = [],
            g = [];
        for (const [k, l] of this.g) this.i.has(k) && g.push([k, l]);
        f[0] = g;
        return f
    };
    b.prototype.H = function (f) {
        f = f[0];
        this.g.clear();
        this.i.clear();
        for (const [g, k] of f) this.g.set(g, k), this.i.add(g)
    };
    c.prototype.load = function () {
        this.onload && this.onload(Object.create(null))
    };
    c.prototype.get = function (f,
        g, k) {
        var l = this.l(f, g);
        if (l) k(l);
        else if (this.J) {
            const p = Math.floor(f / this.J),
                r = f - p * this.J,
                n = Math.ceil((r + g) / this.J),
                u = new Uint8Array(n * this.J);
            let x = 0;
            for (let q = 0; q < n; q++) {
                var m = (p + q) * this.J;
                l = this.G ? this.h + (p + q + "").padStart(8, "0") + this.j : this.h + m + "-" + (m + this.J) + this.j;
                (m = this.l(m, this.J)) ? (u.set(m, q * this.J), x++, x === n && k(u.subarray(r, r + g))) : Hb(l, {
                    done: async function (C) {
                        C = new Uint8Array(C);
                        this.D && (C = await this.C(this.J, C), C = new Uint8Array(C));
                        u.set(C, q * this.J);
                        this.o((p + q) * this.J, this.J | 0, C);
                        x++;
                        x === n && k(u.subarray(r, r + g))
                    }.bind(this)
                })
            }
        } else Hb(this.h + f + "-" + (f + g) + this.j, {
            done: function (p) {
                p = new Uint8Array(p);
                this.o(f, g, p);
                k(p)
            }.bind(this)
        })
    };
    c.prototype.l = b.prototype.h;
    c.prototype.set = b.prototype.set;
    c.prototype.o = b.prototype.j;
    c.prototype.ca = b.prototype.ca;
    c.prototype.H = b.prototype.H;
    d.prototype.load = function () {
        this.g(0)
    };
    d.prototype.g = function (f) {
        var g = new FileReader;
        g.onload = function (k) {
            k = new Uint8Array(k.target.result);
            (new Uint8Array(this.buffer, f)).set(k);
            this.g(f + 4194304)
        }.bind(this);
        f < this.byteLength ? g.readAsArrayBuffer(this.file.slice(f, Math.min(f + 4194304, this.byteLength))) : (this.file = void 0, this.onload && this.onload({
            buffer: this.buffer
        }))
    };
    d.prototype.get = a.prototype.get;
    d.prototype.set = a.prototype.set;
    d.prototype.Rb = a.prototype.Rb;
    d.prototype.ca = a.prototype.ca;
    d.prototype.H = a.prototype.H;
    e.prototype.load = function () {
        this.onload && this.onload(Object.create(null))
    };
    e.prototype.get = function (f, g, k) {
        var l = this.h(f, g);
        l ? k(l) : (l = new FileReader, l.onload = function (m) {
            m = new Uint8Array(m.target.result);
            this.j(f, g, m);
            k(m)
        }.bind(this), l.readAsArrayBuffer(this.file.slice(f, f + g)))
    };
    e.prototype.h = b.prototype.h;
    e.prototype.set = b.prototype.set;
    e.prototype.j = b.prototype.j;
    e.prototype.ca = b.prototype.ca;
    e.prototype.H = b.prototype.H;
    e.prototype.Rb = function (f) {
        f()
    };
    e.prototype.mh = function (f) {
        for (var g = [], k = Array.from(this.g.keys()).sort(function (n, u) {
            return n - u
        }), l = 0, m = 0; m < k.length; m++) {
            var p = k[m],
                r = this.g.get(p);
            p *= 256;
            p !== l && (g.push(this.file.slice(l, p)), l = p);
            g.push(r);
            l += r.length
        }
        l !== this.file.size && g.push(this.file.slice(l));
        return new File(g, f)
    };
    var h = "undefined" === typeof XMLHttpRequest ? function (f, g) {
        require("fs").stat(f, (k, l) => {
            k ? g(k) : g(null, l.size)
        })
    } : function (f, g) {
        Hb(f, {
            done: (k, l) => {
                k = l.getResponseHeader("Content-Range") || "";
                (l = k.match(/\/(\d+)\s*$/)) ? g(null, +l[1]) : g("`Range: bytes=...` header not supported (Got `" + k + "`)")
            },
            headers: {
                Range: "bytes=0-0",
                "X-Accept-Encoding": "identity"
            }
        })
    }
})();

function Ib(a, b, c, d, e, h) {
    this.Ja = new Jb(this, a, b, d, e, h);
    this.Ra = new Jb(this, a, c, !1, e, h);
    this.Da = this.Ja;
    this.v = a;
    0 === e ? (this.g = 496, this.fa = 14, this.Pa = 240) : 1 === e && (this.g = 368, this.fa = 15, this.Pa = 248);
    this.i = this.g | 516;
    this.h = 46080;
    this.K = [134, 128, 16, 112, 5, 0, 160, 2, 0, 128, 1, 1, 0, 0, 0, 0, this.g & 255 | 1, this.g >> 8, 0, 0, this.i & 255 | 1, this.i >> 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, this.h & 255 | 1, this.h >> 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 67, 16, 212, 130, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, this.fa, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
    ];
    this.Ib = [{
        size: 8
    }, {
        size: 4
    }, void 0, void 0, {
        size: 16
    }];
    this.name = "ide" + e;
    this.l = 2;
    M(a.B, this.g | 7, this, function () {
        P(this.v, this.fa);
        return this.Yh()
    });
    M(a.B, this.i | 2, this, this.Yh);
    N(a.B, this.i | 2, this, this.Hl);
    M(a.B, this.g | 0, this, function () {
        return Kb(this.Da, 1)
    }, function () {
        return Kb(this.Da, 2)
    }, function () {
        return Kb(this.Da, 4)
    });
    M(a.B, this.g | 1, this, function () {
        return this.Da.error &
            255
    });
    M(a.B, this.g | 2, this, function () {
        return this.Da.ja & 255
    });
    M(a.B, this.g | 3, this, function () {
        return this.Da.Ka & 255
    });
    M(a.B, this.g | 4, this, function () {
        return this.Da.ua & 255
    });
    M(a.B, this.g | 5, this, function () {
        return this.Da.Aa & 255
    });
    M(a.B, this.g | 6, this, function () {
        return this.Da.$c & 255
    });
    N(a.B, this.g | 0, this, function (f) {
        Lb(this.Da, f, 1)
    }, function (f) {
        Lb(this.Da, f, 2)
    }, function (f) {
        Lb(this.Da, f, 4)
    });
    N(a.B, this.g | 1, this, function (f) {
        this.Ja.Pd = (this.Ja.Pd << 8 | f) & 65535;
        this.Ra.Pd = (this.Ra.Pd << 8 | f) & 65535
    });
    N(a.B, this.g |
        2, this,
        function (f) {
            this.Ja.ja = (this.Ja.ja << 8 | f) & 65535;
            this.Ra.ja = (this.Ra.ja << 8 | f) & 65535
        });
    N(a.B, this.g | 3, this, function (f) {
        this.Ja.Ka = (this.Ja.Ka << 8 | f) & 65535;
        this.Ra.Ka = (this.Ra.Ka << 8 | f) & 65535
    });
    N(a.B, this.g | 4, this, function (f) {
        this.Ja.ua = (this.Ja.ua << 8 | f) & 65535;
        this.Ra.ua = (this.Ra.ua << 8 | f) & 65535
    });
    N(a.B, this.g | 5, this, function (f) {
        this.Ja.Aa = (this.Ja.Aa << 8 | f) & 65535;
        this.Ra.Aa = (this.Ra.Aa << 8 | f) & 65535
    });
    N(a.B, this.g | 6, this, function (f) {
        this.Da = f & 16 ? this.Ra : this.Ja;
        this.Ja.$c = f;
        this.Ra.$c = f;
        this.Ja.oe =
            this.Ra.oe = f >> 6 & 1;
        this.Ja.head = this.Ra.head = f & 15
    });
    this.j = this.Ba = this.Yd = 0;
    N(a.B, this.g | 7, this, function (f) {
        P(this.v, this.fa);
        var g = this.Da;
        if (g.buffer) switch (g.u = f, g.error = 0, f) {
            case 8:
                g.i = 0;
                g.g = 0;
                g.h = 0;
                Mb(g);
                g.W();
                break;
            case 16:
                g.status = 80;
                g.ua = 0;
                g.W();
                break;
            case 248:
                g.status = 80;
                var k = g.j - 1;
                g.Ka = k & 255;
                g.ua = k >> 8 & 255;
                g.Aa = k >> 16 & 255;
                g.$c = g.$c & 240 | k >> 24 & 15;
                g.W();
                break;
            case 39:
                g.status = 80;
                k = g.j - 1;
                g.Ka = k & 255;
                g.ua = k >> 8 & 255;
                g.Aa = k >> 16 & 255;
                g.Ka |= k >> 24 << 8 & 65280;
                g.W();
                break;
            case 32:
            case 36:
            case 41:
            case 196:
                Nb(g,
                    f);
                break;
            case 48:
            case 52:
            case 57:
            case 197:
                var l = 52 === f || 57 === f;
                k = Ob(g, l);
                l = Pb(g, l);
                f = 48 === f || 52 === f;
                k *= g.l;
                l *= g.l;
                l + k > g.buffer.byteLength ? (g.status = 255, g.W()) : (g.status = 88, Rb(g, k), g.g = f ? 512 : Math.min(k, 512 * g.O), g.Z = l);
                break;
            case 144:
                g.W();
                g.error = 257;
                g.status = 80;
                break;
            case 145:
                g.status = 80;
                g.W();
                break;
            case 160:
                g.L && (g.status = 88, Sb(g, 12), g.g = 12, g.ja = 1, g.W());
                break;
            case 161:
                g.L ? (Tb(g), g.status = 88, g.ua = 20, g.Aa = 235) : g.status = 65;
                g.W();
                break;
            case 198:
                g.O = g.ja & 255;
                g.status = 80;
                g.W();
                break;
            case 37:
            case 200:
                k =
                    37 === f;
                l = Ob(g, k);
                Pb(g, k) * g.l + l * g.l > g.buffer.byteLength ? (g.status = 255, g.W()) : (g.status = 88, g.xa.Ba |= 1);
                break;
            case 53:
            case 202:
                k = 53 === f;
                l = Ob(g, k);
                Pb(g, k) * g.l + l * g.l > g.buffer.byteLength ? (g.status = 255, g.W()) : (g.status = 88, g.xa.Ba |= 1);
                break;
            case 64:
                g.status = 80;
                g.W();
                break;
            case 218:
                g.status = 65;
                g.error = 4;
                g.W();
                break;
            case 224:
                g.status = 80;
                g.W();
                break;
            case 225:
                g.status = 80;
                g.W();
                break;
            case 231:
                g.status = 80;
                g.W();
                break;
            case 236:
                if (g.L) {
                    g.status = 65;
                    g.error = 4;
                    g.W();
                    break
                }
                Tb(g);
                g.status = 88;
                g.W();
                break;
            case 234:
                g.status =
                    80;
                g.W();
                break;
            case 239:
                g.status = 80;
                g.W();
                break;
            case 222:
                g.status = 80;
                g.W();
                break;
            case 245:
                g.status = 80;
                g.W();
                break;
            case 249:
                g.status = 65;
                g.error = 4;
                break;
            default:
                g.status = 65, g.error = 4
        } else g.error = 4, g.status = 65, g.W()
    });
    M(a.B, this.h | 4, this, void 0, void 0, this.jj);
    N(a.B, this.h | 4, this, void 0, void 0, this.nj);
    M(a.B, this.h, this, this.lj, void 0, this.kj);
    N(a.B, this.h, this, this.ah, void 0, this.oj);
    M(a.B, this.h | 2, this, this.mj);
    N(a.B, this.h | 2, this, this.bh);
    M(a.B, this.h | 8, this, function () {
        return 0
    });
    M(a.B, this.h | 10,
        this,
        function () {
            return 0
        });
    Ub(a.A.Za, this)
}
t = Ib.prototype;
t.Yh = function () {
    return this.Da.buffer ? this.Da.status : 0
};
t.Hl = function (a) {
    a & 4 && (P(this.v, this.fa), Mb(this.Ja), Mb(this.Ra));
    this.l = a
};
t.jj = function () {
    return this.Yd
};
t.nj = function (a) {
    this.Yd = a
};
t.mj = function () {
    return this.Ba
};
t.bh = function (a) {
    this.Ba &= ~(a & 6)
};
t.kj = function () {
    return this.j | this.Ba << 16
};
t.lj = function () {
    return this.j
};
t.oj = function (a) {
    this.ah(a & 255);
    this.bh(a >> 16 & 255)
};
t.ah = function (a) {
    const b = this.j;
    this.j = a & 9;
    if ((b & 1) !== (a & 1))
        if (0 === (a & 1)) this.Ba &= -2;
        else switch (this.Ba |= 1, this.Da.u) {
            case 37:
            case 200:
                Vb(this.Da);
                break;
            case 202:
            case 53:
                Wb(this.Da);
                break;
            case 160:
                Xb(this.Da)
        }
};
t.W = function () {
    0 === (this.l & 2) && (this.Ba |= 4, this.v.Wa(this.fa))
};
t.ca = function () {
    var a = [];
    a[0] = this.Ja;
    a[1] = this.Ra;
    a[2] = this.g;
    a[3] = this.fa;
    a[4] = this.Pa;
    a[5] = this.i;
    a[6] = this.h;
    a[7] = this.name;
    a[8] = this.l;
    a[9] = this.Yd;
    a[10] = this.Ba;
    a[11] = this.Da === this.Ja;
    a[12] = this.j;
    return a
};
t.H = function (a) {
    this.Ja.H(a[0]);
    this.Ra.H(a[1]);
    this.g = a[2];
    this.fa = a[3];
    this.Pa = a[4];
    this.i = a[5];
    this.h = a[6];
    this.name = a[7];
    this.l = a[8];
    this.Yd = a[9];
    this.Ba = a[10];
    this.Da = a[11] ? this.Ja : this.Ra;
    this.j = a[12]
};

function Jb(a, b, c, d, e, h) {
    this.xa = a;
    this.s = h;
    this.aa = e;
    this.v = b;
    this.buffer = c;
    this.l = d ? 2048 : 512;
    this.L = d;
    this.D = this.o = this.C = this.j = 0;
    this.buffer && (this.j = this.buffer.byteLength / this.l, this.j !== (this.j | 0) && (this.j = Math.ceil(this.j)), d ? (this.C = 1, this.o = 0) : (this.C = 16, this.o = 63), this.D = this.j / this.C / this.o, this.D !== (this.D | 0) && (this.D = Math.floor(this.D)), a = b.A.wd, a.Y[57] |= 1 << 4 * this.aa, a.Y[18] = a.Y[18] & 15 | 240, a.Y[27] = this.D & 255, a.Y[28] = this.D >> 8 & 255, a.Y[29] = this.C & 255, a.Y[30] = 255, a.Y[31] = 255, a.Y[32] = 200,
        a.Y[33] = this.D & 255, a.Y[34] = this.D >> 8 & 255, a.Y[35] = this.o & 255);
    this.G = {
        ci: 0,
        di: 0,
        Ug: 0,
        Vg: 0,
        th: !1
    };
    this.buffer = c;
    this.$c = this.head = this.Aa = this.ua = this.Pd = this.Ka = this.ja = this.oe = 0;
    this.status = 80;
    this.O = 128;
    this.i = this.error = 0;
    this.data = new Uint8Array(65536);
    this.X = new Uint16Array(this.data.buffer);
    this.P = new Int32Array(this.data.buffer);
    this.g = this.h = 0;
    this.U = this.u = -1;
    this.ta = this.Z = 0;
    this.R = new Set;
    this.ea = new Set;
    Object.seal(this)
}

function Mb(a) {
    a.L ? (a.status = 0, a.ja = 1, a.error = 1, a.Ka = 1, a.ua = 20, a.Aa = 235) : (a.status = 81, a.ja = 1, a.error = 1, a.Ka = 1, a.ua = 0, a.Aa = 0);
    for (const b of a.R) a.ea.add(b);
    a.R.clear()
}
t = Jb.prototype;
t.W = function () {
    this.xa.W()
};
t.Re = function () {
    this.status = 80;
    var a = this.data.subarray(0, this.h);
    Yb(this, this.u, this.h / 512);
    this.W();
    this.buffer.set(this.Z, a, function () { });
    Zb(this, this.h)
};

function $b(a, b) {
    var c = (b[7] << 8 | b[8]) * a.l;
    b = (b[2] << 24 | b[3] << 16 | b[4] << 8 | b[5]) * a.l;
    a.h = 0;
    var d = a.Aa << 8 & 65280 | a.ua & 255;
    a.ua = a.Aa = 0;
    65535 === d && d--;
    d > c && (d = c);
    b >= a.buffer.byteLength ? (a.status = 255, a.W()) : 0 === c ? (a.status = 80, a.i = 0) : (c = Math.min(c, a.buffer.byteLength - b), a.status = 208, ac(a), a.ma(b, c, e => {
        bc(a, e);
        a.status = 88;
        a.ja = a.ja & -8 | 2;
        a.W();
        d &= -4;
        a.g = d;
        a.g > a.h && (a.g = a.h);
        a.ua = a.g & 255;
        a.Aa = a.g >> 8 & 255;
        cc(a, c)
    }))
}

function dc(a, b) {
    var c = (b[7] << 8 | b[8]) * a.l;
    b = (b[2] << 24 | b[3] << 16 | b[4] << 8 | b[5]) * a.l;
    b >= a.buffer.byteLength ? (a.status = 255, a.W()) : (a.status = 208, ac(a), a.ma(b, c, d => {
        cc(a, c);
        a.status = 88;
        a.ja = a.ja & -8 | 2;
        bc(a, d);
        Xb(a)
    }))
}

function Xb(a) {
    if (0 !== (a.xa.Ba & 1) && 0 !== (a.status & 8)) {
        var b = a.xa.Yd,
            c = 0,
            d = a.data;
        do {
            var e = a.v.h(b),
                h = a.v.bb(b + 4),
                f = a.v.$d(b + 7) & 128;
            h || (h = 65536);
            ec(a.v, d.subarray(c, Math.min(c + h, a.h)), e);
            c += h;
            b += 8;
            if (c >= a.h && !f) break
        } while (!f);
        a.status = 80;
        a.xa.Ba &= -2;
        a.ja = a.ja & -8 | 3;
        a.W()
    }
}

function Kb(a, b) {
    if (a.i < a.g) {
        var c = 1 === b ? a.data[a.i] : 2 === b ? a.X[a.i >>> 1] : a.P[a.i >>> 2];
        a.i += b;
        a.i >= a.g && (160 === a.u ? a.g === a.h ? (a.status = 80, a.ja = a.ja & -8 | 3, a.W()) : (a.status = 88, a.ja = a.ja & -8 | 2, a.W(), b = a.Aa << 8 & 65280 | a.ua & 255, a.g + b > a.h ? (a.ua = a.h - a.g & 255, a.Aa = a.h - a.g >> 8 & 255, a.g = a.h) : a.g += b) : (a.error = 0, a.i >= a.h ? a.status = 80 : (b = 196 === a.u || 41 === a.u ? Math.min(a.O, (a.h - a.g) / 512) : 1, Yb(a, a.u, b), a.g += 512 * b, a.status = 88, a.W())));
        return c
    }
    a.i += b;
    return 0
}

function Lb(a, b, c) {
    if (!(a.i >= a.g) && (1 === c ? a.data[a.i++] = b : 2 === c ? (a.X[a.i >>> 1] = b, a.i += 2) : (a.P[a.i >>> 2] = b, a.i += 4), a.i === a.g))
        if (160 === a.u) {
            a.i = 0;
            a.U = a.data[0];
            switch (a.U) {
                case 0:
                    Sb(a, 0);
                    a.g = a.h;
                    a.status = 80;
                    break;
                case 3:
                    Sb(a, a.data[4]);
                    a.g = a.h;
                    a.status = 88;
                    a.data[0] = 240;
                    a.data[2] = 5;
                    a.data[7] = 8;
                    break;
                case 18:
                    b = a.data[4];
                    a.status = 88;
                    a.data.set([5, 128, 1, 49, 31, 0, 0, 0, 83, 79, 78, 89, 32, 32, 32, 32, 67, 68, 45, 82, 79, 77, 32, 67, 68, 85, 45, 49, 48, 48, 48, 32, 49, 46, 49, 97]);
                    a.g = a.h = Math.min(36, b);
                    break;
                case 26:
                    Sb(a, a.data[4]);
                    a.g =
                        a.h;
                    a.status = 88;
                    break;
                case 30:
                    Sb(a, 0);
                    a.g = a.h;
                    a.status = 80;
                    break;
                case 37:
                    b = a.j - 1;
                    bc(a, new Uint8Array([b >> 24 & 255, b >> 16 & 255, b >> 8 & 255, b & 255, 0, 0, a.l >> 8 & 255, a.l & 255]));
                    a.g = a.h;
                    a.status = 88;
                    break;
                case 40:
                    a.Pd & 1 ? dc(a, a.data) : $b(a, a.data);
                    break;
                case 66:
                    b = a.data[8];
                    Sb(a, Math.min(8, b));
                    a.g = a.h;
                    a.status = 88;
                    break;
                case 67:
                    b = a.data[8] | a.data[7] << 8;
                    c = a.data[9] >> 6;
                    Sb(a, b);
                    a.g = a.h;
                    0 === c ? (b = a.j, a.data.set(new Uint8Array([0, 18, 1, 1, 0, 20, 1, 0, 0, 0, 0, 0, 0, 22, 170, 0, b >> 24, b >> 16 & 255, b >> 8 & 255, b & 255]))) : 1 === c && a.data.set(new Uint8Array([0,
                        10, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0
                    ]));
                    a.status = 88;
                    break;
                case 70:
                    b = a.data[8] | a.data[7] << 8;
                    b = Math.min(b, 32);
                    Sb(a, b);
                    a.g = a.h;
                    a.data[0] = b - 4 >> 24 & 255;
                    a.data[1] = b - 4 >> 16 & 255;
                    a.data[2] = b - 4 >> 8 & 255;
                    a.data[3] = b - 4 & 255;
                    a.data[6] = 8;
                    a.data[10] = 3;
                    a.status = 88;
                    break;
                case 81:
                    Sb(a, 0);
                    a.g = a.h;
                    a.status = 80;
                    break;
                case 82:
                    a.status = 81;
                    a.h = 0;
                    a.error = 80;
                    break;
                case 90:
                    b = a.data[8] | a.data[7] << 8;
                    42 === a.data[2] && Sb(a, Math.min(30, b));
                    a.g = a.h;
                    a.status = 88;
                    break;
                case 189:
                    Sb(a, a.data[9] | a.data[8] << 8);
                    a.g = a.h;
                    a.data[5] = 1;
                    a.status = 88;
                    break;
                case 74:
                    a.status =
                        81;
                    a.h = 0;
                    a.error = 80;
                    break;
                case 190:
                    Sb(a, 0);
                    a.g = a.h;
                    a.status = 80;
                    break;
                default:
                    a.status = 81, a.h = 0, a.error = 80
            }
            a.ja = a.ja & -8 | 2;
            0 === (a.status & 128) && a.W();
            0 === (a.status & 128) && 0 === a.h && (a.ja |= 1, a.status &= -9)
        } else a.i >= a.h ? a.Re() : (a.status = 88, a.g += 512, a.W())
}

function Yb(a, b, c) {
    a.ja -= c;
    36 === b || 41 === b || 52 === b || 57 === b || 37 === b || 53 === b ? (b = c + fc(a), a.Ka = b & 255 | b >> 16 & 65280, a.ua = b >> 8 & 255, a.Aa = b >> 16 & 255) : a.oe ? (b = c + gc(a), a.Ka = b & 255, a.ua = b >> 8 & 255, a.Aa = b >> 16 & 255, a.head = a.head & -16 | b & 15) : (b = c + hc(a), c = b / (a.C * a.o) | 0, a.ua = c & 255, a.Aa = c >> 8 & 255, a.head = (b / a.o | 0) % a.C & 15, a.Ka = b % a.o + 1 & 255, hc(a))
}

function Nb(a, b) {
    var c = 36 === b || 41 === b,
        d = Ob(a, c);
    c = Pb(a, c);
    var e = 32 === b || 36 === b,
        h = d * a.l;
    c *= a.l;
    c + h > a.buffer.byteLength ? (a.status = 255, a.W()) : (a.status = 192, ac(a), a.ma(c, h, f => {
        bc(a, f);
        a.status = 88;
        a.g = e ? 512 : Math.min(h, 512 * a.O);
        Yb(a, b, e ? 1 : Math.min(d, a.o));
        a.W();
        cc(a, h)
    }))
}

function Vb(a) {
    var b = 37 === a.u,
        c = Ob(a, b);
    b = Pb(a, b);
    var d = c * a.l;
    b *= a.l;
    ac(a);
    a.ma(b, d, e => {
        var h = a.xa.Yd,
            f = 0;
        do {
            var g = a.v.h(h),
                k = a.v.bb(h + 4),
                l = a.v.$d(h + 7) & 128;
            k || (k = 65536);
            ec(a.v, e.subarray(f, f + k), g);
            f += k;
            h += 8
        } while (!l);
        Yb(a, a.u, c);
        a.status = 80;
        a.xa.Ba &= -2;
        a.u = -1;
        a.W();
        cc(a, d)
    })
}

function Wb(a) {
    var b = 53 === a.u,
        c = Ob(a, b),
        d = Pb(a, b);
    b = c * a.l;
    d *= a.l;
    var e = a.xa.Yd,
        h = 0;
    const f = new Uint8Array(b);
    do {
        var g = a.v.h(e),
            k = a.v.bb(e + 4),
            l = a.v.$d(e + 7) & 128;
        k || (k = 65536);
        f.set(a.v.gb.subarray(g, g + k), h);
        h += k;
        e += 8
    } while (!l);
    a.buffer.set(d, f, () => {
        Yb(a, a.u, c);
        a.status = 80;
        a.W();
        a.xa.Ba &= -2;
        a.u = -1
    });
    Zb(a, b)
}

function hc(a) {
    return ((a.ua & 255 | a.Aa << 8 & 65280) * a.C + a.head) * a.o + (a.Ka & 255) - 1
}

function gc(a) {
    return a.Ka & 255 | a.ua << 8 & 65280 | a.Aa << 16 & 16711680 | (a.head & 15) << 24
}

function fc(a) {
    return (a.Ka & 255 | a.ua << 8 & 65280 | a.Aa << 16 & 16711680 | a.Ka >> 8 << 24 & 4278190080) >>> 0
}

function Pb(a, b) {
    return b ? fc(a) : a.oe ? gc(a) : hc(a)
}

function Ob(a, b) {
    b ? (a = a.ja, 0 === a && (a = 65536)) : (a = a.ja & 255, 0 === a && (a = 256));
    return a
}

function Tb(a) {
    if (a.$c & 16) Sb(a, 0);
    else {
        for (var b = 0; 512 > b; b++) a.data[b] = 0;
        b = Math.min(16383, a.D);
        bc(a, [64, a.L ? 133 : 0, b, b >> 8, 0, 0, a.C, a.C >> 8, a.o / 512, a.o / 512 >> 8, 0, 2, a.o, a.o >> 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 2, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 56, 118, 32, 54, 68, 72, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 128, 0, 1, 0, 0, 2, 0, 0, 0, 2, 0, 2, 7, 0, b, b >> 8, a.C, a.C >> 8, a.o, 0, a.j & 255, a.j >> 8 & 255, a.j >> 16 & 255, a.j >> 24 & 255, 0, 0, a.j & 255, a.j >> 8 & 255, a.j >> 16 & 255,
            a.j >> 24 & 255, 0, 0, 160 === a.u ? 0 : 7, 160 === a.u ? 0 : 4, 0, 0, 30, 0, 30, 0, 30, 0, 30, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 126, 0, 0, 0, 0, 0, 0, 116, 0, 64, 0, 64, 0, 116, 0, 64, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 96, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, a.j & 255, a.j >> 8 & 255, a.j >> 16 & 255, a.j >> 24 & 255
        ]);
        a.h = 512;
        a.g = 512
    }
}

function Sb(a, b) {
    Rb(a, b);
    for (var c = 0; c < b + 3 >> 2; c++) a.P[c] = 0
}

function Rb(a, b) {
    a.data.length < b && (a.data = new Uint8Array(b + 3 & -4), a.X = new Uint16Array(a.data.buffer), a.P = new Int32Array(a.data.buffer));
    a.h = b;
    a.i = 0
}

function bc(a, b) {
    Rb(a, b.length);
    a.data.set(b)
}

function ac(a) {
    a.G.th = !0;
    a.s.send("ide-read-start")
}

function cc(a, b) {
    a.G.th = !1;
    var c = b / a.l | 0;
    a.G.ci += c;
    a.G.Ug += b;
    a.s.send("ide-read-end", [a.aa, b, c])
}

function Zb(a, b) {
    var c = b / a.l | 0;
    a.G.di += c;
    a.G.Vg += b;
    a.s.send("ide-write-end", [a.aa, b, c])
}
t.ma = function (a, b, c) {
    const d = this.ta++;
    this.R.add(d);
    this.buffer.get(a, b, e => {
        this.ea.delete(d) ? this.R.has(d) : (this.R.delete(d), c(e))
    })
};
t.ca = function () {
    var a = [];
    a[0] = this.ja;
    a[1] = this.D;
    a[2] = this.Aa;
    a[3] = this.ua;
    a[4] = this.i;
    a[5] = 0;
    a[6] = 0;
    a[7] = 0;
    a[8] = 0;
    a[9] = this.$c;
    a[10] = this.error;
    a[11] = this.head;
    a[12] = this.C;
    a[13] = this.L;
    a[14] = this.oe;
    a[15] = this.Pd;
    a[16] = this.data;
    a[17] = this.h;
    a[18] = this.Ka;
    a[19] = this.j;
    a[20] = this.l;
    a[21] = this.O;
    a[22] = this.o;
    a[23] = this.status;
    a[24] = this.Z;
    a[25] = this.u;
    a[26] = this.g;
    a[27] = this.U;
    a[28] = this.buffer;
    return a
};
t.H = function (a) {
    this.ja = a[0];
    this.D = a[1];
    this.Aa = a[2];
    this.ua = a[3];
    this.i = a[4];
    this.$c = a[9];
    this.error = a[10];
    this.head = a[11];
    this.C = a[12];
    this.L = a[13];
    this.oe = a[14];
    this.Pd = a[15];
    this.data = a[16];
    this.h = a[17];
    this.Ka = a[18];
    this.j = a[19];
    this.l = a[20];
    this.O = a[21];
    this.o = a[22];
    this.status = a[23];
    this.Z = a[24];
    this.u = a[25];
    this.g = a[26];
    this.U = a[27];
    this.X = new Uint16Array(this.data.buffer);
    this.P = new Int32Array(this.data.buffer);
    this.buffer && this.buffer.H(a[28])
};

function ic(a) {
    this.Vb = new Uint8Array(4);
    this.g = new Uint8Array(4);
    this.Td = new Uint8Array(4);
    this.Ud = new Uint8Array(4);
    this.Sd = new Int32Array(this.Vb.buffer);
    new Int32Array(this.g.buffer);
    this.Bh = new Int32Array(this.Td.buffer);
    this.Dh = new Int32Array(this.Ud.buffer);
    this.bc = [];
    this.A = [];
    this.v = a;
    for (var b = 0; 256 > b; b++) this.bc[b] = void 0, this.A[b] = void 0;
    this.B = a.B;
    N(a.B, 3324, this, function (c) {
        jc(this, this.Sd[0], c)
    }, function (c) {
        kc(this, this.Sd[0], c)
    }, function (c) {
        var d = this.Sd[0],
            e = d >> 8 & 65535,
            h = d & 255;
        d =
            this.bc[e];
        e = this.A[e];
        if (d)
            if (16 <= h && 40 > h)
                if (e = e.Ib[h - 16 >> 2]) {
                    h >>= 2;
                    var f = d[h] & 1; - 1 === (c | 3 | e.size - 1) ? (c = ~(e.size - 1) | f, 0 === f && (d[h] = c)) : 0 === f && (d[h] = e.zh);
                    1 === f && (lc(this, e, d[h] & 65534, c & 65534), d[h] = c | 1)
                } else d[h >> 2] = 0;
            else 48 === h ? d[h >> 2] = e.Ch ? -1 === (c | 2047) ? -e.Ch | 0 : e.Oj | 0 : 0 : 4 !== h && (d[h >>> 2] = c)
    });
    N(a.B, 3325, this, function (c) {
        jc(this, this.Sd[0] + 1 | 0, c)
    });
    N(a.B, 3326, this, function (c) {
        jc(this, this.Sd[0] + 2 | 0, c)
    }, function (c) {
        kc(this, this.Sd[0] + 2 | 0, c)
    });
    N(a.B, 3327, this, function (c) {
        jc(this, this.Sd[0] + 3 | 0, c)
    });
    a.B.ae(3324, this, function () {
        return this.Td[0]
    }, function () {
        return this.Td[1]
    }, function () {
        return this.Td[2]
    }, function () {
        return this.Td[3]
    });
    a.B.ae(3320, this, function () {
        return this.Ud[0]
    }, function () {
        return this.Ud[1]
    }, function () {
        return this.Ud[2]
    }, function () {
        return this.Ud[3]
    });
    a.B.Uc(3320, this, function (c) {
        this.Vb[0] = c & 252
    }, function (c) {
        2 === (this.Vb[1] & 6) && 6 === (c & 6) ? mc(a) : this.Vb[1] = c
    }, function (c) {
        this.Vb[2] = c
    }, function (c) {
        this.Vb[3] = c;
        c = this.Vb[0] & 252;
        var d = this.bc[this.Vb[2] << 8 | this.Vb[1]];
        void 0 !==
            d ? (this.Dh[0] = -2147483648, this.Bh[0] = c < d.byteLength ? d[c >> 2] : 0) : (this.Bh[0] = -1, this.Dh[0] = 0)
    });
    Ub(this, {
        Pa: 0,
        K: [134, 128, 55, 18, 0, 0, 0, 0, 2, 0, 0, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 16, 0, 0, 0, 0, 0, 0],
        Ib: [],
        name: "82441FX PMC"
    });
    this.i = {
        Pa: 8,
        K: [134, 128, 0, 112, 7, 0, 0, 2, 0, 0, 1, 6, 0, 0, 128, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        Ib: [],
        name: "82371SB PIIX3 ISA"
    };
    this.j = Ub(this, this.i);
    this.h = new Uint8Array(this.j.buffer)
}
ic.prototype.ca = function () {
    for (var a = [], b = 0; 256 > b; b++) a[b] = this.bc[b];
    a[256] = this.Vb;
    a[257] = this.g;
    a[258] = this.Td;
    a[259] = this.Ud;
    return a
};
ic.prototype.H = function (a) {
    for (var b = 0; 256 > b; b++) {
        var c = this.A[b],
            d = a[b];
        if (c && d) {
            for (var e = 0; e < c.Ib.length; e++) {
                var h = d[4 + e];
                if (h & 1) {
                    var f = c.Ib[e];
                    lc(this, f, f.zh & 65534, h & 65534)
                }
            }
            this.bc[b].set(d)
        }
    }
    this.Vb.set(a[256]);
    this.g.set(a[257]);
    this.Td.set(a[258]);
    this.Ud.set(a[259])
};

function jc(a, b, c) {
    var d = b & 255;
    (new Uint8Array(a.bc[b >> 8 & 65535].buffer))[d] = c
}

function kc(a, b, c) {
    var d = b & 255;
    a = new Uint16Array(a.bc[b >> 8 & 65535].buffer);
    !a || 16 <= d && 44 > d || (a[d >>> 1] = c)
}

function Ub(a, b) {
    var c = b.Pa,
        d = new Int32Array(64);
    d.set(new Int32Array((new Uint8Array(b.K)).buffer));
    a.bc[c] = d;
    a.A[c] = b;
    c = d.slice(4, 10);
    for (var e = 0; e < b.Ib.length; e++) {
        var h = b.Ib[e];
        if (h) {
            var f = c[e],
                g = f & 1;
            h.zh = f;
            h.entries = [];
            if (0 !== g)
                for (f &= -2, g = 0; g < h.size; g++) h.entries[g] = a.B.ports[f + g]
        }
    }
    return d
}

function lc(a, b, c, d) {
    for (var e = b.size, h = a.B.ports, f = 0; f < e; f++) {
        4096 <= c + f && (h[c + f] = hb(a.B));
        var g = b.entries[f];
        4096 <= d + f && (h[d + f] = g)
    }
}
ic.prototype.Qa = function (a) {
    this.v.Wa(this.h[96 + ((this.bc[a][15] >> 8 & 255) - 1 + ((a >> 3) - 1 & 255) & 3)])
};

function nc(a, b) {
    P(a.v, a.h[96 + ((a.bc[b][15] >> 8 & 255) + (b >> 3 & 255) - 2 & 3)])
};

function oc(a, b) {
    this.B = a.B;
    this.v = a;
    this.Bb = a.A.Bb;
    this.h = 0;
    this.R = new Uint8Array(10);
    this.U = 0;
    this.i = null;
    this.g = new Uint8Array(10);
    this.P = this.D = this.aa = this.ea = this.G = this.u = this.l = this.j = 0;
    this.X = 1;
    this.L = this.C = 0;
    this.dd = null;
    b ? this.mf(b) : (this.zf(), this.v.A.wd.Y[16] = 64);
    M(this.B, 1008, this, this.Qk);
    M(this.B, 1010, this, this.Rk);
    M(this.B, 1012, this, this.Tk);
    M(this.B, 1013, this, this.Vk);
    M(this.B, 1015, this, this.Xk);
    N(this.B, 1010, this, this.Sk);
    N(this.B, 1012, this, this.Uk);
    N(this.B, 1013, this, this.Wk)
}
t = oc.prototype;
t.zf = function () {
    this.dd = null;
    this.Z = this.O = this.o = 0;
    this.L = 128
};
t.mf = function (a) {
    var b = {
        [163840]: {
            type: 1,
            Kb: 40,
            Jb: 8,
            Db: 1
        },
        [184320]: {
            type: 1,
            Kb: 40,
            Jb: 9,
            Db: 1
        },
        [204800]: {
            type: 1,
            Kb: 40,
            Jb: 10,
            Db: 1
        },
        [327680]: {
            type: 1,
            Kb: 40,
            Jb: 8,
            Db: 2
        },
        [368640]: {
            type: 1,
            Kb: 40,
            Jb: 9,
            Db: 2
        },
        [409600]: {
            type: 1,
            Kb: 40,
            Jb: 10,
            Db: 2
        },
        [737280]: {
            type: 3,
            Kb: 80,
            Jb: 9,
            Db: 2
        },
        [1228800]: {
            type: 2,
            Kb: 80,
            Jb: 15,
            Db: 2
        },
        [1474560]: {
            type: 4,
            Kb: 80,
            Jb: 18,
            Db: 2
        },
        [1763328]: {
            type: 5,
            Kb: 82,
            Jb: 21,
            Db: 2
        },
        [2949120]: {
            type: 5,
            Kb: 80,
            Jb: 36,
            Db: 2
        },
        512: {
            type: 1,
            Kb: 1,
            Jb: 1,
            Db: 1
        }
    };
    let c = a.byteLength,
        d = b[c];
    d || (c = 1474560 < a.byteLength ? 2949120 : 1474560,
        d = b[c], b = new Uint8Array(c), b.set(new Uint8Array(a.buffer)), a = new tb(b.buffer));
    this.o = d.Jb;
    this.O = d.Db;
    this.Z = d.Kb;
    this.dd = a;
    this.L = 128;
    this.v.A.wd.Y[16] = d.type << 4
};
t.ca = function () {
    var a = [];
    a[0] = this.h;
    a[1] = this.R;
    a[2] = this.U;
    a[4] = this.g;
    a[5] = this.j;
    a[6] = this.l;
    a[8] = this.u;
    a[9] = this.G;
    a[10] = this.ea;
    a[11] = this.aa;
    a[12] = this.D;
    a[13] = this.P;
    a[14] = this.X;
    a[15] = this.C;
    a[16] = this.o;
    a[17] = this.O;
    a[18] = this.Z;
    return a
};
t.H = function (a) {
    this.h = a[0];
    this.R = a[1];
    this.U = a[2];
    this.i = a[3];
    this.g = a[4];
    this.j = a[5];
    this.l = a[6];
    this.u = a[8];
    this.G = a[9];
    this.ea = a[10];
    this.aa = a[11];
    this.D = a[12];
    this.P = a[13];
    this.X = a[14];
    this.C = a[15];
    this.o = a[16];
    this.O = a[17];
    this.Z = a[18]
};
t.Qk = function () {
    return 0
};
t.Tk = function () {
    var a = 128;
    this.j < this.l && (a |= 80);
    0 === (this.C & 8) && (a |= 32);
    return a
};
t.Xk = function () {
    return this.L
};
t.Vk = function () {
    return this.j < this.l ? (P(this.v, 6), this.g[this.j++]) : 255
};
t.Uk = function (a) {
    a & 128 && (this.u = 192, this.v.Wa(6))
};
t.Wk = function (a) {
    if (0 < this.h) this.R[this.U++] = a, this.h--, 0 === this.h && this.i.call(this, this.R);
    else {
        switch (a) {
            case 3:
                this.i = this.wj;
                this.h = 2;
                break;
            case 19:
                this.i = this.aj;
                this.h = 3;
                break;
            case 4:
                this.i = this.Yi;
                this.h = 1;
                break;
            case 5:
            case 69:
            case 197:
                this.i = function (b) {
                    pc(this, !0, b)
                };
                this.h = 8;
                break;
            case 6:
            case 70:
            case 198:
            case 230:
                this.i = function (b) {
                    pc(this, !1, b)
                };
                this.h = 8;
                break;
            case 7:
                this.i = this.Xi;
                this.h = 1;
                break;
            case 8:
                this.j = 0;
                this.l = 2;
                this.g[0] = this.u;
                this.g[1] = this.D;
                break;
            case 74:
                this.i = this.hl;
                this.h = 1;
                break;
            case 15:
                this.h = 2;
                this.i = this.Sg;
                break;
            case 14:
            case 16:
                this.u = 128, this.g[0] = this.u, this.j = 0, this.l = 1, this.h = 0
        }
        this.U = 0
    }
};
t.Rk = function () {
    return this.C
};
t.Sk = function (a) {
    4 === (a & 4) && 0 === (this.C & 4) && (this.u = 192, this.v.Wa(6));
    this.C = a
};
t.Yi = function () {
    this.G = this.dd ? 0 : 5;
    this.j = 0;
    this.l = 1;
    this.g[0] = 0
};
t.Sg = function (a) {
    if (0 === (a[0] & 3)) {
        var b = a[1];
        a = a[0] >> 2 & 1;
        b !== this.D && (this.L = 0);
        this.G = this.dd ? 0 : 5;
        this.u = 32;
        this.D = b;
        this.P = a
    }
    this.Qa()
};
t.Xi = function (a) {
    this.Sg([a[0], 0])
};

function pc(a, b, c) {
    var d = c[2],
        e = c[1],
        h = c[3],
        f = 128 << c[4],
        g = c[5] - c[3] + 1,
        k = ((d + a.O * e) * a.o + h - 1) * f;
    a.dd ? (a.G = 0, b ? a.Bb.Re(a.dd, k, g * f, 2, a.done.bind(a, c, e, d, h)) : qc(a.Bb, a.dd, k, a.done.bind(a, c, e, d, h))) : a.G = 5
}
t.done = function (a, b, c, d, e) {
    e || (d++, d > this.o && (d = 1, c++, c >= this.O && (c = 0, b++)), b !== this.D && (this.L = 0), this.u = 32, this.D = b, this.P = c, this.X = d, this.j = 0, this.l = 7, this.g[0] = c << 2 | 32, this.g[1] = 0, this.g[2] = 0, this.g[3] = b, this.g[4] = c, this.g[5] = d, this.g[6] = a[4], this.Qa())
};
t.wj = function () { };
t.aj = function () { };
t.hl = function () {
    this.j = 0;
    this.l = 7;
    this.g[0] = 0;
    this.g[1] = 0;
    this.g[2] = 0;
    this.g[3] = 0;
    this.g[4] = 0;
    this.g[5] = 0;
    this.g[6] = 0;
    this.Qa()
};
t.Qa = function () {
    this.C & 8 && this.v.Wa(6)
};

function ec(a, b, c) {
    b.length && (a.Df(c), a.Df(c + b.length - 1), a.Fj(c, c + b.length), a.gb.set(b, c))
};

function rc(a) {
    this.v = a;
    this.o = new Uint8Array(8);
    this.u = new Uint8Array(8);
    this.g = new Uint16Array(8);
    this.j = new Uint16Array(8);
    this.h = new Uint16Array(8);
    this.l = new Uint16Array(8);
    this.Hc = new Uint8Array(8);
    this.C = new Uint8Array(8);
    this.Zf = [];
    this.i = 0;
    a = a.B;
    N(a, 0, this, this.pd.bind(this, 0));
    N(a, 2, this, this.pd.bind(this, 1));
    N(a, 4, this, this.pd.bind(this, 2));
    N(a, 6, this, this.pd.bind(this, 3));
    N(a, 1, this, this.rd.bind(this, 0));
    N(a, 3, this, this.rd.bind(this, 1));
    N(a, 5, this, this.rd.bind(this, 2));
    N(a, 7, this, this.rd.bind(this,
        3));
    M(a, 0, this, this.od.bind(this, 0));
    M(a, 2, this, this.od.bind(this, 1));
    M(a, 4, this, this.od.bind(this, 2));
    M(a, 6, this, this.od.bind(this, 3));
    M(a, 1, this, this.qd.bind(this, 0));
    M(a, 3, this, this.qd.bind(this, 1));
    M(a, 5, this, this.qd.bind(this, 2));
    M(a, 7, this, this.qd.bind(this, 3));
    N(a, 192, this, this.pd.bind(this, 4));
    N(a, 196, this, this.pd.bind(this, 5));
    N(a, 200, this, this.pd.bind(this, 6));
    N(a, 204, this, this.pd.bind(this, 7));
    N(a, 194, this, this.rd.bind(this, 4));
    N(a, 198, this, this.rd.bind(this, 5));
    N(a, 202, this, this.rd.bind(this,
        6));
    N(a, 206, this, this.rd.bind(this, 7));
    M(a, 192, this, this.od.bind(this, 4));
    M(a, 196, this, this.od.bind(this, 5));
    M(a, 200, this, this.od.bind(this, 6));
    M(a, 204, this, this.od.bind(this, 7));
    M(a, 194, this, this.qd.bind(this, 4));
    M(a, 198, this, this.qd.bind(this, 5));
    M(a, 202, this, this.qd.bind(this, 6));
    M(a, 206, this, this.qd.bind(this, 7));
    N(a, 135, this, this.td.bind(this, 0));
    N(a, 131, this, this.td.bind(this, 1));
    N(a, 129, this, this.td.bind(this, 2));
    N(a, 130, this, this.td.bind(this, 3));
    N(a, 143, this, this.td.bind(this, 4));
    N(a, 139,
        this, this.td.bind(this, 5));
    N(a, 137, this, this.td.bind(this, 6));
    N(a, 138, this, this.td.bind(this, 7));
    M(a, 135, this, this.sd.bind(this, 0));
    M(a, 131, this, this.sd.bind(this, 1));
    M(a, 129, this, this.sd.bind(this, 2));
    M(a, 130, this, this.sd.bind(this, 3));
    M(a, 143, this, this.sd.bind(this, 4));
    M(a, 139, this, this.sd.bind(this, 5));
    M(a, 137, this, this.sd.bind(this, 6));
    M(a, 138, this, this.sd.bind(this, 7));
    N(a, 1159, this, this.Xd.bind(this, 0));
    N(a, 1155, this, this.Xd.bind(this, 1));
    N(a, 1153, this, this.Xd.bind(this, 2));
    N(a, 1154, this, this.Xd.bind(this,
        3));
    N(a, 1163, this, this.Xd.bind(this, 5));
    N(a, 1161, this, this.Xd.bind(this, 6));
    N(a, 1162, this, this.Xd.bind(this, 7));
    M(a, 1159, this, this.Wd.bind(this, 0));
    M(a, 1155, this, this.Wd.bind(this, 1));
    M(a, 1153, this, this.Wd.bind(this, 2));
    M(a, 1154, this, this.Wd.bind(this, 3));
    M(a, 1163, this, this.Wd.bind(this, 5));
    M(a, 1161, this, this.Wd.bind(this, 6));
    M(a, 1162, this, this.Wd.bind(this, 7));
    N(a, 10, this, this.Uh.bind(this, 0));
    N(a, 212, this, this.Uh.bind(this, 4));
    N(a, 15, this, this.Th.bind(this, 0));
    N(a, 222, this, this.Th.bind(this, 4));
    M(a, 15, this, this.Sh.bind(this, 0));
    M(a, 222, this, this.Sh.bind(this, 4));
    N(a, 11, this, this.Rh.bind(this, 0));
    N(a, 214, this, this.Rh.bind(this, 4));
    N(a, 12, this, this.Qh);
    N(a, 216, this, this.Qh)
}
t = rc.prototype;
t.ca = function () {
    return [this.o, this.u, this.g, this.j, this.h, this.l, this.Hc, this.C, this.i]
};
t.H = function (a) {
    this.o = a[0];
    this.u = a[1];
    this.g = a[2];
    this.j = a[3];
    this.h = a[4];
    this.l = a[5];
    this.Hc = a[6];
    this.C = a[7];
    this.i = a[8]
};
t.rd = function (a, b) {
    this.h[a] = sc(this, this.h[a], b, !1);
    this.l[a] = sc(this, this.l[a], b, !0)
};
t.qd = function (a) {
    return tc(this, this.h[a])
};
t.pd = function (a, b) {
    this.g[a] = sc(this, this.g[a], b, !1);
    this.j[a] = sc(this, this.j[a], b, !0)
};
t.od = function (a) {
    return tc(this, this.g[a])
};
t.Xd = function (a, b) {
    this.u[a] = b
};
t.Wd = function (a) {
    return this.u[a]
};
t.td = function (a, b) {
    this.o[a] = b
};
t.sd = function (a) {
    return this.o[a]
};
t.Uh = function (a, b) {
    uc(this, (b & 3) + a, b & 4 ? 1 : 0)
};
t.Th = function (a, b) {
    for (var c = 0; 4 > c; c++) uc(this, a + c, b & 1 << c)
};
t.Sh = function (a) {
    var b = 0 | this.Hc[a + 0];
    b |= this.Hc[a + 1] << 1;
    b |= this.Hc[a + 2] << 2;
    return b |= this.Hc[a + 3] << 3
};
t.Rh = function (a, b) {
    this.C[(b & 3) + a] = b
};
t.Qh = function () {
    this.i = 0
};

function uc(a, b, c) {
    if (a.Hc[b] !== c && (a.Hc[b] = c, !c))
        for (c = 0; c < a.Zf.length; c++) a.Zf[c].Bf.call(a.Zf[c].Gg, b)
}

function qc(a, b, c, d) {
    var e = a.h[2] + 1,
        h = wc(a, 2);
    if (c + e > b.byteLength) d(!0);
    else {
        var f = a.v;
        a.g[2] += e;
        b.get(c, e, function (g) {
            ec(f, g, h);
            d(!1)
        })
    }
}
t.Re = function (a, b, c, d, e) {
    var h = this.h[d] + 1 & 65535,
        f = 5 <= d ? 2 : 1,
        g = h * f,
        k = wc(this, d),
        l = !1,
        m = !1,
        p = this.C[d] & 16;
    c < g ? (h = Math.floor(c / f), g = h * f, l = !0) : c > g && (m = !0);
    b + g > a.byteLength ? e(!0) : (this.g[d] += h, this.h[d] -= h, !l && p && (this.g[d] = this.j[d], this.h[d] = this.l[d]), a.set(b, this.v.gb.subarray(k, k + g), () => {
        m && p ? this.Re(a, b + g, c - g, d, e) : e(!1)
    }))
};

function wc(a, b) {
    var c = a.g[b];
    5 <= b && (c <<= 1);
    c = c & 65535 | a.o[b] << 16;
    return c |= a.u[b] << 24
}

function sc(a, b, c, d) {
    d || (a.i ^= 1);
    return a.i ? b & -256 | c : b & -65281 | c << 8
}

function tc(a, b) {
    a.i ^= 1;
    return a.i ? b & 255 : b >> 8 & 255
};

function xc(a, b) {
    this.v = a;
    this.s = b;
    this.i = new Float64Array(3);
    this.j = new Uint16Array(3);
    this.g = new Uint8Array(4);
    this.h = new Uint8Array(4);
    this.Hd = new Uint8Array(4);
    this.u = new Uint8Array(4);
    this.l = new Uint8Array(4);
    this.o = new Uint16Array(3);
    this.Ob = new Uint16Array(3);
    M(a.B, 97, this, function () {
        var c = rb(),
            d = 66.66666666666667 * c & 1;
        c = yc(this, 2, c);
        return d << 4 | c << 5
    });
    N(a.B, 97, this, function (c) {
        c & 1 ? this.s.send("pcspeaker-enable") : this.s.send("pcspeaker-disable")
    });
    M(a.B, 64, this, function () {
        return zc(this, 0)
    });
    M(a.B, 65, this, function () {
        return zc(this, 1)
    });
    M(a.B, 66, this, function () {
        return zc(this, 2)
    });
    N(a.B, 64, this, function (c) {
        Ac(this, 0, c)
    });
    N(a.B, 65, this, function (c) {
        Ac(this, 1, c)
    });
    N(a.B, 66, this, function (c) {
        Ac(this, 2, c);
        this.s.send("pcspeaker-update", [this.Hd[2], this.Ob[2]])
    });
    N(a.B, 67, this, this.C)
}
xc.prototype.ca = function () {
    var a = [];
    a[0] = this.g;
    a[1] = this.h;
    a[2] = this.Hd;
    a[3] = this.u;
    a[4] = this.l;
    a[5] = this.o;
    a[6] = this.Ob;
    a[7] = this.i;
    a[8] = this.j;
    return a
};
xc.prototype.H = function (a) {
    this.g = a[0];
    this.h = a[1];
    this.Hd = a[2];
    this.u = a[3];
    this.l = a[4];
    this.o = a[5];
    this.Ob = a[6];
    this.i = a[7];
    this.j = a[8]
};
xc.prototype.Zb = function (a, b) {
    var c = 100;
    b || (this.h[0] && yc(this, 0, a) ? (this.j[0] = Bc(this, 0, a), this.i[0] = a, P(this.v, 0), this.v.Wa(0), 0 === this.Hd[0] && (this.h[0] = 0)) : P(this.v, 0), this.h[0] && (c = (this.j[0] - Math.floor(1193.1816666 * (a - this.i[0]))) / 1193.1816666));
    return c
};

function Bc(a, b, c) {
    if (!a.h[b]) return 0;
    c = a.j[b] - Math.floor(1193.1816666 * (c - a.i[b]));
    a = a.Ob[b];
    c >= a ? c %= a : 0 > c && (c = c % a + a);
    return c
}

function yc(a, b, c) {
    c -= a.i[b];
    return 0 > c ? !0 : a.j[b] < Math.floor(1193.1816666 * c)
}

function zc(a, b) {
    var c = a.l[b];
    if (c) return a.l[b]--, 2 === c ? a.o[b] & 255 : a.o[b] >> 8;
    c = a.g[b];
    3 === a.Hd[b] && (a.g[b] ^= 1);
    a = Bc(a, b, rb());
    return c ? a & 255 : a >> 8
}

function Ac(a, b, c) {
    a.Ob[b] = a.g[b] ? a.Ob[b] & -256 | c : a.Ob[b] & 255 | c << 8;
    3 === a.u[b] && a.g[b] || (a.Ob[b] || (a.Ob[b] = 65535), a.j[b] = a.Ob[b], a.h[b] = !0, a.i[b] = rb());
    3 === a.u[b] && (a.g[b] ^= 1)
}
xc.prototype.C = function (a) {
    var b = a >> 1 & 7,
        c = a >> 6 & 3;
    a = a >> 4 & 3;
    3 !== c && (0 === a ? (this.l[c] = 2, b = Bc(this, c, rb()), this.o[c] = b ? b - 1 : 0) : (6 <= b && (b &= -5), this.g[c] = 1 === a ? 0 : 1, 0 === c && P(this.v, 0), this.Hd[c] = b, this.u[c] = a, 2 === c && this.s.send("pcspeaker-update", [this.Hd[2], this.Ob[2]])))
};
var Cc = Uint32Array.from([655360, 655360, 720896, 753664]),
    Dc = Uint32Array.from([131072, 65536, 32768, 32768]);

function Ec(a, b, c) {
    this.v = a;
    this.s = b;
    this.da = c;
    this.u = 0;
    this.uc = 14;
    this.ad = 15;
    this.O = 80;
    this.Bc = 25;
    this.sf = this.Sa = this.ze = this.Vc = 0;
    this.pe = [];
    this.kd = this.Fa = 0;
    this.Lb = new Uint8Array(25);
    this.j = this.C = this.jd = this.R = this.g = this.i = this.yc = this.zc = this.Va = 0;
    this.cd = !0;
    this.Na = !1;
    setTimeout(() => {
        b.send("screen-set-mode", this.Na)
    }, 0);
    this.yb = new Int32Array(256);
    this.h = 0;
    this.ef = 45253;
    this.xb = this.ib = 0;
    this.cb = !1;
    this.rc = 32;
    this.re = this.Ae = this.nb = 0;
    this.K = [52, 18, 17, 17, 3, 1, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 8, 14680064,
        57344, 224, 0, 0, 0, 0, 0, 0, 191, 254, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 244, 26, 0, 17, 0, 0, 190, 254, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
    ];
    this.Pa = 144;
    this.Ib = [{
        size: c
    }];
    this.Ch = 65536;
    this.Oj = 4272947200;
    this.name = "vga";
    this.sb = {
        rh: !1,
        ll: 0,
        ml: 0,
        Tg: 0
    };
    this.ea = this.vc = this.aa = this.G = 0;
    this.Z = 255;
    this.Jc = new Uint8Array(16);
    this.o = -1;
    this.tc = 32;
    this.Gd = this.Ac = this.ke = this.ab = 0;
    this.Gc = -1;
    this.Dc = 15;
    this.zb = this.Ic = 0;
    this.xc = -1;
    this.mb = this.Tc = this.gd = 0;
    this.ed = 255;
    this.P = this.X = this.U = this.ta = this.fd = this.Cc = 0;
    this.l = this.Od = 255;
    c = a.B;
    N(c, 960, this, this.wk);
    M(c, 960, this, this.Lh, this.vk);
    M(c, 961, this, this.Mh);
    N(c, 962, this, this.xk);
    c.Uc(964, this, this.zk, this.Bk);
    M(c, 964, this, this.yk);
    M(c, 965, this, this.Ak);
    c.Uc(974, this, this.Mk, this.Ok);
    M(c, 974, this, this.Lk);
    M(c, 975, this, this.Nk);
    M(c, 966, this, this.Ck);
    N(c, 966, this, this.Dk);
    N(c, 967, this, this.Fk);
    M(c, 967, this, this.Ek);
    N(c, 968, this, this.Hk);
    M(c, 968, this, this.Gk);
    N(c, 969, this, this.Jk);
    M(c, 969, this, this.Ik);
    M(c, 972, this, this.Kk);
    N(c, 980, this, this.Nh, h => {
        this.Nh(h & 255);
        this.qg(h >>
            8 & 255)
    });
    N(c, 981, this, this.qg, h => {
        this.qg(h & 255)
    });
    M(c, 980, this, this.Pk);
    M(c, 981, this, this.Oh, () => this.Oh());
    M(c, 970, this, function () {
        return 0
    });
    M(c, 986, this, this.Ph);
    M(c, 954, this, this.Ph);
    this.wc = -1;
    this.L = 0;
    N(c, 462, this, void 0, this.Qj);
    N(c, 463, this, void 0, this.Sj);
    M(c, 463, this, void 0, this.Rj);
    void 0 === this.da || 262144 > this.da ? this.da = 262144 : 268435456 < this.da ? this.da = 268435456 : this.da & 65535 && (this.da |= 65535, this.da++);
    const d = a.Oi(this.da) >>> 0;
    this.Fg = O(Uint8Array, a.Ga, d, this.da);
    this.Ne = this.da;
    this.Me =
        0;
    this.Pe = this.da;
    this.Oe = 0;
    this.jc = null;
    b.register("screen-fill-buffer", function () {
        if (this.Na) {
            if (0 === this.jc.data.byteLength) {
                var h = new Uint8ClampedArray(this.v.Ga.buffer, this.eg, 4 * this.Sa * this.sf);
                this.jc = new ImageData(h, this.Sa, this.sf);
                Fc(this)
            }
            if (this.cb) {
                h = 0;
                var f = this.xb;
                if (8 === this.rc)
                    for (var g = new Int32Array(this.v.Ga.buffer, this.eg, this.Vc * this.ze), k = new Uint8Array(this.v.Ga.buffer, this.Fg.byteOffset, this.da), l = 0; l < g.length; l++) {
                        var m = this.yb[k[l]];
                        g[l] = m & 65280 | m << 16 | m >> 16 | 4278190080
                    } else this.v.Ri(this.rc,
                        this.Ae), l = 15 === this.rc ? 2 : this.rc / 8, h = ((this.v.Qi[0] / l | 0) - this.Ae) / this.ib | 0, f = (((this.v.Pi[0] / l | 0) - this.Ae) / this.ib | 0) + 1;
                h < f && (h = Math.max(h, 0), f = Math.min(f, this.xb), this.s.send("screen-fill-buffer-end", [{
                    jc: this.jc,
                    zg: 0,
                    Ag: h,
                    vf: 0,
                    wf: h,
                    cg: this.ib,
                    bg: f - h
                }]))
            } else {
                h = Math.min(this.Oe | 15, 524287);
                l = Gc(this);
                m = ~this.Va & 3;
                f = this.Tc & 96;
                g = this.ab & 64;
                for (k = this.Pe & -16; k <= h;) {
                    var p = k >>> l;
                    if (m) {
                        var r = k / this.Sa | 0,
                            n = k - this.Sa * r;
                        switch (m) {
                            case 1:
                                p = (r & 1) << 13;
                                r >>>= 1;
                                break;
                            case 2:
                                p = (r & 1) << 14;
                                r >>>= 1;
                                break;
                            case 3:
                                p =
                                    (r & 3) << 13, r >>>= 2
                        }
                        p |= (r * this.Sa + n >>> l) + this.Fa
                    }
                    r = this.Nf[p];
                    n = this.Of[p];
                    var u = this.Pf[p],
                        x = this.Qf[p];
                    p = new Uint8Array(8);
                    switch (f) {
                        case 0:
                            r <<= 0;
                            n <<= 1;
                            u <<= 2;
                            x <<= 3;
                            for (var q = 7; 0 <= q; q--) p[7 - q] = r >> q & 1 | n >> q & 2 | u >> q & 4 | x >> q & 8;
                            break;
                        case 32:
                            p[0] = r >> 6 & 3 | u >> 4 & 12;
                            p[1] = r >> 4 & 3 | u >> 2 & 12;
                            p[2] = r >> 2 & 3 | u >> 0 & 12;
                            p[3] = r >> 0 & 3 | u << 2 & 12;
                            p[4] = n >> 6 & 3 | x >> 4 & 12;
                            p[5] = n >> 4 & 3 | x >> 2 & 12;
                            p[6] = n >> 2 & 3 | x >> 0 & 12;
                            p[7] = n >> 0 & 3 | x << 2 & 12;
                            break;
                        case 64:
                        case 96:
                            p[0] = r >> 4 & 15, p[1] = r >> 0 & 15, p[2] = n >> 4 & 15, p[3] = n >> 0 & 15, p[4] = u >> 4 & 15, p[5] = u >> 0 & 15, p[6] = x >>
                                4 & 15, p[7] = x >> 0 & 15
                    }
                    if (g)
                        for (r = q = 0; 4 > q; q++, k++, r += 2) this.ve[k] = p[r] << 4 | p[r + 1];
                    else
                        for (q = 0; 8 > q; q++, k++) this.ve[k] = p[q]
                }
                g = this.Ne;
                h = Math.min(this.Me, 524287);
                f = new Int32Array(this.v.Ga.buffer, this.eg, this.Sa * this.sf);
                l = 255;
                m = 0;
                this.ab & 128 && (l &= 207, m |= this.Gd << 4 & 48);
                if (this.ab & 64)
                    for (; g <= h; g++) k = this.ve[g] & l | m, k = this.yb[k], f[g] = k & 65280 | k << 16 | k >> 16 | 4278190080;
                else
                    for (l &= 63, m |= this.Gd << 4 & 192; g <= h; g++) k = this.Jc[this.ve[g] & this.ke] & l | m, k = this.yb[k], f[g] = k & 65280 | k << 16 | k >> 16 | 4278190080;
                this.s.send("screen-fill-buffer-end",
                    this.pe)
            }
            this.Ne = this.da;
            this.Me = 0;
            this.Pe = this.da;
            this.Oe = 0
        }
        Hc(this)
    }, this);
    this.D = new Uint8Array(262144);
    this.Nf = new Uint8Array(this.D.buffer, 0, 65536);
    this.Of = new Uint8Array(this.D.buffer, 65536, 65536);
    this.Pf = new Uint8Array(this.D.buffer, 131072, 65536);
    this.Qf = new Uint8Array(this.D.buffer, 196608, 65536);
    this.ve = new Uint8Array(524288);
    var e = this;
    ib(c, 655360, 131072, function (h) {
        return Ic(e, h)
    }, function (h, f) {
        if (e.cb && e.Na && e.cd) e.v.$f((h - 655360 | e.nb) + 3758096384 | 0, f);
        else {
            var g = e.ta >> 2 & 3;
            h -= Cc[g];
            if (!(0 >
                h || h >= Dc[g]))
                if (e.Na) {
                    var k = f;
                    f = Jc(e.ed);
                    var l = Kc(e.Cc);
                    g = Kc(e.fd);
                    switch (e.Tc & 3) {
                        case 0:
                            k = (k | k << 8) >>> (e.mb & 7) & 255;
                            var m = Jc(k);
                            k = Kc(e.Cc);
                            m = Lc(e, (m | g & k) & (~g | k), e.h);
                            m = f & m | ~f & e.h;
                            break;
                        case 1:
                            m = e.h;
                            break;
                        case 2:
                            m = Kc(k);
                            m = Lc(e, m, e.h);
                            m = f & m | ~f & e.h;
                            break;
                        case 3:
                            k = (k | k << 8) >>> (e.mb & 7) & 255, f &= Jc(k), m = f & l | ~f & e.h
                    }
                    f = 15;
                    switch (e.Ic & 12) {
                        case 0:
                            f = 5 << (h & 1);
                            h &= -2;
                            break;
                        case 8:
                        case 12:
                            f = 1 << (h & 3), h &= -4
                    }
                    f &= e.Dc;
                    f & 1 && (e.Nf[h] = m >> 0 & 255);
                    f & 2 && (e.Of[h] = m >> 8 & 255);
                    f & 4 && (e.Pf[h] = m >> 16 & 255);
                    f & 8 && (e.Qf[h] = m >> 24 & 255);
                    f = Mc(e,
                        h);
                    m = f + 7;
                    f < e.Pe && (e.Pe = f);
                    m > e.Oe && (e.Oe = m);
                    f < e.Ne && (e.Ne = f);
                    m > e.Me && (e.Me = m)
                } else e.Dc & 3 && (e.D[h] = f, g = Math.max(e.O, 2 * e.C), h >> 1 >= e.Fa ? (k = (h >> 1) - e.Fa, m = k / g | 0, g = k % g) : (k = h >> 1, m = (k / g | 0) + Nc(e, e.j), g = k % g), g >= e.O || m >= e.Bc || (h & 1 ? (k = f, f = e.D[h & -2]) : k = e.D[h | 1], h = e.ab & 8, e.s.send("screen-put-char", [m, g, f, h && k & 128, e.yb[e.Z & e.Jc[k >> 4 & (h ? 7 : 15)]], e.yb[e.Z & e.Jc[k & 15]]])))
        }
    });
    Ub(a.A.Za, this)
}
t = Ec.prototype;
t.ca = function () {
    var a = [];
    a[0] = this.da;
    a[1] = this.u;
    a[2] = this.uc;
    a[3] = this.ad;
    a[4] = this.O;
    a[5] = this.Bc;
    a[6] = this.D;
    a[7] = this.ea;
    a[8] = this.Fa;
    a[9] = this.Na;
    a[10] = this.yb;
    a[11] = this.h;
    a[12] = this.U;
    a[13] = this.X;
    a[14] = this.ta;
    a[15] = this.ib;
    a[16] = this.xb;
    a[17] = this.Va;
    a[18] = this.cb;
    a[19] = this.rc;
    a[20] = this.nb;
    a[21] = this.Ae;
    a[22] = this.G;
    a[23] = this.aa;
    a[24] = this.vc;
    a[25] = this.Jc;
    a[26] = this.Gc;
    a[27] = this.Dc;
    a[28] = this.Ic;
    a[29] = this.xc;
    a[30] = this.gd;
    a[31] = this.Tc;
    a[32] = this.mb;
    a[33] = this.ed;
    a[34] = this.P;
    a[35] =
        this.Od;
    a[36] = this.l;
    a[37] = this.wc;
    a[38] = this.L;
    a[39] = this.Fg;
    a[40] = this.cd;
    a[41] = this.o;
    a[42] = this.C;
    a[43] = this.Cc;
    a[44] = this.fd;
    a[45] = this.kd;
    a[46] = this.Lb;
    a[47] = this.zc;
    a[48] = this.yc;
    a[49] = this.i;
    a[50] = this.g;
    a[51] = this.R;
    a[52] = this.jd;
    a[53] = this.C;
    a[54] = this.tc;
    a[55] = this.ab;
    a[56] = this.ke;
    a[57] = this.Ac;
    a[58] = this.Gd;
    a[59] = this.zb;
    a[60] = this.j;
    a[61] = this.ve;
    a[62] = this.Z;
    return a
};
t.H = function (a) {
    this.da = a[0];
    this.u = a[1];
    this.uc = a[2];
    this.ad = a[3];
    this.O = a[4];
    this.Bc = a[5];
    a[6] && this.D.set(a[6]);
    this.ea = a[7];
    this.Fa = a[8];
    this.Na = a[9];
    this.yb = a[10];
    this.h = a[11];
    this.U = a[12];
    this.X = a[13];
    this.ta = a[14];
    this.ib = a[15];
    this.xb = a[16];
    this.Va = a[17];
    this.cb = a[18];
    this.rc = a[19];
    this.nb = a[20];
    this.Ae = a[21];
    this.G = a[22];
    this.aa = a[23];
    this.vc = a[24];
    this.Jc = a[25];
    this.Gc = a[26];
    this.Dc = a[27];
    this.Ic = a[28];
    this.xc = a[29];
    this.gd = a[30];
    this.Tc = a[31];
    this.mb = a[32];
    this.ed = a[33];
    this.P = a[34];
    this.Od =
        a[35];
    this.l = a[36];
    this.wc = a[37];
    this.L = a[38];
    this.Fg.set(a[39]);
    this.cd = a[40];
    this.o = a[41];
    this.C = a[42];
    this.Cc = a[43];
    this.fd = a[44];
    this.kd = a[45];
    this.Lb.set(a[46]);
    this.zc = a[47];
    this.yc = a[48];
    this.i = a[49];
    this.g = a[50];
    this.R = a[51];
    this.jd = a[52];
    this.C = a[53];
    this.tc = a[54];
    this.ab = a[55];
    this.ke = a[56];
    this.Ac = a[57];
    this.Gd = a[58];
    this.zb = a[59];
    this.j = a[60];
    a[61] && this.ve.set(a[61]);
    this.Z = void 0 === a[62] ? 255 : a[62];
    this.s.send("screen-set-mode", this.Na);
    this.Na ? (this.ze = this.Vc = 0, this.cb ? (this.be(this.ib,
        this.xb, this.rc, this.ib, this.xb), Fc(this)) : (Oc(this), Fc(this), Pc(this))) : (this.ce(this.O, this.Bc), this.Ad(), this.fe());
    Qc(this)
};

function Ic(a, b) {
    if (a.cb && a.cd) return a.v.$d((b - 655360 | a.nb) + 3758096384 | 0);
    var c = a.ta >> 2 & 3;
    b -= Cc[c];
    if (0 > b || b >= Dc[c]) return 0;
    a.h = a.Nf[b];
    a.h |= a.Of[b] << 8;
    a.h |= a.Pf[b] << 16;
    a.h |= a.Qf[b] << 24;
    if (a.Tc & 8) return c = 255, a.X & 1 && (c &= a.Nf[b] ^ ~(a.U & 1 ? 255 : 0)), a.X & 2 && (c &= a.Of[b] ^ ~(a.U & 2 ? 255 : 0)), a.X & 4 && (c &= a.Pf[b] ^ ~(a.U & 4 ? 255 : 0)), a.X & 8 && (c &= a.Qf[b] ^ ~(a.U & 8 ? 255 : 0)), c;
    c = a.gd;
    a.Na ? a.Ic & 8 ? (c = b & 3, b &= -4) : a.Tc & 16 && (c = b & 1, b &= -2) : c = 0;
    return a.D[c << 16 | b]
}

function Jc(a) {
    return a | a << 8 | a << 16 | a << 24
}

function Kc(a) {
    return (a & 1 ? 255 : 0) | (a & 2 ? 255 : 0) << 8 | (a & 4 ? 255 : 0) << 16 | (a & 8 ? 255 : 0) << 24
}

function Lc(a, b, c) {
    switch (a.mb & 24) {
        case 8:
            return b & c;
        case 16:
            return b | c;
        case 24:
            return b ^ c
    }
    return b
}

function Rc(a) {
    var b = a.Fa << 1;
    const c = Nc(a, a.j),
        d = Math.max(0, 2 * (2 * a.C - a.O)),
        e = a.ab & 8,
        h = e ? 7 : 15;
    for (var f = 0; f < a.Bc; f++) {
        f === c && (b = 0);
        for (var g = 0; g < a.O; g++) {
            var k = a.D[b];
            var l = a.D[b | 1];
            var m = e && l & 128;
            a.s.send("screen-put-char", [f, g, k, m, a.yb[a.Z & a.Jc[l >> 4 & h]], a.yb[a.Z & a.Jc[l & 15]]]);
            b += 2
        }
        b += d
    }
}
t.fe = function () {
    var a = Math.max(this.O, 2 * this.C);
    let b;
    this.u >= this.Fa ? (b = (this.u - this.Fa) / a | 0, a = (this.u - this.Fa) % a) : (b = (this.u / a | 0) + Nc(this, this.j), a = this.u % a);
    this.s.send("screen-update-cursor", [b, a])
};

function Qc(a) {
    a.Na ? a.cb ? a.v.ef() : (a.Ne = 0, a.Me = 524288) : Rc(a)
}

function Pc(a) {
    a.Na && !a.cb && (a.Pe = 0, a.Oe = 524288, Qc(a))
}
t.wa = function () { };

function Gc(a) {
    var b = 128 + (~a.R & a.Va & 64);
    b -= a.R & 64;
    b -= a.ab & 64;
    return b >>> 6
}

function Mc(a, b) {
    var c = Gc(a);
    if (~a.Va & 3) {
        var d = b - a.Fa;
        d &= a.Va << 13 | -24577;
        d <<= c;
        var e = d / a.Sa | 0;
        d %= a.Sa;
        switch (a.Va & 3) {
            case 2:
                e = e << 1 | b >> 13 & 1;
                break;
            case 1:
                e = e << 1 | b >> 14 & 1;
                break;
            case 0:
                e = e << 2 | b >> 13 & 3
        }
        return e * a.Sa + d + (a.Fa << c)
    }
    return b << c
}

function Nc(a, b) {
    a.P & 128 && (b >>>= 1);
    b = Math.ceil(b / (1 + (a.P & 31)));
    a.Va & 1 || (b <<= 1);
    a.Va & 2 || (b <<= 1);
    return b
}
t.ce = function (a, b) {
    this.O = a;
    this.Bc = b;
    this.s.send("screen-set-size-text", [a, b])
};
t.be = function (a, b, c, d, e) {
    d = Math.max(d, 1);
    e = Math.max(e, 1);
    if (!this.sb.rh || this.sb.Tg !== c || this.Vc !== a || this.ze !== b || this.Sa !== d || this.sf !== e) {
        this.Vc = a;
        this.ze = b;
        this.Sa = d;
        this.sf = e;
        this.sb.Tg = c;
        this.sb.rh = !0;
        this.sb.ll = a;
        this.sb.ml = b;
        if ("undefined" !== typeof ImageData) {
            const h = d * e,
                f = this.v.Ni(h) >>> 0;
            this.eg = f;
            this.jc = new ImageData(new Uint8ClampedArray(this.v.Ga.buffer, f, 4 * h), d, e);
            this.v.ef()
        }
        this.s.send("screen-set-size-graphical", [a, b, d, e, c])
    }
};

function Oc(a) {
    if (!a.cb) {
        var b = Math.min(1 + a.zc, a.yc),
            c = Math.min(1 + a.i, a.g);
        if (b && c)
            if (a.Na) {
                b <<= 3;
                var d = a.C << 4;
                a.ab & 64 && (b >>>= 1, d >>>= 1);
                c = Nc(a, c);
                var e = Dc[0];
                var h = a.C << 2;
                a.R & 64 ? h <<= 1 : a.Va & 64 && (h >>>= 1);
                a.be(b, c, 8, d, h ? Math.ceil(e / h) : c);
                Hc(a);
                Fc(a)
            } else a.P & 128 && (c >>>= 1), d = c / (1 + (a.P & 31)) | 0, b && d && a.ce(b, d)
    }
}

function Fc(a) {
    a.Na || Rc(a);
    if (a.cb) a.pe = [];
    else if (a.Sa && a.Vc)
        if (!a.tc || a.zb & 32) a.pe = [], a.s.send("screen-clear");
        else {
            var b = a.kd,
                c = a.Ac;
            a.ab & 64 && (c >>>= 1);
            var d = a.jd >> 5 & 3,
                e = Mc(a, b + d);
            b = e / a.Sa | 0;
            var h = e % a.Sa + c;
            e = Nc(a, 1 + a.j);
            e = Math.min(e, a.ze);
            var f = a.ze - e;
            a.pe = [];
            h = -h;
            for (var g = 0; h < a.Vc; h += a.Sa, g++) a.pe.push({
                jc: a.jc,
                zg: h,
                Ag: 0,
                vf: 0,
                wf: b + g,
                cg: a.Sa,
                bg: e
            });
            b = 0;
            a.ab & 32 || (b = Mc(a, d) + c);
            h = -b;
            for (g = 0; h < a.Vc; h += a.Sa, g++) a.pe.push({
                jc: a.jc,
                zg: h,
                Ag: e,
                vf: 0,
                wf: g,
                cg: a.Sa,
                bg: f
            })
        }
}

function Hc(a) {
    a.l |= 8;
    a.kd !== a.Fa && (a.kd = a.Fa, Fc(a))
}
t.Ad = function () {
    var a = this.P & 31;
    const b = Math.min(a, this.uc & 31);
    a = Math.min(a, this.ad & 31);
    this.s.send("screen-update-cursor-scanline", [b, a, !(this.uc & 32) && b < a])
};
t.wk = function (a) {
    if (-1 === this.o) this.o = a & 31, this.tc !== (a & 32) && (this.tc = a & 32, Fc(this));
    else {
        if (16 > this.o) this.Jc[this.o] = a, this.ab & 64 || Qc(this);
        else switch (this.o) {
            case 16:
                if (this.ab !== a) {
                    var b = this.ab;
                    this.ab = a;
                    var c = 0 < (a & 1);
                    this.cb || this.Na === c || (this.Na = c, this.s.send("screen-set-mode", this.Na));
                    (b ^ a) & 64 && Pc(this);
                    Oc(this);
                    Qc(this)
                }
                break;
            case 18:
                this.ke !== a && (this.ke = a, Qc(this));
                break;
            case 19:
                this.Ac !== a && (this.Ac = a & 15, Fc(this));
                break;
            case 20:
                this.Gd !== a && (this.Gd = a, Qc(this))
        }
        this.o = -1
    }
};
t.Lh = function () {
    return (this.o | this.tc) & 255
};
t.vk = function () {
    return this.Lh() | this.Mh() << 8 & 65280
};
t.Mh = function () {
    if (16 > this.o) return this.Jc[this.o] & 255;
    switch (this.o) {
        case 16:
            return this.ab;
        case 18:
            return this.ke;
        case 19:
            return this.Ac;
        case 20:
            return this.Gd
    }
    return 255
};
t.xk = function (a) {
    this.Od = a
};
t.zk = function (a) {
    this.Gc = a
};
t.yk = function () {
    return this.Gc
};
t.Bk = function (a) {
    switch (this.Gc) {
        case 1:
            var b = this.zb;
            this.zb = a;
            (b ^ a) & 32 && Fc(this);
            break;
        case 2:
            this.Dc = a;
            break;
        case 4:
            this.Ic = a
    }
};
t.Ak = function () {
    switch (this.Gc) {
        case 1:
            return this.zb;
        case 2:
            return this.Dc;
        case 4:
            return this.Ic;
        case 6:
            return 18
    }
    return 0
};
t.Dk = function (a) {
    this.Z = a
};
t.Ck = function () {
    return this.Z
};
t.Fk = function (a) {
    this.vc = 3 * a;
    this.ea &= 0
};
t.Ek = function () {
    return this.ea
};
t.Hk = function (a) {
    this.aa = 3 * a;
    this.ea |= 3
};
t.Gk = function () {
    return this.aa / 3 & 255
};
t.Jk = function (a) {
    var b = this.aa / 3 | 0,
        c = this.aa % 3,
        d = this.yb[b];
    if (0 === (this.L & 32)) {
        a &= 63;
        const e = a & 1;
        a = a << 2 | e << 1 | e
    }
    d = 0 === c ? d & -16711681 | a << 16 : 1 === c ? d & -65281 | a << 8 : d & -256 | a;
    this.yb[b] !== d && (this.yb[b] = d, Qc(this));
    this.aa++
};
t.Ik = function () {
    var a = this.yb[this.vc / 3 | 0] >> 8 * (2 - this.vc % 3) & 255;
    this.vc++;
    return this.L & 32 ? a : a >> 2
};
t.Kk = function () {
    return this.Od
};
t.Mk = function (a) {
    this.xc = a
};
t.Lk = function () {
    return this.xc
};
t.Ok = function (a) {
    switch (this.xc) {
        case 0:
            this.Cc = a;
            break;
        case 1:
            this.fd = a;
            break;
        case 2:
            this.U = a;
            break;
        case 3:
            this.mb = a;
            break;
        case 4:
            this.gd = a;
            break;
        case 5:
            var b = this.Tc;
            this.Tc = a;
            (b ^ a) & 96 && Pc(this);
            break;
        case 6:
            this.ta !== a && (this.ta = a, Oc(this));
            break;
        case 7:
            this.X = a;
            break;
        case 8:
            this.ed = a
    }
};
t.Nk = function () {
    switch (this.xc) {
        case 0:
            return this.Cc;
        case 1:
            return this.fd;
        case 2:
            return this.U;
        case 3:
            return this.mb;
        case 4:
            return this.gd;
        case 5:
            return this.Tc;
        case 6:
            return this.ta;
        case 7:
            return this.X;
        case 8:
            return this.ed
    }
    return 0
};
t.Nh = function (a) {
    this.G = a
};
t.Pk = function () {
    return this.G
};
t.qg = function (a) {
    switch (this.G) {
        case 1:
            this.zc !== a && (this.zc = a, Oc(this));
            break;
        case 2:
            this.yc !== a && (this.yc = a, Oc(this));
            break;
        case 7:
            var b = this.i;
            this.i &= 255;
            this.i = this.i | a << 3 & 512 | a << 7 & 256;
            b !== this.i && Oc(this);
            this.j = this.j & 767 | a << 4 & 256;
            b = this.g;
            this.g = this.g & 767 | a << 5 & 256;
            b !== this.g && Oc(this);
            Fc(this);
            break;
        case 8:
            this.jd = a;
            Fc(this);
            break;
        case 9:
            this.P = a;
            this.j = this.j & 511 | a << 3 & 512;
            b = this.g;
            this.g = this.g & 511 | a << 4 & 512;
            b !== this.g && Oc(this);
            this.Ad();
            Fc(this);
            break;
        case 10:
            this.uc = a;
            this.Ad();
            break;
        case 11:
            this.ad = a;
            this.Ad();
            break;
        case 12:
            (this.Fa >> 8 & 255) !== a && (this.Fa = this.Fa & 255 | a << 8, Fc(this), ~this.Va & 3 && Pc(this));
            break;
        case 13:
            (this.Fa & 255) !== a && (this.Fa = this.Fa & 65280 | a, Fc(this), ~this.Va & 3 && Pc(this));
            break;
        case 14:
            this.u = this.u & 255 | a << 8;
            this.fe();
            break;
        case 15:
            this.u = this.u & 65280 | a;
            this.fe();
            break;
        case 18:
            (this.i & 255) !== a && (this.i = this.i & 768 | a, Oc(this));
            break;
        case 19:
            this.C !== a && (this.C = a, Oc(this), ~this.Va & 3 && Pc(this));
            break;
        case 20:
            this.R !== a && (b = this.R, this.R = a, Oc(this), (b ^ a) & 64 && Pc(this));
            break;
        case 21:
            (this.g & 255) !== a && (this.g = this.g & 768 | a, Oc(this));
            break;
        case 23:
            this.Va !== a && (b = this.Va, this.Va = a, Oc(this), (b ^ a) & 67 && Pc(this));
            break;
        case 24:
            this.j = this.j & 768 | a;
            Fc(this);
            break;
        default:
            this.G < this.Lb.length && (this.Lb[this.G] = a)
    }
};
t.Oh = function () {
    switch (this.G) {
        case 1:
            return this.zc;
        case 2:
            return this.yc;
        case 7:
            return this.i >> 7 & 2 | this.g >> 5 & 8 | this.j >> 4 & 16 | this.i >> 3 & 64;
        case 8:
            return this.jd;
        case 9:
            return this.P;
        case 10:
            return this.uc;
        case 11:
            return this.ad;
        case 12:
            return this.Fa & 255;
        case 13:
            return this.Fa >> 8;
        case 14:
            return this.u >> 8;
        case 15:
            return this.u & 255;
        case 18:
            return this.i & 255;
        case 19:
            return this.C;
        case 20:
            return this.R;
        case 21:
            return this.g & 255;
        case 23:
            return this.Va;
        case 24:
            return this.j & 255
    }
    return this.G < this.Lb.length ?
        this.Lb[this.G] : 0
};
t.Ph = function () {
    var a = this.l;
    this.Na ? (this.l ^= 1, this.l &= 1) : (this.l & 1 && (this.l ^= 8), this.l ^= 1);
    this.o = -1;
    return a
};
t.Qj = function (a) {
    this.wc = a
};
t.Sj = function (a) {
    switch (this.wc) {
        case 0:
            45248 <= a && 45253 >= a && (this.ef = a);
            break;
        case 1:
            this.ib = a;
            2560 < this.ib && (this.ib = 2560);
            break;
        case 2:
            this.xb = a;
            1600 < this.xb && (this.xb = 1600);
            break;
        case 3:
            this.rc = a;
            break;
        case 4:
            this.cb = 1 === (a & 1);
            this.L = a;
            break;
        case 5:
            this.nb = a << 16;
            break;
        case 9:
            const b = a * this.ib;
            this.re !== a && (this.re = a, this.Ae = b, Qc(this))
    }!this.cb || this.ib && this.xb || (this.cb = !1);
    this.cb && 4 === this.wc && (this.be(this.ib, this.xb, this.rc, this.ib, this.xb), this.s.send("screen-set-mode", !0), this.cd = this.Na = !0);
    this.cb || (this.nb = 0);
    Fc(this)
};
t.Rj = function () {
    return Sc(this, this.wc)
};

function Sc(a, b) {
    switch (b) {
        case 0:
            return a.ef;
        case 1:
            return a.L & 2 ? 2560 : a.ib;
        case 2:
            return a.L & 2 ? 1600 : a.xb;
        case 3:
            return a.L & 2 ? 32 : a.rc;
        case 4:
            return a.L;
        case 5:
            return a.nb >>> 16;
        case 6:
            return a.Vc ? a.Vc : 1;
        case 8:
            return 0;
        case 9:
            return a.re;
        case 10:
            return a.da / 65536 | 0
    }
    return 255
};

function Tc(a, b) {
    this.v = a;
    this.s = b;
    this.ge = this.bd = !1;
    this.Ze = !0;
    this.Rd = this.nc = this.mc = 0;
    this.ta = !0;
    this.R = this.P = this.G = this.O = this.U = this.L = this.Se = !1;
    this.pa = new Bb(1024);
    this.l = 0;
    this.xd = 100;
    this.j = this.i = 0;
    this.C = !1;
    this.sc = 0;
    this.we = 4;
    this.u = !1;
    this.g = new Bb(1024);
    this.D = this.o = !1;
    this.s.register("keyboard-code", function (c) {
        this.Se && (this.pa.push(c), this.Qa())
    }, this);
    this.s.register("mouse-click", function (c) {
        this.Ze && this.ge && (this.Rd = c[0] | c[2] << 1 | c[1] << 2, this.bd && Uc(this, 0, 0))
    }, this);
    this.s.register("mouse-delta",
        function (c) {
            var d = c[1];
            if (this.Ze && this.ge) {
                var e = this.we * this.xd / 80;
                this.mc += c[0] * e;
                this.nc += d * e;
                this.bd && (c = this.mc | 0, d = this.nc | 0, c || d) && (this.mc -= c, this.nc -= d, Uc(this, c, d))
            }
        }, this);
    this.s.register("mouse-wheel", function (c) {
        this.sc -= c[0];
        this.sc -= 2 * c[1];
        this.sc = Math.min(7, Math.max(-8, this.sc));
        Uc(this, 0, 0)
    }, this);
    this.h = 5;
    this.ea = 0;
    this.Z = this.X = this.aa = !1;
    M(a.B, 96, this, this.bl);
    M(a.B, 100, this, this.dl);
    N(a.B, 96, this, this.cl);
    N(a.B, 100, this, this.el)
}
t = Tc.prototype;
t.ca = function () {
    var a = [];
    a[0] = this.bd;
    a[1] = this.ge;
    a[2] = this.Ze;
    a[3] = this.mc;
    a[4] = this.nc;
    a[5] = this.Rd;
    a[6] = this.ta;
    a[7] = this.Se;
    a[8] = this.L;
    a[9] = this.U;
    a[10] = this.O;
    a[11] = this.G;
    a[12] = this.P;
    a[13] = this.R;
    a[15] = this.l;
    a[16] = this.xd;
    a[17] = this.we;
    a[18] = this.u;
    a[20] = this.h;
    a[21] = this.aa;
    a[22] = this.X;
    a[23] = this.ea;
    a[24] = this.Z;
    a[25] = this.j;
    a[26] = this.i;
    a[27] = this.C;
    return a
};
t.H = function (a) {
    this.bd = a[0];
    this.ge = a[1];
    this.Ze = a[2];
    this.mc = a[3];
    this.nc = a[4];
    this.Rd = a[5];
    this.ta = a[6];
    this.Se = a[7];
    this.L = a[8];
    this.U = a[9];
    this.O = a[10];
    this.G = a[11];
    this.P = a[12];
    this.R = a[13];
    this.l = a[15];
    this.xd = a[16];
    this.we = a[17];
    this.u = a[18];
    this.h = a[20];
    this.aa = a[21];
    this.X = a[22];
    this.ea = a[23];
    this.Z = a[24];
    this.j = a[25] || 0;
    this.i = a[26] || 0;
    this.C = a[27] || !1;
    this.D = this.o = !1;
    this.pa.clear();
    this.g.clear();
    this.s.send("mouse-enable", this.ge)
};
t.Qa = function () {
    this.o || (this.pa.length ? Vc(this) : this.g.length && Wc(this))
};

function Wc(a) {
    a.o = !0;
    a.D = !0;
    a.h & 2 && (P(a.v, 12), a.v.Wa(12))
}

function Vc(a) {
    a.o = !0;
    a.D = !1;
    a.h & 1 && (P(a.v, 1), a.v.Wa(1))
}

function Uc(a, b, c) {
    a.g.push((0 > c) << 5 | (0 > b) << 4 | 8 | a.Rd);
    a.g.push(b);
    a.g.push(c);
    4 === a.j ? (a.g.push(0 | a.sc & 15), a.sc = 0) : 3 === a.j && (a.g.push(a.sc & 255), a.sc = 0);
    a.Qa()
}
t.bl = function () {
    this.o = !1;
    if (!this.pa.length && !this.g.length) return this.l;
    this.D ? (P(this.v, 12), this.l = this.g.shift()) : (P(this.v, 1), this.l = this.pa.shift());
    (this.pa.length || this.g.length) && this.Qa();
    return this.l
};
t.dl = function () {
    var a = 16;
    this.o && (a |= 1);
    this.D && (a |= 32);
    return a
};
t.cl = function (a) {
    if (this.X) this.h = a, this.X = !1;
    else if (this.aa) this.aa = !1, this.g.clear(), this.g.push(a), Wc(this);
    else if (this.U) {
        this.U = !1;
        this.g.clear();
        this.g.push(250);
        this.xd = a;
        switch (this.i) {
            case -1:
                60 === a ? (this.C = !0, this.i = 0) : (this.C = !1, this.i = 200 === a ? 1 : 0);
                break;
            case 0:
                200 === a && (this.i = 1);
                break;
            case 1:
                this.i = 100 === a ? 2 : 200 === a ? 3 : 0;
                break;
            case 2:
                80 === a && (this.j = 3);
                this.i = -1;
                break;
            case 3:
                80 === a && (this.j = 4), this.i = -1
        }
        this.xd || (this.xd = 100);
        Wc(this)
    } else if (this.R) this.R = !1, this.g.clear(), this.g.push(250),
        this.we = 3 < a ? 4 : 1 << a, Wc(this);
    else if (this.O) this.O = !1, this.pa.push(250), Vc(this);
    else if (this.G) this.G = !1, this.pa.push(250), Vc(this), a || this.pa.push(1);
    else if (this.P) this.P = !1, this.pa.push(250), Vc(this);
    else if (this.L) {
        if (this.L = !1, this.Ze) {
            this.pa.clear();
            this.g.clear();
            this.g.push(250);
            switch (a) {
                case 230:
                    this.u = !1;
                    break;
                case 231:
                    this.u = !0;
                    break;
                case 232:
                    this.R = !0;
                    break;
                case 233:
                    Uc(this, 0, 0);
                    break;
                case 235:
                    Uc(this, 0, 0);
                    break;
                case 242:
                    this.g.push(this.j);
                    this.Rd = this.mc = this.nc = 0;
                    this.Qa();
                    break;
                case 243:
                    this.U = !0;
                    break;
                case 244:
                    this.ge = this.bd = !0;
                    this.s.send("mouse-enable", !0);
                    this.Rd = this.mc = this.nc = 0;
                    break;
                case 245:
                    this.bd = !1;
                    break;
                case 246:
                    this.bd = !1;
                    this.xd = 100;
                    this.u = !1;
                    this.we = 4;
                    break;
                case 255:
                    this.g.push(170), this.g.push(0), this.ge = !0, this.s.send("mouse-enable", !0), this.bd = !1, this.xd = 100, this.u = !1, this.we = 4, this.C || (this.j = 0), this.Rd = this.mc = this.nc = 0
            }
            Wc(this)
        }
    } else if (this.Z) this.Z = !1, this.ea = a;
    else {
        this.g.clear();
        this.pa.clear();
        this.pa.push(250);
        switch (a) {
            case 237:
                this.O = !0;
                break;
            case 240:
                this.G = !0;
                break;
            case 242:
                this.pa.push(171);
                this.pa.push(131);
                break;
            case 243:
                this.P = !0;
                break;
            case 244:
                this.Se = !0;
                break;
            case 245:
                this.Se = !1;
                break;
            case 255:
                this.pa.clear(), this.pa.push(250), this.pa.push(170), this.pa.push(0)
        }
        Vc(this)
    }
};
t.el = function (a) {
    switch (a) {
        case 32:
            this.pa.clear();
            this.g.clear();
            this.pa.push(this.h);
            Vc(this);
            break;
        case 96:
            this.X = !0;
            break;
        case 209:
            this.Z = !0;
            break;
        case 211:
            this.aa = !0;
            break;
        case 212:
            this.L = !0;
            break;
        case 167:
            this.h |= 32;
            break;
        case 168:
            this.h &= -33;
            break;
        case 169:
            this.pa.clear();
            this.g.clear();
            this.pa.push(0);
            Vc(this);
            break;
        case 170:
            this.pa.clear();
            this.g.clear();
            this.pa.push(85);
            Vc(this);
            break;
        case 171:
            this.pa.clear();
            this.g.clear();
            this.pa.push(0);
            Vc(this);
            break;
        case 173:
            this.h |= 16;
            break;
        case 174:
            this.h &=
                -17;
            break;
        case 254:
            mc(this.v)
    }
};

function Xc(a) {
    this.v = a;
    this.Fd = 0;
    this.Y = new Uint8Array(128);
    this.D = this.g = Date.now();
    this.l = this.j = 0;
    this.u = !1;
    this.C = .9765625;
    this.o = 38;
    this.h = 2;
    this.ng = this.i = 0;
    N(a.B, 112, this, function (b) {
        this.Fd = b & 127;
        this.ng = b >> 7
    });
    N(a.B, 113, this, this.$i);
    M(a.B, 113, this, this.Zi)
}
t = Xc.prototype;
t.ca = function () {
    var a = [];
    a[0] = this.Fd;
    a[1] = this.Y;
    a[2] = this.g;
    a[3] = this.D;
    a[4] = this.j;
    a[5] = this.l;
    a[6] = this.u;
    a[7] = this.C;
    a[8] = this.o;
    a[9] = this.h;
    a[10] = this.i;
    a[11] = this.ng;
    return a
};
t.H = function (a) {
    this.Fd = a[0];
    this.Y = a[1];
    this.g = a[2];
    this.D = a[3];
    this.j = a[4];
    this.l = a[5];
    this.u = a[6];
    this.C = a[7];
    this.o = a[8];
    this.h = a[9];
    this.i = a[10];
    this.ng = a[11]
};
t.Zb = function (a) {
    a = Date.now();
    this.g += a - this.D;
    this.D = a;
    this.u && this.j < a ? (this.v.Wa(8), this.i |= 192, this.j += this.C * Math.ceil((a - this.j) / this.C)) : this.l && this.l < a && (this.v.Wa(8), this.i |= 160, this.l = 0);
    let b = 100;
    this.u && this.j && (b = Math.min(b, Math.max(0, this.j - a)));
    this.l && (b = Math.min(b, Math.max(0, this.l - a)));
    return b
};

function Yc(a, b) {
    if (a.h & 4) a = b;
    else {
        a = b;
        for (var c = b = 0, d; a;) d = a % 10, c |= d << 4 * b, b++, a = (a - d) / 10;
        a = c
    }
    return a
}

function Zc(a, b) {
    var c;
    a.h & 4 ? c = b : c = (b & 15) + 10 * (b >> 4 & 15);
    return c
}
t.Zi = function () {
    switch (this.Fd) {
        case 0:
            return Yc(this, (new Date(this.g)).getUTCSeconds());
        case 2:
            return Yc(this, (new Date(this.g)).getUTCMinutes());
        case 4:
            return Yc(this, (new Date(this.g)).getUTCHours());
        case 6:
            return Yc(this, (new Date(this.g)).getUTCDay() + 1);
        case 7:
            return Yc(this, (new Date(this.g)).getUTCDate());
        case 8:
            return Yc(this, (new Date(this.g)).getUTCMonth() + 1);
        case 9:
            return Yc(this, (new Date(this.g)).getUTCFullYear() % 100);
        case 10:
            return 999 <= rb() % 1E3 ? this.o | 128 : this.o;
        case 11:
            return this.h;
        case 12:
            P(this.v, 8);
            var a = this.i;
            this.i &= -241;
            return a;
        case 13:
            return 0;
        case 50:
        case 55:
            return Yc(this, (new Date(this.g)).getUTCFullYear() / 100 | 0);
        default:
            return this.Y[this.Fd]
    }
};
t.$i = function (a) {
    switch (this.Fd) {
        case 10:
            this.o = a & 127;
            this.C = 1E3 / (32768 >> (this.o & 15) - 1);
            break;
        case 11:
            this.h = a;
            this.h & 64 && (this.j = Date.now());
            if (this.h & 32) {
                a = new Date;
                const b = Zc(this, this.Y[1]),
                    c = Zc(this, this.Y[3]),
                    d = Zc(this, this.Y[5]);
                this.l = +new Date(Date.UTC(a.getUTCFullYear(), a.getUTCMonth(), a.getUTCDate(), d, c, b))
            }
            break;
        case 1:
        case 3:
        case 5:
            this.Y[this.Fd] = a
    }
    this.u = 64 === (this.h & 64) && 0 < (this.o & 15)
};

function $c(a, b, c) {
    this.s = c;
    this.v = a;
    this.h = 4;
    this.ld = this.Xc = 0;
    this.Qd = 96;
    this.Qc = this.Ue = 0;
    this.Rc = 1;
    this.fa = this.Tf = this.Oa = this.If = 0;
    this.input = [];
    switch (b) {
        case 1016:
            this.g = 0;
            this.fa = 4;
            break;
        case 760:
            this.g = 1;
            this.fa = 3;
            break;
        case 1E3:
            this.g = 2;
            this.fa = 4;
            break;
        case 744:
            this.fa = this.g = 3;
            break;
        default:
            this.g = 0, this.fa = 4
    }
    this.s.register("serial" + this.g + "-input", function (d) {
        this.input.push(d);
        this.Qd |= 1;
        this.Ue & 1 ? ad(this, 12) : ad(this, 4)
    }, this);
    this.s.register("serial" + this.g + "-modem-status-input", function (d) {
        bd(this,
            d)
    }, this);
    this.s.register("serial" + this.g + "-carrier-detect-input", function (d) {
        bd(this, d ? this.Oa | 136 : this.Oa & -137)
    }, this);
    this.s.register("serial" + this.g + "-ring-indicator-input", function (d) {
        bd(this, d ? this.Oa | 68 : this.Oa & -69)
    }, this);
    this.s.register("serial" + this.g + "-data-set-ready-input", function (d) {
        bd(this, d ? this.Oa | 34 : this.Oa & -35)
    }, this);
    this.s.register("serial" + this.g + "-clear-to-send-input", function (d) {
        bd(this, d ? this.Oa | 17 : this.Oa & -18)
    }, this);
    a = a.B;
    N(a, b, this, function (d) {
        cd(this, d)
    }, function (d) {
        cd(this,
            d & 255);
        cd(this, d >> 8)
    });
    N(a, b | 1, this, function (d) {
        this.ld & 128 ? this.Xc = this.Xc & 255 | d << 8 : (0 === (this.Qc & 2) && d & 2 && ad(this, 2), this.Qc = d & 15, dd(this))
    });
    M(a, b, this, function () {
        if (this.ld & 128) return this.Xc & 255;
        let d = 0;
        0 !== this.input.length && (d = this.input.shift());
        0 === this.input.length && (this.Qd &= -2, ed(this, 12), ed(this, 4));
        return d
    });
    M(a, b | 1, this, function () {
        return this.ld & 128 ? this.Xc >> 8 : this.Qc & 15
    });
    M(a, b | 2, this, function () {
        var d = this.Rc & 15;
        2 === this.Rc && ed(this, 2);
        this.Ue & 1 && (d |= 192);
        return d
    });
    N(a, b | 2, this,
        function (d) {
            this.Ue = d
        });
    M(a, b | 3, this, function () {
        return this.ld
    });
    N(a, b | 3, this, function (d) {
        this.ld = d
    });
    M(a, b | 4, this, function () {
        return this.If
    });
    N(a, b | 4, this, function (d) {
        this.If = d
    });
    M(a, b | 5, this, function () {
        return this.Qd
    });
    N(a, b | 5, this, function () { });
    M(a, b | 6, this, function () {
        return this.Oa &= 240
    });
    N(a, b | 6, this, function (d) {
        bd(this, d)
    });
    M(a, b | 7, this, function () {
        return this.Tf
    });
    N(a, b | 7, this, function (d) {
        this.Tf = d
    })
}
$c.prototype.ca = function () {
    var a = [];
    a[0] = this.h;
    a[1] = this.Xc;
    a[2] = this.ld;
    a[3] = this.Qd;
    a[4] = this.Ue;
    a[5] = this.Qc;
    a[6] = this.Rc;
    a[7] = this.If;
    a[8] = this.Oa;
    a[9] = this.Tf;
    a[10] = this.fa;
    return a
};
$c.prototype.H = function (a) {
    this.h = a[0];
    this.Xc = a[1];
    this.ld = a[2];
    this.Qd = a[3];
    this.Ue = a[4];
    this.Qc = a[5];
    this.Rc = a[6];
    this.If = a[7];
    this.Oa = a[8];
    this.Tf = a[9];
    this.fa = a[10]
};

function dd(a) {
    a.h & 4096 && a.Qc & 1 ? (a.Rc = 12, a.v.Wa(a.fa)) : a.h & 16 && a.Qc & 1 ? (a.Rc = 4, a.v.Wa(a.fa)) : a.h & 4 && a.Qc & 2 ? (a.Rc = 2, a.v.Wa(a.fa)) : a.h & 1 && a.Qc & 8 ? (a.Rc = 0, a.v.Wa(a.fa)) : (a.Rc = 1, P(a.v, a.fa))
}

function ad(a, b) {
    a.h |= 1 << b;
    dd(a)
}

function ed(a, b) {
    a.h &= ~(1 << b);
    dd(a)
}

function cd(a, b) {
    a.ld & 128 ? a.Xc = a.Xc & -256 | b : (ad(a, 2), a.s.send("serial" + a.g + "-output-byte", b))
}

function bd(a, b) {
    let c = (a.Oa ^ b) >> 4;
    c |= a.Oa & 15;
    a.Oa = b;
    a.Oa |= c
};

function fd(a) {
    this.v = a;
    var b = a.B;
    Ub(a.A.Za, {
        Pa: 56,
        K: [134, 128, 19, 113, 7, 0, 128, 2, 8, 0, 128, 6, 0, 0, 128, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9, 1, 0, 0],
        Ib: [],
        name: "acpi"
    });
    this.g = this.h = 0;
    this.status = 1;
    this.ff = this.Vd = 0;
    this.i = gd(this, rb());
    this.ic = new Uint8Array(4);
    M(b, 45056, this, void 0, function () {
        return this.Vd
    });
    N(b, 45056, this, void 0, function (c) {
        this.Vd &= ~c
    });
    M(b, 45058, this, void 0, function () {
        return this.ff
    });
    N(b, 45058, this, void 0, function (c) {
        this.ff =
            c
    });
    M(b, 45060, this, void 0, function () {
        return this.status
    });
    N(b, 45060, this, void 0, function (c) {
        this.status = c
    });
    M(b, 45064, this, void 0, void 0, function () {
        return gd(this, rb()) & 16777215
    });
    M(b, 45024, this, function () {
        return this.ic[0]
    });
    M(b, 45025, this, function () {
        return this.ic[1]
    });
    M(b, 45026, this, function () {
        return this.ic[2]
    });
    M(b, 45027, this, function () {
        return this.ic[3]
    });
    N(b, 45024, this, function (c) {
        this.ic[0] = c
    });
    N(b, 45025, this, function (c) {
        this.ic[1] = c
    });
    N(b, 45026, this, function (c) {
        this.ic[2] = c
    });
    N(b, 45027, this,
        function (c) {
            this.ic[3] = c
        })
}
fd.prototype.Zb = function (a) {
    a = gd(this, a);
    var b = 0 !== ((a ^ this.i) & 8388608);
    this.ff & 1 && b ? (this.Vd |= 1, this.v.Wa(9)) : P(this.v, 9);
    this.i = a;
    return 100
};

function gd(a, b) {
    b = Math.round(3579.545 * b);
    b === a.h ? 3579.545 > a.g && a.g++ : a.h + a.g <= b && (a.g = 0, a.h = b);
    return a.h + a.g
}
fd.prototype.ca = function () {
    var a = [];
    a[0] = this.status;
    a[1] = this.Vd;
    a[2] = this.ff;
    a[3] = this.ic;
    return a
};
fd.prototype.H = function (a) {
    this.status = a[0];
    this.Vd = a[1];
    this.ff = a[2];
    this.ic = a[3]
};

function hd(a) {
    this.v = a;
    this.ea = this.C = 0;
    this.ta = 1;
    this.g = this.l = 0;
    this.j = rb();
    this.P = this.U = this.R = this.X = this.h = 65536;
    this.L = this.G = this.u = 0;
    this.i = new Int32Array(8);
    this.Ya = new Int32Array(8);
    this.o = new Int32Array(8);
    this.aa = 254;
    this.D = -1;
    this.Z = this.error = this.O = 0;
    ib(a.B, 4276092928, 1048576, b => {
        var c = b & 3;
        return this.jf(b & -4) >> 8 * c & 255
    }, () => { }, b => this.jf(b), (b, c) => this.ya(b, c))
}
t = hd.prototype;
t.jf = function (a) {
    a = a - 4276092928 | 0;
    switch (a) {
        case 32:
            return this.C;
        case 48:
            return 327700;
        case 128:
            return this.u;
        case 208:
            return this.O;
        case 224:
            return this.D;
        case 240:
            return this.aa;
        case 256:
        case 272:
        case 288:
        case 304:
        case 320:
        case 336:
        case 352:
        case 368:
            return this.Ya[a - 256 >> 4];
        case 384:
        case 400:
        case 416:
        case 432:
        case 448:
        case 464:
        case 480:
        case 496:
            return this.o[a - 384 >> 4];
        case 512:
        case 528:
        case 544:
        case 560:
        case 576:
        case 592:
        case 608:
        case 624:
            return this.i[a - 512 >> 4];
        case 640:
            return this.Z;
        case 768:
            return this.G;
        case 784:
            return this.L;
        case 800:
            return this.h;
        case 832:
            return this.X;
        case 848:
            return this.R;
        case 864:
            return this.U;
        case 880:
            return this.P;
        case 992:
            return this.ea;
        case 896:
            return this.l;
        case 912:
            return this.g;
        default:
            return 0
    }
};
t.ya = function (a, b) {
    switch (a - 4276092928 | 0) {
        case 32:
            this.C = b;
            break;
        case 128:
            this.u = b & 255;
            id(this);
            break;
        case 176:
            b = jd(this.Ya);
            if (-1 !== b) {
                kd(this.Ya, b);
                if (this.o[b >> 5] >> (b & 31) & 1) {
                    a = this.v.A.hd;
                    for (var c = 0; 24 > c; c++) {
                        var d = a.g[c];
                        (d & 255) === b && d & 16384 && (a.g[c] &= -16385, ld(a, c))
                    }
                }
                id(this)
            }
            break;
        case 208:
            this.O = b & 4278190080;
            break;
        case 224:
            this.D = b | 16777215;
            break;
        case 240:
            this.aa = b;
            break;
        case 640:
            this.Z = this.error;
            this.error = 0;
            break;
        case 768:
            a = b & 255;
            c = b >> 8 & 7;
            d = b >> 15 & 1;
            var e = b >> 18 & 3;
            this.G = b & -4097;
            0 === e ? md(this,
                a, c, d) : 1 === e ? md(this, a, 0, d) : 2 === e && md(this, a, c, d);
            break;
        case 784:
            this.L = b;
            break;
        case 800:
            this.h = b;
            break;
        case 832:
            this.X = b;
            break;
        case 848:
            this.R = b;
            break;
        case 864:
            this.U = b;
            break;
        case 880:
            this.P = b;
            break;
        case 992:
            this.ea = b;
            b = b & 3 | (b & 8) >> 1;
            this.ta = 7 === b ? 0 : b + 1;
            break;
        case 896:
            this.l = b >>> 0, this.g = b >>> 0, this.j = rb()
    }
};
t.Zb = function (a) {
    if (0 === this.g) return 100;
    const b = 1E6 / (1 << this.ta);
    a = (a - this.j) * b >>> 0;
    this.j += a / b;
    this.g -= a;
    0 >= this.g && (a = this.h & 393216, 131072 === a ? (this.g %= this.l, 0 >= this.g && (this.g += this.l), 0 === (this.h & 65536) && md(this, this.h & 255, 0, !1)) : 0 === a && (this.g = 0, 0 === (this.h & 65536) && md(this, this.h & 255, 0, !1)));
    return Math.max(0, this.g / b)
};

function md(a, b, c, d) {
    5 === c || 4 === c || a.i[b >> 5] >> (b & 31) & 1 || (nd(a.i, b), d ? nd(a.o, b) : kd(a.o, b), id(a))
}

function id(a) {
    var b = jd(a.i); - 1 !== b && (jd(a.Ya) >= b || (b & 240) <= (a.u & 240) || a.v.Kl())
}
t.ca = function () {
    var a = [];
    a[0] = this.C;
    a[1] = this.ea;
    a[2] = this.ta;
    a[3] = this.l;
    a[4] = this.g;
    a[5] = this.j;
    a[6] = this.h;
    a[7] = this.X;
    a[8] = this.R;
    a[9] = this.U;
    a[10] = this.P;
    a[11] = this.u;
    a[12] = this.G;
    a[13] = this.L;
    a[14] = this.i;
    a[15] = this.Ya;
    a[16] = this.o;
    a[17] = this.aa;
    a[18] = this.D;
    a[19] = this.O;
    a[20] = this.error;
    a[21] = this.Z;
    return a
};
t.H = function (a) {
    this.C = a[0];
    this.ea = a[1];
    this.ta = a[2];
    this.l = a[3];
    this.g = a[4];
    this.j = a[5];
    this.h = a[6];
    this.X = a[7];
    this.R = a[8];
    this.U = a[9];
    this.P = a[10];
    this.u = a[11];
    this.G = a[12];
    this.L = a[13];
    this.i = a[14];
    this.Ya = a[15];
    this.o = a[16];
    this.aa = a[17];
    this.D = a[18];
    this.O = a[19];
    this.error = a[20];
    this.Z = a[21]
};

function nd(a, b) {
    a[b >> 5] |= 1 << (b & 31)
}

function kd(a, b) {
    a[b >> 5] &= ~(1 << (b & 31))
}

function jd(a) {
    for (var b = 7; 0 <= b; b--) {
        var c = a[b];
        if (c) return sb(c >>> 0) | b << 5
    }
    return -1
};

function od(a) {
    this.v = a;
    this.g = new Int32Array(24);
    this.o = new Int32Array(24);
    for (var b = 0; b < this.g.length; b++) this.g[b] = 65536;
    this.i = this.h = this.l = this.j = 0;
    ib(a.B, 4273995776, 131072, c => {
        c = c - 4273995776 | 0;
        return 16 <= c && 20 > c ? (c -= 16, this.read(this.j) >> 8 * c & 255) : 0
    }, () => { }, c => {
        c = c - 4273995776 | 0;
        return 0 === c ? this.j : 16 === c ? this.read(this.j) : 0
    }, (c, d) => {
        c = c - 4273995776 | 0;
        0 === c ? this.j = d : 16 === c && this.write(this.j, d)
    })
}

function ld(a, b) {
    var c = 1 << b;
    if (0 !== (a.h & c)) {
        var d = a.g[b];
        if (0 === (d & 65536)) {
            var e = d >> 8 & 7;
            if (0 === (d & 32768)) a.h &= ~c;
            else if (a.g[b] |= 16384, d & 16384) return;
            0 !== e && 1 !== e || md(a.v.A.he, d & 255, e, 32768 === (d & 32768));
            a.g[b] &= -4097
        }
    }
}
od.prototype.read = function (a) {
    if (0 === a) return this.l << 24;
    if (1 === a) return 1507345;
    if (2 === a) return this.l << 24;
    if (16 <= a && 64 > a) {
        var b = a - 16 >> 1;
        return a & 1 ? this.o[b] : this.g[b]
    }
    return 0
};
od.prototype.write = function (a, b) {
    if (0 === a) this.l = b >>> 24 & 15;
    else if (1 !== a && 2 !== a && 16 <= a && 64 > a) {
        var c = a - 16 >> 1;
        a & 1 ? this.o[c] = b & 4278190080 : (this.g[c] = b & 110591 | this.g[c] & -110592, ld(this, c))
    }
};
od.prototype.ca = function () {
    var a = [];
    a[0] = this.g;
    a[1] = this.o;
    a[2] = this.j;
    a[3] = this.l;
    a[4] = this.h;
    a[5] = this.i;
    return a
};
od.prototype.H = function (a) {
    this.g = a[0];
    this.o = a[1];
    this.j = a[2];
    this.l = a[3];
    this.h = a[4];
    this.i = a[5]
};

function pd(a) {
    this.message = a
}
pd.prototype = Error();
const qd = {
    Uint8Array,
    Int8Array,
    Uint16Array,
    Int16Array,
    Uint32Array,
    Int32Array,
    Float32Array,
    Float64Array
};

function rd(a, b) {
    if ("object" !== typeof a || null === a) return a;
    if (a instanceof Array) return a.map(e => rd(e, b));
    a.constructor === Object && console.log(a);
    if (a.BYTES_PER_ELEMENT) {
        var c = new Uint8Array(a.buffer, a.byteOffset, a.length * a.BYTES_PER_ELEMENT);
        return {
            __state_type__: a.constructor.name.replace("bound ", ""),
            buffer_id: b.push(c) - 1
        }
    }
    a = a.ca();
    c = [];
    for (var d = 0; d < a.length; d++) c[d] = rd(a[d], b);
    return c
}

function sd(a, b) {
    if ("object" !== typeof a || null === a) return a;
    if (a instanceof Array) {
        for (let c = 0; c < a.length; c++) a[c] = sd(a[c], b);
        return a
    }
    return new qd[a.__state_type__](b[a.buffer_id])
}
nb.prototype.lf = function () {
    for (var a = [], b = rd(this, a), c = [], d = 0, e = 0; e < a.length; e++) {
        var h = a[e].byteLength;
        c[e] = {
            offset: d,
            length: h
        };
        d += h;
        d = d + 3 & -4
    }
    e = JSON.stringify({
        buffer_infos: c,
        state: b
    });
    e = (new TextEncoder).encode(e);
    b = 16 + e.length;
    b = b + 3 & -4;
    h = b + d;
    d = new ArrayBuffer(h);
    var f = new Int32Array(d, 0, 4);
    (new Uint8Array(d, 16, e.length)).set(e);
    b = new Uint8Array(d, b);
    f[0] = -2039052682;
    f[1] = 6;
    f[2] = h;
    f[3] = e.length;
    for (e = 0; e < a.length; e++) b.set(a[e], c[e].offset);
    return d
};
nb.prototype.xe = function (a) {
    function b(p, r) {
        const n = p.length;
        if (16 > n) throw new pd("Invalid length: " + n);
        p = new Int32Array(p.buffer, p.byteOffset, 4);
        if (-2039052682 !== p[0]) throw new pd("Invalid header: " + zb(p[0] >>> 0));
        if (6 !== p[1]) throw new pd("Version mismatch: dump=" + p[1] + " we=6");
        if (r && p[2] !== n) throw new pd("Length doesn't match header: real=" + n + " header=" + p[2]);
        return p[3]
    }

    function c(p) {
        p = (new TextDecoder).decode(p);
        return JSON.parse(p)
    }
    a = new Uint8Array(a);
    if (4247762216 === (new Uint32Array(a.buffer,
        0, 1))[0]) {
        var d = this.mi(a.length);
        (new Uint8Array(this.Ga.buffer, this.pi(d), a.length)).set(a);
        var e = this.Fe(d, 16),
            h = new Uint8Array(this.Ga.buffer, e, 16),
            f = b(h, !1);
        this.Ge(e, 16);
        e = this.Fe(d, f);
        h = new Uint8Array(this.Ga.buffer, e, f);
        h = c(h);
        this.Ge(e, f);
        e = h.state;
        var g = h.buffer_infos;
        h = [];
        f = 16 + f;
        for (var k of g) {
            g = (f + 3 & -4) - f;
            if (1048576 < k.length) {
                var l = this.Fe(d, g);
                this.Ge(l, g);
                l = new Uint8Array(k.length);
                h.push(l.buffer);
                for (var m = 0; m < k.length;) {
                    const p = Math.min(k.length - m, 1048576),
                        r = this.Fe(d, p);
                    l.set(new Uint8Array(this.Ga.buffer,
                        r, p), m);
                    this.Ge(r, p);
                    m += p
                }
            } else l = this.Fe(d, g + k.length), m = l + g, h.push(this.Ga.buffer.slice(m, m + k.length)), this.Ge(l, g + k.length);
            f += g + k.length
        }
        e = sd(e, h);
        this.H(e);
        this.oi(d)
    } else {
        k = b(a, !0);
        if (0 > k || k + 12 >= a.length) throw new pd("Invalid info block length: " + k);
        e = c(a.subarray(16, 16 + k));
        d = e.state;
        e = e.buffer_infos;
        let p = 16 + k;
        p = p + 3 & -4;
        k = e.map(r => {
            const n = p + r.offset;
            return a.buffer.slice(n, n + r.length)
        });
        d = sd(d, k);
        this.H(d)
    }
};

function td(a, b, c) {
    a[0] === b[0] && a[1] === b[1] && a[2] === b[2] && a[3] === b[3] && a[4] === b[4] && a[5] === b[5] && (a[0] = c[0], a[1] = c[1], a[2] = c[2], a[3] = c[3], a[4] = c[4], a[5] = c[5]);
    a[6] === b[0] && a[7] === b[1] && a[8] === b[2] && a[9] === b[3] && a[10] === b[4] && a[11] === b[5] && (a[6] = c[0], a[7] = c[1], a[8] = c[2], a[9] = c[3], a[10] = c[4], a[11] = c[5]);
    var d = a[12] << 8 | a[13];
    if (2048 === d) {
        if (a = a.subarray(14), 4 === a[0] >> 4 && 17 === a[9] && (a = a.subarray(20), d = a[2] << 8 | a[3], 67 === (a[0] << 8 | a[1]) || 67 === d)) {
            const e = a.subarray(8);
            if (1669485411 === (e[236] << 24 | e[237] <<
                16 | e[238] << 8 | e[239]))
                for (e[28] === b[0] && e[29] === b[1] && e[30] === b[2] && e[31] === b[3] && e[32] === b[4] && e[33] === b[5] && (e[28] = c[0], e[29] = c[1], e[30] = c[2], e[31] = c[3], e[32] = c[4], e[33] = c[5], a[6] = a[7] = 0), d = 240; d < e.length;) {
                    const h = e[d++];
                    if (255 === h) break;
                    const f = e[d++];
                    61 === h && 1 === e[d + 0] && e[d + 1] === b[0] && e[d + 2] === b[1] && e[d + 3] === b[2] && e[d + 4] === b[3] && e[d + 5] === b[4] && e[d + 6] === b[5] && (e[d + 1] = c[0], e[d + 2] = c[1], e[d + 3] = c[2], e[d + 4] = c[3], e[d + 5] = c[4], e[d + 6] = c[5], a[6] = a[7] = 0);
                    d += f
                }
        }
    } else 2054 === d && (a = a.subarray(14), a[8] === b[0] &&
        a[9] === b[1] && a[10] === b[2] && a[11] === b[3] && a[12] === b[4] && a[13] === b[5] && (a[8] = c[0], a[9] = c[1], a[10] = c[2], a[11] = c[3], a[12] = c[4], a[13] = c[5]))
}

function ud(a) {
    return [a[0].toString(16).padStart(2, "0"), a[1].toString(16).padStart(2, "0"), a[2].toString(16).padStart(2, "0"), a[3].toString(16).padStart(2, "0"), a[4].toString(16).padStart(2, "0"), a[5].toString(16).padStart(2, "0")].join(":")
}

function vd(a, b, c, d) {
    this.v = a;
    this.Za = a.A.Za;
    this.id = 0;
    this.Rf = c;
    this.Hb = d;
    this.s = b;
    this.s.register("net" + this.id + "-receive", function (e) {
        this.$a(e)
    }, this);
    this.port = 768 + 256 * this.id;
    this.name = "ne2k";
    this.K = [236, 16, 41, 128, 3, 1, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, this.port & 255 | 1, this.port >> 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 244, 26, 0, 17, 0, 0, 184, 254, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0];
    this.Pa = (0 === this.id ? 5 : 7 + this.id) << 3;
    this.Ib = [{
        size: 32
    }];
    this.Cf = this.Ya = 0;
    this.eb = 1;
    this.Xf = this.ee = this.Wb = this.Ke = 0;
    this.memory =
        new Uint8Array(32768);
    this.Kg = this.ye = 0;
    this.Jg = 1;
    this.sa = new Uint8Array([0, 34, 21, 255 * Math.random() | 0, 255 * Math.random() | 0, 255 * Math.random() | 0]);
    this.s.send("net" + this.id + "-mac", ud(this.sa));
    this.md = Uint8Array.of(255, 255, 255, 255, 255, 255, 255, 255);
    this.df = null;
    for (b = 0; 6 > b; b++) this.memory[b << 1] = this.memory[b << 1 | 1] = this.sa[b];
    this.memory[28] = this.memory[29] = 87;
    this.memory[30] = this.memory[31] = 87;
    this.Ea = 0;
    this.pc = 64;
    this.qb = 128;
    this.Yc = this.$b = 76;
    b = a.B;
    M(b, this.port | 0, this, function () {
        return this.eb
    });
    N(b,
        this.port | 0, this,
        function (e) {
            this.eb = e;
            this.eb & 1 || (e & 24 && 0 === this.Wb && wd(this, 64), e & 4 && (e = this.Xf << 8, e = this.memory.subarray(e, e + this.ee), this.df && (e = new Uint8Array(e), td(e, this.df, this.sa)), this.s.send("net" + this.id + "-send", e), this.s.send("eth-transmit-end", [e.length]), this.eb &= -5, wd(this, 2)))
        });
    M(b, this.port | 13, this, function () {
        return 1 === S(this) ? this.md[5] : 0
    });
    M(b, this.port | 14, this, function () {
        return 1 === S(this) ? this.md[6] : 0
    }, function () {
        return 0
    });
    M(b, this.port | 15, this, function () {
        return 1 === S(this) ?
            this.md[7] : 0
    });
    M(b, this.port | 31, this, function () {
        wd(this, 128);
        return 0
    });
    N(b, this.port | 31, this, function () { });
    M(b, this.port | 1, this, function () {
        var e = S(this);
        return 0 === e ? this.pc : 1 === e ? this.sa[0] : 2 === e ? this.pc : 0
    });
    N(b, this.port | 1, this, function (e) {
        var h = S(this);
        0 === h ? this.pc = e : 1 === h && (this.sa[0] = e)
    });
    M(b, this.port | 2, this, function () {
        var e = S(this);
        return 0 === e ? this.qb : 1 === e ? this.sa[1] : 2 === e ? this.qb : 0
    });
    N(b, this.port | 2, this, function (e) {
        var h = S(this);
        0 === h ? (e > this.memory.length >> 8 && (e = this.memory.length >>
            8), this.qb = e) : 1 === h && (this.sa[1] = e)
    });
    M(b, this.port | 7, this, function () {
        var e = S(this);
        return 0 === e ? this.Ya : 1 === e ? this.$b : 0
    });
    N(b, this.port | 7, this, function (e) {
        var h = S(this);
        0 === h ? (this.Ya &= ~e, xd(this)) : 1 === h && (this.$b = e)
    });
    N(b, this.port | 13, this, function (e) {
        0 === S(this) && (this.Kg = e)
    });
    N(b, this.port | 14, this, function (e) {
        0 === S(this) && (this.Ke = e)
    });
    M(b, this.port | 10, this, function () {
        var e = S(this);
        return 0 === e ? 80 : 1 === e ? this.md[2] : 0
    });
    N(b, this.port | 10, this, function (e) {
        0 === S(this) && (this.Wb = this.Wb & 65280 | e & 255)
    });
    M(b, this.port | 11, this, function () {
        var e = S(this);
        return 0 === e ? 67 : 1 === e ? this.md[3] : 0
    });
    N(b, this.port | 11, this, function (e) {
        0 === S(this) && (this.Wb = this.Wb & 255 | e << 8 & 65280)
    });
    M(b, this.port | 8, this, function () {
        var e = S(this);
        return 0 === e ? this.Ea & 255 : 1 === e ? this.md[0] : 0
    });
    N(b, this.port | 8, this, function (e) {
        0 === S(this) && (this.Ea = this.Ea & 65280 | e & 255)
    });
    M(b, this.port | 9, this, function () {
        var e = S(this);
        return 0 === e ? this.Ea >> 8 & 255 : 1 === e ? this.md[1] : 0
    });
    N(b, this.port | 9, this, function (e) {
        0 === S(this) && (this.Ea = this.Ea & 255 | e <<
            8 & 65280)
    });
    N(b, this.port | 15, this, function (e) {
        0 === S(this) && (this.Cf = e, xd(this))
    });
    M(b, this.port | 3, this, function () {
        var e = S(this);
        return 0 === e ? this.Yc : 1 === e ? this.sa[2] : 0
    });
    N(b, this.port | 3, this, function (e) {
        var h = S(this);
        0 === h ? this.Yc = e : 1 === h && (this.sa[2] = e)
    });
    M(b, this.port | 4, this, function () {
        var e = S(this);
        return 0 === e ? this.Jg : 1 === e ? this.sa[3] : 0
    });
    N(b, this.port | 4, this, function (e) {
        var h = S(this);
        0 === h ? this.Xf = e : 1 === h && (this.sa[3] = e)
    });
    M(b, this.port | 5, this, function () {
        var e = S(this);
        return 0 === e ? 0 : 1 === e ? this.sa[4] :
            0
    });
    N(b, this.port | 5, this, function (e) {
        var h = S(this);
        0 === h ? this.ee = this.ee & -256 | e : 1 === h && (this.sa[4] = e)
    });
    M(b, this.port | 6, this, function () {
        var e = S(this);
        return 0 === e ? 0 : 1 === e ? this.sa[5] : 0
    });
    N(b, this.port | 6, this, function (e) {
        var h = S(this);
        0 === h ? this.ee = this.ee & 255 | e << 8 : 1 === h && (this.sa[5] = e)
    });
    M(b, this.port | 12, this, function () {
        var e = S(this);
        return 0 === e ? 9 : 1 === e ? this.md[4] : 0
    });
    N(b, this.port | 12, this, function (e) {
        0 === S(this) && (this.ye = e)
    });
    M(b, this.port | 16, this, this.ej, this.Zg, this.dj);
    N(b, this.port | 16, this,
        this.$g, this.$g, this.fj);
    Ub(a.A.Za, this)
}
t = vd.prototype;
t.ca = function () {
    var a = [];
    a[0] = this.Ya;
    a[1] = this.Cf;
    a[2] = this.eb;
    a[3] = this.Ke;
    a[4] = this.Wb;
    a[5] = this.ee;
    a[6] = this.Xf;
    a[7] = this.Ea;
    a[8] = this.pc;
    a[9] = this.$b;
    a[10] = this.Yc;
    a[11] = this.qb;
    a[12] = this.ye;
    a[13] = this.Kg;
    a[14] = this.Jg;
    a[15] = this.sa;
    a[16] = this.memory;
    return a
};
t.H = function (a) {
    this.Ya = a[0];
    this.Cf = a[1];
    this.eb = a[2];
    this.Ke = a[3];
    this.Wb = a[4];
    this.ee = a[5];
    this.Xf = a[6];
    this.Ea = a[7];
    this.pc = a[8];
    this.$b = a[9];
    this.Yc = a[10];
    this.qb = a[11];
    this.ye = a[12];
    this.Kg = a[13];
    this.Jg = a[14];
    this.Rf ? (this.sa = a[15], this.memory = a[16]) : this.Hb && (this.df = a[15], this.memory = a[16]);
    this.s.send("net" + this.id + "-mac", ud(this.sa))
};

function wd(a, b) {
    a.Ya |= b;
    xd(a)
}

function xd(a) {
    a.Cf & a.Ya ? a.Za.Qa(a.Pa) : nc(a.Za, a.Pa)
}

function yd(a, b) {
    if (16 >= a.Ea || 16384 <= a.Ea && 32768 > a.Ea) a.memory[a.Ea] = b;
    a.Ea++;
    a.Wb--;
    a.Ea >= a.qb << 8 && (a.Ea += a.pc - a.qb << 8);
    0 === a.Wb && wd(a, 64)
}
t.$g = function (a) {
    yd(this, a);
    this.Ke & 1 && yd(this, a >> 8)
};
t.fj = function (a) {
    yd(this, a);
    yd(this, a >> 8);
    yd(this, a >> 16);
    yd(this, a >> 24)
};

function zd(a) {
    let b = 0;
    32768 > a.Ea && (b = a.memory[a.Ea]);
    a.Ea++;
    a.Wb--;
    a.Ea >= a.qb << 8 && (a.Ea += a.pc - a.qb << 8);
    0 === a.Wb && wd(a, 64);
    return b
}
t.ej = function () {
    return this.Zg() & 255
};
t.Zg = function () {
    return this.Ke & 1 ? zd(this) | zd(this) << 8 : zd(this)
};
t.dj = function () {
    return zd(this) | zd(this) << 8 | zd(this) << 16 | zd(this) << 24
};
t.$a = function (a) {
    if (!(this.eb & 1) && (this.s.send("eth-receive-end", [a.length]), this.ye & 16 || this.ye & 4 && 255 === a[0] && 255 === a[1] && 255 === a[2] && 255 === a[3] && 255 === a[4] && 255 === a[5] || !(this.ye & 8 && 1 === (a[0] & 1) || a[0] !== this.sa[0] || a[1] !== this.sa[1] || a[2] !== this.sa[2] || a[3] !== this.sa[3] || a[4] !== this.sa[4] || a[5] !== this.sa[5]))) {
        this.df && (a = new Uint8Array(a), td(a, this.sa, this.df));
        var b = this.$b << 8,
            c = Math.max(60, a.length) + 4,
            d = b + 4,
            e = this.$b + 1 + (c >> 8);
        if (!((this.Yc > this.$b ? this.Yc - this.$b : this.qb - this.$b + this.Yc - this.pc) <
            1 + (c >> 8) && 0 !== this.Yc)) {
            if (b + c > this.qb << 8) {
                var h = (this.qb << 8) - d;
                this.memory.set(a.subarray(0, h), d);
                this.memory.set(a.subarray(h), this.pc << 8)
            } else this.memory.set(a, d), 60 > a.length && this.memory.fill(0, d + a.length, d + 60);
            e >= this.qb && (e += this.pc - this.qb);
            this.memory[b] = 1;
            this.memory[b + 1] = e;
            this.memory[b + 2] = c;
            this.memory[b + 3] = c >> 8;
            this.$b = e;
            wd(this, 1)
        }
    }
};

function S(a) {
    return a.eb >> 6 & 3
};
var Ad = new Uint8Array(256),
    Bd = [],
    Cd = [],
    Dd = [],
    Ed = new Uint8Array(256),
    Fd = [];

function Gd(a, b) {
    this.v = a;
    this.s = b;
    this.Ma = new Bb(64);
    this.ma = new Bb(64);
    this.i = this.o = this.Nb = this.L = 0;
    this.M = new Uint8Array(256);
    Hd(this);
    this.me = !1;
    this.pf = 0;
    this.Qb = this.Pb = this.Jd = this.Mc = !1;
    this.ac = [new Cb, new Cb];
    this.Bb = a.A.Bb;
    this.Cb = this.Lc = this.j = this.dc = this.l = this.D = 0;
    this.ec = 1;
    this.Id = 5;
    this.cc = !1;
    this.g = new ArrayBuffer(65536);
    this.aa = new Int8Array(this.g);
    this.C = new Uint8Array(this.g);
    this.Z = new Int16Array(this.g);
    this.ea = new Uint16Array(this.g);
    this.mb = new tb(this.g);
    this.fc = this.u = !1;
    this.wb = 22050;
    b.send("dac-tell-sampling-rate", this.wb);
    this.h = 1;
    this.P = 170;
    this.O = 0;
    this.Cd = new Uint8Array(256);
    this.G = new Bb(64);
    this.U = this.R = this.sb = 0;
    this.xj = !1;
    this.fa = 5;
    this.Md = new Uint8Array(16);
    a.B.ae(544, this, this.Hh, this.Jh, this.Tj, this.Vj);
    a.B.ae(904, this, this.Hh, this.Jh);
    a.B.ae(548, this, this.Xj, this.Zj);
    M(a.B, 550, this, this.ak);
    M(a.B, 551, this, this.ck);
    M(a.B, 552, this, this.ek);
    M(a.B, 553, this, this.gk);
    M(a.B, 554, this, this.ik);
    M(a.B, 555, this, this.kk);
    M(a.B, 556, this, this.mk);
    M(a.B, 557, this,
        this.pk);
    a.B.ae(558, this, this.rk, this.tk);
    a.B.Uc(544, this, this.Ih, this.Kh, this.Uj, this.Wj);
    a.B.Uc(904, this, this.Ih, this.Kh);
    a.B.Uc(548, this, this.Yj, this.$j);
    N(a.B, 550, this, this.bk);
    N(a.B, 551, this, this.dk);
    a.B.Uc(552, this, this.fk, this.hk);
    N(a.B, 554, this, this.jk);
    N(a.B, 555, this, this.lk);
    N(a.B, 556, this, this.nk);
    N(a.B, 557, this, this.qk);
    N(a.B, 558, this, this.sk);
    N(a.B, 559, this, this.uk);
    a.B.ae(816, this, this.Yk, this.$k);
    a.B.Uc(816, this, this.Zk, this.al);
    this.Bb.Zf.push({
        Bf: this.ta,
        Gg: this
    });
    b.register("dac-request-data",
        function () {
            !this.dc || this.fc ? Id(this) : Jd(this)
        }, this);
    b.register("speaker-has-initialized", function () {
        Hd(this)
    }, this);
    b.send("speaker-confirm-initialized");
    Kd(this)
}

function Kd(a) {
    a.Ma.clear();
    a.ma.clear();
    a.Nb = 0;
    a.o = 0;
    a.me = !1;
    a.pf = 0;
    a.Mc = !1;
    a.Jd = !1;
    a.Pb = !1;
    a.Qb = !1;
    a.ac[0].clear();
    a.ac[1].clear();
    a.D = 0;
    a.l = 0;
    a.dc = 0;
    a.j = 0;
    a.Lc = 0;
    a.Cb = 0;
    a.cc = !1;
    a.C.fill(0);
    a.u = !1;
    a.fc = !1;
    a.P = 170;
    a.O = 0;
    a.wb = 22050;
    a.h = 1;
    Ld(a, 1);
    a.Md.fill(0);
    a.Cd.fill(0);
    a.Cd[5] = 1;
    a.Cd[9] = 248
}
t = Gd.prototype;
t.ca = function () {
    var a = [];
    a[2] = this.L;
    a[3] = this.Nb;
    a[4] = this.o;
    a[5] = this.i;
    a[6] = this.M;
    a[7] = this.me;
    a[8] = this.pf;
    a[9] = this.Mc;
    a[10] = this.Jd;
    a[11] = this.Pb;
    a[12] = this.Qb;
    a[15] = this.D;
    a[16] = this.l;
    a[17] = this.dc;
    a[18] = this.j;
    a[19] = this.Lc;
    a[20] = this.Cb;
    a[21] = this.ec;
    a[22] = this.Id;
    a[23] = this.cc;
    a[24] = this.C;
    a[25] = this.u;
    a[26] = this.fc;
    a[27] = this.wb;
    a[28] = this.h;
    a[29] = this.P;
    a[30] = this.O;
    a[31] = this.Cd;
    a[33] = this.Lb;
    a[34] = this.fa;
    a[35] = this.Md;
    return a
};
t.H = function (a) {
    this.L = a[2];
    this.Nb = a[3];
    this.o = a[4];
    this.i = a[5];
    this.M = a[6];
    Md(this);
    this.me = a[7];
    this.pf = a[8];
    this.Mc = a[9];
    this.Jd = a[10];
    this.Pb = a[11];
    this.Qb = a[12];
    this.D = a[15];
    this.l = a[16];
    this.dc = a[17];
    this.j = a[18];
    this.Lc = a[19];
    this.Cb = a[20];
    this.ec = a[21];
    this.Id = a[22];
    this.cc = a[23];
    this.C = a[24];
    this.u = a[25];
    this.fc = a[26];
    this.wb = a[27];
    this.h = a[28];
    this.P = a[29];
    this.O = a[30];
    this.Cd = a[31];
    this.Lb = a[33];
    this.fa = a[34];
    this.Md = a[35];
    this.g = this.C.buffer;
    this.aa = new Int8Array(this.g);
    this.Z = new Int16Array(this.g);
    this.ea = new Uint16Array(this.g);
    this.mb = new tb(this.g);
    this.fc ? this.s.send("dac-disable") : this.s.send("dac-enable")
};
t.Hh = function () {
    return 255
};
t.Jh = function () {
    return 255
};
t.Tj = function () {
    return 255
};
t.Vj = function () {
    return 255
};
t.Xj = function () {
    return this.i
};
t.Zj = function () {
    var a = this.i,
        b = Cd[a];
    return b ? b.call(this) : this.M[a]
};
t.ak = function () {
    return 255
};
t.ck = function () {
    return 255
};
t.ek = function () {
    return 255
};
t.gk = function () {
    return 255
};
t.ik = function () {
    this.ma.length && (this.L = this.ma.shift());
    return this.L
};
t.kk = function () {
    return 255
};
t.mk = function () {
    return 127
};
t.pk = function () {
    return 255
};
t.rk = function () {
    this.Md[1] && Ld(this, 1);
    return (this.ma.length && !this.Mc) << 7 | 127
};
t.tk = function () {
    Ld(this, 2);
    return 0
};
t.Ih = function () {
    this.R = 0
};
t.Kh = function (a) {
    var b = Fd[this.R];
    b || (b = this.X);
    b.call(this, a, 0, this.R)
};
t.Uj = function () {
    this.U = 0
};
t.Wj = function (a) {
    var b = Fd[this.U];
    b || (b = this.X);
    b.call(this, a, 1, this.U)
};
t.Yj = function (a) {
    this.i = a
};
t.$j = function (a) {
    Nd(this, this.i, a)
};
t.bk = function (a) {
    this.Mc ? this.Mc = !1 : a && Kd(this);
    this.ma.clear();
    this.ma.push(170)
};
t.dk = function () { };
t.fk = function () { };
t.hk = function () { };
t.jk = function () { };
t.lk = function () { };
t.nk = function (a) {
    0 === this.Nb ? (this.Nb = a, this.Ma.clear(), this.o = Ad[a]) : this.Ma.push(a);
    this.Ma.length >= this.o && (a = Bd[this.Nb], a || (a = this.dh), a.call(this), this.o = this.Nb = 0, this.Ma.clear())
};
t.qk = function () { };
t.sk = function () { };
t.uk = function () { };
t.Yk = function () {
    this.G.length && (this.sb = this.G.shift());
    return this.sb
};
t.Zk = function () { };
t.$k = function () {
    return 0 | 128 * !this.G.length
};
t.al = function (a) {
    255 === a && (this.G.clear(), this.G.push(254))
};
t.dh = function () { };

function V(a, b, c) {
    c || (c = Gd.prototype.dh);
    for (var d = 0; d < a.length; d++) Ad[a[d]] = b, Bd[a[d]] = c
}

function Od(a) {
    for (var b = [], c = 0; 16 > c; c++) b.push(a + c);
    return b
}
V([14], 2, function () {
    this.Cd[this.Ma.shift()] = this.Ma.shift()
});
V([15], 1, function () {
    this.ma.clear();
    this.ma.push(this.Cd[this.Ma.shift()])
});
V([16], 1, function () {
    var a = this.Ma.shift();
    a = Pd(a / 127.5 + -1);
    this.ac[0].push(a);
    this.ac[1].push(a);
    this.s.send("dac-enable")
});
V([20, 21], 2, function () {
    this.Lc = 1;
    this.Cb = this.ec;
    this.Mc = this.Pb = this.Qb = this.cc = !1;
    Qd(this);
    Rd(this)
});
V([22], 2);
V([23], 2);
V([28], 0, function () {
    this.Lc = 1;
    this.Cb = this.ec;
    this.cc = !0;
    this.Mc = this.Pb = this.Qb = !1;
    Rd(this)
});
V([31], 0);
V([32], 0, function () {
    this.ma.clear();
    this.ma.push(127)
});
V([36], 2);
V([44], 0);
V([48], 0);
V([49], 0);
V([52], 0);
V([53], 0);
V([54], 0);
V([55], 0);
V([56], 0);
V([64], 1, function () {
    Sd(this, 1E6 / (256 - this.Ma.shift()) / (this.Jd ? 2 : 1))
});
V([65, 66], 2, function () {
    Sd(this, this.Ma.shift() << 8 | this.Ma.shift())
});
V([72], 2, function () {
    Qd(this)
});
V([116], 2);
V([117], 2);
V([118], 2);
V([119], 2);
V([125], 0);
V([127], 0);
V([128], 2);
V([144], 0, function () {
    this.Lc = 1;
    this.Cb = this.ec;
    this.cc = !0;
    this.Qb = !1;
    this.Mc = !0;
    this.Pb = !1;
    Rd(this)
});
V([145], 0);
V([152], 0);
V([153], 0);
V([160], 0);
V([168], 0);
V(Od(176), 3, function () {
    if (!(this.Nb & 8)) {
        var a = this.Ma.shift();
        this.Lc = 2;
        this.Cb = this.Id;
        this.cc = !!(this.Nb & 4);
        this.Qb = !!(a & 16);
        this.Jd = !!(a & 32);
        this.Pb = !0;
        Qd(this);
        Rd(this)
    }
});
V(Od(192), 3, function () {
    if (!(this.Nb & 8)) {
        var a = this.Ma.shift();
        this.Lc = 1;
        this.Cb = this.ec;
        this.cc = !!(this.Nb & 4);
        this.Qb = !!(a & 16);
        this.Jd = !!(a & 32);
        this.Pb = !1;
        Qd(this);
        Rd(this)
    }
});
V([208], 0, function () {
    this.fc = !0;
    this.s.send("dac-disable")
});
V([209], 0, function () {
    this.me = !0
});
V([211], 0, function () {
    this.me = !1
});
V([212], 0, function () {
    this.fc = !1;
    this.s.send("dac-enable")
});
V([213], 0, function () {
    this.fc = !0;
    this.s.send("dac-disable")
});
V([214], 0, function () {
    this.fc = !1;
    this.s.send("dac-enable")
});
V([216], 0, function () {
    this.ma.clear();
    this.ma.push(255 * this.me)
});
V([217, 218], 0, function () {
    this.cc = !1
});
V([224], 1, function () {
    this.ma.clear();
    this.ma.push(~this.Ma.shift())
});
V([225], 0, function () {
    this.ma.clear();
    this.ma.push(4);
    this.ma.push(5)
});
V([226], 1);
V([227], 0, function () {
    this.ma.clear();
    for (var a = 0; 44 > a; a++) this.ma.push("COPYRIGHT (C) CREATIVE TECHNOLOGY LTD, 1992.".charCodeAt(a));
    this.ma.push(0)
});
V([228], 1, function () {
    this.pf = this.Ma.shift()
});
V([232], 0, function () {
    this.ma.clear();
    this.ma.push(this.pf)
});
V([242, 243], 0, function () {
    this.Qa()
});
var Td = new Uint8Array(256);
Td[14] = 255;
Td[15] = 7;
Td[55] = 56;
V([249], 1, function () {
    var a = this.Ma.shift();
    this.ma.clear();
    this.ma.push(Td[a])
});

function Nd(a, b, c) {
    (b = Dd[b]) && b.call(a, c)
}
Gd.prototype.nb = function () {
    return this.M[this.i]
};
Gd.prototype.zb = function (a) {
    this.M[this.i] = a
};

function Hd(a) {
    a.M[4] = 204;
    a.M[34] = 204;
    a.M[38] = 204;
    a.M[40] = 0;
    a.M[46] = 0;
    a.M[10] = 0;
    a.M[48] = 192;
    a.M[49] = 192;
    a.M[50] = 192;
    a.M[51] = 192;
    a.M[52] = 192;
    a.M[53] = 192;
    a.M[54] = 0;
    a.M[55] = 0;
    a.M[56] = 0;
    a.M[57] = 0;
    a.M[59] = 0;
    a.M[60] = 31;
    a.M[61] = 21;
    a.M[62] = 11;
    a.M[63] = 0;
    a.M[64] = 0;
    a.M[65] = 0;
    a.M[66] = 0;
    a.M[67] = 0;
    a.M[68] = 128;
    a.M[69] = 128;
    a.M[70] = 128;
    a.M[71] = 128;
    Md(a)
}

function Md(a) {
    for (var b = 1; b < a.M.length; b++) Ed[b] || Nd(a, b, a.M[b])
}

function Ud(a, b) {
    b || (b = Gd.prototype.nb);
    Cd[a] = b
}

function Vd(a, b) {
    b || (b = Gd.prototype.zb);
    Dd[a] = b
}

function Wd(a, b, c) {
    Ed[a] = 1;
    Cd[a] = function () {
        return this.M[b] & 240 | this.M[c] >>> 4
    };
    Dd[a] = function (d) {
        this.M[a] = d;
        var e = d << 4 & 240 | this.M[c] & 15;
        Nd(this, b, d & 240 | this.M[b] & 15);
        Nd(this, c, e)
    }
}

function Xd(a, b, c) {
    Cd[a] = Gd.prototype.nb;
    Dd[a] = function (d) {
        this.M[a] = d;
        this.s.send("mixer-volume", [b, c, (d >>> 2) - 62])
    }
}
Ud(0, function () {
    Hd(this);
    return 0
});
Vd(0);
Wd(4, 50, 51);
Wd(34, 48, 49);
Wd(38, 52, 53);
Wd(40, 54, 55);
Wd(46, 56, 57);
Xd(48, 0, 0);
Xd(49, 0, 1);
Xd(50, 2, 0);
Xd(51, 2, 1);
Ud(59);
Vd(59, function (a) {
    this.M[59] = a;
    this.s.send("mixer-volume", [1, 2, 6 * (a >>> 6) - 18])
});
Ud(65);
Vd(65, function (a) {
    this.M[65] = a;
    this.s.send("mixer-gain-left", 6 * (a >>> 6))
});
Ud(66);
Vd(66, function (a) {
    this.M[66] = a;
    this.s.send("mixer-gain-right", 6 * (a >>> 6))
});
Ud(68);
Vd(68, function (a) {
    this.M[68] = a;
    a >>>= 3;
    this.s.send("mixer-treble-left", a - (16 > a ? 14 : 16))
});
Ud(69);
Vd(69, function (a) {
    this.M[69] = a;
    a >>>= 3;
    this.s.send("mixer-treble-right", a - (16 > a ? 14 : 16))
});
Ud(70);
Vd(70, function (a) {
    this.M[70] = a;
    a >>>= 3;
    this.s.send("mixer-bass-right", a - (16 > a ? 14 : 16))
});
Ud(71);
Vd(71, function (a) {
    this.M[71] = a;
    a >>>= 3;
    this.s.send("mixer-bass-right", a - (16 > a ? 14 : 16))
});
Ud(128, function () {
    switch (this.fa) {
        case 2:
            return 1;
        case 5:
            return 2;
        case 7:
            return 4;
        case 10:
            return 8;
        default:
            return 0
    }
});
Vd(128, function (a) {
    a & 1 && (this.fa = 2);
    a & 2 && (this.fa = 5);
    a & 4 && (this.fa = 7);
    a & 8 && (this.fa = 10)
});
Ud(129, function () {
    var a = 0;
    switch (this.ec) {
        case 0:
            a |= 1;
            break;
        case 1:
            a |= 2;
            break;
        case 3:
            a |= 8
    }
    switch (this.Id) {
        case 5:
            a |= 32;
            break;
        case 6:
            a |= 64;
            break;
        case 7:
            a |= 128
    }
    return a
});
Vd(129, function (a) {
    a & 1 && (this.ec = 0);
    a & 2 && (this.ec = 1);
    a & 8 && (this.ec = 3);
    a & 32 && (this.Id = 5);
    a & 64 && (this.Id = 6);
    a & 128 && (this.Id = 7)
});
Ud(130, function () {
    for (var a = 32, b = 0; 16 > b; b++) a |= b * this.Md[b];
    return a
});
Gd.prototype.X = function () { };

function Yd(a, b) {
    b || (b = Gd.prototype.X);
    for (var c = 0; c < a.length; c++) Fd[a[c]] = b
}

function Zd(a, b) {
    for (var c = []; a <= b; a++) c.push(a);
    return c
}
var W = new Uint8Array(32);
W[0] = 0;
W[1] = 1;
W[2] = 2;
W[3] = 3;
W[4] = 4;
W[5] = 5;
W[8] = 6;
W[9] = 7;
W[10] = 8;
W[11] = 9;
W[12] = 10;
W[13] = 11;
W[16] = 12;
W[17] = 13;
W[18] = 14;
W[19] = 15;
W[20] = 16;
W[21] = 17;
Yd([1], function (a, b) {
    this.xj[b] = a & 1
});
Yd([2]);
Yd([3]);
Yd([4], function () { });
Yd([5], function () { });
Yd([8], function () { });
Yd(Zd(32, 53), function () { });
Yd(Zd(64, 85), function () { });
Yd(Zd(96, 117), function () { });
Yd(Zd(128, 149), function () { });
Yd(Zd(160, 168), function () { });
Yd(Zd(176, 184), function () { });
Yd([189], function () { });
Yd(Zd(192, 200), function () { });
Yd(Zd(224, 245), function () { });

function Sd(a, b) {
    a.wb = b;
    a.s.send("dac-tell-sampling-rate", b)
}

function Qd(a) {
    a.D = 1 + (a.Ma.shift() << 0) + (a.Ma.shift() << 8)
}

function Rd(a) {
    a.h = 1;
    a.Pb && (a.h *= 2);
    a.l = a.D * a.h;
    a.j = 1024 * a.h;
    a.j = Math.min(Math.max(a.l >> 2 & -4, 32), a.j);
    a.u = !0;
    a.Bb.Hc[a.Cb] || a.ta(a.Cb)
}
Gd.prototype.ta = function (a) {
    a === this.Cb && this.u && (this.u = !1, this.dc = this.l, this.fc = !1, this.s.send("dac-enable"))
};

function Jd(a) {
    var b = Math.min(a.dc, a.j),
        c = Math.floor(b / a.h);
    a.Bb.Re(a.mb, 0, b, a.Cb, d => {
        if (!d) {
            d = a.Pb ? 32767.5 : 127.5;
            var e = a.Qb ? 0 : -1,
                h = a.Jd ? 1 : 2,
                f;
            a.Pb ? f = a.Qb ? a.Z : a.ea : f = a.Qb ? a.aa : a.C;
            for (var g = 0, k = 0; k < c; k++)
                for (var l = Pd(f[k] / d + e), m = 0; m < h; m++) a.ac[g].push(l), g ^= 1;
            Id(a);
            a.dc -= b;
            a.dc || (a.Qa(a.Lc), a.cc && (a.dc = a.l))
        }
    })
}

function Id(a) {
    if (a.ac[0].length) {
        var b = Db(a.ac[0], a.ac[0].length),
            c = Db(a.ac[1], a.ac[1].length);
        a.s.send("dac-send-data", [b, c], [b.buffer, c.buffer])
    }
}
Gd.prototype.Qa = function (a) {
    this.Md[a] = 1;
    this.v.Wa(this.fa)
};

function Ld(a, b) {
    a.Md[b] = 0;
    P(a.v, a.fa)
}

function Pd(a) {
    return -1 * (-1 > a) + 1 * (1 < a) + (-1 <= a && 1 >= a) * a
};

function ca(a, b) {
    this.v = a;
    this.Za = a.A.Za;
    this.Le = b.Le;
    this.K = [244, 26, b.Le & 255, b.Le >> 8, 7, 5, 16, 0, 1, 0, 2, 0, 0, 0, 0, 0, 1, 168, 0, 0, 0, 16, 191, 254, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 244, 26, b.Eg & 255, b.Eg >> 8, 0, 0, 0, 0, 64, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0];
    this.K = this.K.concat(Array(256 - this.K.length).fill(0));
    this.Pa = b.Pa;
    this.Ib = [];
    this.name = b.name;
    this.i = this.u = 0;
    this.o = new Uint32Array(4);
    this.h = new Uint32Array(4);
    for (var c of b.Je.features) this.o[c >>> 5] |= 1 << (c & 31), this.h[c >>> 5] |= 1 << (c & 31);
    b.Je.features.includes(32);
    this.C = !0;
    this.j = 0;
    this.G = !1;
    this.D = 0;
    this.la = [];
    for (var d of b.Je.la) this.la.push(new $d(a, this, d));
    this.l = 0;
    this.g = this.la[0];
    this.lc = 0;
    c = [];
    c.push(ae(this, b.Je));
    c.push(be(b.notification));
    c.push(ce(this, b.lc));
    b.fg && (d = c.push, b = b.fg, b = {
        type: 4,
        je: 3,
        port: b.Sb,
        qf: !1,
        offset: 0,
        Te: new Uint8Array(0),
        yd: b.yd
    }, d.call(c, b));
    de(this, c);
    Ub(a.A.Za, this);
    this.reset()
}

function ae(a, b) {
    return {
        type: 1,
        je: 0,
        port: b.Sb,
        qf: !1,
        offset: 0,
        Te: new Uint8Array(0),
        yd: [{
            bytes: 4,
            name: "device_feature_select",
            read: () => a.u,
            write: c => {
                a.u = c
            }
        }, {
            bytes: 4,
            name: "device_feature",
            read: () => a.o[a.u] || 0,
            write: () => { }
        }, {
            bytes: 4,
            name: "driver_feature_select",
            read: () => a.i,
            write: c => {
                a.i = c
            }
        }, {
            bytes: 4,
            name: "driver_feature",
            read: () => a.h[a.i] || 0,
            write: c => {
                const d = a.o[a.i];
                a.i < a.h.length && (a.h[a.i] = c & d);
                a.C = a.C && !(c & ~d)
            }
        }, {
            bytes: 2,
            name: "msix_config",
            read: () => 65535,
            write: () => { }
        }, {
            bytes: 2,
            name: "num_queues",
            read: () => a.la.length,
            write: () => { }
        }, {
            bytes: 1,
            name: "device_status",
            read: () => a.j,
            write: c => {
                0 === c && a.reset();
                c & ~a.j & 4 && a.j & 64 && (a.G = !0, a.j & 4 && a.Qa(2));
                a.C || (c &= -9);
                a.j = c
            }
        }, {
            bytes: 1,
            name: "config_generation",
            read: () => a.D,
            write: () => { }
        }, {
            bytes: 2,
            name: "queue_select",
            read: () => a.l,
            write: c => {
                a.l = c;
                a.l < a.la.length ? a.g = a.la[a.l] : a.g = null
            }
        }, {
            bytes: 2,
            name: "queue_size",
            read: () => a.g ? a.g.size : 0,
            write: c => {
                if (a.g) {
                    c & c - 1 && (c = 1 << sb(c - 1) + 1);
                    c > a.g.rb && (c = a.g.rb);
                    var d = a.g;
                    d.size = c;
                    d.o = c - 1
                }
            }
        }, {
            bytes: 2,
            name: "queue_msix_vector",
            read: () => 65535,
            write: () => { }
        }, {
            bytes: 2,
            name: "queue_enable",
            read: () => a.g ? a.g.enabled | 0 : 0,
            write: c => {
                a.g && 1 === c && ee(a.g) && (a.g.enabled = !0)
            }
        }, {
            bytes: 2,
            name: "queue_notify_off",
            read: () => a.g ? a.g.Ub : 0,
            write: () => { }
        }, {
            bytes: 4,
            name: "queue_desc (low dword)",
            read: () => a.g ? a.g.l : 0,
            write: c => {
                a.g && (a.g.l = c)
            }
        }, {
            bytes: 4,
            name: "queue_desc (high dword)",
            read: () => 0,
            write: () => { }
        }, {
            bytes: 4,
            name: "queue_avail (low dword)",
            read: () => a.g ? a.g.g : 0,
            write: c => {
                a.g && (a.g.g = c)
            }
        }, {
            bytes: 4,
            name: "queue_avail (high dword)",
            read: () => 0,
            write: () => { }
        }, {
            bytes: 4,
            name: "queue_used (low dword)",
            read: () => a.g ? a.g.h : 0,
            write: c => {
                a.g && (a.g.h = c)
            }
        }, {
            bytes: 4,
            name: "queue_used (high dword)",
            read: () => 0,
            write: () => { }
        }]
    }
}

function be(a) {
    const b = [];
    let c;
    c = a.hi ? 0 : 2;
    for (const [d, e] of a.oh.entries()) b.push({
        bytes: 2,
        name: "notify" + d,
        read: () => 65535,
        write: e || (() => { })
    });
    return {
        type: 2,
        je: 1,
        port: a.Sb,
        qf: !1,
        offset: 0,
        Te: new Uint8Array([c & 255, c >> 8 & 255, c >> 16 & 255, c >> 24]),
        yd: b
    }
}

function ce(a, b) {
    return {
        type: 3,
        je: 2,
        port: b.Sb,
        qf: !1,
        offset: 0,
        Te: new Uint8Array(0),
        yd: [{
            bytes: 1,
            name: "isr_status",
            read: () => {
                const c = a.lc;
                a.lc = 0;
                nc(a.Za, a.Pa);
                return c
            },
            write: () => { }
        }]
    }
}

function de(a, b) {
    let c = a.K[52] = 64;
    var d = c;
    for (const h of b) {
        b = 16 + h.Te.length;
        d = c;
        c = d + b;
        var e = h.yd.reduce((f, g) => f + g.bytes, 0);
        e += h.offset;
        e = 16 > e ? 16 : 1 << sb(e - 1) + 1;
        a.Ib[h.je] = {
            size: e
        };
        a.K[d] = 9;
        a.K[d + 1] = c;
        a.K[d + 2] = b;
        a.K[d + 3] = h.type;
        a.K[d + 4] = h.je;
        a.K[d + 5] = 0;
        a.K[d + 6] = 0;
        a.K[d + 7] = 0;
        a.K[d + 8] = h.offset & 255;
        a.K[d + 9] = h.offset >>> 8 & 255;
        a.K[d + 10] = h.offset >>> 16 & 255;
        a.K[d + 11] = h.offset >>> 24;
        a.K[d + 12] = e & 255;
        a.K[d + 13] = e >>> 8 & 255;
        a.K[d + 14] = e >>> 16 & 255;
        a.K[d + 15] = e >>> 24;
        for (const [f, g] of h.Te.entries()) a.K[d + 16 + f] = g;
        d = 16 + 4 *
            h.je;
        a.K[d] = h.port & 254 | !h.qf;
        a.K[d + 1] = h.port >>> 8 & 255;
        a.K[d + 2] = h.port >>> 16 & 255;
        a.K[d + 3] = h.port >>> 24 & 255;
        d = h.port + h.offset;
        for (const f of h.yd) {
            let g = f.read;
            b = f.write;
            if (!h.qf) {
                e = function (l) {
                    return g(l & -2) >> ((l & 1) << 3) & 255
                };
                const k = function (l) {
                    return g(l & -4) >> ((l & 3) << 3) & 255
                };
                switch (f.bytes) {
                    case 4:
                        M(a.v.B, d, a, k, void 0, g);
                        N(a.v.B, d, a, void 0, void 0, b);
                        break;
                    case 2:
                        M(a.v.B, d, a, e, g);
                        N(a.v.B, d, a, void 0, b);
                        break;
                    case 1:
                        M(a.v.B, d, a, g), N(a.v.B, d, a, b)
                }
            }
            d += f.bytes
        }
    }
    a.K[c] = 9;
    a.K[c + 1] = 0;
    a.K[c + 2] = 20;
    a.K[c + 3] = 5;
    a.K[c +
        4] = 0;
    a.K[c + 5] = 0;
    a.K[c + 6] = 0;
    a.K[c + 7] = 0;
    a.K[c + 8] = 0;
    a.K[c + 9] = 0;
    a.K[c + 10] = 0;
    a.K[c + 11] = 0;
    a.K[c + 12] = 0;
    a.K[c + 13] = 0;
    a.K[c + 14] = 0;
    a.K[c + 15] = 0;
    a.K[c + 16] = 0;
    a.K[c + 17] = 0;
    a.K[c + 18] = 0;
    a.K[c + 19] = 0
}
ca.prototype.ca = function () {
    let a = [];
    a[0] = this.u;
    a[1] = this.i;
    a[2] = this.o;
    a[3] = this.h;
    a[4] = this.C;
    a[5] = this.j;
    a[6] = this.G;
    a[7] = this.D;
    a[8] = this.lc;
    a[9] = this.l;
    return a = a.concat(this.la)
};
ca.prototype.H = function (a) {
    this.u = a[0];
    this.i = a[1];
    this.o = a[2];
    this.h = a[3];
    this.C = a[4];
    this.j = a[5];
    this.G = a[6];
    this.D = a[7];
    this.lc = a[8];
    this.l = a[9];
    let b = 0;
    for (const c of a.slice(10)) this.la[b].H(c), b++;
    this.g = this.la[this.l] || null
};
ca.prototype.reset = function () {
    this.i = this.u = 0;
    this.h.set(this.o);
    this.C = !0;
    this.l = this.j = 0;
    this.g = this.la[0];
    for (const a of this.la) a.reset();
    this.G = !1;
    this.lc = this.D = 0;
    nc(this.Za, this.Pa)
};
ca.prototype.Qa = function (a) {
    this.lc |= a;
    this.Za.Qa(this.Pa)
};

function $d(a, b, c) {
    this.v = a;
    this.ia = b;
    this.rb = this.size = c.rb;
    this.o = this.size - 1;
    this.enabled = !1;
    this.Ub = c.Ub;
    this.j = this.h = this.i = this.g = this.l = 0;
    this.reset()
}
$d.prototype.ca = function () {
    const a = [];
    a[0] = this.size;
    a[1] = this.rb;
    a[2] = this.enabled;
    a[3] = this.Ub;
    a[4] = this.l;
    a[5] = this.g;
    a[6] = this.i;
    a[7] = this.h;
    a[8] = this.j;
    return a
};
$d.prototype.H = function (a) {
    this.size = a[0];
    this.rb = a[1];
    this.enabled = a[2];
    this.Ub = a[3];
    this.l = a[4];
    this.g = a[5];
    this.i = a[6];
    this.h = a[7];
    this.j = a[8];
    this.o = this.size - 1
};
$d.prototype.reset = function () {
    this.enabled = !1;
    this.j = this.h = this.i = this.g = this.l = 0;
    var a = this.rb;
    this.size = a;
    this.o = a - 1
};

function ee(a) {
    return a.l && a.g && a.h
}

function fe(a) {
    return a.v.bb(a.g + 2) - a.i & a.o
}

function da(a) {
    return (a.v.bb(a.g + 2) & a.o) !== a.i
}

function ea(a) {
    da(a);
    var b = a.v.bb(a.g + 4 + 2 * a.i);
    b = new ge(a, b);
    a.i = a.i + 1 & a.o;
    return b
}

function na(a, b) {
    const c = a.v.bb(a.h + 2) + a.j & a.o;
    var d = b.i;
    a.v.ya(a.h + 4 + 8 * c, b.C);
    a.v.ya(a.h + 8 + 8 * c, d);
    a.j++
}

function oa(a) {
    if (0 !== a.j) {
        var b = a.v.bb(a.h + 2) + a.j & 65535;
        a.v.tf(a.h + 2, b);
        a.j = 0;
        0 < (a.ia.h[0] & 536870912) ? (a.v.bb(a.g + 4 + 2 * a.size), a.ia.Qa(1)) : ~a.v.bb(a.g) & 1 && a.ia.Qa(1)
    }
}

function ge(a, b) {
    this.v = a.v;
    this.ia = a.ia;
    this.C = b;
    this.l = [];
    this.af = this.g = this.j = 0;
    this.u = [];
    this.i = this.h = this.o = 0;
    let c = a.l;
    var d = b;
    b = 0;
    let e = a.size,
        h = !1;
    const f = 0 < (this.ia.h[0] & 268435456);
    do {
        var g = a,
            k = c;
        g = {
            ag: g.v.h(k + 16 * d),
            Ol: g.v.h(k + 16 * d + 4),
            qe: g.v.h(k + 16 * d + 8),
            flags: g.v.bb(k + 16 * d + 12),
            next: g.v.bb(k + 16 * d + 14)
        };
        if (f && g.flags & 4) c = g.ag, b = d = 0, e = g.qe / 16;
        else {
            if (g.flags & 2) h = !0, this.u.push(g);
            else {
                if (h) break;
                this.l.push(g);
                this.af += g.qe
            }
            b++;
            if (b > e) break;
            if (g.flags & 1) d = g.next;
            else break
        }
    } while (1)
}

function ra(a, b) {
    let c = 0,
        d = b.length;
    for (; d && a.j !== a.l.length;) {
        var e = a.l[a.j],
            h = e.ag + a.g;
        let l = e.qe - a.g;
        l > d ? (l = d, a.g += d) : (a.j++, a.g = 0);
        e = b;
        var f = e.set,
            g = a.v,
            k = l;
        k && (g.Df(h), g.Df(h + k - 1));
        f.call(e, g.gb.subarray(h, h + k), c);
        c += l;
        d -= l
    }
}

function ma(a, b) {
    let c = 0,
        d = b.length;
    for (; d && a.o !== a.u.length;) {
        var e = a.u[a.o];
        const h = e.ag + a.h;
        e = e.qe - a.h;
        e > d ? (e = d, a.h += d) : (a.o++, a.h = 0);
        ec(a.v, b.subarray(c, c + e), h);
        c += e;
        d -= e
    }
    a.i += c
};

function he(a, b) {
    this.s = b;
    this.rows = 33;
    this.cols = 122;
    this.ports = 4;
    b = [{
        rb: 16,
        Ub: 0
    }, {
        rb: 16,
        Ub: 1
    }, {
        rb: 16,
        Ub: 2
    }, {
        rb: 16,
        Ub: 3
    }];
    for (let c = 1; c < this.ports; ++c) b.push({
        rb: 16,
        Ub: 0
    }), b.push({
        rb: 8,
        Ub: 1
    });
    this.ia = new ca(a, {
        name: "virtio-console",
        Pa: 56,
        Le: 4163,
        Eg: 3,
        Je: {
            Sb: 47104,
            la: b,
            features: [0, 1, 32],
            Mj: () => { }
        },
        notification: {
            Sb: 47360,
            hi: !1,
            oh: [c => {
                for (c = this.ia.la[c]; fe(c) > c.size - 2;) ea(c)
            }, c => {
                const d = this.ia.la[c],
                    e = 3 < c ? c - 3 >> 1 : 0;
                for (; da(d);) {
                    const h = ea(d),
                        f = new Uint8Array(h.af);
                    ra(h, f);
                    this.s.send("virtio-console" +
                        e + "-output-bytes", f);
                    ie(this, c, h)
                }
            }, c => {
                if (2 === c)
                    for (c = this.ia.la[c]; fe(c) > c.size - 2;) ea(c)
            }, c => {
                if (3 === c)
                    for (var d = this.ia.la[c]; da(d);) {
                        var e = ea(d),
                            h = new Uint8Array(e.af);
                        ra(e, h);
                        var f = E(["w", "h", "h"], h, {
                            offset: 0
                        });
                        h = f[0];
                        f = f[1];
                        ie(this, c, e);
                        switch (f) {
                            case 0:
                                for (h = 0; h < this.ports; ++h) je(this, h, 1, 0);
                                break;
                            case 3:
                                ie(this, c, e);
                                je(this, h, 4, 1);
                                f = h;
                                var g = "virtio-" + h;
                                e = ea(this.ia.la[2]);
                                g = (new TextEncoder).encode(g);
                                const k = new Uint8Array(g.length + 9);
                                w(["w", "h", "h"], [f, 7, 1], k, 0);
                                for (f = 0; f < g.length; ++f) k[f +
                                    8] = g[f];
                                k[8 + g.length] = 0;
                                ke(this, 2, e, k);
                                je(this, h, 6, 1);
                                break;
                            case 6:
                                ie(this, c, e);
                                0 === h && le(this, h);
                                break;
                            default:
                                return
                        }
                    }
            }]
        },
        lc: {
            Sb: 46848
        },
        fg: {
            Sb: 46592,
            yd: [{
                bytes: 2,
                name: "cols",
                read: () => this.cols,
                write: () => { }
            }, {
                bytes: 2,
                name: "rows",
                read: () => this.rows,
                write: () => { }
            }, {
                bytes: 4,
                name: "max_nr_ports",
                read: () => this.ports,
                write: () => { }
            }, {
                bytes: 4,
                name: "emerg_wr",
                read: () => 0,
                write: () => { }
            }]
        }
    });
    for (let c = 0; c < this.ports; ++c) {
        const d = 0 === c ? 0 : 2 * c + 2;
        this.s.register("virtio-console" + c + "-input-bytes", function (e) {
            var h = this.ia.la[d];
            da(h) && (h = ea(h), ke(this, d, h, new Uint8Array(e)))
        }, this);
        this.s.register("virtio-console" + c + "-resize", function (e) {
            this.cols = e[0];
            this.rows = e[1];
            ee(this.ia.la[2]) && da(this.ia.la[2]) && le(this, c)
        }, this)
    }
}

function le(a, b) {
    const c = ea(a.ia.la[2]),
        d = new Uint8Array(12);
    w(["w", "h", "h", "h", "h"], [b, 5, 0, a.rows, a.cols], d, 0);
    ke(a, 2, c, d)
}
he.prototype.ca = function () {
    const a = [];
    a[0] = this.ia;
    a[1] = this.rows;
    a[2] = this.cols;
    a[3] = this.ports;
    return a
};
he.prototype.H = function (a) {
    this.ia.H(a[0]);
    this.rows = a[1];
    this.cols = a[2];
    this.ports = a[3]
};
he.prototype.reset = function () {
    this.ia.reset()
};

function je(a, b, c, d) {
    const e = ea(a.ia.la[2]),
        h = new Uint8Array(8);
    w(["w", "h", "h"], [b, c, d], h, 0);
    ke(a, 2, e, h)
}

function ke(a, b, c, d) {
    ma(c, d);
    na(a.ia.la[b], c);
    oa(a.ia.la[b])
}

function ie(a, b, c) {
    ma(c, new Uint8Array(0));
    na(a.ia.la[b], c);
    oa(a.ia.la[b])
};

function me() {
    this.bf = {};
    this.g = void 0
}
me.prototype.register = function (a, b, c) {
    var d = this.bf[a];
    void 0 === d && (d = this.bf[a] = []);
    d.push({
        Bf: b,
        Gg: c
    })
};
me.prototype.unregister = function (a, b) {
    var c = this.bf[a];
    void 0 !== c && (this.bf[a] = c.filter(function (d) {
        return d.Bf !== b
    }))
};
me.prototype.send = function (a, b) {
    if (this.g && (a = this.g.bf[a], void 0 !== a))
        for (var c = 0; c < a.length; c++) {
            var d = a[c];
            d.Bf.call(d.Gg, b)
        }
};

function ne() {
    var a = new me,
        b = new me;
    a.g = b;
    b.g = a;
    return [a, b]
};

function oe() { };

function nb(a, b, c) {
    this.Li = c;
    this.Ha = b;
    pe(this);
    b = Object.create(null);
    b.m = this.Ha.exports.memory;
    for (var d of Object.keys(this.Ha.exports)) d.startsWith("_") || d.startsWith("zstd") || d.endsWith("_js") || (b[d] = this.Ha.exports[d]);
    this.ti = b;
    this.Ga = d = this.Ha.exports.memory;
    this.F = O(Uint32Array, d, 812, 1);
    this.gb = new Uint8Array(0);
    this.ed = new Int32Array(this.gb.buffer);
    this.u = O(Uint8Array, d, 724, 8);
    this.nb = O(Int32Array, d, 736, 8);
    this.mb = O(Uint32Array, d, 768, 8);
    this.o = O(Uint8Array, d, 512, 8);
    this.ea = O(Int32Array,
        d, 800, 1);
    this.Dc = O(Int32Array, d, 564, 1);
    this.Cc = O(Int32Array, d, 568, 1);
    this.Ac = O(Int32Array, d, 572, 1);
    this.zc = O(Int32Array, d, 576, 1);
    this.Xh = O(Int32Array, d, 1128, 1);
    this.fd = O(Uint32Array, d, 540, 8);
    this.eb = O(Int32Array, d, 580, 8);
    this.uc = O(Uint8Array, d, 612, 1);
    this.Z = O(Int32Array, d, 804, 1);
    this.zb = O(Int32Array, d, 808, 1);
    this.Gc = O(Uint8Array, d, 616, 1);
    this.cd = O(Int32Array, d, 620, 1);
    this.wc = O(Int32Array, d, 624, 1);
    this.wh = O(Int32Array, d, 636, 1);
    this.Wh = O(Int32Array, d, 640, 1);
    this.Ah = O(Int32Array, d, 644, 1);
    this.gd = O(Int32Array,
        d, 648, 1);
    this.flags = O(Int32Array, d, 120, 1);
    this.xc = O(Int32Array, d, 100, 1);
    this.ad = O(Int32Array, d, 96, 1);
    this.Ic = O(Int32Array, d, 104, 1);
    O(Int32Array, d, 112, 1);
    this.Cl = O(Uint32Array, d, 960, 2);
    this.A = {};
    this.X = O(Int32Array, d, 556, 1);
    this.jd = O(Int32Array, d, 560, 1);
    O(Uint8Array, d, 548, 1);
    this.Lb = O(Uint8Array, d, 552, 1);
    this.g = [];
    this.j = [];
    this.aa = [];
    this.i = [];
    this.Ec = {
        kg: null,
        Ee: null
    };
    this.Ej = O(Uint32Array, d, 664, 1);
    this.l = O(Int32Array, d, 64, 8);
    this.yc = O(Int32Array, d, 1152, 32);
    this.R = O(Uint8Array, d, 816, 1);
    this.R[0] =
        255;
    this.U = O(Uint8Array, d, 1032, 1);
    this.U[0] = 0;
    this.C = O(Uint16Array, d, 1036, 1);
    this.C[0] = 895;
    this.Fl = O(Uint16Array, d, 1040, 1);
    this.Fl[0] = 0;
    this.L = O(Int32Array, d, 1048, 1);
    this.L[0] = 0;
    this.O = O(Int32Array, d, 1052, 1);
    this.O[0] = 0;
    this.P = O(Int32Array, d, 1044, 1);
    this.P[0] = 0;
    this.D = O(Int32Array, d, 1056, 1);
    this.D[0] = 0;
    this.G = O(Int32Array, d, 1060, 1);
    this.G[0] = 0;
    this.Od = O(Int32Array, d, 832, 32);
    O(Int32Array, d, 824, 1);
    this.sb = O(Uint16Array, d, 668, 8);
    this.vc = O(Int32Array, d, 684, 8);
    this.kd = O(Int32Array, d, 968, 8);
    this.Qi = O(Uint32Array,
        d, 716, 1);
    this.Pi = O(Uint32Array, d, 720, 1);
    this.ub = [];
    this.ig = 0;
    this.nd = [];
    this.B = void 0;
    this.s = a;
    this.re(0, 0);
    qe(this)
}

function pe(a) {
    const b = c => {
        const d = a.Ha.exports[c];
        console.assert(d, "Missing import: " + c);
        return d
    };
    a.ta = b("reset_cpu");
    b("getiopl");
    b("get_eflags");
    a.Kl = b("handle_irqs");
    a.ui = b("main_loop");
    a.Ki = b("set_jit_config");
    a.$d = b("read8");
    a.bb = b("read16");
    a.h = b("read32s");
    a.$f = b("write8");
    a.tf = b("write16");
    a.ya = b("write32");
    a.Df = b("in_mapped_range");
    b("fpu_load_tag_word");
    b("fpu_load_status_word");
    b("fpu_get_sti_f64");
    b("translate_address_system_read_js");
    a.Jl = b("get_seg_cs");
    b("get_real_eip");
    b("clear_tlb");
    a.Il = b("full_clear_tlb");
    a.ai = b("update_state_flags");
    a.re = b("set_tsc");
    a.Mi = b("store_current_tsc");
    a.Ji = b("set_cpuid_level");
    a.wi = b("pic_set_irq");
    a.vi = b("pic_clear_irq");
    a.si = b("jit_clear_cache_js");
    a.Fj = b("jit_dirty_cache");
    a.yl = b("codegen_finalize_finished");
    a.vl = b("allocate_memory");
    a.Si = b("zero_memory");
    a.Oi = b("svga_allocate_memory");
    a.Ni = b("svga_allocate_dest_buffer");
    a.Ri = b("svga_fill_pixel_buffer");
    a.ef = b("svga_mark_dirty");
    a.Bc = b("get_pic_addr_master");
    a.tc = b("get_pic_addr_slave");
    a.mi =
        b("zstd_create_ctx");
    a.pi = b("zstd_get_src_ptr");
    a.oi = b("zstd_free_ctx");
    a.Fe = b("zstd_read");
    a.Ge = b("zstd_read_free");
    a.xi = b("port20_read");
    a.zi = b("port21_read");
    a.Fi = b("portA0_read");
    a.Hi = b("portA1_read");
    a.yi = b("port20_write");
    a.Ai = b("port21_write");
    a.Gi = b("portA0_write");
    a.Ii = b("portA1_write");
    a.Bi = b("port4D0_read");
    a.Di = b("port4D1_read");
    a.Ci = b("port4D0_write");
    a.Ei = b("port4D1_write")
}
nb.prototype.ca = function () {
    var a = [];
    a[0] = this.F[0];
    a[1] = new Uint8Array([...this.u, ...this.o]);
    a[2] = this.nb;
    a[3] = this.mb;
    a[4] = this.ea[0];
    a[5] = this.Cc[0];
    a[6] = this.Dc[0];
    a[7] = this.zc[0];
    a[8] = this.Ac[0];
    a[9] = this.fd[0];
    a[10] = this.eb;
    a[11] = this.uc[0];
    a[13] = this.Z[0];
    a[16] = this.zb[0];
    a[17] = this.Gc[0];
    a[18] = this.cd[0];
    a[19] = this.wc[0];
    a[22] = this.wh[0];
    a[23] = this.Ah[0];
    a[24] = this.Wh[0];
    a[25] = this.gd[0];
    a[26] = this.flags[0];
    a[27] = this.xc[0];
    a[28] = this.Ic[0];
    a[30] = this.ad[0];
    a[37] = this.X[0];
    a[38] = this.jd[0];
    a[39] = this.l;
    a[40] = this.sb;
    a[41] = this.vc;
    a[42] = this.kd;
    this.Mi();
    a[43] = this.Cl;
    a[45] = this.A.rf;
    a[46] = this.A.he;
    a[47] = this.A.wd;
    a[48] = this.A.Za;
    a[49] = this.A.Bb;
    a[50] = this.A.za;
    a[52] = this.A.Ee;
    a[53] = this.A.rg;
    a[54] = this.A.Lg;
    a[55] = this.A.Ld;
    a[56] = this.A.S;
    a[57] = this.A.I;
    a[58] = this.A.Mf;
    a[59] = this.A.hb;
    var b = new Uint8Array(this.Ga.buffer, this.Bc(), 13),
        c = new Uint8Array(this.Ga.buffer, this.tc(), 13),
        d = [],
        e = [];
    d[0] = b[0];
    d[1] = b[1];
    d[2] = b[2];
    d[3] = b[3];
    d[4] = b[4];
    d[5] = e;
    d[6] = b[6];
    d[7] = b[7];
    d[8] = b[8];
    d[9] = b[9];
    d[10] = b[10];
    d[11] = b[11];
    d[12] = b[12];
    e[0] = c[0];
    e[1] = c[1];
    e[2] = c[2];
    e[3] = c[3];
    e[4] = c[4];
    e[5] = null;
    e[6] = c[6];
    e[7] = c[7];
    e[8] = c[8];
    e[9] = c[9];
    e[10] = c[10];
    e[11] = c[11];
    e[12] = c[12];
    a[60] = d;
    a[61] = this.A.xg;
    a[62] = this.ub;
    a[63] = this.A.hd;
    a[64] = this.Xh[0];
    a[66] = this.Od;
    a[67] = this.yc;
    a[68] = this.R[0];
    a[69] = this.U[0];
    a[70] = this.C[0];
    a[71] = this.L[0];
    a[72] = this.O[0];
    a[73] = this.D[0];
    a[74] = this.G[0];
    a[75] = this.P[0];
    c = this.gb.length >> 12;
    b = [];
    for (d = 0; d < c; d++) {
        e = d << 12;
        e = this.ed.subarray(e >> 2, e + 4096 >> 2);
        let g = !0;
        for (let k =
            0; k < e.length; k++)
            if (0 !== e[k]) {
                g = !1;
                break
            } g || b.push(d)
    }
    c = new Eb(c);
    d = new Uint8Array(b.length << 12);
    for (const [g, k] of b.entries()) c.set(k, 1), b = k << 12, d.set(this.gb.subarray(b, b + 4096), g << 12);
    const {
        Nj: h,
        Vi: f
    } = {
        Vi: c,
        Nj: d
    };
    a[77] = h;
    a[78] = new Uint8Array(f.Rb());
    a[79] = this.A.Be;
    a[80] = this.A.Ce;
    a[81] = this.A.De;
    a[82] = this.A.Bd;
    return a
};
nb.prototype.H = function (a) {
    this.F[0] = a[0];
    this.gb.length !== this.F[0] && console.warn("Note: Memory size mismatch. we=" + this.gb.length + " state=" + this.F[0]);
    8 === a[1].length ? (this.u.set(a[1]), this.o.fill(242), this.o[1] = 250) : 16 === a[1].length && (this.u.set(a[1].subarray(0, 8)), this.o.set(a[1].subarray(8, 16)));
    this.nb.set(a[2]);
    this.mb.set(a[3]);
    this.ea[0] = a[4];
    this.Cc[0] = a[5];
    this.Dc[0] = a[6];
    this.zc[0] = a[7];
    this.Ac[0] = a[8];
    this.fd[0] = a[9];
    this.eb.set(a[10]);
    this.uc[0] = a[11];
    this.Z[0] = a[13];
    this.zb[0] = a[16];
    this.Gc[0] = a[17];
    this.cd[0] = a[18];
    this.wc[0] = a[19];
    this.wh[0] = a[22];
    this.Ah[0] = a[23];
    this.Wh[0] = a[24];
    this.gd[0] = a[25];
    this.flags[0] = a[26];
    this.xc[0] = a[27];
    this.Ic[0] = a[28];
    this.ad[0] = a[30];
    this.X[0] = a[37];
    this.jd[0] = a[38];
    this.l.set(a[39]);
    this.sb.set(a[40]);
    this.vc.set(a[41]);
    a[42] && this.kd.set(a[42]);
    this.re(a[43][0], a[43][1]);
    this.A.rf && this.A.rf.H(a[45]);
    this.A.he && this.A.he.H(a[46]);
    this.A.wd && this.A.wd.H(a[47]);
    this.A.Za && this.A.Za.H(a[48]);
    this.A.Bb && this.A.Bb.H(a[49]);
    this.A.za && this.A.za.H(a[50]);
    this.A.Ee && this.A.Ee.H(a[52]);
    this.A.rg && this.A.rg.H(a[53]);
    this.A.Lg && this.A.Lg.H(a[54]);
    this.A.Ld && this.A.Ld.H(a[55]);
    this.A.S && this.A.S.H(a[56]);
    this.A.I && this.A.I.H(a[57]);
    this.A.Mf && this.A.Mf.H(a[58]);
    this.A.hb && this.A.hb.H(a[59]);
    var b = a[60],
        c = new Uint8Array(this.Ga.buffer, this.Bc(), 13),
        d = new Uint8Array(this.Ga.buffer, this.tc(), 13);
    c[0] = b[0];
    c[1] = b[1];
    c[2] = b[2];
    c[3] = b[3];
    c[4] = b[4];
    var e = b[5];
    c[6] = b[6];
    c[7] = b[7];
    c[8] = b[8];
    c[9] = b[9];
    c[10] = b[10];
    c[11] = b[11];
    c[12] = b[12];
    d[0] = e[0];
    d[1] = e[1];
    d[2] =
        e[2];
    d[3] = e[3];
    d[4] = e[4];
    d[6] = e[6];
    d[7] = e[7];
    d[8] = e[8];
    d[9] = e[9];
    d[10] = e[10];
    d[11] = e[11];
    d[12] = e[12];
    this.A.xg && this.A.xg.H(a[61]);
    this.A.Be && this.A.Be.H(a[79]);
    this.A.Ce && this.A.Ce.H(a[80]);
    this.A.De && this.A.De.H(a[81]);
    this.A.Bd && this.A.Bd.H(a[82]);
    this.ub = a[62];
    this.A.hd && this.A.hd.H(a[63]);
    this.Xh[0] = a[64];
    this.Od.set(a[66]);
    this.yc.set(a[67]);
    this.R[0] = a[68];
    this.U[0] = a[69];
    this.C[0] = a[70];
    this.L[0] = a[71];
    this.O[0] = a[72];
    this.D[0] = a[73];
    this.G[0] = a[74];
    this.P[0] = a[75];
    b = new Eb(a[78].buffer);
    a = a[77];
    this.Si(this.F[0]);
    c = this.F[0] >> 12;
    d = 0;
    for (e = 0; e < c; e++)
        if (b.get(e)) {
            const h = d << 12;
            this.gb.set(a.subarray(h, h + 4096), e << 12);
            d++
        } this.ai();
    this.Il();
    this.si()
};

function mc(a) {
    a.ta();
    a.ub = [];
    a.A.rf && a.A.rf.reset();
    a.A.Bd && a.A.Bd.reset();
    qb(a)
}

function re(a, b) {
    1048576 > b ? b = 1048576 : 0 > (b | 0) && (b = Math.pow(2, 31) - 131072);
    b = (b - 1 | 131071) + 1 | 0;
    console.assert(0 === a.F[0], "Expected uninitialised memory");
    a.F[0] = b;
    const c = a.vl(b);
    a.gb = O(Uint8Array, a.Ga, c, b);
    a.ed = O(Uint32Array, a.Ga, c, b >> 2)
}
nb.prototype.Fb = function (a, b) {
    re(this, "number" === typeof a.F ? a.F : 67108864);
    a.Qe && this.Ki(0, 1);
    a.Zc && this.Ji(a.Zc);
    this.Lb[0] = +a.za;
    this.ta();
    var c = new gb(this);
    this.B = c;
    this.Ec.kg = a.Ec;
    this.Ec.Ee = a.Og;
    qb(this);
    if (a.tb) {
        const e = se(this.gb, a.tb, a.Gb, a.Mb || "");
        e && this.nd.push(e)
    }
    M(c, 179, this, function () {
        return 0
    });
    var d = 0;
    M(c, 146, this, function () {
        return d
    });
    N(c, 146, this, function (e) {
        d = e
    });
    M(c, 1297, this, function () {
        return this.ig < this.ub.length ? this.ub[this.ig++] : 0
    });
    N(c, 1296, this, void 0, function (e) {
        function h(k) {
            return new Uint8Array(Int32Array.of(k).buffer)
        }

        function f(k) {
            return k >> 8 | k << 8 & 65280
        }

        function g(k) {
            return k << 24 | k << 8 & 16711680 | k >> 8 & 65280 | k >>> 24
        }
        this.ig = 0;
        if (0 === e) this.ub = h(1431127377);
        else if (1 === e) this.ub = h(0);
        else if (3 === e) this.ub = h(this.F[0]);
        else if (5 === e) this.ub = h(1);
        else if (15 === e) this.ub = h(1);
        else if (13 === e) this.ub = new Uint8Array(16);
        else if (25 === e) {
            e = new Int32Array(4 + 64 * this.nd.length);
            const k = new Uint8Array(e.buffer);
            e[0] = g(this.nd.length);
            for (let l = 0; l < this.nd.length; l++) {
                const {
                    name: m,
                    data: p
                } = this.nd[l], r = 4 + 64 * l;
                e[r >> 2] = g(p.length);
                e[r + 4 >> 2] = f(49152 + l);
                for (let n = 0; n < m.length; n++) k[r + 8 + n] = m.charCodeAt(n)
            }
            this.ub = k
        } else this.ub = 32768 <= e && 49152 > e ? h(0) : 49152 <= e && e - 49152 < this.nd.length ? this.nd[e - 49152].data : h(0)
    });
    M(c, 32, this, this.xi);
    M(c, 33, this, this.zi);
    M(c, 160, this, this.Fi);
    M(c, 161, this, this.Hi);
    N(c, 32, this, this.yi);
    N(c, 33, this, this.Ai);
    N(c, 160, this, this.Gi);
    N(c, 161, this, this.Ii);
    M(c, 1232, this, this.Bi);
    M(c, 1233, this, this.Di);
    N(c, 1232, this, this.Ci);
    N(c, 1233, this, this.Ei);
    this.A = {};
    a.Gj && (this.A.Za = new ic(this), this.Lb[0] && (this.A.hd =
        new od(this), this.A.he = new hd(this), this.A.za = new fd(this)), this.A.wd = new Xc(this), te(this, this.A.wd, a), this.A.Bb = new rc(this), this.A.Ee = new Ec(this, b, a.da || 8388608), this.A.rg = new Tc(this, b), this.A.Lg = new $c(this, 1016, b), a.Be && (this.A.Be = new $c(this, 760, b)), a.Ce && (this.A.Ce = new $c(this, 1E3, b)), a.De && (this.A.De = new $c(this, 744, b)), this.A.Ld = new oc(this, a.$), c = 0, a.I && (this.A.I = new Ib(this, a.I, a.Pc, !1, c++, b)), a.S && (this.A.S = new Ib(this, a.S, void 0, !0, c++, b)), this.A.Mf = new xc(this, b), a.vj && (this.A.hb =
            new vd(this, b, a.Rf, a.Hb)), a.hc && (this.A.rf = new aa(a.hc, this, b)), a.Bd && (this.A.Bd = new he(this, b)), this.A.xg = new Gd(this, b));
    a.Tb && (a = ue(this, a.Tb, a.Gb, a.Mb)) && (this.Ec.kg ? this.nd.push(a) : this.l[0] = jb(this.B, 244))
};

function ue(a, b, c, d) {
    if (8192 > b.byteLength) {
        var e = new Int32Array(2048);
        (new Uint8Array(e.buffer)).set(new Uint8Array(b))
    } else e = new Int32Array(b, 0, 2048);
    for (var h = 0; 8192 > h; h += 4) {
        if (464367618 === e[h >> 2]) {
            var f = e[h + 4 >> 2];
            if (464367618 + f + e[h + 8 >> 2] | 0) continue
        } else continue;
        var g = a;
        M(a.B, 244, a, function () {
            return 0
        }, function () {
            return 0
        }, function () {
            var m = 31860,
                p = 0;
            if (d) {
                p |= 4;
                g.ya(31760, m);
                d += "\x00";
                var r = (new TextEncoder).encode(d);
                ec(g, r, m);
                m += r.length
            }
            if (f & 2) {
                p |= 64;
                r = 0;
                g.ya(31788, 0);
                g.ya(31792, m);
                var n = 0;
                var u = !1;
                for (let q = 0; 4294967296 > q; q += 131072) u && void 0 !== g.g[q >>> 17] ? (g.ya(m, 20), g.ya(m + 4, n), g.ya(m + 8, 0), g.ya(m + 12, q - n), g.ya(m + 16, 0), g.ya(m + 20, 1), m += 24, r += 24, u = !1) : u || void 0 !== g.g[q >>> 17] || (n = q, u = !0);
                g.ya(31788, r)
            }
            g.ya(31744, p);
            r = p = 0;
            if (f & 65536) {
                p = e[h + 16 >> 2];
                var x = e[h + 20 >> 2];
                r = e[h + 24 >> 2];
                n = e[h + 28 >> 2];
                u = new Uint8Array(b, h - (e[h + 12 >> 2] - p), 0 === x ? void 0 : x - p);
                ec(g, u, p);
                p = n | 0;
                r = Math.max(x, r)
            } else if (1179403647 === e[0]) {
                n = new DataView(b);
                const [q, C] = ve(n, we);
                console.assert(52 === C);
                console.assert(1179403647 ===
                    q.uh, "Bad magic");
                console.assert(1 === q.Ed, "Unimplemented: 64 bit elf");
                console.assert(1 === q.data, "Unimplemented: big endian");
                console.assert(1 === q.Dl, "Bad version0");
                console.assert(2 === q.type, "Unimplemented type");
                console.assert(1 === q.El, "Bad version1");
                console.assert(52 === q.rj, "Bad header size");
                console.assert(32 === q.Eh, "Bad program header size");
                console.assert(40 === q.ei, "Bad section header size");
                [p] = xe(new DataView(n.buffer, n.byteOffset + q.Pj, q.Eh * q.Fh), ye, q.Fh);
                xe(new DataView(n.buffer, n.byteOffset +
                    q.rl, q.ei * q.fi), ze, q.fi);
                n = q;
                u = p;
                p = n.eh;
                for (x of u) 0 !== x.type && 1 === x.type && x.Lf + x.lg < g.F[0] && (x.gh && (u = new Uint8Array(b, x.offset, x.gh), ec(g, u, x.Lf)), r = Math.max(r, x.Lf + x.lg), p === n.eh && x.Ng <= p && x.Ng + x.lg > p && (p = p - x.Ng + x.Lf))
            }
            c && (g.ya(31764, 1), g.ya(31768, m), x = r, 0 !== (x & 4095) && (x = (x & -4096) + 4096), r = x + c.byteLength, g.ya(m, x), g.ya(m + 4, r), g.ya(m + 8, 0), g.ya(m + 12, 0), ec(g, new Uint8Array(c), x));
            g.l[3] = 31744;
            g.eb[0] = 1;
            g.ea[0] = 1;
            g.flags[0] = 2;
            g.Z[0] = 1;
            g.zb[0] = 1;
            for (m = 0; 6 > m; m++) g.u[m] = 0, g.nb[m] = 0, g.mb[m] = 4294967295,
                g.sb[m] = 45058;
            g.X[0] = g.Jl() + p | 0;
            g.ai();
            return 732803074
        });
        a.B.Uc(244, a, function (m) {
            console.log("Test exited with code " + zb(m, 2));
            throw "HALT";
        }, function () { }, function () { }, function () { });
        for (let m = 0; 15 >= m; m++) {
            function p(r) {
                r ? this.Wa(m) : P(this, m)
            }
            N(a.B, 8192 + m, a, p, p, p)
        }
        a = new Uint8Array(512);
        (new Uint16Array(a.buffer))[0] = 43605;
        a[2] = 1;
        var k = 3;
        a[k++] = 102;
        a[k++] = 229;
        a[k++] = 244;
        let l = a[k] = 0;
        for (let m = 0; m < a.length; m++) l += a[m];
        a[k] = -l;
        return {
            name: "genroms/multiboot.bin",
            data: a
        }
    }
}

function te(a, b, c) {
    var d = c.Fc || 291;
    b.Y[56] = 1 | d >> 4 & 240;
    b.Y[61] = d & 255;
    b.Y[21] = 128;
    b.Y[22] = 2;
    d = 0;
    1048576 <= a.F[0] && (d = a.F[0] - 1048576 >> 10, d = Math.min(d, 65535));
    b.Y[23] = d & 255;
    b.Y[24] = d >> 8 & 255;
    b.Y[48] = d & 255;
    b.Y[49] = d >> 8 & 255;
    d = 0;
    16777216 <= a.F[0] && (d = a.F[0] - 16777216 >> 16, d = Math.min(d, 65535));
    b.Y[52] = d & 255;
    b.Y[53] = d >> 8 & 255;
    b.Y[91] = 0;
    b.Y[92] = 0;
    b.Y[93] = 0;
    b.Y[20] = 47;
    b.Y[95] = 0;
    c.fh && (b.Y[63] = 1)
}

function qb(a) {
    var b = a.Ec.kg,
        c = a.Ec.Ee;
    if (b) {
        var d = new Uint8Array(b);
        ec(a, d, 1048576 - b.byteLength);
        if (c) {
            var e = new Uint8Array(c);
            ec(a, e, 786432);
            ib(a.B, 4272947200, 1048576, function (h) {
                h = h - 4272947200 | 0;
                return h < e.length ? e[h] : 0
            }, function () { })
        }
        ib(a.B, 4293918720, 1048576, function (h) {
            return this.gb[h & 1048575]
        }.bind(a), function (h, f) {
            this.gb[h & 1048575] = f
        }.bind(a))
    }
}

function Ae(a, b, c, d, e, h) {
    const f = new Uint8Array(a.Ga.buffer, e >>> 0, h >>> 0);
    WebAssembly.instantiate(f, {
        e: a.ti
    }).then(g => {
        a.Ha.Qg.set(b + 1024, g.instance.exports.f);
        a.yl(b, c, d);
        a.ri && a.ri(f)
    })
}
nb.prototype.Wa = function (a) {
    this.wi(a);
    if (this.A.hd) {
        var b = this.A.hd;
        if (!(24 <= a)) {
            var c = 1 << a;
            0 === (b.i & c) && (b.i |= c, 65536 !== (b.g[a] & 98304) && (b.h |= c, ld(b, a)))
        }
    }
};

function P(a, b) {
    a.vi(b);
    if (a.A.hd && (a = a.A.hd, !(24 <= b))) {
        var c = 1 << b;
        (a.i & c) === c && (a.i &= ~c, a.g[b] & 32768 && (a.h &= ~c))
    }
}
"undefined" !== typeof window ? window.CPU = nb : "undefined" !== typeof module && "undefined" !== typeof module.exports ? module.exports.CPU = nb : "function" === typeof importScripts && (self.CPU = nb);

function qe(a) {
    var b = {};
    a.debug = b;
    b.Fb = function () { };
    b.hm = function () { };
    b.$l = function () { };
    b.ca = function () { };
    b.bm = function () { };
    b.am = function () { };
    b.Zl = function () {
        if (a.eb[4] & 32)
            for (var h = 0; 4 > h; h++) a.h(a.eb[3] + 8 * h)
    };
    b.Xl = function () { };
    b.Yl = function () { };
    b.gm = function () { };
    b.mm = function () { };
    b.um = function () { };
    b.Rl = function () { };
    let c, d;
    b.Wl = function (h, f, g) {
        if (!d) {
            if (void 0 === c && (c = "function" === typeof require ? require("./capstone-x86.min.js") : window.cs, void 0 === c)) return;
            d = [new c.Capstone(c.ARCH_X86, c.MODE_16),
            new c.Capstone(c.ARCH_X86, c.MODE_32)
            ]
        }
        try {
            d[h].disasm(f, g).forEach(function (k) {
                oe(zb(k.Ql >>> 0) + ": " + yb(k.bytes.map(l => zb(l, 2).slice(-2)).join(" "), 20) + " " + k.mnemonic + " " + k.op_str)
            })
        } catch (k) {
            oe("Could not disassemble: " + Array.from(f).map(l => zb(l, 2)).join(" "))
        }
    };
    let e;
    b.cm = function (h) {
        if (void 0 === e && (e = "function" === typeof require ? require("./libwabt.js") : new window.WabtModule, void 0 === e)) return;
        h = h.slice();
        try {
            var f = e.readWasm(h, {
                qm: !1
            });
            f.generateNames();
            f.applyNames();
            f.toText({
                fm: !0,
                jm: !0
            })
        } catch (l) {
            var g =
                new Blob([h]),
                k = document.createElement("a");
            k.download = "failed.wasm";
            k.href = window.URL.createObjectURL(g);
            k.dataset.downloadurl = ["application/octet-stream", k.download, k.href].join(":");
            k.click();
            window.URL.revokeObjectURL(k.src);
            console.log(l.toString())
        } finally {
            f && f.wa()
        }
    }
};
const Be = DataView.prototype,
    Ce = {
        size: 1,
        get: Be.getUint8,
        set: Be.setUint8
    },
    De = {
        size: 2,
        get: Be.getUint16,
        set: Be.setUint16
    },
    X = {
        size: 4,
        get: Be.getUint32,
        set: Be.setUint32
    },
    we = Ee([{
        uh: X
    }, {
        Ed: Ce
    }, {
        data: Ce
    }, {
        Dl: Ce
    }, {
        nm: Ce
    }, {
        Ml: Ce
    }, {
        om: function (a) {
            return {
                size: a,
                get: () => -1
            }
        }(7)
    }, {
        type: De
    }, {
        lm: De
    }, {
        El: X
    }, {
        eh: X
    }, {
        Pj: X
    }, {
        rl: X
    }, {
        flags: X
    }, {
        rj: De
    }, {
        Eh: De
    }, {
        Fh: De
    }, {
        ei: De
    }, {
        fi: De
    }, {
        sm: De
    }]);
console.assert(52 === we.reduce((a, b) => a + b.size, 0));
const ye = Ee([{
    type: X
}, {
    offset: X
}, {
    Ng: X
}, {
    Lf: X
}, {
    gh: X
}, {
    lg: X
}, {
    flags: X
}, {
    align: X
}]);
console.assert(32 === ye.reduce((a, b) => a + b.size, 0));
const ze = Ee([{
    name: X
}, {
    type: X
}, {
    flags: X
}, {
    Nl: X
}, {
    offset: X
}, {
    size: X
}, {
    link: X
}, {
    info: X
}, {
    Pl: X
}, {
    em: X
}]);
console.assert(40 === ze.reduce((a, b) => a + b.size, 0));

function Ee(a) {
    return a.map(function (b) {
        var c = Object.keys(b);
        console.assert(1 === c.length);
        c = c[0];
        b = b[c];
        console.assert(0 < b.size);
        return {
            name: c,
            type: b,
            size: b.size,
            get: b.get,
            set: b.set
        }
    })
}

function ve(a, b) {
    const c = {};
    let d = 0;
    for (const e of b) b = e.get.call(a, d, !0), console.assert(void 0 === c[e.name]), c[e.name] = b, d += e.size;
    return [c, d]
}

function xe(a, b, c) {
    const d = [];
    let e = 0;
    for (var h = 0; h < c; h++) {
        const [f, g] = ve(new DataView(a.buffer, a.byteOffset + e, void 0), b);
        d.push(f);
        e += g
    }
    return [d, e]
};

function se(a, b, c, d) {
    var e = new Uint8Array(b);
    const h = new Uint16Array(b);
    var f = new Uint32Array(b),
        g = e[497] || 4;
    if (43605 === h[255] && 1400005704 === (h[257] | h[258] << 16)) {
        var k = e[529];
        e[528] = 255;
        e[529] = k & -97 | 128;
        h[274] = 56832;
        h[253] = 65535;
        d += "\x00";
        f[138] = 581632;
        for (e = 0; e < d.length; e++) a[581632 + e] = d.charCodeAt(e);
        g = 512 * (g + 1);
        d = new Uint8Array(b, 0, g);
        b = new Uint8Array(b, g);
        e = g = 0;
        c && (g = 67108864, e = c.byteLength, a.set(new Uint8Array(c), g));
        f[134] = g;
        f[135] = e;
        a.set(d, 524288);
        a.set(b, 1048576);
        a = new Uint8Array(512);
        (new Uint16Array(a.buffer))[0] =
            43605;
        a[2] = 1;
        c = 3;
        a[c++] = 250;
        a[c++] = 184;
        a[c++] = 32768;
        a[c++] = 128;
        a[c++] = 142;
        a[c++] = 192;
        a[c++] = 142;
        a[c++] = 216;
        a[c++] = 142;
        a[c++] = 224;
        a[c++] = 142;
        a[c++] = 232;
        a[c++] = 142;
        a[c++] = 208;
        a[c++] = 188;
        a[c++] = 57344;
        a[c++] = 224;
        a[c++] = 234;
        a[c++] = 0;
        a[c++] = 0;
        a[c++] = 32800;
        a[c++] = 128;
        f = a[c] = 0;
        for (b = 0; b < a.length; b++) f += a[b];
        a[c] = -f;
        return {
            name: "genroms/kernel.bin",
            data: a
        }
    }
};
var Ja = 32768,
    Ha = 16384,
    Na = 4;

function Fe(a) {
    this.g = [];
    this.C = [];
    this.j = a;
    this.u = {
        jg: 0
    };
    this.h = {};
    this.l = 274877906944;
    this.o = 0;
    this.i = [];
    Ga(this, "", -1)
}
Fe.prototype.ca = function () {
    let a = [];
    a[0] = this.g;
    a[1] = this.u.jg;
    a[2] = [];
    for (const [b, c] of Object.entries(this.h)) 0 === (this.g[b].mode & Ha) && a[2].push([b, c]);
    a[3] = this.l;
    a[4] = this.o;
    return a = a.concat(this.i)
};
Fe.prototype.H = function (a) {
    this.g = a[0].map(b => {
        const c = new Ge(0);
        c.H(b);
        return c
    });
    this.u.jg = a[1];
    this.h = {};
    for (let [b, c] of a[2]) c.buffer.byteLength !== c.byteLength && (c = c.slice()), this.h[b] = c;
    this.l = a[3];
    this.o = a[4];
    this.i = a.slice(5)
};

function Aa(a, b, c) {
    var d = a.g[b];
    0 === d.status || 2 === d.status ? c() : 5 === d.status ? Aa(Z(a, d), d.g, c) : a.C.push({
        id: b,
        Ll: c
    })
}

function He(a, b, c) {
    var d = Ie(a);
    const e = b[0];
    d.size = b[1];
    d.Sc = b[2];
    d.le = d.Sc;
    d.Dd = d.Sc;
    d.mode = b[3];
    d.uid = b[4];
    d.Xa = b[5];
    var h = d.mode & 61440;
    if (h === Ha)
        for (Je(a, d, c, e), c = a.g.length - 1, b = b[6], d = 0; d < b.length; d++) He(a, b[d], c);
    else h === Ja ? (d.status = 2, d.de = b[6], Je(a, d, c, e)) : 40960 === h && (d.nf = b[6], Je(a, d, c, e))
}

function Ke(a, b, c, d) {
    const e = a.g[c],
        h = a.g[b];
    Le(a, b);
    h.oa.has(d);
    h.oa.set(d, c);
    e.pb++;
    Le(a, c) && (e.oa.has(".."), e.oa.has(".") || e.pb++, e.oa.set(".", c), e.oa.set("..", b), h.pb++)
}

function Me(a, b, c) {
    const d = Ta(a, b, c),
        e = a.g[d],
        h = a.g[b];
    Le(a, b);
    h.oa.delete(c) && (e.pb--, Le(a, d) && (e.oa.get(".."), e.oa.delete(".."), h.pb--))
}

function Je(a, b, c, d) {
    -1 !== c ? (a.g.push(b), b.Oc = a.g.length - 1, Ke(a, c, b.Oc, d)) : 0 === a.g.length && (a.g.push(b), b.oa.set(".", 0), b.oa.set("..", 0), b.pb = 2)
}

function Ge(a) {
    this.oa = new Map;
    this.Gf = this.Ef = this.Sc = this.Dd = this.le = this.Oc = this.Xa = this.uid = this.size = this.status = 0;
    this.nf = "";
    this.mode = 493;
    this.La = {
        type: 0,
        version: 0,
        path: a
    };
    this.pb = 0;
    this.de = "";
    this.h = [];
    this.g = this.i = -1
}
Ge.prototype.ca = function () {
    const a = [];
    a[0] = this.mode;
    a[1] = (this.mode & 61440) === Ha ? [...this.oa] : (this.mode & 61440) === Ja ? this.de : 40960 === (this.mode & 61440) ? this.nf : 49152 === (this.mode & 61440) ? [this.Gf, this.Ef] : null;
    a[2] = this.h;
    a[3] = this.status;
    a[4] = this.size;
    a[5] = this.uid;
    a[6] = this.Xa;
    a[7] = this.Oc;
    a[8] = this.le;
    a[9] = this.Dd;
    a[10] = this.Sc;
    a[11] = this.La.version;
    a[12] = this.La.path;
    a[13] = this.pb;
    return a
};
Ge.prototype.H = function (a) {
    this.mode = a[0];
    if ((this.mode & 61440) === Ha) {
        this.oa = new Map;
        for (const [b, c] of a[1]) this.oa.set(b, c)
    } else (this.mode & 61440) === Ja ? this.de = a[1] : 40960 === (this.mode & 61440) ? this.nf = a[1] : 49152 === (this.mode & 61440) && ([this.Gf, this.Ef] = a[1]);
    this.h = [];
    for (const b of a[2]) {
        const c = new Ne;
        c.H(b);
        this.h.push(c)
    }
    this.status = a[3];
    this.size = a[4];
    this.uid = a[5];
    this.Xa = a[6];
    this.Oc = a[7];
    this.le = a[8];
    this.Dd = a[9];
    this.Sc = a[10];
    this.La.type = (this.mode & 61440) >> 8;
    this.La.version = a[11];
    this.La.path =
        a[12];
    this.pb = a[13]
};

function Oe(a, b) {
    Object.assign(b, a, {
        Oc: b.Oc,
        oa: b.oa,
        pb: b.pb
    })
}

function Ie(a) {
    const b = Math.round(Date.now() / 1E3);
    a = new Ge(++a.u.jg);
    a.Dd = a.le = a.Sc = b;
    return a
}

function Ga(a, b, c) {
    var d = a.g[c];
    if (0 <= c && 5 === d.status) return c = d.g, b = Ga(Z(a, d), b, c), Pe(a, d.i, b);
    d = Ie(a);
    d.mode = 511 | Ha;
    0 <= c && (d.uid = a.g[c].uid, d.Xa = a.g[c].Xa, d.mode = a.g[c].mode & 511 | Ha);
    d.La.type = Ha >> 8;
    Je(a, d, c, b);
    return a.g.length - 1
}

function Ia(a, b, c) {
    var d = a.g[c];
    if (5 === d.status) return c = d.g, b = Ia(Z(a, d), b, c), Pe(a, d.i, b);
    d = Ie(a);
    d.uid = a.g[c].uid;
    d.Xa = a.g[c].Xa;
    d.La.type = Ja >> 8;
    d.mode = a.g[c].mode & 438 | Ja;
    Je(a, d, c, b);
    return a.g.length - 1
}

function Fa(a, b, c, d, e) {
    var h = a.g[c];
    if (5 === h.status) return c = h.g, b = Fa(Z(a, h), b, c, d, e), Pe(a, h.i, b);
    h = Ie(a);
    h.Ef = d;
    h.Gf = e;
    h.uid = a.g[c].uid;
    h.Xa = a.g[c].Xa;
    h.La.type = 192;
    h.mode = a.g[c].mode & 438;
    Je(a, h, c, b);
    return a.g.length - 1
}

function Ea(a, b, c, d) {
    var e = a.g[c];
    if (5 === e.status) return c = e.g, b = Ea(Z(a, e), b, c, d), Pe(a, e.i, b);
    e = Ie(a);
    e.uid = a.g[c].uid;
    e.Xa = a.g[c].Xa;
    e.La.type = 160;
    e.nf = d;
    e.mode = 40960;
    Je(a, e, c, b);
    return a.g.length - 1
}
async function Qe(a, b, c, d) {
    var e = a.g[c];
    if (5 === e.status) return c = e.g, d = await Qe(Z(a, e), b, c, d), Pe(a, e.i, d);
    e = Ia(a, b, c);
    b = a.g[e];
    c = new Uint8Array(d.length);
    c.set(d);
    await Re(a, e, c);
    b.size = d.length;
    return e
}

function za(a, b, c) {
    var d = a.g[b];
    if (5 === d.status) return za(Z(a, d), d.g, c);
    (d.mode & 61440) === Ha && Se(a, b);
    return !0
}
async function Va(a, b) {
    var c = a.g[b];
    if (5 === c.status) return await Va(Z(a, c), c.g);
    2 === c.status && a.j.g(c.de);
    c.status === Na && (c.status = -1, await Te(a, b))
}
async function Sa(a, b, c, d, e) {
    if (b === d && c === e) return 0;
    var h = Ta(a, b, c);
    if (-1 === h) return -2;
    var f = b;
    Le(a, f);
    for (var g = ""; 0 !== f;) g = "/" + Ue(a, f) + g, f = Ve(a, f);
    if (-1 !== Ta(a, d, e) && (f = Ua(a, d, e), 0 > f)) return f;
    g = a.g[h];
    var k = a.g[b];
    f = a.g[d];
    if (5 === k.status || 5 === f.status)
        if (5 === k.status && k.i === f.i) {
            if (a = await Sa(Z(a, k), k.g, c, f.g, e), 0 > a) return a
        } else {
            if (0 === J(a, h).Oc || !Le(a, h) && 1 < J(a, h).pb) return -1;
            k = Ta(a, b, c);
            var l = a.g[k],
                m = new Ge(-1);
            Le(a, k);
            Object.assign(m, l);
            const p = a.g.length;
            a.g.push(m);
            m.Oc = p;
            5 === l.status &&
                a.i[l.i].g.set(l.g, p);
            if (5 !== l.status || 0 === l.g) Me(a, b, c), Ke(a, b, p, c);
            if (Le(a, k) && 5 !== l.status)
                for (const [r, n] of m.oa) "." !== r && ".." !== r && Le(a, n) && a.g[n].oa.set("..", p);
            a.h[p] = a.h[k];
            delete a.h[k];
            l.oa = new Map;
            l.pb = 0;
            k = p;
            l = J(a, h);
            m = await Qa(a, k, 0, l.size);
            5 === f.status ? (d = Z(a, f), e = Le(a, k) ? Ga(d, e, f.g) : Ia(d, e, f.g), d = J(d, e), Oe(l, d), We(a, h, f.i, e)) : (g.status = -1, a.i[g.i].g.delete(g.g), Oe(l, g), Ke(a, d, h, e));
            await Oa(a, h, l.size);
            m && m.length && await Ra(a, h, 0, m.length, m);
            if (Le(a, h))
                for (const r of Xe(a, k))
                    if (e = await Sa(a,
                        k, r, h, r), 0 > e) return e;
            await Te(a, k);
            a = Ua(a, b, c);
            if (0 > a) return a
        }
    else Me(a, b, c), Ke(a, d, h, e), g.La.version++;
    return 0
}
async function Ra(a, b, c, d, e) {
    var h = a.g[b];
    if (5 === h.status) b = h.g, await Ra(Z(a, h), b, c, d, e);
    else {
        var f = await a.Rb(b);
        !f || f.length < c + d ? (await Oa(a, b, Math.floor(3 * (c + d) / 2)), h.size = c + d, f = await a.Rb(b)) : h.size < c + d && (h.size = c + d);
        e && f.set(e.subarray(0, d), c);
        await Re(a, b, f)
    }
}
async function Qa(a, b, c, d) {
    const e = a.g[b];
    return 5 === e.status ? (b = e.g, await Qa(Z(a, e), b, c, d)) : await Ye(a, b, c, d)
}

function Ta(a, b, c) {
    b = a.g[b];
    if (5 === b.status) {
        const d = b.g;
        c = Ta(Z(a, b), d, c);
        return -1 === c ? -1 : Ze(a, b.i, c)
    }
    a = b.oa.get(c);
    return void 0 === a ? -1 : a
}

function xa(a) {
    let b = a.g.length;
    for (const {
        h: c,
        g: d
    }
        of a.i) b += xa(c), b -= d.size;
    return b
}

function ya(a) {
    let b = 1048576;
    for (const {
        h: c
    }
        of a.i) b += ya(c);
    return b
}

function sa(a) {
    let b = a.o;
    for (const {
        h: c
    }
        of a.i) b += sa(c);
    return b
}

function wa(a) {
    let b = a.l;
    for (const {
        h: c
    }
        of a.i) b += wa(c);
    return a.l
}

function Ue(a, b) {
    const c = a.g[Ve(a, b)];
    if (5 === c.status) return Ue(Z(a, c), a.g[b].g);
    if (!c) return "";
    for (const [d, e] of c.oa)
        if (e === b) return d;
    return ""
}

function Ca(a, b, c, d) {
    if (Le(a, c)) return -1;
    const e = a.g[b],
        h = a.g[c];
    if (5 === e.status) return 5 !== h.status || h.i !== e.i ? -1 : Ca(Z(a, e), e.g, h.g, d);
    if (5 === h.status) return -1;
    Ke(a, b, c, d);
    return 0
}

function Ua(a, b, c) {
    if ("." === c || ".." === c) return -1;
    var d = Ta(a, b, c);
    const e = a.g[d];
    var h = a.g[b];
    if (5 === h.status) return b = h.g, Ua(Z(a, h), b, c);
    if (h = Le(a, d)) {
        a: if (d = a.g[d], 5 === d.status) var f = Le(Z(a, d), d.g);
        else {
            for (f of d.oa.keys())
                if ("." !== f && ".." !== f) {
                    f = !1;
                    break a
                } f = !0
        } h = !f
    }
    if (h) return -39;
    Me(a, b, c);
    0 === e.pb && (e.status = Na);
    return 0
}
async function Te(a, b) {
    const c = a.g[b];
    5 === c.status ? await Te(Z(a, c), c.g) : (c.size = 0, delete a.h[b])
}
Fe.prototype.Rb = async function (a) {
    const b = this.g[a];
    return this.h[a] ? this.h[a] : 2 === b.status ? await this.j.read(b.de, 0, b.size) : null
};
async function Ye(a, b, c, d) {
    const e = a.g[b];
    return a.h[b] ? a.h[b].subarray(c, c + d) : 2 === e.status ? await a.j.read(e.de, c, d) : null
}
async function Re(a, b, c) {
    a.h[b] = c;
    2 === a.g[b].status && (a.g[b].status = 0, a.j.g(a.g[b].de))
}

function J(a, b) {
    b = a.g[b];
    return 5 === b.status ? J(Z(a, b), b.g) : b
}
async function Oa(a, b, c) {
    var d = J(a, b),
        e = await Ye(a, b, 0, d.size);
    if (c !== d.size) {
        var h = new Uint8Array(c);
        d.size = c;
        e && h.set(e.subarray(0, Math.min(e.length, d.size)), 0);
        await Re(a, b, h)
    }
}

function $e(a, b) {
    b = b.replace("//", "/");
    b = b.split("/");
    0 < b.length && 0 === b[b.length - 1].length && b.pop();
    0 < b.length && 0 === b[0].length && b.shift();
    const c = b.length;
    var d = -1,
        e = 0;
    let h = null;
    for (var f = 0; f < c; f++)
        if (d = e, e = Ta(a, d, b[f]), !h && 5 === a.g[d].status && (h = "/" + b.slice(f).join("/")), -1 === e) return f < c - 1 ? {
            id: -1,
            pg: -1,
            name: b[f],
            ih: h
        } : {
            id: -1,
            pg: d,
            name: b[f],
            ih: h
        };
    return {
        id: e,
        pg: d,
        name: b[f],
        ih: h
    }
}

function Se(a, b) {
    var c = a.g[b];
    if (5 === c.status) Se(Z(a, c), c.g);
    else {
        var d = 0;
        for (const e of c.oa.keys()) d += 24 + af(e);
        b = a.h[b] = new Uint8Array(d);
        c.size = d;
        d = 0;
        for (const [e, h] of c.oa) c = J(a, h), d += w(["Q", "d", "b", "s"], [c.La, d + 13 + 8 + 1 + 2 + af(e), c.mode >> 12, e], b, d)
    }
}

function Pa(a, b, c) {
    a = a.h[b];
    if (c >= a.length) return a.length;
    for (b = 0; ;) {
        const d = E(["Q", "d"], a, {
            offset: b
        })[1];
        if (d > c) break;
        b = d
    }
    return b
}

function Le(a, b) {
    b = a.g[b];
    return 5 === b.status ? Le(Z(a, b), b.g) : (b.mode & 61440) === Ha
}

function Xe(a, b) {
    Le(a, b);
    b = a.g[b];
    if (5 === b.status) return Xe(Z(a, b), b.g);
    a = [];
    for (const c of b.oa.keys()) "." !== c && ".." !== c && a.push(c);
    return a
}

function Ve(a, b) {
    Le(a, b);
    b = a.g[b];
    if (5 !== b.status || 0 === b.g) return b.oa.get("..");
    const c = Ve(Z(a, b), b.g);
    return Ze(a, b.i, c)
}

function We(a, b, c, d) {
    const e = a.g[b];
    5 === e.status && a.i[e.i].g.delete(e.g);
    e.status = 5;
    e.i = c;
    e.g = d;
    a.i[c].g.set(d, b)
}

function Pe(a, b, c) {
    const d = Ie(a),
        e = a.g.length;
    a.g.push(d);
    d.Oc = e;
    We(a, e, b, c);
    return e
}

function Ze(a, b, c) {
    const d = a.i[b].g.get(c);
    return void 0 === d ? Pe(a, b, c) : d
}

function Z(a, b) {
    return a.i[b.i].h
}

function Ne() {
    this.type = 2;
    this.start = 0;
    this.length = Infinity;
    this.h = -1;
    this.g = ""
}
Ne.prototype.ca = function () {
    const a = [];
    a[0] = this.type;
    a[1] = this.start;
    a[2] = Infinity === this.length ? 0 : this.length;
    a[3] = this.h;
    a[4] = this.g;
    return a
};
Ne.prototype.H = function (a) {
    this.type = a[0];
    this.start = a[1];
    this.length = 0 === a[2] ? Infinity : a[2];
    this.h = a[3];
    this.g = a[4]
};

function bf(a) {
    const b = new Ne;
    b.H(a.ca());
    return b
}

function cf(a, b) {
    return b.h === a.h && b.g === a.g && b.type === a.type
}

function df(a, b) {
    return cf(a, b) && b.start + b.length === a.start
}

function Ka(a, b, c, d, e) {
    const h = new Ne;
    h.type = a;
    h.start = b;
    h.length = c;
    h.h = d;
    h.g = e;
    return h
}

function Ma(a, b, c) {
    b = a.g[b];
    if (5 === b.status) {
        var d = b.g;
        return Ma(Z(a, b), d, c)
    }
    for (d of b.h)
        if (!(c.h === d.h && c.g === d.g || 2 === c.type || 2 === d.type || 1 !== c.type && 1 !== d.type || c.start + c.length <= d.start || d.start + d.length <= c.start)) return bf(d);
    return null
}

function La(a, b, c, d) {
    const e = a.g[b];
    if (5 === e.status) return b = e.g, La(Z(a, e), b, c, d);
    c = bf(c);
    if (2 !== c.type && Ma(a, b, c)) return 1;
    for (a = 0; a < e.h.length; a++) {
        d = e.h[a];
        if (d.start + d.length <= c.start) continue;
        if (c.start + c.length <= d.start) break;
        if (d.h !== c.h || d.g !== c.g) continue;
        b = c.start + c.length;
        const h = c.start - d.start,
            f = d.start + d.length - b;
        if (0 < h && 0 < f && d.type === c.type) return 0;
        0 < h && (d.length = h);
        if (0 >= h && 0 < f) d.start = b, d.length = f;
        else if (0 < f) {
            for (; a < e.h.length && e.h[a].start < b;) a++;
            e.h.splice(a, 0, Ka(d.type, b, f, d.h,
                d.g))
        } else 0 >= h && (e.h.splice(a, 1), a--)
    }
    if (2 !== c.type) {
        a = c;
        d = !1;
        for (b = 0; b < e.h.length && !(df(a, e.h[b]) && (e.h[b].length += c.length, a = e.h[b], d = !0), c.start <= e.h[b].start); b++);
        d || (e.h.splice(b, 0, a), b++);
        for (; b < e.h.length; b++)
            if (cf(e.h[b], a)) {
                df(e.h[b], a) && (a.length += e.h[b].length, e.h.splice(b, 1));
                break
            }
    }
    return 0
}

function ef(a, b) {
    b = $e(a, b);
    if (-1 !== b.id) return a = J(a, b.id), Array.from(a.oa.keys()).filter(c => "." !== c && ".." !== c)
}
Fe.prototype.kf = function (a) {
    a = $e(this, a);
    if (-1 === a.id) return Promise.resolve(null);
    const b = J(this, a.id);
    return Qa(this, a.id, 0, b.size)
};

function w(a, b, c, d) {
    for (var e, h = 0, f = 0; f < a.length; f++) switch (e = b[f], a[f]) {
        case "w":
            c[d++] = e & 255;
            c[d++] = e >> 8 & 255;
            c[d++] = e >> 16 & 255;
            c[d++] = e >> 24 & 255;
            h += 4;
            break;
        case "d":
            c[d++] = e & 255;
            c[d++] = e >> 8 & 255;
            c[d++] = e >> 16 & 255;
            c[d++] = e >> 24 & 255;
            c[d++] = 0;
            c[d++] = 0;
            c[d++] = 0;
            c[d++] = 0;
            h += 8;
            break;
        case "h":
            c[d++] = e & 255;
            c[d++] = e >> 8;
            h += 2;
            break;
        case "b":
            c[d++] = e;
            h += 1;
            break;
        case "s":
            var g = d,
                k = 0;
            c[d++] = 0;
            c[d++] = 0;
            h += 2;
            for (var l of e) ff(l.charCodeAt(0)).forEach(function (m) {
                c[d++] = m;
                h += 1;
                k++
            });
            c[g + 0] = k & 255;
            c[g + 1] = k >> 8 & 255;
            break;
        case "Q":
            w(["b", "w", "d"], [e.type, e.version, e.path], c, d), d += 13, h += 13
    }
    return h
}

function E(a, b, c) {
    let d = c.offset;
    for (var e = [], h = 0; h < a.length; h++) switch (a[h]) {
        case "w":
            var f = b[d++];
            f += b[d++] << 8;
            f += b[d++] << 16;
            f += b[d++] << 24 >>> 0;
            e.push(f);
            break;
        case "d":
            f = b[d++];
            f += b[d++] << 8;
            f += b[d++] << 16;
            f += b[d++] << 24 >>> 0;
            d += 4;
            e.push(f);
            break;
        case "h":
            f = b[d++];
            e.push(f + (b[d++] << 8));
            break;
        case "b":
            e.push(b[d++]);
            break;
        case "s":
            f = b[d++];
            f += b[d++] << 8;
            for (var g = "", k = new gf, l = 0; l < f; l++) {
                var m = k.i(b[d++]); - 1 !== m && (g += String.fromCharCode(m))
            }
            e.push(g);
            break;
        case "Q":
            c.offset = d, f = E(["b", "w", "d"], b, c), d =
                c.offset, e.push({
                    type: f[0],
                    version: f[1],
                    path: f[2]
                })
    }
    c.offset = d;
    return e
};

function gf() {
    this.g = new Uint8Array(5);
    this.h = 0;
    this.i = function (a) {
        this.g[this.h] = a;
        this.h++;
        switch (this.h) {
            case 1:
                if (128 > this.g[0]) return this.h = 0, this.g[0];
                break;
            case 2:
                if (192 === (this.g[0] & 224) && 128 === (this.g[1] & 192)) return this.h = 0, (this.g[0] & 31) << 6 | this.g[1] & 63
        }
        return -1
    }
}

function ff(a) {
    if (128 > a) return [a];
    if (2048 > a) return [192 | a >> 6 & 31, 128 | a & 63]
}

function af(a) {
    for (var b = 0, c = 0; c < a.length; c++) b += 128 > a.charCodeAt(c) ? 1 : 2;
    return b
};

function hf(a) {
    function b(n) {
        !n.altKey && g[56] && h(56, !1);
        return e(n, !1)
    }

    function c(n) {
        !n.altKey && g[56] && h(56, !1);
        return e(n, !0)
    }

    function d() {
        for (var n = Object.keys(g), u, x = 0; x < n.length; x++) u = +n[x], g[u] && h(u, !1);
        g = {}
    }

    function e(n, u) {
        if (k.s && (n.shiftKey && n.ctrlKey && (73 === n.keyCode || 74 === n.keyCode || 75 === n.keyCode) || !k.Af ? 0 : n.target ? n.target.classList.contains("phone_keyboard") || "INPUT" !== n.target.nodeName && "TEXTAREA" !== n.target.nodeName : 1)) {
            a: {
                if (void 0 !== n.code) {
                    var x = r[n.code];
                    if (void 0 !== x) break a
                }
                x =
                    l[n.keyCode]
            }
            if (x) return h(x, u, n.repeat),
                n.preventDefault && n.preventDefault(),
                !1; console.log("Missing char in map: keyCode=" + (n.keyCode || -1).toString(16) + " code=" + n.code)
        }
    }

    function h(n, u, x) {
        if (u) g[n] && !x && h(n, !1);
        else if (!g[n]) return;
        (g[n] = u) || (n |= 128);
        255 < n ? (f(n >> 8), f(n & 255)) : f(n)
    }

    function f(n) {
        k.s.send("keyboard-code", n)
    }
    var g = {},
        k = this;
    this.Af = !0;
    var l = new Uint16Array([0, 0, 0, 0, 0, 0, 0, 0, 14, 15, 0, 0, 0, 28, 0, 0, 42, 29, 56, 0, 58, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 57, 57417, 57425, 57423, 57415, 57419, 57416, 57421, 80, 0, 0, 0, 0,
        82, 83, 0, 11, 2, 3, 4, 5, 6, 7, 8, 9, 10, 0, 39, 0, 13, 0, 0, 0, 30, 48, 46, 32, 18, 33, 34, 35, 23, 36, 37, 38, 50, 49, 24, 25, 16, 19, 31, 20, 22, 47, 17, 45, 21, 44, 57435, 57436, 57437, 0, 0, 82, 79, 80, 81, 75, 76, 77, 71, 72, 73, 0, 0, 0, 0, 0, 0, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 87, 88, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 69, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 39, 13, 51, 12, 52, 53, 41, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 26, 43, 27, 40, 0, 57435, 57400, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
    ]),
        m = {
            8: 8,
            10: 13,
            32: 32,
            39: 222,
            44: 188,
            45: 189,
            46: 190,
            47: 191,
            48: 48,
            49: 49,
            50: 50,
            51: 51,
            52: 52,
            53: 53,
            54: 54,
            55: 55,
            56: 56,
            57: 57,
            59: 186,
            61: 187,
            91: 219,
            92: 220,
            93: 221,
            96: 192,
            97: 65,
            98: 66,
            99: 67,
            100: 68,
            101: 69,
            102: 70,
            103: 71,
            104: 72,
            105: 73,
            106: 74,
            107: 75,
            108: 76,
            109: 77,
            110: 78,
            111: 79,
            112: 80,
            113: 81,
            114: 82,
            115: 83,
            116: 84,
            117: 85,
            118: 86,
            119: 87,
            120: 88,
            121: 89,
            122: 90
        },
        p = {
            33: 49,
            34: 222,
            35: 51,
            36: 52,
            37: 53,
            38: 55,
            40: 57,
            41: 48,
            42: 56,
            43: 187,
            58: 186,
            60: 188,
            62: 190,
            63: 191,
            64: 50,
            65: 65,
            66: 66,
            67: 67,
            68: 68,
            69: 69,
            70: 70,
            71: 71,
            72: 72,
            73: 73,
            74: 74,
            75: 75,
            76: 76,
            77: 77,
            78: 78,
            79: 79,
            80: 80,
            81: 81,
            82: 82,
            83: 83,
            84: 84,
            85: 85,
            86: 86,
            87: 87,
            88: 88,
            89: 89,
            90: 90,
            94: 54,
            95: 189,
            123: 219,
            124: 220,
            125: 221,
            126: 192
        },
        r = {
            Escape: 1,
            Digit1: 2,
            Digit2: 3,
            Digit3: 4,
            Digit4: 5,
            Digit5: 6,
            Digit6: 7,
            Digit7: 8,
            Digit8: 9,
            Digit9: 10,
            Digit0: 11,
            Minus: 12,
            Equal: 13,
            Backspace: 14,
            Tab: 15,
            KeyQ: 16,
            KeyW: 17,
            KeyE: 18,
            KeyR: 19,
            KeyT: 20,
            KeyY: 21,
            KeyU: 22,
            KeyI: 23,
            KeyO: 24,
            KeyP: 25,
            BracketLeft: 26,
            BracketRight: 27,
            Enter: 28,
            ControlLeft: 29,
            KeyA: 30,
            KeyS: 31,
            KeyD: 32,
            KeyF: 33,
            KeyG: 34,
            KeyH: 35,
            KeyJ: 36,
            KeyK: 37,
            KeyL: 38,
            Semicolon: 39,
            Quote: 40,
            Backquote: 41,
            ShiftLeft: 42,
            Backslash: 43,
            KeyZ: 44,
            KeyX: 45,
            KeyC: 46,
            KeyV: 47,
            KeyB: 48,
            KeyN: 49,
            KeyM: 50,
            Comma: 51,
            Period: 52,
            Slash: 53,
            IntlRo: 53,
            ShiftRight: 54,
            NumpadMultiply: 55,
            AltLeft: 56,
            Space: 57,
            CapsLock: 58,
            F1: 59,
            F2: 60,
            F3: 61,
            F4: 62,
            F5: 63,
            F6: 64,
            F7: 65,
            F8: 66,
            F9: 67,
            F10: 68,
            NumLock: 69,
            ScrollLock: 70,
            Numpad7: 71,
            Numpad8: 72,
            Numpad9: 73,
            NumpadSubtract: 74,
            Numpad4: 75,
            Numpad5: 76,
            Numpad6: 77,
            NumpadAdd: 78,
            Numpad1: 79,
            Numpad2: 80,
            Numpad3: 81,
            Numpad0: 82,
            NumpadDecimal: 83,
            IntlBackslash: 86,
            F11: 87,
            F12: 88,
            NumpadEnter: 57372,
            ControlRight: 57373,
            NumpadDivide: 57397,
            AltRight: 57400,
            Home: 57415,
            ArrowUp: 57416,
            PageUp: 57417,
            ArrowLeft: 57419,
            ArrowRight: 57421,
            End: 57423,
            ArrowDown: 57424,
            PageDown: 57425,
            Insert: 57426,
            Delete: 57427,
            OSLeft: 57435,
            OSRight: 57436,
            ContextMenu: 57437
        };
    this.s = a;
    this.wa = function () {
        "undefined" !== typeof window && (window.removeEventListener("keyup", b, !1), window.removeEventListener("keydown", c, !1), window.removeEventListener("blur", d, !1))
    };
    this.Fb = function () {
        "undefined" !== typeof window && (this.wa(), window.addEventListener("keyup", b, !1), window.addEventListener("keydown",
            c, !1), window.addEventListener("blur", d, !1))
    };
    this.Fb();
    this.g = function (n) {
        n = {
            keyCode: n
        };
        e(n, !0);
        e(n, !1)
    };
    this.tl = function (n) {
        var u = n.charCodeAt(0);
        u in m ? this.g(m[u]) : u in p ? (f(42), this.g(p[u]), f(170)) : console.log("ascii -> keyCode not found: ", u, n)
    }
};

function jf(a, b) {
    function c(q) {
        if (!x.enabled || !x.Af) return !1;
        var C = b || document.body,
            G;
        if (!(G = document.pointerLockElement)) a: {
            for (q = q.target; q.parentNode;) {
                if (q === C) {
                    G = !0;
                    break a
                }
                q = q.parentNode
            }
            G = !1
        }
        return G
    }

    function d(q) {
        c(q) && (q = q.changedTouches) && q.length && (q = q[q.length - 1], n = q.clientX, u = q.clientY)
    }

    function e() {
        if (m || r || p) x.s.send("mouse-click", [!1, !1, !1]), m = r = p = !1
    }

    function h(q) {
        if (x.s && c(q) && x.Nd) {
            var C = 0,
                G = 0,
                T = q.changedTouches;
            T ? T.length && (T = T[T.length - 1], C = T.clientX - n, G = T.clientY - u, n = T.clientX,
                u = T.clientY, q.preventDefault()) : "number" === typeof q.movementX ? (C = q.movementX, G = q.movementY) : "number" === typeof q.webkitMovementX ? (C = q.webkitMovementX, G = q.webkitMovementY) : "number" === typeof q.mozMovementX ? (C = q.mozMovementX, G = q.mozMovementY) : (C = q.clientX - n, G = q.clientY - u, n = q.clientX, u = q.clientY);
            x.s.send("mouse-delta", [.15 * C, -(.15 * G)]);
            b && x.s.send("mouse-absolute", [q.pageX - b.offsetLeft, q.pageY - b.offsetTop, b.offsetWidth, b.offsetHeight])
        }
    }

    function f(q) {
        c(q) && k(q, !0)
    }

    function g(q) {
        c(q) && k(q, !1)
    }

    function k(q,
        C) {
        x.s && (1 === q.which ? m = C : 2 === q.which ? r = C : 3 === q.which && (p = C), x.s.send("mouse-click", [m, r, p]), q.preventDefault())
    }

    function l(q) {
        if (c(q)) {
            var C = q.wheelDelta || -q.detail;
            0 > C ? C = -1 : 0 < C && (C = 1);
            x.s.send("mouse-wheel", [C, 0]);
            q.preventDefault()
        }
    }
    var m = !1,
        p = !1,
        r = !1,
        n = 0,
        u = 0,
        x = this;
    this.enabled = !1;
    this.Af = !0;
    this.s = a;
    this.s.register("mouse-enable", function (q) {
        this.enabled = q
    }, this);
    this.Nd = !1;
    this.s.register("emulator-stopped", function () {
        this.Nd = !1
    }, this);
    this.s.register("emulator-started", function () {
        this.Nd = !0
    },
        this);
    this.wa = function () {
        "undefined" !== typeof window && (window.removeEventListener("touchstart", d, !1), window.removeEventListener("touchend", e, !1), window.removeEventListener("touchmove", h, !1), window.removeEventListener("mousemove", h, !1), window.removeEventListener("mousedown", f, !1), window.removeEventListener("mouseup", g, !1), window.removeEventListener("wheel", l, {
            passive: !1
        }))
    };
    this.Fb = function () {
        "undefined" !== typeof window && (this.wa(), window.addEventListener("touchstart", d, !1), window.addEventListener("touchend",
            e, !1), window.addEventListener("touchmove", h, !1), window.addEventListener("mousemove", h, !1), window.addEventListener("mousedown", f, !1), window.addEventListener("mouseup", g, !1), window.addEventListener("wheel", l, {
                passive: !1
            }))
    };
    this.Fb()
};

function kf(a) {

}
kf.prototype.wa = function () {
    this.V && this.V.close();
    this.V = null;
    this.g && this.g.oc && this.g.oc.port.close();
    this.g = null
};

function nf(a, b) {
    function c(d) {
        return function (e) {
            d.gain.setValueAtTime(e, this.V.currentTime)
        }
    }
    this.V = b;
    this.sources = new Map;
    this.lh = this.kh = this.G = this.D = this.u = 1;
    this.i = this.V.createBiquadFilter();
    this.j = this.V.createBiquadFilter();
    this.i.type = "highshelf";
    this.j.type = "highshelf";
    this.i.frequency.setValueAtTime(2E3, this.V.currentTime);
    this.j.frequency.setValueAtTime(2E3, this.V.currentTime);
    this.g = this.V.createBiquadFilter();
    this.h = this.V.createBiquadFilter();
    this.g.type = "lowshelf";
    this.h.type = "lowshelf";
    this.g.frequency.setValueAtTime(200, this.V.currentTime);
    this.h.frequency.setValueAtTime(200, this.V.currentTime);
    this.l = this.V.createGain();
    this.o = this.V.createGain();
    this.C = this.V.createChannelMerger(2);
    this.L = this.i;
    this.O = this.j;
    this.i.connect(this.g);
    this.g.connect(this.l);
    this.l.connect(this.C, 0, 0);
    this.j.connect(this.h);
    this.h.connect(this.o);
    this.o.connect(this.C, 0, 1);
    this.C.connect(this.V.destination);
    a.register("mixer-connect", function (d) {
        var e = d[1];
        d = this.sources.get(d[0]);
        void 0 === d || d.connect(e)
    },
        this);
    a.register("mixer-disconnect", function (d) {
        var e = d[1];
        d = this.sources.get(d[0]);
        void 0 === d || d.disconnect(e)
    }, this);
    a.register("mixer-volume", function (d) {
        var e = d[0],
            h = d[1];
        d = Math.pow(10, d[2] / 20);
        e = 0 === e ? this : this.sources.get(e);
        void 0 === e || e.Uf(d, h)
    }, this);
    a.register("mixer-gain-left", function (d) {
        this.kh = Math.pow(10, d / 20);
        this.update()
    }, this);
    a.register("mixer-gain-right", function (d) {
        this.lh = Math.pow(10, d / 20);
        this.update()
    }, this);
    a.register("mixer-treble-left", c(this.i), this);
    a.register("mixer-treble-right",
        c(this.j), this);
    a.register("mixer-bass-left", c(this.g), this);
    a.register("mixer-bass-right", c(this.h), this)
}

function pf(a, b, c) {
    b = new qf(a.V, b, a.L, a.O);
    a.sources.has(c);
    a.sources.set(c, b);
    return b
}
nf.prototype.Uf = function (a, b) {
    void 0 === b && (b = 2);
    switch (b) {
        case 0:
            this.D = a;
            break;
        case 1:
            this.G = a;
            break;
        case 2:
            this.u = a;
            break;
        default:
            return
    }
    this.update()
};
nf.prototype.update = function () {
    var a = this.u * this.G * this.lh;
    this.l.gain.setValueAtTime(this.u * this.D * this.kh, this.V.currentTime);
    this.o.gain.setValueAtTime(a, this.V.currentTime)
};

function qf(a, b, c, d) {
    this.V = a;
    this.o = this.l = !0;
    this.D = this.C = this.j = this.g = 1;
    this.u = a.createChannelSplitter(2);
    this.h = a.createGain();
    this.i = a.createGain();
    b.connect(this.u);
    this.u.connect(this.h, 0);
    this.h.connect(c);
    this.u.connect(this.i, 1);
    this.i.connect(d)
}
qf.prototype.update = function () {
    var a = this.o * this.g * this.j * this.D;
    this.h.gain.setValueAtTime(this.l * this.g * this.j * this.C, this.V.currentTime);
    this.i.gain.setValueAtTime(a, this.V.currentTime)
};
qf.prototype.connect = function (a) {
    var b = !a || 2 === a;
    if (b || 0 === a) this.l = !0;
    if (b || 1 === a) this.o = !0;
    this.update()
};
qf.prototype.disconnect = function (a) {
    var b = !a || 2 === a;
    if (b || 0 === a) this.l = !1;
    if (b || 1 === a) this.o = !1;
    this.update()
};
qf.prototype.Uf = function (a, b) {
    void 0 === b && (b = 2);
    switch (b) {
        case 0:
            this.C = a;
            break;
        case 1:
            this.D = a;
            break;
        case 2:
            this.j = a;
            break;
        default:
            return
    }
    this.update()
};

function of(a, b, c) {
    this.te = b.createOscillator();
    this.te.type = "square";
    this.te.frequency.setValueAtTime(440, b.currentTime);
    this.g = pf(c, this.te, 1);
    this.g.disconnect();
    a.register("pcspeaker-enable", function () {
        var d = c.sources.get(1);
        void 0 === d || d.connect(void 0)
    }, this);
    a.register("pcspeaker-disable", function () {
        var d = c.sources.get(1);
        void 0 === d || d.disconnect(void 0)
    }, this);
    a.register("pcspeaker-update", function (d) {
        var e = d[1],
            h = 0;
        3 === d[0] && (h = Math.min(1193181.6665999999 / e, this.te.frequency.maxValue), h =
            Math.max(h, 0));
        this.te.frequency.setValueAtTime(h, b.currentTime)
    }, this)
}
of.prototype.start = function () {
    this.te.start()
};

function lf(a, b, c) {
    this.s = a;
    this.V = b;
    this.enabled = !1;
    this.wb = 48E3;
    b = function () {
        function e(g) {
            if (0 === g) return 1;
            g *= Math.PI;
            return Math.sin(g) / g
        }

        function h() {
            var g = Reflect.construct(AudioWorkletProcessor, [], h);
            g.D = 3;
            g.l = Array(1024);
            g.u = 0;
            g.L = 0;
            g.o = 0;
            g.G = g.l.length;
            g.C = 0;
            g.O = f;
            g.g = f;
            g.P = 1;
            g.j = 0;
            g.i = 0;
            g.h = 0;
            g.port.onmessage = k => {
                switch (k.data.type) {
                    case "queue":
                        g.ea(k.data.value);
                        break;
                    case "sampling-rate":
                        g.P = k.data.value / sampleRate
                }
            };
            return g
        }
        var f = [new Float32Array(256), new Float32Array(256)];
        Reflect.setPrototypeOf(h.prototype,
            AudioWorkletProcessor.prototype);
        Reflect.setPrototypeOf(h, AudioWorkletProcessor);
        h.prototype.process = h.prototype.process = function (g, k) {
            for (g = 0; g < k[0][0].length; g++) {
                for (var l = 0, m = 0, p = this.h + this.D, r = this.h - this.D + 1; r <= p; r++) {
                    var n = this.j + r;
                    l += this.R(n, 0) * this.U(this.i - r);
                    m += this.R(n, 1) * this.U(this.i - r)
                }
                if (isNaN(l) || isNaN(m)) l = m = 0;
                k[0][0][g] = l;
                k[0][1][g] = m;
                this.i += this.P;
                this.h = Math.floor(this.i)
            }
            k = this.h;
            k += this.D + 2;
            this.i -= this.h;
            this.j += this.h;
            this.h = 0;
            this.Z(k);
            return !0
        };
        h.prototype.U = function (g) {
            return e(g) *
                e(g / this.D)
        };
        h.prototype.R = function (g, k) {
            return 0 > g ? (g += this.O[0].length, this.O[k][g]) : this.g[k][g]
        };
        h.prototype.Z = function (g) {
            var k = this.g[0].length;
            k - this.j < g && (this.aa(), this.j -= k)
        };
        h.prototype.aa = function () {
            this.O = this.g;
            this.g = this.X();
            var g = this.g[0].length;
            if (256 > g) {
                for (var k = this.u, l = 0; 256 > g && l < this.o;) g += this.l[k][0].length, k = k + 1 & this.G - 1, l++;
                g = Math.max(g, 256);
                g = [new Float32Array(g), new Float32Array(g)];
                g[0].set(this.g[0]);
                g[1].set(this.g[1]);
                k = this.g[0].length;
                for (var m = 0; m < l; m++) {
                    var p =
                        this.X();
                    g[0].set(p[0], k);
                    g[1].set(p[1], k);
                    k += p[0].length
                }
                this.g = g
            }
            this.vb()
        };
        h.prototype.vb = function () {
            1024 > this.C / this.P && this.port.postMessage({
                type: "pump"
            })
        };
        h.prototype.ea = function (g) {
            this.o < this.G && (this.l[this.L] = g, this.L = this.L + 1 & this.G - 1, this.o++, this.C += g[0].length, this.vb())
        };
        h.prototype.X = function () {
            if (!this.o) return f;
            var g = this.l[this.u];
            this.l[this.u] = null;
            this.u = this.u + 1 & this.G - 1;
            this.o--;
            this.C -= g[0].length;
            return g
        };
        registerProcessor("dac-processor", h)
    }.toString();
    var d = URL.createObjectURL(new Blob([b.substring(b.indexOf("{") +
        1, b.lastIndexOf("}"))], {
        type: "application/javascript"
    }));
    this.oc = null;
    this.g = this.V.createGain();
    this.V.audioWorklet.addModule(d).then(() => {
        URL.revokeObjectURL(d);
        this.oc = new AudioWorkletNode(this.V, "dac-processor", {
            numberOfInputs: 0,
            numberOfOutputs: 1,
            outputChannelCount: [2],
            parameterData: {},
            processorOptions: {}
        });
        this.oc.port.postMessage({
            type: "sampling-rate",
            value: this.wb
        });
        this.oc.port.onmessage = e => {
            switch (e.data.type) {
                case "pump":
                    this.vb()
            }
        };
        this.oc.connect(this.g)
    });
    this.h = pf(c, this.g, 2);
    this.h.g =
        3;
    a.register("dac-send-data", function (e) {
        this.ug(e)
    }, this);
    a.register("dac-enable", function () {
        this.enabled = !0
    }, this);
    a.register("dac-disable", function () {
        this.enabled = !1
    }, this);
    a.register("dac-tell-sampling-rate", function (e) {
        this.wb = e;
        this.oc && this.oc.port.postMessage({
            type: "sampling-rate",
            value: e
        })
    }, this)
}
lf.prototype.ug = function (a) {
    this.oc && this.oc.port.postMessage({
        type: "queue",
        value: a
    }, [a[0].buffer, a[1].buffer])
};
lf.prototype.vb = function () {
    this.enabled && this.s.send("dac-request-data")
};

function mf(a, b, c) {
    this.s = a;
    this.V = b;
    this.enabled = !1;
    this.wb = 22050;
    this.g = 0;
    this.hf = 1;
    this.Jf = this.V.createBiquadFilter();
    this.Jf.type = "lowpass";
    this.i = this.Jf;
    this.h = pf(c, this.i, 2);
    this.h.g = 3;
    a.register("dac-send-data", function (d) {
        this.ug(d)
    }, this);
    a.register("dac-enable", function () {
        this.enabled = !0;
        this.vb()
    }, this);
    a.register("dac-disable", function () {
        this.enabled = !1
    }, this);
    a.register("dac-tell-sampling-rate", function (d) {
        this.wb = d;
        this.hf = Math.ceil(8E3 / d);
        this.Jf.frequency.setValueAtTime(d / 2, this.V.currentTime)
    },
        this)
}
mf.prototype.ug = function (a) {
    var b = a[0].length,
        c = b / this.wb;
    if (1 < this.hf) {
        var d = this.V.createBuffer(2, b * this.hf, this.wb * this.hf);
        for (var e = d.getChannelData(0), h = d.getChannelData(1), f = 0, g = 0; g < b; g++)
            for (var k = 0; k < this.hf; k++, f++) e[f] = a[0][g], h[f] = a[1][g]
    } else d = this.V.createBuffer(2, b, this.wb), d.copyToChannel ? (d.copyToChannel(a[0], 0), d.copyToChannel(a[1], 1)) : (d.getChannelData(0).set(a[0]), d.getChannelData(1).set(a[1]));
    a = this.V.createBufferSource();
    a.buffer = d;
    a.connect(this.Jf);
    a.addEventListener("ended", this.vb.bind(this));
    d = this.V.currentTime;
    if (this.g < d)
        for (this.g = d, d = .2 - c, b = 0; b <= d;) b += c, this.g += c, setTimeout(() => this.vb(), 1E3 * b);
    a.start(this.g);
    this.g += c;
    setTimeout(() => this.vb(), 0)
};
mf.prototype.vb = function () {
    this.enabled && (.2 < this.g - this.V.currentTime || this.s.send("dac-request-data"))
};

function rf(a, b) {
    function c(g) {
        f.s && f.enabled && (f.h(g.which), g.preventDefault())
    }

    function d(g) {
        var k = g.which;
        8 === k ? (f.h(127), g.preventDefault()) : 9 === k && (f.h(9), g.preventDefault())
    }

    function e(g) {
        if (f.enabled) {
            for (var k = g.clipboardData.getData("text/plain"), l = 0; l < k.length; l++) f.h(k.charCodeAt(l));
            g.preventDefault()
        }
    }

    function h(g) {
        g.target !== a && a.blur()
    }
    var f = this;
    this.enabled = !0;
    this.s = b;
    this.text = "";
    this.j = !1;
    this.i = 0;
    this.s.register("serial0-output-byte", function (g) {
        this.sl(String.fromCharCode(g))
    },
        this);
    this.wa = function () {
        a.removeEventListener("keypress", c, !1);
        a.removeEventListener("keydown", d, !1);
        a.removeEventListener("paste", e, !1);
        window.removeEventListener("mousedown", h, !1)
    };
    this.Fb = function () {
        this.wa();
        a.style.display = "block";
        a.addEventListener("keypress", c, !1);
        a.addEventListener("keydown", d, !1);
        a.addEventListener("paste", e, !1);
        window.addEventListener("mousedown", h, !1)
    };
    this.Fb();
    this.sl = function (g) {
        "\b" === g ? (this.text = this.text.slice(0, -1), this.update()) : "\r" !== g && (this.text += g, "\n" ===
            g && (this.j = !0), this.update())
    };
    this.update = function () {
        var g = Date.now(),
            k = g - this.i;
        16 > k ? void 0 === this.g && (this.g = setTimeout(() => {
            this.g = void 0;
            this.i = Date.now();
            this.l()
        }, 16 - k)) : (void 0 !== this.g && (clearTimeout(this.g), this.g = void 0), this.i = g, this.l())
    };
    this.l = function () {
        a.value = this.text;
        this.j && (this.j = !1, a.scrollTop = 1E9)
    };
    this.h = function (g) {
        f.s && f.s.send("serial0-input", g)
    }
}

function sf(a, b) {
    this.s = b;
    this.g = void 0;
    this.id = 0;
    this.h = [];
    this.url = a;
    this.i = Date.now() - 1E4;
    this.s.register("net" + this.id + "-send", function (c) {
        this.send(c)
    }, this)
}
t = sf.prototype;
t.Aj = function (a) {
    this.s && this.s.send("net" + this.id + "-receive", new Uint8Array(a.data))
};
t.yj = function () {
    this.connect();
    setTimeout(this.connect.bind(this), 1E4)
};
t.Bj = function () {
    for (var a = 0; a < this.h.length; a++) this.send(this.h[a]);
    this.h = []
};
t.zj = function () { };
t.wa = function () {
    this.g && this.g.close()
};
t.connect = function () {
    if ("undefined" !== typeof WebSocket) {
        if (this.g) {
            var a = this.g.readyState;
            if (0 === a || 1 === a) return
        }
        if (!(this.i + 1E4 > Date.now())) {
            this.i = Date.now();
            try {
                this.g = new WebSocket(this.url)
            } catch (b) {
                console.error(b);
                return
            }
            this.g.binaryType = "arraybuffer";
            this.g.onopen = this.Bj.bind(this);
            this.g.onmessage = this.Aj.bind(this);
            this.g.onclose = this.yj.bind(this);
            this.g.onerror = this.zj.bind(this)
        }
    }
};
t.send = function (a) {
    this.g && 1 === this.g.readyState ? this.g.send(a) : (this.h.push(a), 128 < this.h.length && (this.h = this.h.slice(-64)), this.connect())
};

function Ya(a) {
    this.yf = !1;
    this.D = function () { };
    var b = ne();
    this.s = b[0];
    this.Kd = b[1];
    var c, d;
    const e = new WebAssembly.Table({
        element: "anyfunc",
        initial: 1924
    });
    b = {
        cpu_exception_hook: () => this.D(),
        run_hardware_timers: function (f, g) {
            var k = c;
            const l = k.A.Mf.Zb(g, !1),
                m = k.A.wd.Zb(g, !1);
            let p = 100,
                r = 100;
            f && (p = k.A.za.Zb(g), r = k.A.he.Zb(g));
            return Math.min(l, m, p, r)
        },
        cpu_event_halt: () => {
            this.Kd.send("cpu-event-halt")
        },
        abort: function () { },
        microtick: rb,
        get_rand_int: function () {
            return Ab()
        },
        apic_acknowledge_irq: function () {
            var f =
                c.A.he;
            var g = jd(f.i); - 1 === g || jd(f.Ya) >= g || (g & 240) <= (f.u & 240) ? f = -1 : (kd(f.i, g), nd(f.Ya, g), id(f), f = g);
            return f
        },
        stop_idling: function () {
            return c.Li()
        },
        io_port_read8: function (f) {
            f = c.B.ports[f];
            return f.$d.call(f.xa)
        },
        io_port_read16: function (f) {
            f = c.B.ports[f];
            return f.bb.call(f.xa)
        },
        io_port_read32: function (f) {
            return jb(c.B, f)
        },
        io_port_write8: function (f, g) {
            f = c.B.ports[f];
            f.$f.call(f.xa, g)
        },
        io_port_write16: function (f, g) {
            f = c.B.ports[f];
            f.tf.call(f.xa, g)
        },
        io_port_write32: function (f, g) {
            f = c.B.ports[f];
            f.ya.call(f.xa,
                g)
        },
        mmap_read8: function (f) {
            return c.g[f >>> 17](f)
        },
        mmap_read16: function (f) {
            var g = c.g[f >>> 17];
            return g(f) | g(f + 1 | 0) << 8
        },
        mmap_read32: function (f) {
            return c.aa[f >>> 17](f)
        },
        mmap_write8: function (f, g) {
            c.j[f >>> 17](f, g)
        },
        mmap_write16: function (f, g) {
            var k = c.j[f >>> 17];
            k(f, g & 255);
            k(f + 1 | 0, g >> 8)
        },
        mmap_write32: function (f, g) {
            c.i[f >>> 17](f, g)
        },
        mmap_write64: function (f, g, k) {
            var l = c.i[f >>> 17];
            l(f, g);
            l(f + 4, k)
        },
        mmap_write128: function (f, g, k, l, m) {
            var p = c.i[f >>> 17];
            p(f, g);
            p(f + 4, k);
            p(f + 8, l);
            p(f + 12, m)
        },
        log_from_wasm: function (f,
            g) {
            [...(new Uint8Array(d.buffer, f >>> 0, g >>> 0))]
        },
        console_log_from_wasm: function (f, g) {
            f = String.fromCharCode(...(new Uint8Array(d.buffer, f >>> 0, g >>> 0)));
            console.error(f)
        },
        dbg_trace_from_wasm: function () { },
        codegen_finalize: (f, g, k, l, m) => {
            Ae(c, f, g, k, l, m)
        },
        jit_clear_func: f => {
            c.Ha.Qg.set(f + 1024, null)
        },
        jit_clear_all_funcs: () => {
            const f = c.Ha.Qg;
            for (let g = 0; 900 > g; g++) f.set(1024 + g, null)
        },
        __indirect_function_table: e
    };
    let h = a.vm;
    h || (h = f => new Promise(g => {
        let k = "v86.wasm",
            l = "v86-fallback.wasm";
        if (a.Gl) {
            k = a.Gl;
            const m =
                k.lastIndexOf("/");
            l = (-1 === m ? "" : k.substr(0, m)) + "/" + l
        } else "undefined" === typeof window && "string" === typeof __dirname ? (k = __dirname + "/" + k, l = __dirname + "/" + l) : (k = "build/" + k, l = "build/" + l);
        Hb(k, {
            done: async m => {
                try {
                    const {
                        instance: p
                    } = await WebAssembly.instantiate(m, f);
                    this.C = m;
                    g(p.exports)
                } catch (p) {
                    Hb(l, {
                        done: async r => {
                            const {
                                instance: n
                            } = await WebAssembly.instantiate(r, f);
                            this.C = r;
                            g(n.exports)
                        }
                    })
                }
            },
            progress: m => {
                this.Kd.send("download-progress", {
                    We: 0,
                    Ve: 1,
                    Xe: k,
                    lengthComputable: m.lengthComputable,
                    total: m.total,
                    loaded: m.loaded
                })
            }
        })
    }));
    h({
        env: b
    }).then(f => {
        d = f.memory;
        f.rust_init();
        f = this.g = new lb(this.Kd, {
            exports: f,
            Qg: e
        });
        c = f.v;
        tf(this, f, a)
    });
    this.i = null;
    this.G = 0
}
async function tf(a, b, c) {
    function d(r, n) {
        switch (r) {
            case "hda":
                h.I = this.ob.I = n;
                break;
            case "hdb":
                h.Pc = this.ob.Pc = n;
                break;
            case "cdrom":
                h.S = this.ob.S = n;
                break;
            case "fda":
                h.$ = this.ob.$ = n;
                break;
            case "fdb":
                h.ne = this.ob.ne = n;
                break;
            case "multiboot":
                h.Tb = this.ob.Tb = n.buffer;
                break;
            case "bzimage":
                h.tb = this.ob.tb = n.buffer;
                break;
            case "initrd":
                h.Gb = this.ob.Gb = n.buffer;
                break;
            case "bios":
                h.Ec = n.buffer;
                break;
            case "vga_bios":
                h.Og = n.buffer;
                break;
            case "initial_state":
                h.kc = n.buffer;
                break;
            case "fs9p_json":
                h.jh = n
        }
    }
    async function e() {
        if (h.hc &&
            h.jh && !h.kc) {
            var r = h.hc,
                n = h.jh;
            if (3 !== n.version) throw "The filesystem JSON format has changed. Please update your fs2json (https://github.com/copy/fs2json) and recreate the filesystem JSON.";
            var u = n.fsroot;
            r.o = n.size;
            for (n = 0; n < u.length; n++) He(r, u[n], 0);
            if (c.Ie) {
                const {
                    Wi: x,
                    Dj: q
                } = uf(h.hc), [C, G] = await Promise.all([h.hc.kf(q), h.hc.kf(x)]);
                d.call(this, "initrd", new tb(C.buffer));
                d.call(this, "bzimage", new tb(G.buffer))
            }
        }
        this.Yb && this.Yb.show && this.Yb.show();
        this.s.send("cpu-init", h);
        h.kc && (b.xe(h.kc), h.kc =
            void 0);
        c.Ti && this.s.send("cpu-run");
        this.Kd.send("emulator-loaded")
    }
    a.s.register("emulator-stopped", function () {
        this.yf = !1
    }, a);
    a.s.register("emulator-started", function () {
        this.yf = !0
    }, a);
    var h = {};
    a.ob = {
        $: void 0,
        ne: void 0,
        I: void 0,
        Pc: void 0,
        S: void 0
    };
    var f = c.Fc ? c.Fc : c.$ ? 801 : c.I ? 786 : 291;
    h.za = c.za;
    h.Qe = c.Qe;
    h.Gj = !0;
    h.F = c.F || 67108864;
    h.da = c.da || 8388608;
    h.Fc = f;
    h.fh = c.fh || !1;
    h.$ = void 0;
    h.ne = void 0;
    h.Be = c.Be;
    h.Ce = c.Ce;
    h.De = c.De;
    h.Mb = c.Mb;
    h.Rf = c.Rf;
    h.Hb = c.Hb;
    h.Zc = c.Zc;
    h.Bd = c.Bd;
    c.se ? a.se = c.se(a.s) : c.mg && ("fetch" ===
        c.mg ? a.se = new vf(a.s) : a.se = new sf(c.mg, a.s));
    h.vj = !0;
    c.Ul || (a.u = new hf(a.s));
    c.Vl || (a.l = new jf(a.s, c.yg));
    c.yg ? a.h = new Wa(c.yg, a.s) : c.rm && (a.h = new wf(a.s));
    c.pl && (a.Yb = new rf(c.pl, a.s));
    c.ql && (a.Yb = new eb(c.ql, a.s));
    c.ij || (a.j = new kf(a.s));
    var g = [];
    f = (r, n) => {
        if (n)
            if (n.get && n.set && n.load) g.push({
                name: r,
                cf: n
            });
            else {
                if ("bios" === r || "vga_bios" === r || "initial_state" === r || "multiboot" === r || "bzimage" === r || "initrd" === r) n.async = !1;
                n.url && !n.async ? g.push({
                    name: r,
                    url: n.url,
                    size: n.size
                }) : g.push({
                    name: r,
                    cf: xb(n,
                        a.ni.bind(a))
                })
            }
    };
    c.state && console.warn("Warning: Unknown option 'state'. Did you mean 'initial_state'?");
    f("bios", c.Ec);
    f("vga_bios", c.Og);
    f("cdrom", c.S);
    f("hda", c.I);
    f("hdb", c.Pc);
    f("fda", c.$);
    f("fdb", c.ne);
    f("initial_state", c.kc);
    f("multiboot", c.Tb);
    f("bzimage", c.tb);
    f("initrd", c.Gb);
    if (c.filesystem) {
        f = c.filesystem.Ui;
        var k = c.filesystem.uf;
        let r = new xf;
        k && (r = new yf(r, k));
        h.hc = a.hc = new Fe(r);
        if (f) {
            if ("object" === typeof f) {
                var l = f.size;
                f = f.url
            }
            g.push({
                name: "fs9p_json",
                url: f,
                size: l,
                ie: !0
            })
        }
    }
    var m =
        g.length,
        p = function (r) {
            if (r === m) setTimeout(e.bind(this), 0);
            else {
                var n = g[r];
                n.cf ? (n.cf.onload = function () {
                    d.call(this, n.name, n.cf);
                    p(r + 1)
                }.bind(this), n.cf.load()) : Hb(n.url, {
                    done: function (u) {
                        if (n.url.endsWith(".zst") && "initial_state" !== n.name) {
                            var x = n.size,
                                q = new Uint8Array(u);
                            u = this.g.v;
                            this.o = u.mi(q.length);
                            (new Uint8Array(u.Ga.buffer)).set(q, u.pi(this.o));
                            q = u.Fe(this.o, x);
                            const C = u.Ga.buffer.slice(q, q + x);
                            u.Ge(q, x);
                            u.oi(this.o);
                            this.o = null;
                            u = C
                        }
                        d.call(this, n.name, n.ie ? u : new tb(u));
                        p(r + 1)
                    }.bind(this),
                    progress: function (u) {
                        200 === u.target.status ? a.Kd.send("download-progress", {
                            We: r,
                            Ve: m,
                            Xe: n.url,
                            lengthComputable: u.lengthComputable,
                            total: u.total || n.size,
                            loaded: u.loaded
                        }) : a.Kd.send("download-error", {
                            We: r,
                            Ve: m,
                            Xe: n.url,
                            request: u.target
                        })
                    },
                    ie: n.ie
                })
            }
        }.bind(a);
    p(0)
}
t = Ya.prototype;
t.ni = async function (a, b) {
    if (!this.i) {
        const c = URL.createObjectURL(new Blob(["(" + function () {
            let d;
            globalThis.onmessage = function (e) {
                if (d) {
                    var h = e.data.src,
                        f = e.data.hj;
                    e = e.data.id;
                    var g = d.exports,
                        k = g.zstd_create_ctx(h.length);
                    (new Uint8Array(g.memory.buffer)).set(h, g.zstd_get_src_ptr(k));
                    h = g.zstd_read(k, f);
                    var l = g.memory.buffer.slice(h, h + f);
                    g.zstd_read_free(h, f);
                    g.zstd_free_ctx(k);
                    postMessage({
                        result: l,
                        id: e
                    }, [l])
                } else f = Object.fromEntries("cpu_exception_hook run_hardware_timers cpu_event_halt microtick get_rand_int apic_acknowledge_irq stop_idling io_port_read8 io_port_read16 io_port_read32 io_port_write8 io_port_write16 io_port_write32 mmap_read8 mmap_read16 mmap_read32 mmap_write8 mmap_write16 mmap_write32 mmap_write64 mmap_write128 codegen_finalize jit_clear_func jit_clear_all_funcs".split(" ").map(m => [m, () => console.error("zstd worker unexpectedly called " + m)])), f.__indirect_function_table = new WebAssembly.Table({
                    element: "anyfunc",
                    initial: 1024
                }), f.abort = () => {
                    throw Error("zstd worker aborted");
                }, f.log_from_wasm = f.console_log_from_wasm = (m, p) => {
                    console.log(String.fromCharCode(...(new Uint8Array(d.exports.memory.buffer, m, p))))
                }, f.dbg_trace_from_wasm = () => console.trace(), d = new WebAssembly.Instance(new WebAssembly.Module(e.data), {
                    env: f
                })
            }
        }.toString() + ")()"], {
            type: "text/javascript"
        }));
        this.i = new Worker(c);
        URL.revokeObjectURL(c);
        this.i.postMessage(this.C, [this.C])
    }
    return new Promise(c => {
        const d = this.G++,
            e = async h => {
                h.data.id === d && (this.i.removeEventListener("message", e), c(h.data.result))
            };
        this.i.addEventListener("message", e);
        this.i.postMessage({
            src: b,
            hj: a,
            id: d
        }, [b.buffer])
    })
};

function uf(a) {
    const b = (ef(a, "/") || []).map(e => "/" + e);
    a = (ef(a, "/boot/") || []).map(e => "/boot/" + e);
    let c, d;
    for (const e of [].concat(b, a)) {
        const h = /old/i.test(e) || /fallback/i.test(e),
            f = /initrd/i.test(e) || /initramfs/i.test(e);
        !/vmlinuz/i.test(e) && !/bzimage/i.test(e) || d && h || (d = e);
        !f || c && h || (c = e)
    }
    c && d || (console.log("Failed to find bzimage or initrd in filesystem. Files:"), console.log(b.join(" ")), console.log(a.join(" ")));
    return {
        Dj: c,
        Wi: d
    }
}
t.Sf = async function () {
    this.s.send("cpu-run")
};
t.stop = async function () {
    this.yf && await new Promise(a => {
        const b = () => {
            this.s.unregister("emulator-stopped", b);
            a()
        };
        K(this, "emulator-stopped", b);
        this.s.send("cpu-stop")
    })
};
t.wa = async function () {
    await this.stop();
    this.g.wa();
    this.u && this.u.wa();
    this.se && this.se.wa();
    this.l && this.l.wa();
    this.h && this.h.wa();
    this.Yb && this.Yb.wa();
    this.j && this.j.wa()
};
t.vg = function () {
    this.s.send("cpu-restart")
};

function K(a, b, c) {
    a.s.register(b, c, a)
}
t.xe = async function (a) {
    this.g.xe(a)
};
t.lf = async function () {
    return this.g.lf()
};
t.Nd = function () {
    return this.yf
};
t.mf = async function (a) {
    if (a.url && !a.async) Hb(a.url, {
        done: b => {
            this.g.v.A.Ld.mf(new tb(b))
        }
    });
    else {
        const b = xb(a, this.ni.bind(this));
        b.onload = () => {
            this.g.v.A.Ld.mf(b)
        };
        await b.load()
    }
};
t.zf = function () {
    this.g.v.A.Ld.zf()
};

function db(a, b) {
    for (var c = 0; c < b.length; c++) a.s.send("keyboard-code", b[c])
}

function Xa(a, b) {
    for (var c = 0; c < b.length; c++) a.u.tl(b[c])
}

function cb() {
    var a = document.body,
        b = a.requestPointerLock || a.mozRequestPointerLock || a.webkitRequestPointerLock;
    b && b.call(a)
}
t.bj = async function (a, b) {
    var c = this.hc;
    if (c) {
        var d = a.split("/");
        d = d[d.length - 1];
        a = $e(c, a).pg;
        if ("" !== d && -1 !== a) await Qe(c, d, a, b);
        else return Promise.reject(new zf)
    }
};
t.kf = async function (a) {
    var b = this.hc;
    if (b) return (a = await b.kf(a)) ? a : Promise.reject(new zf)
};

function zf() {
    this.message = "File not found"
}
zf.prototype = Error.prototype;
"undefined" !== typeof window ? (window.V86Starter = Ya, window.V86 = Ya) : "undefined" !== typeof module && "undefined" !== typeof module.exports ? (module.exports.V86Starter = Ya, module.exports.V86 = Ya) : "function" === typeof importScripts && (self.V86Starter = Ya, self.V86 = Ya);

function wf(a) {
    var b, c, d, e, h;
    this.s = a;
    a.register("screen-set-mode", function (f) {
        this.Bg(f)
    }, this);
    a.register("screen-fill-buffer-end", function (f) {
        this.Mg(f[0])
    }, this);
    a.register("screen-put-char", function (f) {
        this.tg(f[0], f[1], f[2], f[3], f[4], f[5])
    }, this);
    a.register("screen-text-scroll", function (f) {
        console.log("scroll", f)
    }, this);
    a.register("screen-update-cursor", function (f) {
        this.fe(f[0], f[1])
    }, this);
    a.register("screen-update-cursor-scanline", function (f) {
        this.Ad(f[0], f[1], f[2])
    }, this);
    a.register("screen-set-size-text",
        function (f) {
            this.ce(f[0], f[1])
        }, this);
    a.register("screen-set-size-graphical", function (f) {
        this.be(f[0], f[1])
    }, this);
    this.tg = function (f, g, k, l, m, p) {
        f < h && g < e && (f = 4 * (f * e + g), d[f] = k, d[f + 1] = l, d[f + 2] = m, d[f + 3] = p)
    };
    this.wa = function () { };
    this.Bg = function () { };
    this.Yg = function () { };
    this.ce = function (f, g) {
        if (f !== e || g !== h) d = new Int32Array(f * g * 4), e = f, h = g
    };
    this.be = function () { };
    this.Cg = function () { };
    this.Ad = function () { };
    this.fe = function (f, g) {
        if (f !== b || g !== c) b = f, c = g
    };
    this.Mg = function () { }
};
const Af = (new Date("1970-01-01T00:00:00Z")).getTime() - (new Date("1900-01-01T00:00:00Z")).getTime(),
    Bf = Math.pow(2, 32),
    Cf = [118, 56, 54];

function vf(a, b) {
    b = b || {};
    this.s = a;
    this.id = b.id || 0;
    this.qc = new Uint8Array((b.qc || "52:54:0:1:2:3").split(":").map(function (c) {
        return parseInt(c, 16)
    }));
    this.Xb = new Uint8Array((b.Xb || "192.168.86.1").split(".").map(function (c) {
        return parseInt(c, 10)
    }));
    this.Pg = new Uint8Array((b.Pg || "192.168.86.100").split(".").map(function (c) {
        return parseInt(c, 10)
    }));
    this.Ff = void 0 === b.Ff || !!b.Ff;
    new Uint8Array(6);
    this.Wc = {};
    this.dg = b.dg;
    this.s.register("net" + this.id + "-mac", function (c) {
        new Uint8Array(c.split(":").map(function (d) {
            return parseInt(d,
                16)
        }))
    }, this);
    this.s.register("net" + this.id + "-send", function (c) {
        this.send(c)
    }, this)
}
vf.prototype.wa = function () { };

function Df(a) {
    return a[0] << 24 | a[1] << 16 | a[2] << 8 | a[3]
}
vf.prototype.fetch = async function (a, b) {
    this.dg && (a = this.dg + encodeURIComponent(a));
    try {
        const c = await fetch(a, b),
            d = await c.arrayBuffer();
        return [c, d]
    } catch (c) {
        return console.warn("Fetch Failed: " + a + "\n" + c), b = new Headers, b.set("Content-Type", "text/plain"), [{
            status: 502,
            statusText: "Fetch Error",
            headers: b
        }, (new TextEncoder).encode(`Fetch ${a} failed:\n\n${c.stack}`).buffer]
    }
};
vf.prototype.send = function (a) {
    var b = {};
    Ef(a, b);
    if (b.N) {
        a = {};
        a.Ia = {
            Nc: 2048,
            src: this.qc,
            va: b.Ia.src
        };
        a.ka = {
            ud: 6,
            src: b.ka.va,
            va: b.ka.src
        };
        var c = [b.ka.src.join("."), b.N.qa, b.ka.va.join("."), b.N.na].join(":");
        if (b.N.zd && 80 === b.N.na) {
            this.Wc[c] = new Ff;
            this.Wc[c].state = "syn-received";
            this.Wc[c].hb = this;
            this.Wc[c].Kj = Ff.prototype.Lj;
            this.Wc[c].xl = c;
            this.Wc[c].accept(b);
            return
        }
        if (!this.Wc[c]) {
            c = b.N.Ab;
            if (b.N.Ye || b.N.zd) c += 1;
            a.N = {
                qa: b.N.na,
                na: b.N.qa,
                Ca: c,
                Ab: b.N.Ca + (b.N.zd ? 1 : 0),
                lb: b.N.lb,
                wg: !0,
                Ta: b.N.zd
            };
            this.$a(Gf(a));
            return
        }
        this.Wc[c].process(b)
    }
    if (b.Ua && 1 === b.Ua.og && 2048 === b.Ua.sg) {
        if (!this.Ff && (Df(b.Ua.Wf) & 4294967040) !== (Df(this.Xb) & 4294967040)) return;
        a = {};
        a.Ia = {
            Nc: 2054,
            src: this.qc,
            va: b.Ia.src
        };
        a.Ua = {
            $e: 1,
            sg: 2048,
            og: 2,
            Dg: this.qc,
            Vf: b.Ua.Wf,
            ji: b.Ia.src,
            Wf: b.Ua.Vf
        };
        this.$a(Gf(a))
    }
    if (b.fb) {
        a = {};
        a.Ia = {
            Nc: 2048,
            src: this.qc,
            va: b.Ia.src
        };
        a.ka = {
            ud: 17,
            src: this.Xb,
            va: b.ka.src
        };
        a.kb = {
            qa: 53,
            na: b.kb.qa
        };
        c = [];
        for (var d = 0; d < b.fb.vd.length; ++d) {
            let e = b.fb.vd[d];
            switch (e.type) {
                case 1:
                    c.push({
                        name: e.name,
                        type: e.type,
                        Ed: e.Ed,
                        Yf: 600,
                        data: [192, 168, 87, 1]
                    })
            }
        }
        a.fb = {
            id: b.fb.id,
            flags: 33152,
            vd: b.fb.vd,
            He: c
        };
        this.$a(Gf(a))
    } else b.ha ? (a = Date.now() + Af, c = a % 1E3 / 1E3 * Bf, d = {}, d.Ia = {
        Nc: 2048,
        src: this.qc,
        va: b.Ia.src
    }, d.ka = {
        ud: 17,
        src: b.ka.va,
        va: b.ka.src
    }, d.kb = {
        qa: 123,
        na: b.kb.qa
    }, d.ha = Object.assign({}, b.ha), d.ha.flags = 36, d.ha.Gh = 10, d.ha.yh = b.ha.Ig, d.ha.xh = b.ha.Hg, d.ha.$h = a / 1E3, d.ha.Zh = c, d.ha.Ig = a / 1E3, d.ha.Hg = c, d.ha.ii = 2, this.$a(Gf(d))) : b.Eb && 8 === b.Eb.type ? (a = {}, a.Ia = {
        Nc: 2048,
        src: this.qc,
        va: b.Ia.src
    }, a.ka = {
        ud: 1,
        src: this.Xb,
        va: b.ka.src
    }, a.Eb = {
        type: 0,
        code: b.Eb.code,
        data: b.Eb.data
    }, this.$a(Gf(a))) : b.ra ? (a = {}, a.Ia = {
        Nc: 2048,
        src: this.qc,
        va: b.Ia.src
    }, a.ka = {
        ud: 17,
        src: this.Xb,
        va: this.Pg
    }, a.kb = {
        qa: 67,
        na: 68
    }, a.ra = {
        $e: 1,
        ph: 6,
        qh: 0,
        Rg: b.ra.Rg,
        bi: 0,
        flags: 0,
        Xg: 0,
        li: Df(this.Pg),
        gi: Df(this.Xb),
        nh: Df(this.Xb),
        xf: b.ra.xf
    }, c = [], (d = b.ra.options.find(function (e) {
        return 53 === e[0]
    })) && 3 === d[2] && (b.ra.ue = 3), 1 === b.ra.ue && (a.ra.ue = 2, c.push(new Uint8Array([53, 1, 2]))), 3 === b.ra.ue && (a.ra.ue = 2, c.push(new Uint8Array([53, 1, 5])), c.push(new Uint8Array([51, 4, 8, 0, 0, 0]))), b = [this.Xb[0],
    this.Xb[1], this.Xb[2], this.Xb[3]
    ], c.push(new Uint8Array([1, 4, 255, 255, 255, 0])), this.Ff && (c.push(new Uint8Array([3, 4].concat(b))), c.push(new Uint8Array([6, 4].concat(b)))), c.push(new Uint8Array([54, 4].concat(b))), c.push(new Uint8Array([60, 3].concat(Cf))), c.push(new Uint8Array([255, 0])), a.ra.options = c, this.$a(Gf(a))) : b.kb && 8 === b.kb.na && (a = {}, a.Ia = {
        Nc: 2048,
        src: this.qc,
        va: b.Ia.src
    }, a.ka = {
        ud: 17,
        src: b.ka.va,
        va: b.ka.src
    }, a.kb = {
        qa: b.kb.na,
        na: b.kb.qa,
        data: (new TextEncoder).encode(b.kb.gj)
    }, this.$a(Gf(a)))
};
vf.prototype.$a = function (a) {
    this.s.send("net" + this.id + "-receive", new Uint8Array(a))
};

function Hf(a) {
    return [0, 1, 2, 3, 4, 5].map(b => a[b].toString(16)).map(b => 1 === b.length ? "0" + b : b).join(":")
}

function Ef(a, b) {
    var c = (new DataView(a.buffer, a.byteOffset, a.byteLength)).getUint16(12),
        d = {
            Nc: c,
            va: a.subarray(0, 6),
            Sl: Hf(a.subarray(0, 6)),
            src: a.subarray(6, 12),
            tm: Hf(a.subarray(6, 12))
        };
    b.Ia = d;
    a = a.subarray(14, a.length);
    if (2048 === c) {
        var e = new DataView(a.buffer, a.byteOffset, a.byteLength);
        d = a[0] >> 4 & 15;
        var h = a[0] & 15,
            f = e.getUint8(1),
            g = e.getUint16(2),
            k = e.getUint8(8);
        c = e.getUint8(9);
        e = e.getUint16(10);
        b.ka = {
            version: d,
            im: h,
            wl: f,
            qe: g,
            Yf: k,
            ud: c,
            km: e,
            src: a.subarray(12, 16),
            va: a.subarray(16, 20)
        };
        a = a.subarray(4 * h,
            g);
        1 === c && (d = a, h = new DataView(d.buffer, d.byteOffset, d.byteLength), d = {
            type: h.getUint8(0),
            code: h.getUint8(1),
            Wg: h.getUint16(2),
            data: d.subarray(4)
        }, b.Eb = d);
        6 === c && (d = a, f = new DataView(d.buffer, d.byteOffset, d.byteLength), h = {
            qa: f.getUint16(0),
            na: f.getUint16(2),
            Ca: f.getUint32(4),
            Ab: f.getUint32(8),
            pj: f.getUint8(12) >> 4,
            lb: f.getUint16(14),
            Wg: f.getUint16(16),
            Al: f.getUint16(18)
        }, f = f.getUint8(13), h.Ye = !!(f & 1), h.zd = !!(f & 2), h.wg = !!(f & 4), h.Vh = !!(f & 8), h.Ta = !!(f & 16), h.zl = !!(f & 32), h.qj = !!(f & 64), h.cj = !!(f & 128), b.N = h,
            b.jb = d.subarray(4 * h.pj));
        if (17 === c) {
            c = new DataView(a.buffer, a.byteOffset, a.byteLength);
            c = {
                qa: c.getUint16(0),
                na: c.getUint16(2),
                qe: c.getUint16(4),
                Wg: c.getUint16(6),
                gj: (new TextDecoder).decode(a.subarray(8))
            };
            if (67 === c.na || 67 === c.qa) {
                h = a.subarray(8);
                d = new DataView(h.buffer, h.byteOffset, h.byteLength);
                d = {
                    ue: d.getUint8(0),
                    $e: d.getUint8(1),
                    ph: d.getUint8(2),
                    qh: d.getUint8(3),
                    Rg: d.getUint32(4),
                    bi: d.getUint16(8),
                    flags: d.getUint16(10),
                    Xg: d.getUint32(12),
                    li: d.getUint32(16),
                    gi: d.getUint32(20),
                    nh: d.getUint32(24),
                    xf: h.subarray(28, 44),
                    uh: d.getUint32(236),
                    options: []
                };
                h = h.subarray(240);
                for (f = 0; f < h.length; ++f) g = f, 0 !== h[f] && (++f, k = h[f], f += k, d.options.push(h.subarray(g, g + k + 2)));
                b.ra = d;
                b.Tl = d.options
            }
            53 !== c.na && 53 !== c.qa || If(a.subarray(8), b);
            123 === c.na && (a = a.subarray(8), a = new DataView(a.buffer, a.byteOffset, a.byteLength), b.ha = {
                flags: a.getUint8(0),
                ii: a.getUint8(1),
                Gh: a.getUint8(2),
                precision: a.getUint8(3),
                nl: a.getUint32(4),
                ol: a.getUint32(8),
                il: a.getUint32(12),
                kl: a.getUint32(16),
                jl: a.getUint32(20),
                yh: a.getUint32(24),
                xh: a.getUint32(28),
                $h: a.getUint32(32),
                Zh: a.getUint32(36),
                Ig: a.getUint32(40),
                Hg: a.getUint32(44)
            });
            b.kb = c
        }
    } else 2054 === c && (c = new DataView(a.buffer, a.byteOffset, a.byteLength), c = {
        $e: c.getUint16(0),
        sg: c.getUint16(2),
        og: c.getUint16(6),
        Dg: a.subarray(8, 14),
        Vf: a.subarray(14, 18),
        ji: a.subarray(18, 24),
        Wf: a.subarray(24, 28)
    }, b.Ua = c)
}

function If(a, b) {
    function c() {
        let l = [],
            m;
        do m = d.getUint8(g), l.push((new TextDecoder).decode(a.subarray(g + 1, g + 1 + m))), g += m + 1; while (0 < m);
        return l
    }
    let d = new DataView(a.buffer, a.byteOffset, a.byteLength),
        e = {
            id: d.getUint16(0),
            flags: d.getUint16(2),
            vd: [],
            He: []
        };
    var h = d.getUint16(4);
    let f = d.getUint16(6);
    d.getUint16(8);
    d.getUint16(10);
    let g = 12;
    for (var k = 0; k < h; k++) e.vd.push({
        name: c(),
        type: d.getInt16(g),
        Ed: d.getInt16(g + 2)
    }), g += 4;
    for (h = 0; h < f; h++) {
        k = {
            name: c(),
            type: d.getInt16(g),
            Ed: d.getUint16(g + 2),
            Yf: d.getUint32(g +
                4)
        };
        g += 8;
        let l = d.getUint16(g);
        g += 2;
        k.data = a.subarray(g, g + l);
        g += l;
        e.He.push(k)
    }
    b.fb = e
}

function Gf(a) {
    let b = new Uint8Array(1518);
    var c = new DataView(b.buffer, b.byteOffset, b.byteLength);
    c.setUint16(12, a.Ia.Nc);
    for (var d = 0; 6 > d; ++d) c.setUint8(d, a.Ia.va[d]);
    for (d = 0; 6 > d; ++d) c.setUint8(6 + d, a.Ia.src[d]);
    c = 14;
    if (a.Ua) {
        d = b.subarray(14);
        d = new DataView(d.buffer, d.byteOffset, d.byteLength);
        d.setUint16(0, a.Ua.$e);
        d.setUint16(2, a.Ua.sg);
        d.setUint8(4, a.Ua.Dg.length);
        d.setUint8(5, a.Ua.Vf.length);
        d.setUint16(6, a.Ua.og);
        for (var e = 0; 6 > e; ++e) d.setUint8(8 + e, a.Ua.Dg[e]), d.setUint8(18 + e, a.Ua.ji[e]);
        for (e = 0; 4 >
            e; ++e) d.setUint8(14 + e, a.Ua.Vf[e]), d.setUint8(24 + e, a.Ua.Wf[e]);
        c += 28
    }
    if (a.ka) {
        e = b.subarray(14);
        d = new DataView(e.buffer, e.byteOffset, e.byteLength);
        var h = 20;
        if (a.Eb) {
            var f = e.subarray(20);
            f = new DataView(f.buffer, f.byteOffset, f.byteLength);
            f.setUint8(0, a.Eb.type);
            f.setUint8(1, a.Eb.code);
            f.setUint16(2, 0);
            for (var g = 0; g < a.Eb.data.length; ++g) f.setUint8(g + 4, a.Eb.data[g]);
            g = 0;
            for (var k = 0; k < 4 + a.Eb.data.length; k += 2) g += f.getUint16(k), 65535 < g && (g = (g & 65535) + 1);
            f.setUint16(2, g ^ 65535);
            h += 4 + a.Eb.data.length
        }
        if (a.kb) {
            g =
                e.subarray(20);
            f = new DataView(g.buffer, g.byteOffset, g.byteLength);
            if (a.ra) {
                var l = g.subarray(8);
                l = new DataView(l.buffer, l.byteOffset, l.byteLength);
                l.setUint8(0, a.ra.ue);
                l.setUint8(1, a.ra.$e);
                l.setUint8(2, a.ra.ph);
                l.setUint8(3, a.ra.qh);
                l.setUint32(4, a.ra.Rg);
                l.setUint16(8, a.ra.bi);
                l.setUint16(10, a.ra.flags);
                l.setUint32(12, a.ra.Xg);
                l.setUint32(16, a.ra.li);
                l.setUint32(20, a.ra.gi);
                l.setUint32(24, a.ra.nh);
                for (var m = 0; m < a.ra.xf.length; ++m) l.setUint8(28 + m, a.ra.xf[m]);
                l.setUint32(236, 1669485411);
                m = 240;
                for (var p of a.ra.options)
                    for (g =
                        0; g < p.length; ++g) l.setUint8(m, p[g]), ++m;
                l = m
            } else if (a.fb) {
                p = g.subarray(8);
                p = new DataView(p.buffer, p.byteOffset, p.byteLength);
                p.setUint16(0, a.fb.id);
                p.setUint16(2, a.fb.flags);
                p.setUint16(4, a.fb.vd.length);
                p.setUint16(6, a.fb.He.length);
                g = 12;
                for (k = 0; k < a.fb.vd.length; ++k) {
                    var r = a.fb.vd[k];
                    for (m of r.name) {
                        p.setUint8(g, m.length);
                        g++;
                        for (let n = 0; n < m.length; ++n) p.setUint8(g, m.charCodeAt(n)), g++
                    }
                    p.setUint16(g, r.type);
                    g += 2;
                    p.setUint16(g, r.Ed);
                    g += 2
                }
                for (k = 0; k < a.fb.He.length; ++k) {
                    m = a.fb.He[k];
                    for (l of m.name)
                        for (p.setUint8(g,
                            l.length), g++, r = 0; r < l.length; ++r) p.setUint8(g, l.charCodeAt(r)), g++;
                    p.setUint16(g, m.type);
                    g += 2;
                    p.setUint16(g, m.Ed);
                    g += 2;
                    p.setUint32(g, m.Yf);
                    g += 4;
                    p.setUint16(g, m.data.length);
                    g += 2;
                    for (r = 0; r < m.data.length; ++r) p.setUint8(g + r, m.data[r]);
                    g += m.data.length
                }
                l = g
            } else if (a.ha) l = g.subarray(8), l = new DataView(l.buffer, l.byteOffset, l.byteLength), l.setUint8(0, a.ha.flags), l.setUint8(1, a.ha.ii), l.setUint8(2, a.ha.Gh), l.setUint8(3, a.ha.precision), l.setUint32(4, a.ha.nl), l.setUint32(8, a.ha.ol), l.setUint32(12, a.ha.il),
                l.setUint32(16, a.ha.kl), l.setUint32(20, a.ha.jl), l.setUint32(24, a.ha.yh), l.setUint32(28, a.ha.xh), l.setUint32(32, a.ha.$h), l.setUint32(36, a.ha.Zh), l.setUint32(40, a.ha.Ig), l.setUint32(44, a.ha.Hg), l = 48;
            else
                for (m = a.kb.data, l = m.length, p = 0; p < m.length; ++p) f.setUint8(8 + p, m[p]);
            f.setUint16(0, a.kb.qa);
            f.setUint16(2, a.kb.na);
            f.setUint16(4, 8 + l);
            f.setUint16(6, 0);
            h += 8 + l
        }
        if (a.N) {
            l = h;
            e = e.subarray(20);
            e = new DataView(e.buffer, e.byteOffset, e.byteLength);
            m = 0;
            p = a.N;
            p.Ye && (m |= 1);
            p.zd && (m |= 2);
            p.wg && (m |= 4);
            p.Vh && (m |= 8);
            p.Ta &&
                (m |= 16);
            p.zl && (m |= 32);
            p.qj && (m |= 64);
            p.cj && (m |= 128);
            e.setUint16(0, p.qa);
            e.setUint16(2, p.na);
            e.setUint32(4, p.Ca);
            e.setUint32(8, p.Ab);
            e.setUint8(12, 80);
            e.setUint8(13, m);
            e.setUint16(14, p.lb);
            e.setUint16(16, 0);
            e.setUint16(18, p.Al || 0);
            p = 20 + (a.jb ? a.jb.length : 0);
            m = 0;
            h = new Uint8Array(12);
            h = new DataView(h.buffer, h.byteOffset, h.byteLength);
            for (f = 0; 4 > f; ++f) h.setUint8(f, a.ka.src[f]), h.setUint8(4 + f, a.ka.va[f]);
            h.setUint8(9, 6);
            h.setUint16(10, p);
            for (p = 0; 6 > p; ++p) m += h.getUint16(p << 1), 65535 < m && (m = (m & 65535) + 1);
            for (p =
                0; 10 > p; ++p) m += e.getUint16(p << 1), 65535 < m && (m = (m & 65535) + 1);
            if (a.jb)
                for (p = 0; p < a.jb.length; p += 2) m += a.jb[p] << 8 | a.jb[p + 1], 65535 < m && (m = (m & 65535) + 1);
            e.setUint16(16, m ^ 65535);
            h = l + 20
        }
        if (a.jb) {
            for (e = 0; e < a.jb.length; ++e) d.setUint8(h + e, a.jb[e]);
            h += a.jb.length
        }
        d.setUint8(0, 69);
        d.setUint8(1, a.ka.wl || 0);
        d.setUint16(2, h);
        d.setUint16(4, a.ka.id || 0);
        d.setUint8(6, 64);
        d.setUint8(8, a.ka.Yf || 32);
        d.setUint8(9, a.ka.ud);
        d.setUint16(10, 0);
        for (e = 0; 4 > e; ++e) d.setUint8(12 + e, a.ka.src[e]), d.setUint8(16 + e, a.ka.va[e]);
        a = 0;
        for (e = 0; 10 >
            e; ++e) a += d.getUint16(e << 1), 65535 < a && (a = (a & 65535) + 1);
        d.setUint16(10, a ^ 65535);
        c += h
    }
    return b.subarray(0, c)
}

function Ff() {
    this.g = new Uint8Array([]);
    this.D = []
}

function Jf(a) {
    let b = {};
    b.Ia = {
        Nc: 2048,
        src: a.l,
        va: a.j
    };
    b.ka = {
        ud: 6,
        src: a.C,
        va: a.u
    };
    b.N = {
        qa: a.qa,
        na: a.na,
        lb: a.lb,
        Ab: a.Ta,
        Ca: a.Ca,
        Ta: !0
    };
    return b
}
t = Ff.prototype;
t.connect = function () {
    this.Ca = 1338;
    this.Ta = 1;
    this.i = 0;
    this.lb = 64240;
    this.state = "syn-sent";
    let a = Jf(this);
    a.ka.id = 2345;
    a.N = {
        qa: this.qa,
        na: this.na,
        Ca: 1337,
        Ab: 0,
        lb: 0,
        zd: !0
    };
    this.hb.$a(Gf(a))
};
t.accept = function (a) {
    this.Ca = 1338;
    this.Ta = a.N.Ca + 1;
    this.i = a.N.Ca;
    this.l = this.hb.qc;
    this.C = a.ka.va;
    this.qa = a.N.na;
    this.j = a.Ia.src;
    this.na = a.N.qa;
    this.u = a.ka.src;
    this.lb = a.N.lb;
    let b = Jf(this);
    b.N = {
        qa: this.qa,
        na: this.na,
        Ca: 1337,
        Ab: this.Ta,
        lb: a.N.lb,
        zd: !0,
        Ta: !0
    };
    this.hb.$a(Gf(b))
};
t.process = function (a) {
    if (a.N.zd) this.Ta = a.N.Ca + 1, this.i = a.N.Ca, this.h = a.N.Ab, this.hb.$a(Gf(Jf(this))), this.state = "established", this.o && this.o.call(this);
    else if (a.N.Ye) {
        this.Ta !== a.N.Ca && ++this.Ta;
        var b = Jf(this);
        b.N = {
            qa: a.N.na,
            na: a.N.qa,
            Ca: this.Ca,
            Ab: this.Ta,
            lb: a.N.lb,
            wg: !0
        };
        delete this.hb.Wc[this.xl];
        this.hb.$a(Gf(b))
    } else this.Ta !== a.N.Ca ? (b = Jf(this), b.N = {
        qa: a.N.na,
        na: a.N.qa,
        Ca: this.Ca,
        Ab: this.Ta,
        lb: a.N.lb,
        Ta: !0
    }, this.hb.$a(Gf(b))) : (this.D.push(`${a.N.Ca - this.i}:${a.N.Ca + a.jb.length - this.i}`), this.Ta +=
        a.jb.length, 0 < a.jb.length && this.hb.$a(Gf(Jf(this))), void 0 === this.h && (this.h = a.N.Ab), b = a.N.Ab - this.h, 0 < b && (this.h = a.N.Ab, this.g = this.g.subarray(b), this.Ca += b, this.pending = !1), 0 > b || (this.Kj(a.jb), this.vb()))
};
t.Lj = async function (a) {
    this.read = this.read || "";
    if ((this.read += (new TextDecoder).decode(a)) && -1 !== this.read.indexOf("\r\n\r\n")) {
        var b = this.read.indexOf("\r\n\r\n");
        a = this.read.substring(0, b).split(/\r\n/);
        b = this.read.substring(b + 4);
        this.read = "";
        let c = a[0].split(" "),
            d = new URL("http://host" + c[1]);
        /^https?:/.test(c[1]) && (d = new URL(c[1]));
        let e = new Headers;
        for (let k = 1; k < a.length; ++k) {
            let l = a[k].split(": "),
                m = l[0].toLowerCase(),
                p = l[1];
            "host" === m ? d.host = p : 1 < m.length && e.set(l[0], p)
        }
        this.name = d.href;
        a = {
            method: c[0],
            headers: e
        }; - 1 !== ["put", "post"].indexOf(a.method.toLowerCase()) && (a.body = b);
        const [h, f] = await this.hb.fetch(d.href, a), g = [`HTTP/1.1 ${h.status} ${h.statusText}`, "connection: Closed", "content-length: " + f.byteLength];
        g.push("x-was-fetch-redirected: " + String(h.redirected));
        g.push("x-fetch-resp-url: " + String(h.url));
        h.headers.forEach(function (k, l) {
            -1 === ["content-encoding", "connection", "content-length", "transfer-encoding"].indexOf(l.toLowerCase()) && g.push(l + ": " + k)
        });
        g.push("");
        g.push("");
        this.write((new TextEncoder).encode(g.join("\r\n")));
        this.write(new Uint8Array(f))
    }
};
t.write = function (a) {
    if (0 < this.g.length) {
        let b = new Uint8Array(this.g.byteLength + a.byteLength);
        b.set(this.g, 0);
        b.set(a, this.g.byteLength);
        this.g = b
    } else this.g = a;
    this.vb()
};
t.close = function () {
    this.state = "fin-wait-1";
    let a = Jf(this);
    a.N.Ye = !0;
    this.hb.$a(Gf(a));
    this.vb()
};
t.vb = function () {
    if (0 < this.g.length && !this.pending) {
        let a = this.g.subarray(0, 500),
            b = Jf(this);
        this.pending = !0;
        1 > this.g.length && (b.N.Ye = !0);
        b.N.Vh = !0;
        b.jb = a;
        this.hb.$a(Gf(b))
    }
};
"undefined" !== typeof module && "undefined" !== typeof module.exports && (module.exports.FetchNetworkAdapter = vf);
const Za = {
    ul: function (a) {
        return Za.gl(a) + Za.fl(a)
    },
    gl: function (a) {
        let b = "";
        var c = "COMPILE COMPILE_SKIPPED_NO_NEW_ENTRY_POINTS COMPILE_WRONG_ADDRESS_SPACE COMPILE_CUT_OFF_AT_END_OF_PAGE COMPILE_WITH_LOOP_SAFETY COMPILE_PAGE COMPILE_PAGE/COMPILE COMPILE_BASIC_BLOCK COMPILE_DUPLICATED_BASIC_BLOCK COMPILE_WASM_BLOCK COMPILE_WASM_LOOP COMPILE_DISPATCHER COMPILE_ENTRY_POINT COMPILE_WASM_TOTAL_BYTES COMPILE_WASM_TOTAL_BYTES/COMPILE_PAGE RUN_INTERPRETED RUN_INTERPRETED_NEW_PAGE RUN_INTERPRETED_PAGE_HAS_CODE RUN_INTERPRETED_PAGE_HAS_ENTRY_AFTER_PAGE_WALK RUN_INTERPRETED_NEAR_END_OF_PAGE RUN_INTERPRETED_DIFFERENT_STATE RUN_INTERPRETED_DIFFERENT_STATE_CPL3 RUN_INTERPRETED_DIFFERENT_STATE_FLAT RUN_INTERPRETED_DIFFERENT_STATE_IS32 RUN_INTERPRETED_DIFFERENT_STATE_SS32 RUN_INTERPRETED_MISSED_COMPILED_ENTRY_RUN_INTERPRETED RUN_INTERPRETED_STEPS RUN_FROM_CACHE RUN_FROM_CACHE_STEPS RUN_FROM_CACHE_STEPS/RUN_FROM_CACHE RUN_FROM_CACHE_STEPS/RUN_INTERPRETED_STEPS DIRECT_EXIT INDIRECT_JUMP INDIRECT_JUMP_NO_ENTRY NORMAL_PAGE_CHANGE NORMAL_FALLTHRU NORMAL_FALLTHRU_WITH_TARGET_BLOCK NORMAL_BRANCH NORMAL_BRANCH_WITH_TARGET_BLOCK CONDITIONAL_JUMP CONDITIONAL_JUMP_PAGE_CHANGE CONDITIONAL_JUMP_EXIT CONDITIONAL_JUMP_FALLTHRU CONDITIONAL_JUMP_FALLTHRU_WITH_TARGET_BLOCK CONDITIONAL_JUMP_BRANCH CONDITIONAL_JUMP_BRANCH_WITH_TARGET_BLOCK DISPATCHER_SMALL DISPATCHER_LARGE LOOP LOOP_SAFETY CONDITION_OPTIMISED CONDITION_UNOPTIMISED CONDITION_UNOPTIMISED_PF CONDITION_UNOPTIMISED_UNHANDLED_L CONDITION_UNOPTIMISED_UNHANDLED_LE FAILED_PAGE_CHANGE SAFE_READ_FAST SAFE_READ_SLOW_PAGE_CROSSED SAFE_READ_SLOW_NOT_VALID SAFE_READ_SLOW_NOT_USER SAFE_READ_SLOW_IN_MAPPED_RANGE SAFE_WRITE_FAST SAFE_WRITE_SLOW_PAGE_CROSSED SAFE_WRITE_SLOW_NOT_VALID SAFE_WRITE_SLOW_NOT_USER SAFE_WRITE_SLOW_IN_MAPPED_RANGE SAFE_WRITE_SLOW_READ_ONLY SAFE_WRITE_SLOW_HAS_CODE SAFE_READ_WRITE_FAST SAFE_READ_WRITE_SLOW_PAGE_CROSSED SAFE_READ_WRITE_SLOW_NOT_VALID SAFE_READ_WRITE_SLOW_NOT_USER SAFE_READ_WRITE_SLOW_IN_MAPPED_RANGE SAFE_READ_WRITE_SLOW_READ_ONLY SAFE_READ_WRITE_SLOW_HAS_CODE PAGE_FAULT TLB_MISS MAIN_LOOP MAIN_LOOP_IDLE DO_MANY_CYCLES CYCLE_INTERNAL INVALIDATE_ALL_MODULES_NO_FREE_WASM_INDICES INVALIDATE_MODULE_WRITTEN_WHILE_COMPILED INVALIDATE_MODULE_UNUSED_AFTER_OVERWRITE INVALIDATE_MODULE_DIRTY_PAGE INVALIDATE_PAGE_HAD_CODE INVALIDATE_PAGE_HAD_ENTRY_POINTS DIRTY_PAGE_DID_NOT_HAVE_CODE RUN_FROM_CACHE_EXIT_SAME_PAGE RUN_FROM_CACHE_EXIT_NEAR_END_OF_PAGE RUN_FROM_CACHE_EXIT_DIFFERENT_PAGE CLEAR_TLB FULL_CLEAR_TLB TLB_FULL TLB_GLOBAL_FULL MODRM_SIMPLE_REG MODRM_SIMPLE_REG_WITH_OFFSET MODRM_SIMPLE_CONST_OFFSET MODRM_COMPLEX SEG_OFFSET_OPTIMISED SEG_OFFSET_NOT_OPTIMISED SEG_OFFSET_NOT_OPTIMISED_ES SEG_OFFSET_NOT_OPTIMISED_FS SEG_OFFSET_NOT_OPTIMISED_GS SEG_OFFSET_NOT_OPTIMISED_NOT_FLAT".split(" "),
            d = 0;
        const e = {};
        for (let f = 0; f < c.length; f++) {
            const g = c[f];
            var h = void 0;
            if (g.includes("/")) {
                d++;
                const [k, l] = g.split("/");
                h = e[k] / e[l]
            } else h = e[g] = a.Ha.exports.profiler_stat_get(f - d), h = 1E8 <= h ? Math.round(h / 1E6) + "m" : 1E5 <= h ? Math.round(h / 1E3) + "k" : h;
            b += g + "=" + h + "\n"
        }
        b += "\n";
        c = a.Ha.exports.get_valid_tlb_entries_count();
        d = a.Ha.exports.get_valid_global_tlb_entries_count();
        b = b + ("TLB_ENTRIES=" + c + " (" + d + " global, " + (c - d) + " non-global)\nWASM_TABLE_FREE=") + (a.Ha.exports.jit_get_wasm_table_index_free_list_count() + "\n");
        b += "JIT_CACHE_SIZE=" + a.Ha.exports.jit_get_cache_size() + "\n";
        b += "FLAT_SEGMENTS=" + a.Ha.exports.has_flat_segmentation() + "\n";
        b += "wasm memory size: " + (a.Ga.buffer.byteLength >> 20) + "m\n";
        b = b + "Config:\nJIT_DISABLED=" + (a.Ha.exports.get_jit_config(0) + "\n");
        b += "MAX_PAGES=" + a.Ha.exports.get_jit_config(1) + "\n";
        b += "JIT_USE_LOOP_SAFETY=" + !!a.Ha.exports.get_jit_config(2) + "\n";
        return b += "MAX_EXTRA_BASIC_BLOCKS=" + a.Ha.exports.get_jit_config(3) + "\n"
    },
    fl: function (a) {
        return [Za.gf(a, !1, !1, !1, !1), Za.gf(a, !0, !1, !1, !1),
        Za.gf(a, !1, !0, !1, !1), Za.gf(a, !1, !1, !0, !1), Za.gf(a, !1, !1, !1, !0)
        ].join("\n\n")
    },
    gf: function (a, b, c, d, e) {
        let h = "";
        var f = [],
            g = b ? "compiled" : c ? "jit exit" : d ? "unguarded register" : e ? "wasm size" : "executed";
        for (let m = 0; 256 > m; m++)
            for (let p = 0; 8 > p; p++)
                for (const r of [!1, !0]) {
                    var k = a.Ha.exports.get_opstats_buffer(b, c, d, e, m, !1, r, p);
                    f.push({
                        Kf: m,
                        count: k,
                        sh: r,
                        hh: p
                    });
                    k = a.Ha.exports.get_opstats_buffer(b, c, d, e, m, !0, r, p);
                    f.push({
                        Kf: 3840 | m,
                        count: k,
                        sh: r,
                        hh: p
                    })
                }
        a = 0;
        b = new Set([38, 46, 54, 62, 100, 101, 102, 103, 240, 242, 243]);
        for (const {
            count: m,
            Kf: p
        }
            of f) b.has(p) || (a += m);
        if (0 === a) return "";
        c = new Uint32Array(256);
        b = new Uint32Array(256);
        for (const {
            Kf: m,
            count: p
        }
            of f) 3840 === (m & 65280) ? b[m & 255] += p : c[m & 255] += p;
        h = h + "------------------\nTotal: " + (a + "\n");
        const l = 1E7 < a ? 1E3 : 1;
        d = Math.max.apply(Math, f.map(({
            count: m
        }) => Math.round(m / l)));
        d = String(d).length;
        h += `Instruction counts ${g} (in ${l}):\n`;
        for (e = 0; 256 > e; e++) h += e.toString(16).padStart(2, "0") + ":" + yb(Math.round(c[e] / l), d), h = 15 === e % 16 ? h + "\n" : h + " ";
        h = h + "\n" + `Instruction counts ${g} (0f, in ${l}):\n`;
        for (g = 0; 256 > g; g++) h += (g & 255).toString(16).padStart(2, "0") + ":" + yb(Math.round(b[g] / l), d), h = 15 === g % 16 ? h + "\n" : h + " ";
        h += "\n";
        f = f.filter(({
            count: m
        }) => m).sort(({
            count: m
        }, {
            count: p
        }) => p - m);
        for (const {
            Kf: m,
            sh: p,
            hh: r,
            count: n
        }
            of f.slice(0, 200)) h += m.toString(16) + "_" + r + (p ? "_m" : "_r") + ":" + (n / a * 100).toFixed(2) + " ";
        return h + "\n"
    }
};
"undefined" !== typeof module && "undefined" !== typeof module.exports && (module.exports.print_stats = Za);

function xf() {
    this.h = new Map
}
xf.prototype.read = async function (a, b, c) {
    return (a = this.h.get(a)) ? a.subarray(b, b + c) : null
};
xf.prototype.cache = async function (a, b) {
    this.h.set(a, b)
};
xf.prototype.g = function (a) {
    this.h.delete(a)
};

function yf(a, b) {
    b.endsWith("/") || (b += "/");
    this.h = a;
    this.uf = b
}

function Kf(a, b) {
    return new Promise(c => {
        Hb(a.uf + b, {
            done: async d => {
                d = new Uint8Array(d);
                await a.cache(b, d);
                c(d)
            }
        })
    })
}
yf.prototype.read = async function (a, b, c) {
    const d = await this.h.read(a, b, c);
    return d ? d : (await Kf(this, a)).subarray(b, b + c)
};
yf.prototype.cache = async function (a, b) {
    return await this.h.cache(a, b)
};
yf.prototype.g = function (a) {
    this.h.g(a)
};
"undefined" !== typeof window ? (window.MemoryFileStorage = xf, window.ServerFileStorageWrapper = yf) : "undefined" !== typeof module && "undefined" !== typeof module.exports ? (module.exports.MemoryFileStorage = xf, module.exports.ServerFileStorageWrapper = yf) : "function" === typeof importScripts && (self.MemoryFileStorage = xf, self.ServerFileStorageWrapper = yf);