import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router";
import { motion } from "motion/react";
import {
  Heart,
  Share2,
  Zap,
  Shield,
  TrendingUp,
  Battery,
  CheckCircle,
  ArrowLeft,
  CloudDownload,
  Gauge,
  X,
  Download,
  ArrowRight,
  Minus,
  Plus,
} from "lucide-react";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { Card } from "../components/ui/card";
import { AnimatedProductImage } from "../components/AnimatedProductImage";
import { toast } from "sonner";
import { getProductById } from "../data/products";
import { supabase } from "../lib/supabase";
import type { Product } from "../lib/types";
import manualPage1 from "figma:asset/c236a88db86fd0962e803b04e6bfbb32b1942d77.png";
import manualPage2 from "figma:asset/1e3e48d65069b1ad89eb79f99ce2d82cc03c9d4a.png";
import lvManualPage1 from "figma:asset/ef9a37ce4a2ab71fa5910022f1461f9320b35170.png";
import lvManualPage2 from "figma:asset/25ac8532e4156b36b41f3233accc9771047ac9fe.png";
import lvManualPage3 from "figma:asset/a4b185e1b59179ad4f0d74156af40b1045e5946d.png";
import lvManualPage4 from "figma:asset/7c5f65aaa811b315b76bd87debe656252f325535.png";
import lvManualPage5 from "figma:asset/ca0876f0eb98c678b33a870b8c93d206a69ad29a.png";
import lvManualPage6 from "figma:asset/ea8c2b45842f4b3ccb4c8d841d2341fde9845fca.png";
import lvManualPage7 from "figma:asset/49e3a4c142da8f097016bbf0ad9bbf6000f4ff87.png";
import lvManualPage8 from "figma:asset/5ce62928270f6b924ef0c7b1c15ae250d518b76f.png";
import lvManualPage9 from "figma:asset/442918dbcf047913a44bbb285075e54684aec8b5.png";
import lvManualPage10 from "figma:asset/8ec62d28feac4b775ccb071c631a6c160fa56bb1.png";

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [selectedCapacity, setSelectedCapacity] = useState<string>("1-unit");
  const [activeTab, setActiveTab] = useState<"overview" | "specifications" | "features" >("overview");
  const [showDownloadModal, setShowDownloadModal] = useState(false);
  const [showManualViewer, setShowManualViewer] = useState(false);
  const [currentManualPage, setCurrentManualPage] = useState(0);
  const [showCapacitySelection, setShowCapacitySelection] = useState(false);
  const [activeProduct, setActiveProduct] = useState<Product | null>(() => getProductById(Number(id)) || null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function loadProductDetails() {
      if (!id) return;
      setLoading(true);
      try {
        const { data: dbProduct, error } = await supabase
          .from("products")
          .select("*")
          .eq("product_id", Number(id))
          .single();

        if (!error && dbProduct) {
          const { data: dbVariants } = await supabase
            .from("product_variants")
            .select("*")
            .eq("product_id", dbProduct.id)
            .order("sort_order", { ascending: true });

          const mappedVariants = dbVariants ? dbVariants.map((v: any) => ({
            capacity: v.capacity,
            capacityLabel: v.capacity_label,
            model: v.model,
            power: v.power,
            voltage: v.voltage,
            features: v.features || [],
            description: v.description,
            specifications: v.specifications || {},
            keyFeatures: v.key_features || [],
            applications: v.applications || [],
          })) : [];

          const mappedProduct: Product = {
            id: dbProduct.product_id,
            name: dbProduct.name,
            model: dbProduct.model,
            category: dbProduct.category,
            image: dbProduct.image_data ? [dbProduct.image_data] : (dbProduct.image_url ? [dbProduct.image_url] : []),
            capacity: Number(dbProduct.capacity),
            capacityLabel: dbProduct.capacity_label,
            power: dbProduct.power,
            voltage: dbProduct.voltage,
            warranty: dbProduct.warranty,
            badge: dbProduct.badge,
            features: dbProduct.features || [],
            animationInterval: 5000,
            description: dbProduct.description,
            specifications: dbProduct.specifications,
            keyFeatures: dbProduct.detailed_key_features,
            applications: dbProduct.applications,
            what_included: dbProduct.what_included,
            warranty_support: dbProduct.warranty_support,
            hasVariants: dbProduct.has_variants,
            variants: mappedVariants,
          };

          setActiveProduct(mappedProduct);
        }
      } catch (err) {
        console.error("Failed to load product details from database:", err);
      } finally {
        setLoading(false);
      }
    }
    loadProductDetails();
  }, [id]);

  const product = activeProduct;

  const manualPages = product?.id === 3
    ? [lvManualPage1, lvManualPage2, lvManualPage3, lvManualPage4, lvManualPage5, lvManualPage6, lvManualPage7, lvManualPage8, lvManualPage9, lvManualPage10]
    : [manualPage1, manualPage2];

  if (loading && !product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-center flex flex-col items-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mb-4" />
          <p className="text-gray-500 font-medium">Loading product details...</p>
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Product Not Found
          </h2>
          <Link to="/products">
            <Button>Back to Products</Button>
          </Link>
        </div>
      </div>
    );
  }

  // Get current variant data if product has variants
  const currentVariant = product.hasVariants && product.variants
    ? product.variants.find((v) => v.capacity === selectedCapacity)
    : null;

  // Use variant data if available, otherwise use base product data
  const displayData = currentVariant || product;
  const displayModel = currentVariant?.model || product.model;
  const displayPower = currentVariant?.power || product.power;
  const displayVoltage = currentVariant?.voltage || product.voltage;
  const displayCapacityLabel = currentVariant?.capacityLabel || product.capacityLabel;
  const displayDescription = currentVariant?.description || product.description;
  const displaySpecifications =
    currentVariant?.specifications || product.specifications;
  const displayKeyFeatures = currentVariant?.keyFeatures || product.keyFeatures;
  const displayApplications = currentVariant?.applications || product.applications;
  const displayFeatures = currentVariant?.features || product.features;

  const handleExploreMore = () => {
    navigate("/contact");
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: product.name,
          text: product.description,
          url: window.location.href,
        });
      } catch (error) {
        console.error('Share failed:', error);
      }
    } else {
      try {
        await navigator.clipboard.writeText(window.location.href);
        toast.success("Link copied to clipboard!");
      } catch (error) {
        // Fallback: create a temporary input element
        const input = document.createElement('input');
        input.value = window.location.href;
        document.body.appendChild(input);
        input.select();
        document.execCommand('copy');
        document.body.removeChild(input);
        toast.success("Link copied!");
      }
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center gap-2 text-sm">
            <Link
              to="/"
              className="text-gray-500 hover:text-gray-900 transition"
            >
              Home
            </Link>
            <span className="text-gray-400">/</span>
            <Link
              to="/products"
              className="text-gray-500 hover:text-gray-900 transition"
            >
              Products
            </Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-900 font-medium">{product.name}</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Button
            variant="ghost"
            onClick={() => navigate(-1)}
            className="mb-6"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back
          </Button>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-12">
          {/* Product Images */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Card className="overflow-hidden sticky top-24">
              <div className="relative h-96 lg:h-[500px] bg-gradient-to-br from-gray-50 to-gray-100">
                <AnimatedProductImage
                  images={product.image}
                  alt={product.name}
                  className="w-full h-full object-contain p-8"
                  animationInterval={product.animationInterval}
                />
                {product.badge && (
                  <Badge className="absolute top-4 left-4 bg-blue-600 text-white">
                    {product.badge}
                  </Badge>
                )}
              </div>
            </Card>
          </motion.div>

          {/* Product Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6"
          >
            <div>
              <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
                {product.name}
              </h1>
              <p className="text-lg text-gray-600">{displayModel}</p>
            </div>

            <p className="text-gray-700 leading-relaxed">
              {displayDescription}
            </p>

            {/* Capacity Selector for products with variants */}
            {product.hasVariants && product.variants && (
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-900">
                  Select Capacity
                </label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {product.variants.map((variant) => (
                    <button
                      key={variant.capacity}
                      onClick={() => setSelectedCapacity(variant.capacity)}
                      className={`w-full px-6 py-2 border-2 rounded-lg transition-all ${
                        selectedCapacity === variant.capacity
                          ? "border-blue-600 bg-blue-50"
                          : "border-gray-200 hover:border-gray-300"
                      }`}
                    >
                      <div className="text-center">
                        <p className="font-semibold text-gray-900 p-[0px] m-[0px] whitespace-nowrap text-center font-bold text-[11px]">
                          {variant.capacityLabel}
                        </p>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quick Specs */}
            <div className="grid grid-cols-2 gap-4">
              <Card className="p-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <Zap className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Capacity</p>
                    <p className="font-semibold text-gray-900">
                      {displayCapacityLabel}
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-green-100 rounded-lg">
                    <TrendingUp className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Power</p>
                    <p className="font-semibold text-gray-900">
                      {displayPower}
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-purple-100 rounded-lg">
                    <Battery className="h-5 w-5 text-purple-600" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Voltage</p>
                    <p className="font-semibold text-gray-900">
                      {displayVoltage}
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-orange-100 rounded-lg">
                    <Shield className="h-5 w-5 text-orange-600" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Warranty</p>
                    <p className="font-semibold text-gray-900">
                      {product.warranty}
                    </p>
                  </div>
                </div>
              </Card>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3">
              <Button
                onClick={handleExploreMore}
                className="flex-1 bg-blue-600 hover:bg-blue-700 h-12 text-lg"
              >
                Get in touch
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="icon" className="h-12 w-12">
                <Heart className="h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="h-12 w-12"
                onClick={handleShare}
              >
                <Share2 className="h-5 w-5" />
              </Button>
            </div>

            {/* Download LV Manual Button for P2G LV Energy Vault 25 */}
            {product.id === 3 && (
              <div className="flex gap-3">
                <Button
                  onClick={() => setShowDownloadModal(true)}
                  variant="outline"
                  className="flex-1 h-12 text-base border-blue-600 text-blue-600 hover:bg-blue-50"
                >
                  <CloudDownload className="mr-2 h-5 w-5" />
                  More Files
                </Button>
                <Button
                  onClick={() => {
                    setShowDownloadModal(false);
                    setShowCapacitySelection(true);
                  }}
                  variant="outline"
                  className="flex-1 h-12 text-base border-blue-600 text-blue-600 hover:bg-blue-50"
                >
                  <CloudDownload className="mr-2 h-5 w-5" />
                  User Manual
                </Button>
              </div>
            )}

            {/* Download HV Manual Button for P2G HV Energy VAULT 75 */}
            {product.id === 1 && (
              <div className="flex gap-3">
                <Button
                  onClick={() => setShowDownloadModal(true)}
                  variant="outline"
                  className="flex-1 h-12 text-base border-blue-600 text-blue-600 hover:bg-blue-50 font-normal"
                >
                  <CloudDownload className="mr-2 h-5 w-5" />
                  More Files
                </Button>
                <Button
                  onClick={() => {
                    setShowDownloadModal(false);
                    setShowCapacitySelection(true);
                  }}
                  variant="outline"
                  className="flex-1 h-12 text-base border-blue-600 text-blue-600 hover:bg-blue-50"
                >
                  <CloudDownload className="mr-2 h-5 w-5" />
                  User Manual
                </Button>
              </div>
            )}

            {/* Features Tags */}
            <div className="pt-4 border-t">
              <p className="text-sm font-medium text-gray-900 mb-3">
                Key Features
              </p>
              <div className="flex flex-wrap gap-2">
                {displayFeatures.map((feature, idx) => (
                  <Badge
                    key={idx}
                    variant="secondary"
                    className="px-3 py-1.5 bg-gray-100 text-gray-700"
                  >
                    {feature}
                  </Badge>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Tabs Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="border-b mb-8">
            <div className="flex gap-8">
              <button
                onClick={() => setActiveTab("overview")}
                className={`pb-4 font-medium transition-colors relative ${
                  activeTab === "overview"
                    ? "text-blue-600"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                Overview
                {activeTab === "overview" && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600"
                  />
                )}
              </button>
              <button
                onClick={() => setActiveTab("specifications")}
                className={`pb-4 font-medium transition-colors relative ${
                  activeTab === "specifications"
                    ? "text-blue-600"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                Specifications
                {activeTab === "specifications" && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600"
                  />
                )}
              </button>
              <button
                onClick={() => setActiveTab("features")}
                className={`pb-4 font-medium transition-colors relative ${
                  activeTab === "features"
                    ? "text-blue-600"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                Features & Applications
                {activeTab === "features" && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600"
                  />
                )}
              </button>
            </div>
          </div>

          {/* Tab Content */}
          <div className="min-h-[400px]">
            {activeTab === "overview" && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="prose max-w-none"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Product Overview
                </h3>
                <p className="text-gray-700 leading-relaxed mb-6">
                  {product.description}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 not-prose">
                  <Card className="p-6">
                    <h4 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                      What's Included
                    </h4>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 font-bold text-lg leading-none w-4">•</span>
                        <span>{product.name} Unit</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 font-bold text-lg leading-none w-4">•</span>
                        <span>Installation Manual</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 font-bold text-lg leading-none w-4">•</span>
                        <span>Warranty Certificate</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 font-bold text-lg leading-none w-4">•</span>
                        <span>Mounting Hardware</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 font-bold text-lg leading-none w-4">•</span>
                        <span>Connection Cables</span>
                      </li>
                    </ul>
                  </Card>

                  <Card className="p-6">
                    <h4 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                      <Shield className="h-5 w-5 text-blue-600" />
                      Warranty & Support
                    </h4>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 font-bold text-lg leading-none w-4">•</span>
                        <span>{product.warranty} Manufacturer Warranty</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 font-bold text-lg leading-none w-4">•</span>
                        <span>24/7 Technical Support</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 font-bold text-lg leading-none w-4">•</span>
                        <span>Free Installation Guidance</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 font-bold text-lg leading-none w-4">•</span>
                        <span>Online Monitoring System</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 font-bold text-lg leading-none w-4">•</span>
                        <span>Remote Firmware Updates</span>
                      </li>
                    </ul>
                  </Card>
                </div>
              </motion.div>
            )}

            {activeTab === "specifications" && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Technical Specifications
                </h3>
                <Card className="overflow-hidden">
                  <div className="divide-y">
                    {Object.entries(displaySpecifications).map(
                      ([key, value], idx) => (
                        <div
                          key={idx}
                          className="grid grid-cols-2 gap-4 p-4 hover:bg-gray-50 transition"
                        >
                          <div className="font-medium text-gray-900">
                            {key}
                          </div>
                          <div className="text-gray-700">{value}</div>
                        </div>
                      )
                    )}
                  </div>
                </Card>
              </motion.div>
            )}

            {activeTab === "features" && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="space-y-8"
              >
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">
                    Key Features
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {displayKeyFeatures.map((feature, idx) => (
                      <Card key={idx} className="p-4">
                        <div className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                          <p className="text-gray-700">{feature}</p>
                        </div>
                      </Card>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">
                    Ideal Applications
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                    {displayApplications.map((app, idx) => (
                      <Card
                        key={idx}
                        className="p-4 text-center hover:shadow-lg transition"
                      >
                        <Gauge className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                        <p className="font-medium text-gray-900">{app}</p>
                      </Card>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>

      {/* Download Modal */}
      {showDownloadModal && (
        <div
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
          onClick={() => setShowDownloadModal(false)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
          >
            <div className="p-6 border-b flex items-center justify-between sticky top-0 bg-white">
              <h3 className="text-2xl font-bold text-gray-900">
                Select User Manual
              </h3>
              <button
                onClick={() => setShowDownloadModal(false)}
                className="p-2 hover:bg-gray-100 rounded-lg transition"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="p-6">
              <p className="text-gray-600 mb-6">
                Choose which user manual you would like to download for{" "}
                <span className="font-semibold">{product.name}</span>:
              </p>

              <div className="space-y-4">
                {/* Installation Guide */}
                <Card className="hover:shadow-md transition">
                  <button
                    onClick={() => {
                      const link = product.id === 3
                        ? 'https://drive.google.com/drive/folders/1zbn1PjXWvzrIupGpi6zjYM5cYAkoku24?usp=sharing'
                        : product.id === 1
                        ? 'https://drive.google.com/drive/folders/1xxaDZhqEdoLXhXmQU_8Eyq2RjagVTQ14?usp=sharing'
                        : null;

                      if (link) {
                        window.open(link, '_blank');
                      }
                      setShowDownloadModal(false);
                    }}
                    className="w-full p-4 text-left"
                  >
                    <div className="flex items-start gap-3">
                      <Download className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900 mb-1">
                          Installation Guide
                        </h4>
                        <p className="text-sm text-gray-600 mb-2">
                          Step-by-step installation instructions and wiring
                          diagrams
                        </p>
                        <div className="flex items-center gap-4 text-xs text-gray-500">
                          <span>PDF, 3.8 MB</span>
                          <span>•</span>
                          <span>Updated March 2026</span>
                        </div>
                      </div>
                    </div>
                  </button>
                </Card>

                {/* Quick Start Guide */}
                <Card className="hover:shadow-md transition">
                  <button
                    onClick={() => {
                      const link = product.id === 3
                        ? 'https://drive.google.com/drive/folders/1hFXKtCVxs6sPICFNbnmv8EX7YdWQ9vK-?usp=sharing'
                        : product.id === 1
                        ? 'https://drive.google.com/drive/folders/1zajqoydmo37DF_zPrKg1AwNIKpgZemfo?usp=sharing'
                        : null;

                      if (link) {
                        window.open(link, '_blank');
                      }
                      setShowDownloadModal(false);
                    }}
                    className="w-full p-4 text-left"
                  >
                    <div className="flex items-start gap-3">
                      <Download className="h-6 w-6 text-purple-600 mt-1 flex-shrink-0" />
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900 mb-1">
                          Product Brochure
                        </h4>
                        <p className="text-sm text-gray-600 mb-2">
                          Essential setup and operation instructions
                        </p>
                        <div className="flex items-center gap-4 text-xs text-gray-500">
                          <span>PDF, 1.2 MB</span>
                          <span>•</span>
                          <span>Updated March 2026</span>
                        </div>
                      </div>
                    </div>
                  </button>
                </Card>

                {/* Data Sheet */}
                <Card className="hover:shadow-md transition">
                  <button
                    onClick={() => {
                      toast.success(
                        `Downloading Data Sheet for ${product.name}`
                      );
                      setShowDownloadModal(false);
                    }}
                    className="w-full p-4 text-left"
                  >
                    <div className="flex items-start gap-3">
                      <Download className="h-6 w-6 text-orange-600 mt-1 flex-shrink-0" />
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900 mb-1">
                          Data Sheet
                        </h4>
                        <p className="text-sm text-gray-600 mb-2">
                          Technical specifications and performance data
                        </p>
                        <div className="flex items-center gap-4 text-xs text-gray-500">
                          <span>PDF, 2.5 MB</span>
                          <span>•</span>
                          <span>Updated March 2026</span>
                        </div>
                      </div>
                    </div>
                  </button>
                </Card>

              </div>
            </div>

            <div className="p-6 border-t bg-gray-50">
              <p className="text-sm text-gray-600">
                Need help? Contact our support team at{" "}
                <a
                  href="mailto:support@power2go.energy"
                  className="text-blue-600 hover:underline"
                >
                  support@power2go.energy
                </a>
              </p>
            </div>
          </motion.div>
        </div>
      )}

      {/* Manual Viewer */}
      {showManualViewer && (
        <div
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
          onClick={() => setShowManualViewer(false)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
          >
            <div className="p-6 border-b flex items-center justify-between sticky top-0 bg-white">
              <h3 className="text-2xl font-bold text-gray-900">
                User Manual for {product.name}
              </h3>
              <button
                onClick={() => setShowManualViewer(false)}
                className="p-2 hover:bg-gray-100 rounded-lg transition"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setCurrentManualPage(Math.max(0, currentManualPage - 1))}
                  disabled={currentManualPage <= 0}
                >
                  <Minus className="h-4 w-4" />
                </Button>
                <span className="text-xl font-semibold min-w-[3rem] text-center">
                  {currentManualPage + 1} / {manualPages.length}
                </span>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setCurrentManualPage(currentManualPage + 1)}
                  disabled={currentManualPage >= manualPages.length - 1}
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
              <img
                src={manualPages[currentManualPage]}
                alt={`Manual Page ${currentManualPage + 1}`}
                className="w-full h-auto"
              />
              <div className="flex justify-center mt-6">
                <Button
                  onClick={() => {
                    // Create a temporary link to download the current manual page
                    const link = document.createElement('a');
                    link.href = manualPages[currentManualPage];
                    link.download = `${product.name}-Manual-Page${currentManualPage + 1}.png`;
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                    toast.success("Downloading user manual page...");
                  }}
                  className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white"
                >
                  <Download className="mr-2 h-5 w-5" />
                  Download Manual
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      )}

      {/* Capacity Selection Modal */}
      {showCapacitySelection && (
        <div
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
          onClick={() => setShowCapacitySelection(false)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-lg shadow-xl max-w-md w-full"
          >
            <div className="p-6 border-b flex items-center justify-between">
              <h3 className="text-2xl font-bold text-gray-900">
                Select Manual Capacity
              </h3>
              <button
                onClick={() => setShowCapacitySelection(false)}
                className="p-2 hover:bg-gray-100 rounded-lg transition"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="p-6">
              <p className="text-gray-600 mb-6">
                Please select the capacity for the user manual you wish to download:
              </p>

              <div className="space-y-4">
                {/* First Manual Option */}
                <Card className="hover:shadow-md transition">
                  <button
                    onClick={() => {
                      const link = product.id === 1
                        ? 'https://drive.google.com/drive/folders/1sAUwvNpwMtZ_oHYN98tvfHQ20NFAseqW?usp=sharing'
                        : 'https://drive.google.com/drive/folders/1LKdtj2bgnLqLTQRbNG-t7suh6A3DKZN9?usp=sharing';
                      window.open(link, '_blank');
                      setShowCapacitySelection(false);
                    }}
                    className="w-full p-4 text-left"
                  >
                    <div className="flex items-start gap-3">
                      <Download className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900 mb-1">
                          {product.id === 1 ? '7.5kWh Manual' : '5 kWh Manual'}
                        </h4>
                        <p className="text-sm text-gray-600 mb-2">
                          User manual for {product.id === 1 ? '7.5 kWh' : '5 kWh'} configuration
                        </p>
                        <div className="flex items-center gap-4 text-xs text-gray-500">
                          <span>PDF, 4.8 MB</span>
                          <span>•</span>
                          <span>Updated March 2026</span>
                        </div>
                      </div>
                    </div>
                  </button>
                </Card>

                {/* Second Manual Option */}
                <Card className="hover:shadow-md transition">
                  <button
                    onClick={() => {
                      const link = product.id === 1
                        ? 'https://drive.google.com/drive/folders/1lQoxj3om4vxL1jVmJa_uhnYDN7aUNfKC?usp=sharing'
                        : 'https://drive.google.com/drive/folders/1eVPxrfmW5ya0-GicQE5hCmOBYYGkcOTo?usp=sharing';
                      window.open(link, '_blank');
                      setShowCapacitySelection(false);
                    }}
                    className="w-full p-4 text-left"
                  >
                    <div className="flex items-start gap-3">
                      <Download className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900 mb-1">
                          {product.id === 1 ? '75kWh Manual' : '25 kWh Manual'}
                        </h4>
                        <p className="text-sm text-gray-600 mb-2">
                          User manual for {product.id === 1 ? '75 kWh' : '25 kWh'} configuration
                        </p>
                        <div className="flex items-center gap-4 text-xs text-gray-500">
                          <span>PDF, 6.1 MB</span>
                          <span>•</span>
                          <span>Updated March 2026</span>
                        </div>
                      </div>
                    </div>
                  </button>
                </Card>
              </div>
            </div>

            <div className="p-6 border-t bg-gray-50">
              <p className="text-sm text-gray-600">
                Need help? Contact our support team at{" "}
                <a
                  href="mailto:support@power2go.energy"
                  className="text-blue-600 hover:underline"
                >
                  support@power2go.energy
                </a>
              </p>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
}
