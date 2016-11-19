(ns lattice-proteins.core
  (:require [quil.core :as q :include-macros true]
            [quil.middleware :as m]))


(defn random-marker-chain
  "Returns a list of indicated length, containing uniform random integers between 0 and `scale`"
  [length scale]
  (into [] (repeatedly length #(rand-int scale))))


(defn setup
  []
  (q/frame-rate 30)
  (q/color-mode :hsb)
  (q/background 230)

  { :cursor    [0 0]
    :direction :east
    :markers (random-marker-chain 10 100)
   })


(defn update-state
  [state]
  (let [old-markers (:markers state)]
    { :cursor    [(- (rand-int 20) 10) (- (rand-int 20) 10)]
      :direction :east
      :markers   (conj (into [] (rest old-markers)) (first old-markers))
    }))


(defn draw-state
  [state]


  (q/no-stroke)
  (let [[i j]     (:cursor state)
        cell-size 20]

    (q/fill 255 200 10 50)
    (q/with-translation [(+ (* cell-size i) (/ (q/width) 2))
                         (+ (* cell-size j) (/ (q/width) 2))] 
      (q/text (str (first (:markers state))) 0 0))
      ))


(q/defsketch lattice-proteins
  :host "lattice-proteins"
  :size [500 500]
  :setup setup
  :update update-state
  :draw draw-state
  :middleware [m/fun-mode])
