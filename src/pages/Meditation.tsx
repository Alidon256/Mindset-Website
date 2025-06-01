
import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Play, Clock, Heart, Filter, Search } from 'lucide-react';

const Meditation = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  
  const filters = [
    { id: 'all', name: 'All' },
    { id: 'anxiety', name: 'Anxiety Relief' },
    { id: 'focus', name: 'Focus' },
    { id: 'sleep', name: 'Sleep' },
    { id: 'beginners', name: 'Beginners' }
  ];

  const durations = [
    { id: 'all-durations', name: 'All Durations' },
    { id: '5min', name: '5 Minutes' },
    { id: '10min', name: '10 Minutes' },
    { id: '20min', name: '20+ Minutes' }
  ];

  const meditations = [
    {
      id: 1,
      title: 'Morning Clarity',
      description: 'Start your day with intention and focused awareness',
      image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=600&h=400&fit=crop',
      duration: 10,
      category: 'focus',
      instructor: 'Dr. Emma Chen'
    },
    {
      id: 2,
      title: 'Deep Sleep Journey',
      description: 'Relax your mind and prepare for restful sleep',
      image: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=600&h=400&fit=crop',
      duration: 20,
      category: 'sleep',
      instructor: 'Michael Brooks'
    },
    {
      id: 3,
      title: 'Anxiety Release',
      description: 'Let go of worries and find your center',
      image: 'https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=600&h=400&fit=crop',
      duration: 15,
      category: 'anxiety',
      instructor: 'Sarah Johnson'
    },
    {
      id: 4,
      title: 'First Steps to Mindfulness',
      description: 'Perfect introduction for meditation beginners',
      image: 'https://images.unsplash.com/photo-1501854140801-50d01698950b?w=600&h=400&fit=crop',
      duration: 5,
      category: 'beginners',
      instructor: 'David Wu'
    },
    {
      id: 5,
      title: 'Midday Reset',
      description: 'Quick practice to center yourself during a busy day',
      image: 'https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?w=600&h=400&fit=crop',
      duration: 5,
      category: 'focus',
      instructor: 'Olivia Martinez'
    },
    {
      id: 6,
      title: 'Letting Go',
      description: 'Release anxiety and find peace in uncertainty',
      image: 'https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?w=600&h=400&fit=crop',
      duration: 20,
      category: 'anxiety',
      instructor: 'Dr. James Taylor'
    },
  ];

  const filteredMeditations = activeFilter === 'all' 
    ? meditations 
    : meditations.filter(m => m.category === activeFilter);

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-teal-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Discover Your
              <span className="text-gradient block">Meditation Practice</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-10">
              Explore our library of guided meditations designed for every need, from anxiety relief to better sleep
            </p>

            {/* Search bar */}
            <div className="relative max-w-xl mx-auto mb-12">
              <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                <Search className="w-5 h-5 text-muted-foreground" />
              </div>
              <input 
                type="text" 
                placeholder="Search meditations..." 
                className="w-full pl-12 pr-4 py-3 rounded-full border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
          </div>

          {/* Filters */}
          <div className="flex flex-col md:flex-row justify-between gap-6 mb-8">
            <div className="flex flex-wrap gap-3">
              <div className="flex items-center">
                <Filter className="w-5 h-5 text-primary mr-2" />
                <span className="text-sm font-medium">Focus:</span>
              </div>
              {filters.map(filter => (
                <button
                  key={filter.id}
                  onClick={() => setActiveFilter(filter.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    activeFilter === filter.id 
                      ? 'bg-primary text-white'
                      : 'bg-background hover:bg-gray-100 dark:hover:bg-gray-700'
                  }`}
                >
                  {filter.name}
                </button>
              ))}
            </div>
            
            <div className="flex flex-wrap gap-3">
              <div className="flex items-center">
                <Clock className="w-5 h-5 text-primary mr-2" />
                <span className="text-sm font-medium">Duration:</span>
              </div>
              {durations.map(duration => (
                <button
                  key={duration.id}
                  className={`px-4 py-2 rounded-full text-sm font-medium bg-background hover:bg-gray-100 dark:hover:bg-gray-700 transition-all`}
                >
                  {duration.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Meditation List */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredMeditations.map((meditation, index) => (
              <Card 
                key={meditation.id}
                className="hover-lift transition-all duration-300 border-0 shadow-lg overflow-hidden"
              >
                <div className="relative h-56 overflow-hidden">
                  <img 
                    src={meditation.image}
                    alt={meditation.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                    <div className="text-white">
                      <div className="flex items-center mb-2">
                        <Clock className="w-4 h-4 mr-2" />
                        <span className="text-sm">{meditation.duration} minutes</span>
                      </div>
                      <h3 className="font-semibold text-lg">{meditation.title}</h3>
                      <p className="text-sm text-gray-300">{meditation.instructor}</p>
                    </div>
                  </div>
                  <div className="absolute top-4 right-4">
                    <Button size="icon" className="rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30">
                      <Heart className="w-5 h-5 text-white" />
                    </Button>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                    <Button size="lg" className="rounded-full bg-primary/90 backdrop-blur-sm hover:bg-primary">
                      <Play className="w-5 h-5 mr-2" />
                      Play Now
                    </Button>
                  </div>
                </div>
                <CardContent className="p-6">
                  <p className="text-muted-foreground">{meditation.description}</p>
                  <div className="flex items-center justify-between mt-4">
                    <div className="flex items-center">
                      <span className="text-xs uppercase font-semibold bg-primary/10 text-primary px-2 py-1 rounded-full">{meditation.category}</span>
                    </div>
                    <Button variant="outline" size="sm" className="rounded-full">
                      <Play className="w-4 h-4 mr-1" />
                      Play
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Meditation;
